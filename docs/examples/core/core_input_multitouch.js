const InitGame = async () => {
  InitWindow(400, 250)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(BLACK)
  DrawText("Sorry, this demo is not ported, yet.", 15, 110, 20, RAYWHITE)
  EndDrawing()
}

/*
#include "raylib.h"

#define MAX_TOUCH_POINTS 10

//------------------------------------------------------------------------------------
// Program main entry point
//------------------------------------------------------------------------------------
int main(void)
{
    // Initialization
    //--------------------------------------------------------------------------------------
    const int screenWidth = 800;
    const int screenHeight = 450;

    InitWindow(screenWidth, screenHeight, "raylib [core] example - input multitouch");

    Vector2 touchPositions[MAX_TOUCH_POINTS] = { 0 };

    SetTargetFPS(60);               // Set our game to run at 60 frames-per-second
    //---------------------------------------------------------------------------------------

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
        // Update
        //----------------------------------------------------------------------------------
        // Get the touch point count ( how many fingers are touching the screen )
        int tCount = GetTouchPointCount();
        // Clamp touch points available ( set the maximum touch points allowed )
        if(tCount > MAX_TOUCH_POINTS) tCount = MAX_TOUCH_POINTS;
        // Get touch points positions
        for (int i = 0; i < tCount; ++i) touchPositions[i] = GetTouchPosition(i);
        //----------------------------------------------------------------------------------

        // Draw
        //----------------------------------------------------------------------------------
        BeginDrawing();

            ClearBackground(RAYWHITE);
            
            for (int i = 0; i < tCount; ++i)
            {
                // Make sure point is not (0, 0) as this means there is no touch for it
                if ((touchPositions[i].x > 0) && (touchPositions[i].y > 0))
                {
                    // Draw circle and touch index number
                    DrawCircleV(touchPositions[i], 34, ORANGE);
                    DrawText(TextFormat("%d", i), (int)touchPositions[i].x - 10, (int)touchPositions[i].y - 70, 40, BLACK);
                }
            }

            DrawText("touch the screen at multiple locations to get multiple balls", 10, 10, 20, DARKGRAY);

        EndDrawing();
        //----------------------------------------------------------------------------------
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}
*/
