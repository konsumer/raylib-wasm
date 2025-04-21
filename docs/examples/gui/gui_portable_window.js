let mousePosition
const  screenWidth = 600;
const  screenHeight = 200;
let windowRec
let contentRec
let defaultFont

let text = `The original example was more about hiding the window decoration and replacing with GUI window, but the web doesn't really do that (there is only 1 window, and you can't move it.) You could use a window like this to work out layout, though.
So, I guess this demo illustrates a few things:

- wordwrap
- GUI state (close the window)
- mouse position
`

const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)
  defaultFont = GetFontDefault()
  windowRec = new Rectangle({ x: 0, y: 0, width: screenWidth, height: screenHeight })
  contentRec = new Rectangle({ x: 10, y: 50, width: screenWidth - 20, height: screenHeight - 70 })
}

const UpdateGame = (ts) => {
  mousePosition = GetMousePosition()
  BeginDrawing()
  ClearBackground(RAYWHITE)
  const close = GuiWindowBox(windowRec, "#198# PORTABLE WINDOW")
  if (close) {
    text = 'You closed the window. Refresh the page to "open" it again.'
  }
  DrawText(`Mouse Position: [ ${ mousePosition.x.toFixed(2)}, ${mousePosition.y.toFixed(2)} ]`, 10, 30, 10, DARKGRAY)
  DrawTextBoxed(defaultFont, text, contentRec, 10, 1, true, DARKGRAY)
  EndDrawing()
}
