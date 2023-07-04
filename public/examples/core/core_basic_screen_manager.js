const  screenWidth = 800
const  screenHeight = 450

// there are a lot of ways to do game-states.
// The original used an enum. I am using a dictionary-lookup.
let currentScreen = 'LOGO'
let framesCounter = 0
const gamestates = {
  LOGO: {
    update(){
      framesCounter++
      if (framesCounter > 120){
        currentScreen = 'TITLE'
      }
    },
    draw(){
      DrawText("LOGO SCREEN", 20, 20, 40, LIGHTGRAY)
      DrawText("WAIT for 2 SECONDS...", 290, 220, 20, GRAY)
    }
  },
  
  TITLE: {
    update(){
      // Press enter to change to GAMEPLAY screen
      if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP)){
        currentScreen = 'GAMEPLAY'
      }
    },
    draw(){
      DrawRectangle(0, 0, screenWidth, screenHeight, GREEN)
      DrawText("TITLE SCREEN", 20, 20, 40, DARKGREEN)
      DrawText("PRESS ENTER or TAP to JUMP to GAMEPLAY SCREEN", 120, 220, 20, DARKGREEN)
    }
  },
  
  GAMEPLAY: {
    update(){
      // Press enter to change to ENDING screen
      if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP)){
        currentScreen = 'ENDING'
      }
    },
    draw(){
      DrawRectangle(0, 0, screenWidth, screenHeight, PURPLE)
      DrawText("GAMEPLAY SCREEN", 20, 20, 40, MAROON)
      DrawText("PRESS ENTER or TAP to JUMP to ENDING SCREEN", 130, 220, 20, MAROON)
    }
  },
  
  ENDING: {
    update(){
      // Press enter to change to TITLE screen
      if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP)){
        currentScreen = 'TITLE'
      }
    },
    draw(){
      DrawRectangle(0, 0, screenWidth, screenHeight, BLUE)
      DrawText("ENDING SCREEN", 20, 20, 40, DARKBLUE)
      DrawText("PRESS ENTER or TAP to RETURN to TITLE SCREEN", 120, 220, 20, DARKBLUE)
    }
  },
}


async function InitGame () {
  InitWindow(screenWidth, screenHeight)
}

function UpdateGame(ts) {
  gamestates[currentScreen].update()
  BeginDrawing()
  ClearBackground(RAYWHITE)
  gamestates[currentScreen].draw()
  EndDrawing()
}