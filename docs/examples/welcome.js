const InitGame = async () => {
  InitWindow(400, 450)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(BLACK)
  DrawText("Raylib WASM", 10, 120, 62, GREEN)
  DrawText("Choose your demo from the selector!", 15, 214, 20, BLUE)
  EndDrawing()
}