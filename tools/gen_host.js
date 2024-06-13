// this will generate the main chunk of the host
// it will be hand-edited after

import { readFile, writeFile } from 'fs/promises'
import { defines, structs, aliases, enums, callbacks, functions, mappedStructs } from './api.js'

// I use this to create the build line (to cut down on unused exports)

const exposed = ['free', 'addFile', 'globalize', 'mod']

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

// generate a default-value for a type
function defaultValue (type) {
  if (type === 'string' || type.match(/char *\[([0-9]+)\]/) || type === 'char*' || type === 'const char*' || type === 'char *' || type === 'const char *') {
    return "''"
  }

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
  if (type === 'string' || type.match(/char *\[([0-9]+)\]/) || type === 'char*' || type === 'const char*' || type === 'char *' || type === 'const char *') {
    return `mod.UTF8ToString(${name})`
  }
  if (type === 'u8' || type === 'unsigned char') {
    return `mod.HEAPU8[${name}]`
  }
  if (type === 'u32' || type === 'unsigned int') {
    return `mod.HEAPU32[${name}]`
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
  if (type === 'string' || type.match(/char *\[([0-9]+)\]/) || type === 'char*' || type === 'const char*' || type === 'char *' || type === 'const char *') {
    return `mod.stringToUTF8(${name}, ${valueName})`
  }
  if (mappedStructs[type]) {
    return `mod.setValue(${name}, ${valueName}._address, '*')`
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

    let out = ''

    if (!mappedStructs[field.type.replace(' ', '').replace('*', '')]) {
      out = `
      get ${field.name} () {
        return ${valGetter(`this._address + ${offsetSize}`, field.type)}
      }
      set ${field.name} (${field.name}) {
        ${valSetter(`this._address + ${offsetSize}`, field.name, field.type)}
      }
`
    }
    offsetSize += size
    return out
  }).join('\n  ')
}

// for functions, map input/output type to JS-ish param (for cwrap/ccall auto-conversion)
function mapTypeToJs (type) {
  if (type === 'const char *' || type === 'char *') {
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
import Module from './raylib_emscripten.js'
import RaylibComponent from './raylib_wc.js'

const wasmBinary = new Uint8Array([${(await readFile('src/raylib.wasm')).join(',')}])

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('raylib-game', RaylibComponent)
})

const importLocation = document?.location?.toString()

// run this function before calling anything
export async function raylib_run(canvas, userInit, userUpdate) {
  const raylib = {}
  const mod = await Module({canvas, wasmBinary})
  raylib.mod = mod
`

for (const s of structs) {
  s.fields = s.fields || []
  exposed.push(s.name)
  const size = s.fields.reduce((a, c) => a + getSize(c.type), 0)
  code += `  // ${s.description}
  raylib.${s.name} = class ${s.name} {
    constructor(init = {}, _address) {
      this._size = ${size}
      this._address = _address || mod._malloc(this._size)
`

  let offset = 0
  for (const f of s.fields) {
    const t = mappedStructs[f.type.replace(' ', '').replace('*', '')]
    if (!t) {
      code += `\n      this.${f.name} = init.${f.name} || ${defaultValue(f.type)}`
    } else {
      code += `\n      this.${f.name} = new raylib.${t.name}(init.${f.name} || {}, this._address + ${offset})`
    }
    offset += getSize(f.type)
  }

  code += `
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
    code += `const _${name} = mod.cwrap('${name}', ${mapTypeToJs(returnType)}, [${callParamTypes.join(', ')}])\n  `

    if (fileFuncArgs[name]) {
      code += `raylib.${name} = async (${wasmParams.join(', ')}) => {\n  `
      code += fileFuncArgs[name].map(a => `  await raylib.addFile(${a})`).join('\n  ') + '\n  '
      code += `return _${name}(${callParams.join(', ')})\n  }\n\n`
    } else {
      code += `raylib.${name} = (${wasmParams.join(', ')}) => _${name}(${callParams.join(', ')})\n\n`
    }
  }
}

exposed.push('UniformFloat')
exposed.push('UniformVector2')
exposed.push('UniformVector3')
exposed.push('UniformVector4')
exposed.push('UniformColor')
exposed.push('UniformInt')

code += `
  raylib.UniformFloat = class UniformFloat {
    constructor(shader, name, address) {
      this._shader = shader
      this._size = 4
      this._address = address || mod._malloc(this._size)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get value () {
      return mod.HEAPF32[this._address / 4]
    }

    set value (v) {
      mod.HEAPF32[this._address / 4] = v
      raylib.SetShaderValue(this._shader, this._loc, this, raylib.SHADER_UNIFORM_FLOAT)
    }
  }

  raylib.UniformVector2 = class UniformVector2 {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector2({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get x () {
      return this._val.x
    }
    
    set x (v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC2)
    }

    get y () {
      return this._val.y
    }
    
    set y (v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC2)
    }
  }

  raylib.UniformVector3 = class UniformVector3 {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector3({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get x () {
      return this._val.x
    }
    
    set x (v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC3)
    }

    get y () {
      return this._val.y
    }
    
    set y (v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC3)
    }

    get z () {
      return this._val.z
    }
    
    set y (v) {
      this._val.z = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC3)
    }
  }

  raylib.UniformVector4 = class UniformVector4 {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector4({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get x () {
      return this._val.x
    }
    
    set x (v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get y () {
      return this._val.y
    }
    
    set y (v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get z () {
      return this._val.z
    }
    
    set y (v) {
      this._val.z = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get w () {
      return this._val.w
    }
    
    set w (v) {
      this._val.w = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }
  }

  raylib.UniformColor = class UniformColor {
    constructor(shader, name, address) {
      this._shader = shader
      this._val = new raylib.Vector4({}, address)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get r () {
      return this._val.x
    }
    
    set r (v) {
      this._val.x = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get g () {
      return this._val.y
    }
    
    set g (v) {
      this._val.y = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get b () {
      return this._val.z
    }
    
    set b (v) {
      this._val.z = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }

    get a () {
      return this._val.w
    }
    
    set a (v) {
      this._val.w = v
      raylib.SetShaderValue(this._shader, this._loc, this._val, raylib.SHADER_UNIFORM_VEC4)
    }
  }

  raylib.UniformInt = class UniformInt {
    constructor(shader, name, address) {
      this._shader = shader
      this._size = 4
      this._address = address || mod._malloc(this._size)
      this._loc = raylib.GetShaderLocation(shader, name)
    }

    get value () {
      return mod.HEAP32[this._address / 4]
    }

    set value (v) {
      mod.HEAP32[this._address / 4] = v
      raylib.SetShaderValue(this._shader, this._loc, this, raylib.SHADER_UNIFORM_INT)
    }
  }

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

export function raylib_run_string(canvas, userCode) {
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
      await InitGame(raylib)
    }, UpdateGame)
  \`)
  f(raylib_run, canvas)
}

export { RaylibComponent, Module, wasmBinary }
export default raylib_run

`

// regular web JS
await writeFile('src/raylib.js', code)
