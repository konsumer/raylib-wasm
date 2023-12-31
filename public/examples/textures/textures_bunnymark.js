let texBunny
const bunnies = []

const MAX_BUNNIES = 50000
const MAX_BATCH_ELEMENTS = 8192

const InitGame = async () => {
  InitWindow(640, 480)
  SetTargetFPS(60)
  texBunny = await LoadTexture('examples/textures/resources/wabbit_alpha.png')
}

const UpdateGame = (ts) => {
  // Create more bunnies
  if (IsMouseButtonDown(MOUSE_BUTTON_LEFT)) {
    for (let i = 0; i < 100; i++){
      if (bunnies.length < MAX_BUNNIES){
        const p = GetMousePosition()
        bunnies.push({
          position: { x: p.x, y: p.y },
          speed: {
            x: GetRandomValue(-250, 250) / 60,
            y: GetRandomValue(-250, 250) / 60
          },
          color: new Color({
            r: GetRandomValue(50, 240),
            g: GetRandomValue(80, 240),
            b: GetRandomValue(100, 240),
            a: 255
          })
        })
        free(p)
      }
    }
  }

  // Update bunnies
  for (let bunny of bunnies) {
    bunny.position.x += bunny.speed.x
    bunny.position.y += bunny.speed.y
    if (((bunny.position.x + texBunny.width/2) > GetScreenWidth()) || ((bunny.position.x + texBunny.width/2) < 0)) {
      bunny.speed.x *= -1
    }
    if (((bunny.position.y + texBunny.height/2) > GetScreenHeight()) || ((bunny.position.y + texBunny.height/2 - 40) < 0)) {
      bunny.speed.y *= -1
    }
  }

  BeginDrawing()
  ClearBackground(RAYWHITE)
  for (let bunny of bunnies) {
    DrawTexture(texBunny, bunny.position.x, bunny.position.y, bunny.color)
  }
  DrawRectangle(0, 0, 640, 40, BLACK)
  DrawText(`bunnies: ${bunnies.length}`, 120, 10, 20, GREEN)
  DrawText(`batched draw calls: ${1 + Math.floor(bunnies.length/MAX_BATCH_ELEMENTS)}`, 320, 10, 20, MAROON)
  DrawFPS(10, 10)
  EndDrawing()
}