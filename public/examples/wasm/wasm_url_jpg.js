let  cat
const InitGame = async () => {
  InitWindow(800, 400)
  // manually add a file at a speciifc fake location
  await addFile('https://placekitten.com/800/400', 'cat.jpg')
  cat = await LoadTexture('cat.jpg', true)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  let i = 1000
  DrawTexture( cat, 0, 0, WHITE)
  DrawFPS(10, 10)
  EndDrawing()
}
