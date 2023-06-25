/* global raylib, mod */

// insert remote file in WASM filesystem
raylib.addFile = async filename => {
  mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
}

// TODO: just manually building a few functions here, until I get better codegen setup
// think of this as the target we are trying to generate
raylib.InitWindow = mod.cwrap('InitWindow', 'void', ['number', 'number', 'string'])
raylib.BeginDrawing = mod.cwrap('BeginDrawing', 'void', [])
raylib.EndDrawing = mod.cwrap('EndDrawing', 'void', [])
raylib.DrawFPS = mod.cwrap('DrawFPS', 'void', [])
raylib.GetRandomValue = mod.cwrap('GetRandomValue', 'number', ['number', 'number'])
raylib.GetScreenWidth = mod.cwrap('GetScreenWidth', 'number', [])
raylib.GetScreenHeight = mod.cwrap('GetScreenHeight', 'number', [])
raylib.IsMouseButtonDown = mod.cwrap('IsMouseButtonDown', 'boolean', ['number'])

// these have struct params/return, so need wrap (to get struct._address)
raylib.ClearBackground = color => mod.ccall('ClearBackground', 'void', ['pointer'], [color._address])
raylib.DrawText = (text, x, y, fontSize, color) => mod.ccall('DrawText', 'void', ['string', 'number', 'number', 'number', 'pointer'], [text, x, y, fontSize, color._address])
raylib.DrawTexture = (texture, x, y, color) => mod.ccall('DrawTexture', 'void', ['pointer', 'number', 'number', 'pointer'], [texture._address, x, y, color._address])
raylib.DrawRectangle = (x, y, width, height, color) => mod.ccall('DrawRectangle', 'void', ['number', 'number', 'number', 'number', 'pointer'], [x, y, width, height, color._address])
raylib.GetMousePosition = () => {
  const ret = new raylib.Vector2()
  mod.ccall('GetMousePosition', 'void', ['pointer'], [ret._address])
  return ret
}

// LoadTexture, but (async) insert the file into fake FS first
raylib.LoadTexture = async filename => {
  await raylib.addFile(filename)
  const texture = new raylib.Texture()
  mod.ccall('LoadTexture', 'void', ['pointer', 'string'], [texture._address, filename])
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