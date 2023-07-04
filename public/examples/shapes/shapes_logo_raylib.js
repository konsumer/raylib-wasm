const screenWidth = 800
const screenHeight = 450

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawRectangle(screenWidth/2 - 128, screenHeight/2 - 128, 256, 256, BLACK);
  DrawRectangle(screenWidth/2 - 112, screenHeight/2 - 112, 224, 224, RAYWHITE);
  DrawText("raylib", screenWidth/2 - 44, screenHeight/2 + 48, 50, BLACK);
  DrawText("this is NOT a texture!", 350, 370, 10, GRAY);
  EndDrawing()
}
