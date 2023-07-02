const screenWidth = 800
const screenHeight = 450
let camera

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)
  camera = new Camera()
  camera.zoom = 1
}

const UpdateGame = (ts) => {
  if (IsMouseButtonDown(MOUSE_BUTTON_RIGHT)) {
    const delta = Vector2Scale(GetMouseDelta(), -1 / camera.zoom)
    camera.target = Vector2Add(camera.target, delta)
  }
  
  const wheel = GetMouseWheelMove()
  if (wheel != 0) {
    const mouseWorldPos = GetScreenToWorld2D(GetMousePosition(), camera)
    camera.offset = GetMousePosition()
    camera.target = mouseWorldPos
    const zoomIncrement = 0.125
    camera.zoom += (wheel * zoomIncrement)
    if (camera.zoom < zoomIncrement) {
      camera.zoom = zoomIncrement
    }
  }

  BeginDrawing()
    ClearBackground(RAYWHITE)
    BeginMode2D(camera)
      rlPushMatrix()
        rlTranslatef(0, 25 * 50, 0)
        rlRotatef(90, 1, 0, 0)
        DrawGrid(100, 50)
      rlPopMatrix()
      DrawCircle(100, 100, 50, YELLOW)
    EndMode2D()
  EndDrawing()
}
