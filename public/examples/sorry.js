const InitGame = async () => {
  InitWindow(400, 250)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText("Sorry, this demo is not ported, yet.", 15, 110, 20, BLACK)
  EndDrawing()
}