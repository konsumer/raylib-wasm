/* global raylib */

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
raylib.addFile = async filename => {
  mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
}

// TODO: just manually building a few functions here, until I get better codegen setup
raylib.BeginDrawing = mod._BeginDrawing
raylib.EndDrawing = mod._EndDrawing
raylib.DrawFPS = mod._DrawFPS
raylib.GetRandomValue = mod._GetRandomValue
raylib.GetScreenWidth = mod._GetScreenWidth
raylib.GetScreenHeight = mod._GetScreenHeight
raylib.IsMouseButtonDown = () => !!mod._IsMouseButtonDown()
raylib.ClearBackground = color => mod._ClearBackground(color._address)
  raylib.GetMousePosition = () => {
  const _ret = new raylib.Vector2(0, 0)
  mod._GetMousePosition(_ret._address)
  return _ret
}
raylib.DrawTexture = (texture, x, y, color) => mod._DrawTexture(texture._address, x, y, color._address)
raylib.DrawRectangle = (x, y, width, height, color) => mod._DrawRectangle(x, y, width, height, color._address)
raylib.DrawText = (text, x, y, fontSize, color) => {
  let ptr_test = mod.allocateUTF8(text)
  mod._DrawText(ptr_test, x, y, fontSize, color._address)
  mod._free(ptr_test)
}

// NOTE: these ones actually modify how it works (not just convert/raise/lower types)

// title doesn't really do anyhting, so make it optional
raylib.InitWindow = (height, width) => mod._InitWindow(height, width, "")

// LoadTexture, but (async) insert the file into fake FS first
raylib.LoadTexture = async filename => {
  await raylib.addFile(filename)
  let ptr_filename = mod.allocateUTF8(filename)
  const texture = new raylib.Texture()
  mod._LoadTexture(texture._address, ptr_filename)
  mod._free(ptr_filename)
  return texture
}

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