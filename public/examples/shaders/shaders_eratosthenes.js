const GLSL_VERSION = 100

const screenWidth = 800
const screenHeight = 450

let target
let shader
let rec
let vec2

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight, "raylib [shaders] example - Sieve of Eratosthenes")
  target = LoadRenderTexture(screenWidth, screenHeight)
  await addFile(`/examples/shaders/resources/shaders/glsl${GLSL_VERSION}/eratosthenes.fs`, 'eratosthenes.fs')
  shader = LoadShader(0, `eratosthenes.fs`)
  rec = new Rectangle({x: 0, y:0, width: target.texture.width, height: -1 * target.texture.height})
  vec2 = new Vector2({ x:0, y:0 })
}

const UpdateGame = (ts) => {
  BeginTextureMode(target)
  ClearBackground(BLACK)
  DrawRectangle(0, 0, GetScreenWidth(), GetScreenHeight(), BLACK)
  EndTextureMode()
  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginShaderMode(shader)
  DrawTextureRec(target.texture, rec, vec2, WHITE)
  EndShaderMode()
  EndDrawing()
}
