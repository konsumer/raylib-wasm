// this will generate the main chunk of the host
// it will be hand-edited after

import { readFile, writeFile } from 'fs/promises'

let { defines, structs, aliases, enums, callbacks, functions } = await fetch('https://raw.githubusercontent.com/raysan5/raylib/master/parser/output/raylib_api.json').then(r => r.json())

// add type-aliases & a keyed list for lookup
const mappedStructs = structs.reduce((a, c) => ({...a, [c.name]: c}), {})
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
function defaultValue(type) {
  // array-types
  const a = type.match(/([a-zA-Z 0-9]+) *\[([0-9]+)\]/)
  if (a) {
    const v = defaultValue(a[1])
    return '[' + [...(new Array(parseInt(a[2])))].map(() => v).join(', ') + ']'
  }
  // structs
  if (type.match(/^[A-Z]/)) {
    return `new ${type.replace(/\*/g, '').replace(/ /g, '')}()`
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
  if (type.includes('*')) {
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
const indentString = (str, count=2, indent = ' ') => str.replace(/^/gm, indent.repeat(count))

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
function mapTypeToJs(type) {
  if (type === 'const char *') {
    return "'string'"
  }
  if (type.includes('*')) {
    return "'pointer'"
  }
  switch(type) {
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
      return  "'pointer'"
  }
}

let code = `
// TODO: inline this?
import Module from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas, userInit, userUpdate) {
  const raylib = {}

`
for (const s of structs) {
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
    code += `\n  raylib.${v.name} = ${v.value} // ${v.description}`
  }
  code += '\n\n'
}

code += `
  // TODO: you can add wasmBinary here for inline-loading
  const mod = await Module({canvas})
  raylib.module = mod
`

for (const c of defines.filter(c => c.type === 'COLOR')) {
  code += `\n  raylib.${c.name} = ${c.value.replace(/CLITERAL\(Color\){ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) }/, 'new raylib.Color({r: $1, g: $2, b: $3, a: $4})')} // ${c.description}`
}

code += '\n\n'


for (const { name, description, returnType, params = [] } of functions) {
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

    code += `raylib.${name} = (${wasmParams.join(', ')}) => {
    const _ret = new raylib.${returnsStruct.name}()
    mod.ccall('${name}', 'void', [${callParamTypes.join(', ')}], [${callParams.join(', ')}])
    return _ret
  }

`
  } else {
    code += `raylib.${name} = (${wasmParams.join(', ')}) => mod.ccall('${name}', ${mapTypeToJs(returnType)}, [${callParamTypes.join(', ')}], [${callParams.join(', ')}])\n\n`
  }
}


code += `
  // insert remote file in WASM filesystem
  raylib.addFile = async filename => {
    mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // more convenient free() for structs
  raylib.free = ptr => ptr._address ? mod._free(ptr._address) : mod._free(ptr)

  // process user-functions
  if (userInit) {
    await userInit(raylib)
  }
  const updateLoop = (timeStamp) => {
    if (userUpdate) {
      userUpdate(raylib, timeStamp)
    }
    requestAnimationFrame(updateLoop)
  }
  updateLoop()
  return raylib
}

export default setup

`


await writeFile('site/raylib.js', code)
