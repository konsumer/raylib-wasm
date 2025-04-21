const GLSL_VERSION = 100

let texture
let shader
let target
let source
let position
let tex

const InitGame = async () => {
  InitWindow(800, 450)
  texture = await LoadTexture('examples/textures/resources/cat.png')
  target = LoadRenderTexture(texture.width, texture.height)

  // LoadShader does not have URL-loading setup yet
  await addFile(`./examples/shaders/resources/shaders/glsl${GLSL_VERSION}/texturetest.fs`, 'texturetest.fs')
  await addFile(`./examples/shaders/resources/shaders/glsl${GLSL_VERSION}/texturetest.vs`, 'texturetest.vs')
  shader = LoadShader('texturetest.vs', 'texturetest.fs')

  source = new Rectangle({ x: 0, y: 0, width: texture.width, height: texture.height })
  position = new Vector2({ x: 0, y: 0 })

  tex = new UniformTexture(shader, 'texture1')
}

const UpdateGame = (ts) => {
  BeginTextureMode(target)
  DrawTextureRec(texture, source, position, WHITE)
  tex.texture = target.texture
  EndTextureMode()

  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginShaderMode(shader)
  DrawRectangle(0, 0, 800, 450, WHITE)
  EndShaderMode()
  EndDrawing()
}
