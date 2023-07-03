let  cat

const InitGame = async () => {
  InitWindow(600, 400)
  
  // manually add a file at a speciifc fake location
  await addFile('https://placekitten.com/600/400', 'cat.jpg')
  cat = await LoadTexture('cat.jpg', true)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawTexture(cat, 0, 0, WHITE)
  EndDrawing()
}
