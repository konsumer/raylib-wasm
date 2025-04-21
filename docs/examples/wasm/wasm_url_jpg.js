let cat

const InitGame = async () => {
  InitWindow(1000, 667)

  // manually add a file at a speciifc fake location
  await addFile('./cat-reading-book.jpg', 'cat.jpg')
  cat = await LoadTexture('cat.jpg', true)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawTexture(cat, 0, 0, WHITE)
  EndDrawing()
}
