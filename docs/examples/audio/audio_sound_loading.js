let fxWav
let fxOgg

const InitGame = async () => {
  InitWindow(800, 450)
  InitAudioDevice()
  fxWav = await LoadSound('examples/audio/resources/sound.wav')
  fxOgg = await LoadSound('examples/audio/resources/target.ogg')
}

const UpdateGame = (ts) => {
  if (IsKeyPressed(KEY_SPACE)) {
    PlaySound(fxWav)
  }
  if (IsKeyPressed(KEY_ENTER)) {
    PlaySound(fxOgg)
  }
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText('Press SPACE to PLAY the WAV sound!', 200, 180, 20, LIGHTGRAY)
  DrawText('Press ENTER to PLAY the OGG sound!', 200, 220, 20, LIGHTGRAY)
  EndDrawing()
}
