// this will generate the main chunk of the host
// it will be hand-edited after

import { readFile, writeFile } from 'fs/promises'

const { defines, structs, aliases, enums, callbacks, functions } = await fetch('https://raw.githubusercontent.com/raysan5/raylib/master/parser/output/raylib_api.json').then(r => r.json())

const fileInputs = {
  LoadTexture: []
}


// add type-aliases
for (const { type, name, description } of aliases) {
  structs.push({
    ...structs.find(s => s.name === type),
    description,
    name
  })
}

// modify functions a bit to work better in JS
const f = functions.find(f => f.name === 'InitWindow')
f.params = f.params.slice(0,-1)

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
import Module from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas, userInit, userUpdate) {
  const iface = {}
`
for (const s of structs) {
  const size = s.fields.reduce((a, c) => a + getSize(c.type), 0)
  code += `  // ${s.description}
  iface.${s.name} = class ${s.name} {
    constructor(${s.fields.map(f => f.name).join(', ')}) {
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
    code += `\n  iface.${v.name} = ${v.value} // ${v.description}`
  }
  code += '\n\n'
}

code += `
  const mod = await Module({canvas})
`

for (const c of defines.filter(c => c.type === 'COLOR')) {
  code += `\n  iface.${c.name} = ${c.value.replace(/CLITERAL\(Color\){ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) }/, 'new iface.Color($1, $2, $3, $4)')} // ${c.description}`
}

code += `
  // emscripten type-converters are a bit incomplete. This makes values easier to use
  // TODO: these were added by hand, 1 at atime
  function valGetter(address, type) {
    switch(type) {
      case 'unsigned char': return mod.HEAPU8[address]
      case 'int': return mod.HEAP32[address]
      case 'float': return mod.getValue(address, 'float')
      default:
        console.log('get: Unkown type', type)
        return address
    }
  }

  function valSetter(address, type, value) {
    switch(type) {
      case 'unsigned char': return mod.setValue(address, value, 'i8')
      case 'float': return mod.setValue(address, value, 'float')
      default:
        console.log('set: Unkown type', type)
        return address
    }
  }

  // insert remote file in WASM filesystem
  iface.addFile = async filename => {
    mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // TODO: just manually building a few functions here, until I get better codegen setup
  iface.BeginDrawing = mod._BeginDrawing
  iface.EndDrawing = mod._EndDrawing
  iface.DrawFPS = mod._DrawFPS
  iface.GetRandomValue = mod._GetRandomValue
  iface.GetScreenWidth = mod._GetScreenWidth
  iface.GetScreenHeight = mod._GetScreenHeight
  iface.IsMouseButtonDown = () => !!mod._IsMouseButtonDown()
  iface.ClearBackground = color => mod._ClearBackground(color._address)
    iface.GetMousePosition = () => {
    const _ret = new iface.Vector2(0, 0)
    mod._GetMousePosition(_ret._address)
    return _ret
  }
  iface.DrawTexture = (texture, x, y, color) => mod._DrawTexture(texture._address, x, y, color._address)
  iface.DrawRectangle = (x, y, width, height, color) => mod._DrawRectangle(x, y, width, height, color._address)
  iface.DrawText = (text, x, y, fontSize, color) => {
    let ptr_test = mod.allocateUTF8(text)
    mod._DrawText(ptr_test, x, y, fontSize, color._address)
    mod._free(ptr_test)
  }

  // these ones actually modify how it works (not just convert/raise/lower types)

  iface.InitWindow = (height, width) => mod._InitWindow(height, width, "")

  iface.LoadTexture = async filename => {
    await iface.addFile(filename)
    let ptr_filename = mod.allocateUTF8(filename)
    const texture = new iface.Texture()
    mod._LoadTexture(texture._address, ptr_filename)
    mod._free(ptr_filename)
    return texture
  }

  iface.module = mod
  if (userInit) {
    await userInit(iface)
  }

  const updateLoop = (timeStamp) => {
    if (userUpdate) {
      userUpdate(iface, timeStamp)
    }
    requestAnimationFrame(updateLoop)
  }
  updateLoop()
  
  return iface
}

export default setup

`

await writeFile('site/raylib.js', code)
