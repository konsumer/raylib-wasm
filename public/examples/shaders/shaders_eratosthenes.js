const GLSL_VERSION = 100

const screenWidth = 800
const screenHeight = 450

let target
let shader
let source
let position

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight, "raylib [shaders] example - Sieve of Eratosthenes")
  target = LoadRenderTexture(screenWidth, screenHeight)
  await addFile(`/examples/shaders/resources/shaders/glsl${GLSL_VERSION}/eratosthenes.fs`, 'eratosthenes.fs')
  shader = LoadShader(0, 'eratosthenes.fs')
  source = new Rectangle({x: 0, y: 0, width: target.texture.width, height: -target.texture.height})
  position = new Vector2({ x: 0, y: 0 })
}

const UpdateGame = (ts) => {
  BeginTextureMode(target)
  ClearBackground(BLACK)
  DrawRectangle(0, 0, GetScreenWidth(), GetScreenHeight(), BLACK)
  EndTextureMode()
  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginShaderMode(shader)
  DrawTextureRec(target.texture, source, position, WHITE)
  EndShaderMode()
  EndDrawing()
}
