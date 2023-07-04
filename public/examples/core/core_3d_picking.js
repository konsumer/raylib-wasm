const  screenWidth = 800
const  screenHeight = 450

let camera
let cubePosition
let cubeSize
let ray
let collision
let bounds

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)
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

  cubePosition = new Vector3({x: 0, y: 1, z: 0 })
  cubeSize = new Vector3({x: 2, y: 2, z: 2 })
  ray = new Ray()
  collision = new RayCollision()

  bounds = new BoundingBox()
  bounds.min.x = cubePosition.x - cubeSize.x/2
  bounds.min.y = cubePosition.y - cubeSize.y/2
  bounds.min.z = cubePosition.z - cubeSize.z/2
  bounds.max.x = cubePosition.x + cubeSize.x/2
  bounds.max.y = cubePosition.y + cubeSize.y/2
  bounds.max.z = cubePosition.z + cubeSize.z/2
}

const UpdateGame = (ts) => {
  if (IsCursorHidden()) {
    UpdateCamera(camera, CAMERA_FIRST_PERSON)
  }
  
  if (IsMouseButtonPressed(MOUSE_BUTTON_RIGHT)) {
    if (IsCursorHidden()) {
      EnableCursor()
    } else {
      DisableCursor()
    }
  }

  if (IsMouseButtonPressed(MOUSE_BUTTON_LEFT)) {
    if (!collision.hit) {
        ray = GetMouseRay(GetMousePosition(), camera)
        collision = GetRayCollisionBox(ray, bounds)
    } else {
      collision.hit = false
    }
  }

  BeginDrawing()
  BeginMode3D(camera);

  if (collision.hit){
    DrawCube(cubePosition, cubeSize.x, cubeSize.y, cubeSize.z, RED)
    DrawCubeWires(cubePosition, cubeSize.x, cubeSize.y, cubeSize.z, MAROON)
    DrawCubeWires(cubePosition, cubeSize.x + 0, cubeSize.y + 0, cubeSize.z + 0, GREEN)
  } else {
    DrawCube(cubePosition, cubeSize.x, cubeSize.y, cubeSize.z, GRAY)
    DrawCubeWires(cubePosition, cubeSize.x, cubeSize.y, cubeSize.z, DARKGRAY)
  }

  DrawRay(ray, MAROON)
  DrawGrid(10, 1)

  EndMode3D()

  DrawText("Try clicking on the box with your mouse!", 240, 10, 20, DARKGRAY)

  if (collision.hit) {
    DrawText("BOX SELECTED", (screenWidth - MeasureText("BOX SELECTED", 30)) / 2, (screenHeight * 0.1), 30, GREEN)
  }

  DrawText("Right click mouse to toggle camera controls", 10, 430, 10, GRAY)

  DrawFPS(10, 10)
  EndDrawing()
}
