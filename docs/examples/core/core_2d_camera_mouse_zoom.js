const screenWidth = 800
const screenHeight = 450
let camera

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)
  camera = new Camera2D()
  camera.zoom = 1
}

const UpdateGame = (ts) => {
  if (IsMouseButtonDown(MOUSE_BUTTON_RIGHT)) {
    let delta = GetMouseDelta()
    delta = Vector2Scale(delta, -1, camera.zoom)
    const v2 = Vector2Add(camera.target, delta)
    camera.target.x = v2.x
    camera.target.y = v2.y
    free(v2)
  }
  const  wheel = GetMouseWheelMove()
  if (wheel != 0) {
    const mp = GetMousePosition()
    const mouseWorldPos = GetScreenToWorld2D(mp, camera)
    camera.offset.x = mp.x
    camera.offset.y = mp.y
    camera.target.x = mouseWorldPos.x
    camera.target.y = mouseWorldPos.y

    const zoomIncrement = 0.125

    camera.zoom += (wheel*zoomIncrement)
    if (camera.zoom < zoomIncrement) {
      camera.zoom = zoomIncrement
    }
  }

  BeginDrawing()
  ClearBackground(BLACK)

  BeginMode2D(camera)

  // Draw the 3d grid, rotated 90 degrees and centered around 0,0 
  // just so we have something in the XY plane
  rlPushMatrix();
    rlTranslatef(0, 25*50, 0)
    rlRotatef(90, 1, 0, 0)
    DrawGrid(100, 50)
  rlPopMatrix()

  // Draw a reference circle
  DrawCircle(100, 100, 50, YELLOW)
          
  EndMode2D()
  DrawText("Mouse right button drag to move, mouse wheel to zoom", 10, 10, 20, WHITE)
  EndDrawing()
}
