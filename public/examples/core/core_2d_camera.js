const screenWidth = 800
const screenHeight = 450

let player
let camera
const buildings = [...new Array(100)]

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)

  player = new Rectangle({ x: 400, y: 280, width: 40, height: 40 })

  console.log('player', player)

  let spacing = 0

  for (const i in buildings) {
    buildings[i] = {
      dim: new Rectangle({ width: GetRandomValue(50, 200), height: GetRandomValue(100, 800) }),
      color: new Color({
        r: GetRandomValue(200, 240),
        g: GetRandomValue(200, 240),
        b: GetRandomValue(200, 250),
        a: 255
      })
    }
    buildings[i].dim.x = spacing - 6000
    buildings[i].dim.y = screenHeight - 130 - buildings[i].dim.height
    spacing += buildings[i].dim.width
  }

  console.log('buildings', buildings)

  const offset = new Vector2({ x: screenWidth / 2, y: screenHeight / 2 })

  console.log('offset', offset)

  const target = new Vector2({ x: player.x + 20, y: player.y + 20 })

  console.log('target', target)

  camera = new Camera2D({
    target,
    offset,
    rotation: 0,
    zoom: 1
  })

  console.log('camera', camera)
}

const UpdateGame = (ts) => {
  if (IsKeyDown(KEY_RIGHT)) {
    player.x += 2
  } else if (IsKeyDown(KEY_LEFT)) {
    player.x -= 2
  }

  camera.target = new Vector2({ x: player.x + 20, y: player.y + 20 })

  if (IsKeyDown(KEY_A)) {
    camera.rotation--
  } else if (IsKeyDown(KEY_S)) {
    camera.rotation++
  }

  if (camera.rotation > 40) {
    camera.rotation = 40
  } else if (camera.rotation < -40) {
    camera.rotation = -40
  }

  camera.zoom += (GetMouseWheelMove() * 0.05)

  if (camera.zoom > 3) {
    camera.zoom = 3
  } else if (camera.zoom < 0.1) {
    camera.zoom = 0.1
  }

  if (IsKeyPressed(KEY_R)) {
    camera.zoom = 1
    camera.rotation = 0
  }

  BeginDrawing()
  ClearBackground(RAYWHITE)

  BeginMode2D(camera)
  DrawRectangle(-6000, 320, 13000, 8000, DARKGRAY)
  for (const { dim, color } of buildings) {
    DrawRectangleRec(dim, color)
  }
  DrawRectangleRec(player, RED)
  DrawLine(camera.target.x, screenHeight * -10, camera.target.x, screenHeight * 10, GREEN)
  DrawLine(screenWidth * -10, camera.target.y, screenWidth * 10, camera.target.y, GREEN)
  EndMode2D()

  DrawText('SCREEN AREA', 640, 10, 20, RED)

  DrawRectangle(0, 0, screenWidth, 5, RED)
  DrawRectangle(0, 5, 5, screenHeight - 10, RED)
  DrawRectangle(screenWidth - 5, 5, 5, screenHeight - 10, RED)
  DrawRectangle(0, screenHeight - 5, screenWidth, 5, RED)

  DrawRectangle(10, 10, 250, 113, Fade(SKYBLUE, 0.5))
  DrawRectangleLines(10, 10, 250, 113, BLUE)

  DrawText('Free 2d camera controls:', 20, 20, 10, BLACK)
  DrawText('- Right/Left to move Offset', 40, 40, 10, DARKGRAY)
  DrawText('- Mouse Wheel to Zoom in-out', 40, 60, 10, DARKGRAY)
  DrawText('- A / S to Rotate', 40, 80, 10, DARKGRAY)
  DrawText('- R to reset Zoom and Rotation', 40, 100, 10, DARKGRAY)

  EndDrawing()
}
