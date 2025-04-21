let fxWav
let fxOgg

const InitGame = async () => {
  InitWindow(800, 450)
  InitAudioDevice()
  fxWav = LoadSound('resources/sound.wav')
  fxOgg = LoadSound('resources/target.ogg')
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText('Press SPACE to PLAY the WAV sound!', 200, 180, 20, LIGHTGRAY)
  DrawText('Press ENTER to PLAY the OGG sound!', 200, 220, 20, LIGHTGRAY)
  EndDrawing()
  if (IsKeyPressed(KEY_SPACE)) {
    PlaySound(fxWav)
    console.log('space')
  }
  if (IsKeyPressed(KEY_ENTER)) {
    PlaySound(fxOgg)
    console.log('enter')
  }
}
