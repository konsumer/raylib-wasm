const screenWidth = 800
const screenHeight = 450

let currentScreen = 'TITLE'
const framesCounter = 0
const gamestates = {
  TITLE: {
    update () {
      if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP)) {
        currentScreen = 'GAMEPLAY'
      }
    },

    draw () {
      ClearBackground(BLACK)
      DrawText('PONG', 120, 20, 120, GRAY)
      DrawText('Based on Atari PONG', 120, 140, 60, GRAY)
      DrawText('Programmed with Raylib by Angel G. Cuartero, ported to raylib-wasm by David Konsumer', 120, 220, 20, GRAY)
      DrawText('Player 1: Q, A', 120, 390, 20, GRAY)
      DrawText('Player 2: I, J', 120, 420, 20, GRAY)
      DrawText('Press ENTER to PLAY', 120, 450, 20, GRAY)
      DrawText('Press ESCAPE to QUIT', 120, 480, 20, GRAY)
    }
  },

  GAMEPLAY: {
    update () {
    },
    draw () {
    }
  },

  ENDING: {
    update () {
    },
    draw () {
    }
  }
}

async function InitGame () {
  InitWindow(screenWidth, screenHeight)
}

function UpdateGame (ts) {
  gamestates[currentScreen].update()
  BeginDrawing()
  gamestates[currentScreen].draw()
  EndDrawing()
}

/*
#define CALIBER 12

// User-defined types.
typedef enum GameScreen { TITLE = 0, GAMEPLAY, ENDING } GameScreen;
typedef enum Direction { UP = 0, DOWN } Direction;

// Global variables. They are global indeed.
Rectangle screen, playableBorder, top, bottom, ball, leftRacket, rightRacket;
int rightScore = 0, leftScore = 0, scoreWidth, winner;

// Prototypes.
void InitializeElements(void);
void ServeBall(void);
void MoveBall(void);
void MoveRacket(Rectangle *pRacket, Direction pDir);

// Initialize window and primary game elements.
// --------------------------------------------
void InitializeElements(void)
{
    InitWindow(0, 0, "Pong");
    // Calculate size, position and inner limits of window.
    screen = (Rectangle){0, 0, GetScreenWidth()/2, GetScreenHeight()/2};
    playableBorder = (Rectangle){CALIBER, CALIBER, screen.width - (2*CALIBER) , screen.height - (2*CALIBER)};
    top = (Rectangle) {screen.x, screen.y, playableBorder.width, playableBorder.y};
    bottom = (Rectangle) {screen.x, playableBorder.height+CALIBER, screen.width, screen.y};
    SetWindowPosition(screen.width/2, screen.height/2);
    SetWindowSize(screen.width, screen.height);
    SetTargetFPS(60);

    // Initialize elements.
    ball = (Rectangle) {5*CALIBER, playableBorder.height, CALIBER, CALIBER};
    leftRacket = (Rectangle) {playableBorder.x + CALIBER, playableBorder.height/2, CALIBER, 5*CALIBER};
    rightRacket = (Rectangle) {playableBorder.width - CALIBER, playableBorder.height/2, CALIBER, 5*CALIBER};
    scoreWidth = MeasureText("00", 60);
}

// Manage ball movement.
// ---------------------
void MoveBall(void)
{
    static int xx = CALIBER/2;
    static int yy = CALIBER/2;

    // Check collision with rackets and ball has not surpassed rackets.
    if ((CheckCollisionRecs(ball, leftRacket) && ball.x < leftRacket.x + leftRacket.width) ||
        (CheckCollisionRecs(ball, rightRacket) && ball.x > rightRacket.x - rightRacket.width))
        xx = -xx;
    else
        if (CheckCollisionRecs(ball, top) || CheckCollisionRecs(ball, bottom))
            yy = -yy;
        else
        {
            // Score.
            if (ball.x < screen.x)
            {
                ++rightScore;
                ServeBall();
            }
            else if (ball.x > screen.width)
            {
                ++leftScore;
                ServeBall();
            }
        }

    // Move ball.
    ball.x += xx;
    ball.y += yy;
}

// Manage racket movement.
// -----------------------
void MoveRacket(Rectangle *pRacket, Direction pDir)
{
    int step = (pDir == UP)? -CALIBER/2: CALIBER/2;

    if ((CheckCollisionRecs(top, *pRacket) && pDir == UP) ||
        (CheckCollisionRecs(bottom, *pRacket) && pDir == DOWN))
            return;
    pRacket->y += step;
}

// Serve ball after scoring.
// -------------------------
void ServeBall(void)
{
    ball.x = playableBorder.width/2;
    ball.y = GetRandomValue(playableBorder.y + 10, playableBorder.height);
}

// Start game.
// -----------
int main(void)
{
    GameScreen currentScreen = TITLE;
    InitializeElements();

    // Main loop.
    while (!WindowShouldClose()) // Check ESC key.
    {
        // Updating.
        switch(currentScreen)
        {
            case TITLE:
            {
                if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP))
                    currentScreen = GAMEPLAY;
            } break;
            case GAMEPLAY:
            {
                MoveBall();

                // Check racket keys.
                if (IsKeyDown(KEY_Q))
                    MoveRacket(&leftRacket, UP);
                else if (IsKeyDown(KEY_A))
                    MoveRacket(&leftRacket, DOWN);

                if (IsKeyDown(KEY_I))
                    MoveRacket(&rightRacket, UP);
                else if (IsKeyDown(KEY_J))
                    MoveRacket(&rightRacket, DOWN);

                if ((leftScore >= 11) || (rightScore >= 11))
                {
                    if (abs(leftScore - rightScore) < 2)
                        break;
                    winner = (leftScore > rightScore)? 1 : 2;
                    rightScore = leftScore = 0; // Reset Score.
                    currentScreen = ENDING;
                }
            } break;
            case ENDING:
            {
                if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP))
                    currentScreen = GAMEPLAY;
            } break;
            default: break;
        }

        // Rendering.
        BeginDrawing();
        switch(currentScreen)
        {
            case TITLE:
            {
                ClearBackground(BLACK);
                DrawText("PONG", 120, 20, 120, GRAY);
                DrawText("Based on Atari PONG", 120, 140, 60, GRAY);
                DrawText("Programmed with Raylib by Angel G. Cuartero", 120, 220, 20, GRAY);
                DrawText("Player 1: Q, A", 120, 390, 20, GRAY);
                DrawText("Player 2: I, J", 120, 420, 20, GRAY);
                DrawText("Press ENTER to PLAY", 120, 450, 20, GRAY);
                DrawText("Press ESCAPE to QUIT", 120, 480, 20, GRAY);

            } break;
            case GAMEPLAY:
            {
                // Draw court.
                DrawRectangle(screen.x, screen.y, screen.width, screen.height, GRAY);
                DrawRectangle(screen.x, playableBorder.y, screen.width, playableBorder.height, BLACK);
                DrawRectangle((screen.width/2) - 5, playableBorder.y, CALIBER, playableBorder.height, GRAY);
                // Draw score.
                DrawText(FormatText("%02d", leftScore), (screen.width/2) - 50 - scoreWidth, 50, 60, GRAY);
                DrawText(FormatText("%02d", rightScore), (screen.width/2) + 50, 50, 60, GRAY);
                // Draw ball.
                DrawRectangle(ball.x, ball.y, ball.width, ball.height, WHITE);
                // Draw rackets.
                DrawRectangle(leftRacket.x, leftRacket.y, leftRacket.width, leftRacket.height, WHITE);
                DrawRectangle(rightRacket.x, rightRacket.y, rightRacket.width, rightRacket.height, WHITE);
            } break;
            case ENDING:
            {
                ClearBackground(BLACK);
                DrawText(FormatText("Winner is Player %d", winner), 120 , 50, 60, GRAY);
                DrawText("Press ENTER to PLAY AGAIN", 120, 420, 20, GRAY);
                DrawText("Press ESCAPE to QUIT", 120, 450, 20, GRAY);
            } break;
            default: break;
            }
        EndDrawing();
    }

    CloseWindow();
    return 0;
}
*/
