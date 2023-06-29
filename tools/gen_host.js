// this will generate the main chunk of the host
// it will be hand-edited after

import { readFile, writeFile } from 'fs/promises'

let { defines, structs, aliases, enums, callbacks, functions } = await fetch('https://raw.githubusercontent.com/raysan5/raylib/master/parser/output/raylib_api.json').then(r => r.json())

// I use this to create eh build line (to cut down on unused exports)
// console.log(functions.map(f => `_${f.name}`).join(','))

const exposed = ['free', 'addFile', 'globalize']

// these are args that represent files that should be pre-loaded first
const fileFuncArgs = {
  // I am not pre-loading for these, so you will have to raylib.addFile first before using these functions
  // FileExists: ['fileName'],
  // GetFileLength: ['fileName'],
  // GetFileModTime: ['fileName'],

  LoadFileData: ['fileName'],
  LoadFileText: ['fileName'],
  LoadFont: ['fileName'],
  LoadFontEx: ['fileName'],
  LoadImage: ['fileName'],
  LoadImageAnim: ['fileName'],
  LoadImageRaw: ['fileName'],
  LoadMaterials: ['fileName'],
  LoadModel: ['fileName'],
  LoadModelAnimations: ['fileName'],
  LoadMusicStream: ['fileName'],
  LoadSound: ['fileName'],
  LoadTexture: ['fileName'],
  LoadWave: ['fileName']
}

// currently not used, but these are functions that output a file to fake FS
// you can raylib.mod.FS.readFile them or maybe we will wrap them later
const fileFuncRet = {
  ExportDataAsCode: ['fileName'],
  ExportFontAsCode: ['fileName'],
  ExportImage: ['fileName'],
  ExportImageAsCode: ['fileName'],
  ExportMesh: ['fileName'],
  ExportWave: ['fileName'],
  ExportWaveAsCode: ['fileName'],
  SaveFileData: ['fileName'],
  SaveFileText: ['fileName'],
  TakeScreenshot: ['fileName']
}

// add type-aliases & a keyed list for lookup
const mappedStructs = structs.reduce((a, c) => ({ ...a, [c.name]: c }), {})
for (const { type, name, description } of aliases) {
  mappedStructs[name] = {
    ...mappedStructs[type],
    description,
    name
  }
}
structs = Object.values(mappedStructs)

// strip desktop-only stuff
functions = functions.filter(f => !f.description.includes('only PLATFORM_DESKTOP'))

// generate a default-value for a type
function defaultValue (type) {
  // array-types
  const a = type.match(/([a-zA-Z 0-9]+) *\[([0-9]+)\]/)
  if (a) {
    const v = defaultValue(a[1])
    return '[' + [...(new Array(parseInt(a[2])))].map(() => v).join(', ') + ']'
  }
  // structs
  if (type.match(/^[A-Z]/)) {
    return `new raylib.${type.replace(/\*/g, '').replace(/ /g, '')}()`
  }

  if (type === 'string' || type === 'char*' || type === 'const char*') {
    return "''"
  }

  return 0
}

// emscripten type-converters are a bit incomplete. This makes values easier to use with c-types
// TODO: check unsigned is working right
const irTypes = ['i8', 'i16', 'i32', 'i64', 'float', 'double', '*']
const mapType = type => {
  if (type.includes('*') || mappedStructs[type]) {
    return '*'
  }

  if (type === 'int') {
    return 'i32'
  }

  if (type === 'bool') {
    return 'i1'
  }

  if (!irTypes.includes(type)) {
    console.log(`mapType: defaulting to pointer: ${type}`)
    return '*'
  }
  return type
}
const valGetter = (name, type) => {
  if (type === 'u8' || type === 'unsigned char') {
    return `mod.HEAPU8[${name}]`
  }
  if (type === 'u32' || type === 'unsigned int') {
    return `mod.HEAPU32[${name}]`
  }
  if (type === 'string') {
    return `mod.UTF8ToString(${name})`
  }
  if (mappedStructs[type]) {
    return `new raylib.${type}({}, mod.getValue(${name}, '*'))`
  }
  return `mod.getValue(${name}, '${mapType(type)}')`
}
const valSetter = (name, valueName, type) => {
  if (type === 'u8' || type === 'unsigned char') {
    return `mod.HEAPU8[${name}] = ${valueName}`
  }
  if (type === 'u32' || type === 'unsigned int') {
    return `mod.HEAPU32[${name}] = ${valueName}`
  }
  if (type === 'string') {
    return `mod.stringToUTF8(${name}, ${valueName})`
  }
  return `mod.setValue(${name}, ${valueName}, '${mapType(type)}')`
}

// get the byte-size of a type
function getSize (type) {
  // pointers are 32bit
  if (type.includes('*')) {
    return 4
  }

  // arrays are size * typeSize
  if (type.includes('[')) {
    const t = type.split('[')
    return getSize(t[0]) * t[1].split(']')[0]
  }

  // structs are size of all fields addded
  if (mappedStructs[type]) {
    return mappedStructs[type].fields.reduce((a, c) => a + getSize(c.type), 0)
  }

  // the rest (atoms) have a size
  switch (type) {
    case 'bool':
    case 'char':
    case 'unsigned char':
      return 1
    case 'int':
    case 'unsigned int':
    case 'float':
      return 4
    default:
      console.log(`SIZE? ${type}`)
      return 0
  }
}

// indent a string
const indentString = (str, count = 2, indent = ' ') => str.replace(/^/gm, indent.repeat(count))

// create all the wasm-memory getters/setters for a struct
function outputGetters (struct) {
  let offsetSize = 0
  return struct.fields.map(field => {
    const size = getSize(field.type)

    const out = `
    get ${field.name} () {
      return ${valGetter(`this._address + ${offsetSize}`, field.type)}
    }
    set ${field.name} (${field.name}) {
      ${valSetter(`this._address + ${offsetSize}`, field.name, field.type)}
    }
`
    offsetSize += size
    return out
  }).join('\n  ')
}

// for functions, map input/output type to JS-ish param (for cwrap/ccall auto-conversion)
function mapTypeToJs (type) {
  if (type === 'const char *') {
    return "'string'"
  }
  if (type.includes('*')) {
    return "'pointer'"
  }
  switch (type) {
    case 'bool':
      return "'boolean'"
    case 'int':
    case 'float':
    case 'double':
    case 'char':
    case 'long':
    case 'unsigned int':
      return "'number'"
    default:
      return "'pointer'"
  }
}

let code = `
const wasmBinary = new Uint8Array([${(await readFile('build/raylib_wasm.wasm')).join(',')}])

const importLocation = document?.location?.toString()

${(await readFile('build/raylib_wasm.js', 'utf8')).replace('export default Module;', '').replace(/import\.meta\.url/g, 'importLocation')}

// run this function before calling anything
async function raylib_run(canvas, userInit, userUpdate) {
  const raylib = {}
  const mod = await Module({canvas, wasmBinary})
`

for (const s of structs) {
  exposed.push(s.name)
  const size = s.fields.reduce((a, c) => a + getSize(c.type), 0)
  code += `  // ${s.description}
  raylib.${s.name} = class ${s.name} {
    constructor(init = {}, _address) {
      this._size = ${size}
      this._address = _address || mod._malloc(this._size)
      ${s.fields.map(f => `this.${f.name} = init.${f.name} || ${defaultValue(f.type)}`).join('\n      ')}
    }
    ${outputGetters(s)}
  }\n\n`
}

for (const e of enums) {
  code += `  // ENUM ${e.name}\n  // ${e.description}`
  for (const v of e.values) {
    exposed.push(v.name)
    code += `\n  raylib.${v.name} = ${v.value} // ${v.description}`
  }
  code += '\n\n'
}

for (const c of defines.filter(c => c.type === 'COLOR')) {
  exposed.push(c.name)
  code += `\n  raylib.${c.name} = ${c.value.replace(/CLITERAL\(Color\){ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) }/, 'new raylib.Color({r: $1, g: $2, b: $3, a: $4})')} // ${c.description}`
}

code += '\n\n'

for (const { name, description, returnType, params = [] } of functions) {
  exposed.push(name)
  const returnsStruct = mappedStructs[returnType.replace('*', '').replace(' ', '')]
  const wasmParams = params.map(p => p.name)
  const callParams = [...wasmParams]
  const callParamTypes = params.map(p => mapTypeToJs(p.type))
  for (const i in callParams) {
    if (callParamTypes[i] === "'pointer'") {
      callParams[i] = `${callParams[i]}._address`
    }
  }
  code += `  // ${description}: ${name}(${params.map(p => p.type).join(', ')}) => ${returnType}\n  `
  if (returnsStruct) {
    callParams.unshift('_ret._address')
    callParamTypes.unshift("'pointer'")
    code += `const _${name} = mod.cwrap('${name}', 'void', [${callParamTypes.join(', ')}])\n  `
    if (fileFuncArgs[name]) {
      wasmParams.push('skipLoad')
      code += `raylib.${name} = async (${wasmParams.join(', ')}) => {\n  `
      code += fileFuncArgs[name].map(a => `  !skipLoad && await raylib.addFile(${a})`).join('\n  ') + '\n  '
    } else {
      code += `raylib.${name} = (${wasmParams.join(', ')}) => {\n  `
    }

    code += `  const _ret = new raylib.${returnsStruct.name}()
    _${name}(${callParams.join(', ')})
    return _ret
  }

`
  } else {
    code += `const _${name} = mod.cwrap('${name}', 'void', [${callParamTypes.join(', ')}])\n  `

    if (fileFuncArgs[name]) {
      code += `raylib.${name} = async (${wasmParams.join(', ')}) => {\n  `
      code += fileFuncArgs[name].map(a => `  await raylib.addFile(${a})`).join('\n  ') + '\n  '
      code += `return _${name}(${callParams.join(', ')})\n  }\n\n`
    } else {
      code += `raylib.${name} = (${wasmParams.join(', ')}) => _${name}(${callParams.join(', ')})\n\n`
    }
  }
}

code += `
  // insert remote file in WASM filesystem
  raylib.addFile = async (filename, target) => {
    if (!target) {
      target = filename
    }
    const p = target.split('/').slice(0,-1)
    let dir = ''
    for (const d of p) {
      dir = dir + '/' + d
      try{
        mod.FS.mkdir(dir)
      }catch(e){}
    }
    mod.FS.writeFile(target, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // more convenient free() for structs
  raylib.free = ptr => ptr._address ? mod._free(ptr._address) : mod._free(ptr)

  // we use raylib to namespace operations to a single wasm runtime instance
  // this is sort of like importing all the stuff from raylib object, if you only have 1 on page
  raylib.globalize = () => {
    for (const k of Object.keys(raylib)) {
      window[k] = raylib[k]
    }
  }

  // process user-functions, make raylib look like it's global

  if (userInit) {
    await userInit(raylib)
  }

  if (userUpdate) {
    const updateLoop = (timeStamp) => {
      userUpdate(timeStamp, raylib)
      requestAnimationFrame(updateLoop)
    }
    updateLoop()
  }

  return raylib
}

class RaylibComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.canvas = document.createElement('canvas')
    this.style.display = 'none'
    window.addEventListener('resize', this.onResize.bind(this))
    this.shadow.innerHTML = \`
<style>
canvas.landscape {
  height: 100vh;
  max-width: 100vw;
}
canvas.portrait {
  width: 100vw;
  max-height: 100vh;
}
canvas {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  object-fit: contain;
}
</style>
\`
    this.shadow.appendChild(this.canvas)
  }
  
  onResize() {
    if (this.fill){
      const { clientWidth, clientHeight } = document.body
      this.canvas.className = clientWidth > clientHeight ? 'landscape' : 'portrait'
    }
  }
  
  static get observedAttributes() {
    return ['src', 'fill']
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'fill') {
      this.fill = typeof newValue !== 'undefined'
      this.onResize()
    }
    if (name ==='src') {
      this.start(newValue)
    }
  }

  async start(src) {
    let userCode = this.textContent
    if (src) {
      userCode = await fetch(src).then(r => r.text())
    }
    const f = new Function(['runGame', 'canvas'], userCode + '\\n' + \`
      if (typeof InitGame === 'undefined') {
        console.error('Make sure to add InitGame() to your raylib-game.')
        return
      }
      if (typeof UpdateGame === 'undefined') {
        console.error('Make sure to add UpdateGame() to your raylib-game.')
        return
      }

      let ${exposed.join(',')}

      runGame(canvas, async raylib => {
        ${exposed.map(f => `${f} = raylib.${f}`).join('\n  ')}
        await InitGame()
      }, UpdateGame)
    \`)
    f(raylib_run, this.canvas)
    this.style.display = 'block'
  }
  
  connectedCallback() {
    var observer = new MutationObserver((mutations) => {
      this.start(this.src)
    })
    observer.observe(this, { childList: true })
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.customElements.define('raylib-game', RaylibComponent)
  })
}

`

// regular web JS
await writeFile('raylib.js', code)

// ES6 web module
await writeFile('raylib.module.js', code + `

export { raylib_run, RaylibComponent, Module, wasmBinary }
export default raylib_run
`)
