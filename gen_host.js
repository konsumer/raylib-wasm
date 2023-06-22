// this will generate the main chunk of the host
// it will be hand-edited after

const { defines, structs, aliases, enums, callbacks, functions } = await fetch('https://raw.githubusercontent.com/raysan5/raylib/master/parser/output/raylib_api.json').then(r => r.json())

for (const { type, name, description } of aliases) {
  structs.push({
    ...structs.find(s => s.name === type),
    description,
    name
  })
}

// get the byte-size of a type
function getSize (type) {
  if (type.includes('*')) {
    return 4
  }

  if (type.includes('[')) {
    const t = type.split('[')
    return getSize(t[0]) * t[1].split(']')[0]
  }

  const s = structs.find(s => s.name === type)
  if (s) {
    return s.fields.reduce((a, c) => a + getSize(c.type), 0)
  }

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

// create all the wasm-memory getters/setters for a struct
function outputGetters (struct) {
  let offsetSize = 0
  return struct.fields.map(field => {
    const size = getSize(field.type)
    const out = `
    get ${field.name} () {
      return getStructVal(this._address + ${offsetSize}, ${size}, '${field.type}')
    }
    set ${field.name} (${field.name}) {
      setStructVal(this._address + ${offsetSize}, ${size}, ${field.name})
    }
`
    offsetSize += size
    return out
  }).join('\n  ')
}

// get the string of the function body
function processFunction (f) {
  if (f?.returnType && f.returnType !== 'void') {
    const returnType = structs.find(s => s.name === f.returnType)

    if (returnType) {
      return `const _ret = new iface.${f.returnType}()\n    mod._${f.name}(_ret._address, ${(f.params || []).map(p => `processFunctionInput(${p.name}, '${p.type}')`).join(', ')})\n    return _ret`
    } else {
      // TODO: test returnType for non-32bit types, process that as _ret
      return `return processFunctionReturn(mod._${f.name}(${(f.params || []).map(p => `processFunctionInput(${p.name}, '${p.type}')`).join(', ')}), '${f.returnType}')`
    }
  } else {
    return `mod._${f.name}(${(f.params || []).map(p => `processFunctionInput(${p.name}, '${p.type}')`).join(', ')})`
  }
}

let code = `
// TODO: not sure how this looks, but this will be from emscripten and should have the wasm bytes & emscripten-host-stuff inlined
import wasm from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas) {
  // TODO: helpers passing values in/out of wasm
  const getStructVal = (address, size, type) => {}
  const setStructVal = (address, size, value) => {}
  const processFunctionInput = (val, type) => {
    switch(type) {
      case 'bool': return val ? 1 : 0
      case 'const char *': return mod.allocateUTF8(val)
      // TODO: lots more
    }
  }
  const processFunctionReturn = (val, type) => {
    switch(type) {
      case 'bool': return !!val
      // TODO: lots more
    }
  }

`
for (const s of structs) {
  const size = s.fields.reduce((a, c) => a + getSize(c.type), 0)
  code += `  // ${s.description}
  iface.${s.name} = class ${s.name} {
    constructor(${s.fields.map(f => f.name).join(', ')}) {
      this.size = ${size}
      this._address = mod._malloc(this.size)
      ${s.fields.map(f => `this.${f.name} = ${f.name}`).join('\n      ')}
    }
    ${outputGetters(s)}
  }\n\n`
}

for (const e of enums) {
  code += `  // ENUM ${e.name}\n  // ${e.description}`
  for (const v of e.values) {
    code += `\n  iface.${v.name} = ${v.value} // ${v.description}`
  }
  code += '\n\n'
}

code += `
  const mod = await wasm({canvas})
`

for (const f of functions) {
  code += `\n  // ${f.description}: (${(f.params || []).map(p => p.type).join(', ')}) => ${f.returnType || 'void'}\n  iface.${f.name} = function ${f.name}(${(f.params || []).map(p => p.name).join(', ')}) {
    ${processFunction(f)}
  }
`
}

for (const c of defines.filter(c => c.type === 'COLOR')) {
  code += `\n  iface.${c.name} = ${c.value.replace(/CLITERAL\(Color\){ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) }/, 'new iface.Color($1, $2, $3, $4)')} // ${c.description}`
}

code += `

  return iface
}

export default setup

`

console.log(code)
