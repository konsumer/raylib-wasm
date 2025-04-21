let camera
let cubePosition

const InitGame = async () => {
  InitWindow(800, 450)
  camera = new Camera3D()
  camera.position.x = 0
  camera.position.y = 10
  camera.position.z = 10

  camera.target.x = 0
  camera.target.y = 0
  camera.target.z = 0

  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0

  camera.fovy = 45
  camera.projection = CAMERA_PERSPECTIVE
  cubePosition = new Vector3()
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginMode3D(camera)
  DrawCube(cubePosition, 2, 2, 2, RED)
  DrawCubeWires(cubePosition, 2, 2, 2, MAROON)
  DrawGrid(10, 1)
  EndMode3D()
  DrawText("Welcome to the third dimension!", 10, 40, 20, DARKGRAY)
  DrawFPS(10, 10)
  EndDrawing()
}
