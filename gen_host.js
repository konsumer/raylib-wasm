// this will generate the main chunk of the host
// it will be hand-edited after

import { readFile, writeFile } from 'fs/promises'

const { defines, structs, aliases, enums, callbacks, functions } = await fetch('https://raw.githubusercontent.com/raysan5/raylib/master/parser/output/raylib_api.json').then(r => r.json())

// add type-aliases
for (const { type, name, description } of aliases) {
  structs.push({
    ...structs.find(s => s.name === type),
    description,
    name
  })
}

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
  
  return 0
}

// indent a string
const indentString = (str, count=2, indent = ' ') => str.replace(/^/gm, indent.repeat(count))

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
  const s = structs.find(s => s.name === type)
  if (s) {
    return s.fields.reduce((a, c) => a + getSize(c.type), 0)
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

// create all the wasm-memory getters/setters for a struct
function outputGetters (struct) {
  let offsetSize = 0
  return struct.fields.map(field => {
    const size = getSize(field.type)

    const out = `
    get ${field.name} () {
      return valGetter(this._address + ${offsetSize}, '${field.type}')
    }
    set ${field.name} (${field.name}) {
      valSetter(this._address + ${offsetSize}, '${field.type}', ${field.name})
    }
`
    offsetSize += size
    return out
  }).join('\n  ')
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
    constructor(${s.fields.map(f => `${f.name} = ${defaultValue(f.type)}`).join(', ')}) {
      this._size = ${size}
      this._address = mod._malloc(this._size)
      ${s.fields.map(f => `this.${f.name} = ${f.name}`).join('\n      ')}
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
  code += `\n  raylib.${c.name} = ${c.value.replace(/CLITERAL\(Color\){ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) }/, 'new raylib.Color($1, $2, $3, $4)')} // ${c.description}`
}

code += indentString(await readFile('handmade_wrappers.js', 'utf8')) + `
  return raylib
}

export default setup

`

await writeFile('site/raylib.js', code)
