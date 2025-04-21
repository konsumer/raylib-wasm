let wabbit

const InitGame = async () => {
  InitWindow(800, 450)
  
  // manually add a file at a speciifc fake location
  await addFile('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABt0lEQVR42oSVzXXjMAyEP+SxllUhe822oQIilyH6nrThXNPHWilm9iCIIihyw/ds2SAxHPwMZOJYXwjjN1ZMsv1ZW+4IQyxuSVTLANPKBAjDlA0WPc4TWs0QViwBYN8wXgH4dBs8/b4HYM7gWC8tA6rNaN+f0b0BiK4qnPr7lxDiYdiccJ9Jh8FpzkDGWFl0Uwbubt0vUgU7YHD3/7ns5JCHHxiAuGHVXcswE00SFaoRY65rZD0ANXmo3dYCbw3X1Kv3UcCD+Oq7dgm1avPjR/Z79gDegHsV9cSfRifpcJ9DinTpRXlvPIpOdojUdtbmUto/2WNWgdmaZr6EMCOmQvhg9V2VtxsCzG740MzGL2ByVR7K3BA3smnUynX8FtzhtfRFq5h07TALvR61eU1wil2gUPH+impI/XmgoauNtKDm5ieP6tgn20UhDQO73PXtU3GHswG7VE8DhXSZu8mZ9cNKMb4o3mclr6nYB1NZzbeCu7FVKtV4qJ4jZGmozvxlalh2knhgL97aZ84/NPP830hTeHX0YXuVeOmX8QpbOw1HWjsXz/KeEG/jN5MXyUyn2s/1PrD/GwB8grQtXIY6LwAAAABJRU5ErkJggg==', 'wabbit.png')
  wabbit = await LoadTexture('wabbit.png', true)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  let i = 1000
  while(i--) {
    DrawTexture(wabbit, GetRandomValue(-20, 820), GetRandomValue(-20, 470), WHITE)
  }
  DrawText("too many", 50, 220, 30, BLUE)
  DrawText("BUNNIES!", 50, 250, 150, RED)
  EndDrawing()
}
