const InitGame = async () => {
  InitWindow(400, 450)
  const v = new Vector2({x: 5, y: 5})
  console.log(v) // correct
  const c = new Camera2D({
    offset: new Vector2({x: 5, y: 5}),    // should copy x/y
    target: new Vector2({x: 15, y: 15}),  // should copy x/y
    rotation: 0,
    zoom: 0
  })
  console.log(c.offset.x) // incorrect, 0 but should be 5
  console.log(c)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(BLACK)
  DrawText("Raylib WASM", 10, 120, 62, GREEN)
  DrawText("Choose your demo from the selector!", 15, 214, 20, BLUE)
  EndDrawing()
}