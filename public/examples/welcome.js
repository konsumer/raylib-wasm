let cat

const InitGame = async () => {
  InitWindow(400, 450)

  // manually add a file at a speciifc fake location
  await addFile('https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg', 'kitten.jpg')
  cat = await LoadTexture('kitten.jpg', true)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(BLACK)
  DrawText("Raylib WASM", 10, 120, 62, GREEN)
  DrawText("Choose your demo from the selector!", 15, 214, 20, BLUE)
  EndDrawing()
}