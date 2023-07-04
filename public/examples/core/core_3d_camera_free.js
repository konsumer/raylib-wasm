let camera
let cubePosition

async function InitGame () {
  InitWindow(800, 450)
  
  camera = new Camera3D()
  camera.position.x = 10
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
  
  cubePosition = new Vector3({x: 0, y: 0, z: 0 })

  DisableCursor()
}

function UpdateGame(ts) {
  UpdateCamera(camera, CAMERA_FREE)
  
  if (IsKeyDown('Z')){
    camera.target.x = 0
    camera.target.y = 0
    camera.target.z = 0
  }

  BeginDrawing()
  ClearBackground(RAYWHITE)

  BeginMode3D(camera)
  DrawCube(cubePosition, 2, 2, 2, RED)
  DrawCubeWires(cubePosition, 2, 2, 2, MAROON)
  DrawGrid(10, 1)
  EndMode3D()

  DrawRectangle( 10, 10, 320, 133, Fade(SKYBLUE, 0.5))
  DrawRectangleLines( 10, 10, 320, 133, BLUE)

  DrawText("Free camera default controls:", 20, 20, 10, BLACK)
  DrawText("- Mouse Wheel to Zoom in-out", 40, 40, 10, DARKGRAY)
  DrawText("- Mouse Wheel Pressed to Pan", 40, 60, 10, DARKGRAY)
  DrawText("- Alt + Mouse Wheel Pressed to Rotate", 40, 80, 10, DARKGRAY)
  DrawText("- Alt + Ctrl + Mouse Wheel Pressed for Smooth Zoom", 40, 100, 10, DARKGRAY)
  DrawText("- Z to zoom to (0, 0, 0)", 40, 120, 10, DARKGRAY)
  EndDrawing()
}