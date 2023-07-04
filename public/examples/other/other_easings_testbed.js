const FONT_SIZE = 20
const D_STEP = 20
const D_STEP_FINE = 2
const D_MIN = 1
const D_MAX = 10000

let easingFuncs           // available easing-functions
let easingNames           // derived from easingFuncs for faster lookups
let easingVals            // derived from easingFuncs for faster lookups

let ballPosition 
let t = 0                 // Current time (in any unit measure, but same unit as duration)
let d = 300               // Total time it should take to complete (duration)
let paused = true
let boundedT = true       // If true, t will stop when d >= td, otherwise t will keep adding td to its value every loop

let easingX = 0           // Easing selected for x axis
let easingY = 0           // Easing selected for y axis

// simialr to %, but euclidian (wraps around, no negative)
function emod(n, m) {
  return ((n % m) + m) % m;
}

const InitGame = async () => {
  InitWindow(800, 450)
  
  easingFuncs = {
    None: (t, b, c, d) => b,
    'Linear None': EaseLinearNone,
    'Linear In': EaseLinearIn,
    'Linear Out': EaseLinearOut,
    'Linear In/Out': EaseLinearInOut,
    'Sine In': EaseSineIn,
    'Sine Out': EaseSineOut,
    'Sine In/Out': EaseSineInOut,
    'Circ In': EaseCircIn,
    'Circ Out': EaseCircOut,
    'Circ In/Out': EaseCircInOut,
    'Cubic In': EaseCubicIn,
    'Cubic Out': EaseCubicOut,
    'Cubic In/Out': EaseCubicInOut,
    'Quad In': EaseQuadIn,
    'Quad Out': EaseQuadOut,
    'Quad In/Out': EaseQuadInOut,
    'Expo In': EaseExpoIn,
    'Expo Out': EaseExpoOut,
    'Expo In/Out': EaseExpoInOut,
    'Back In': EaseBackIn,
    'Back Out': EaseBackOut,
    'Back In/Out': EaseBackInOut,
    'Bounce Out': EaseBounceOut,
    'Bounce In': EaseBounceIn,
    'Bounce In/Out': EaseBounceInOut,
    'Elastic In': EaseElasticIn,
    'Elastic Out': EaseElasticOut,
    'Elastic In/Out': EaseElasticInOut,
  }
  easingNames = Object.keys(easingFuncs)
  easingVals = Object.values(easingFuncs)

  ballPosition = new Vector2({ x: 100, y: 200 })
}

const UpdateGame = (ts) => {
  if (IsKeyPressed(KEY_T)){
    boundedT = !boundedT
  }

  if (IsKeyPressed(KEY_RIGHT)) {
    easingX = emod(easingX + 1, easingNames.length)
  } else if (IsKeyPressed(KEY_LEFT)) {
    easingX = emod(easingX - 1, easingNames.length)
  }

  if (IsKeyPressed(KEY_DOWN)) {
    easingY = emod(easingY + 1, easingNames.length)
  } else if (IsKeyPressed(KEY_UP)) {
    easingY = emod(easingY - 1, easingNames.length)
  }

  if (IsKeyPressed(KEY_W) && d < D_MAX - D_STEP) {
    d += D_STEP
  } else if (IsKeyPressed(KEY_Q) && d > D_MIN + D_STEP) {
    d -= D_STEP
  }

  if (IsKeyDown(KEY_S) && d < D_MAX - D_STEP_FINE) {
    d += D_STEP_FINE
  } else if (IsKeyDown(KEY_A) && d > D_MIN + D_STEP_FINE) {
    d -= D_STEP_FINE
  }

  if (IsKeyPressed(KEY_SPACE) || IsKeyPressed(KEY_T) ||
    IsKeyPressed(KEY_RIGHT) || IsKeyPressed(KEY_LEFT) ||
    IsKeyPressed(KEY_DOWN) || IsKeyPressed(KEY_UP) ||
    IsKeyPressed(KEY_W) || IsKeyPressed(KEY_Q) ||
    IsKeyDown(KEY_S)  || IsKeyDown(KEY_A) ||
    (IsKeyPressed(KEY_ENTER) && (boundedT === true) && (t >= d))) {
      t = 0
      ballPosition.x = 100
      ballPosition.y = 100
      paused = true
  }

  if (IsKeyPressed(KEY_ENTER)) {
    paused = !paused
  }

  if (!paused && ((boundedT && t < d) || !boundedT)) {
    ballPosition.x = easingVals[easingX](t, 100, 700 - 100, d)
    ballPosition.y = easingVals[easingY](t, 100, 400 - 100, d)
    t += 1
  }

  BeginDrawing();
  ClearBackground(RAYWHITE)
  DrawCircleV(ballPosition, 16, MAROON)
  DrawText(`Easing x: ${easingNames[easingX]}`, 10, FONT_SIZE*2, FONT_SIZE, LIGHTGRAY)
  DrawText(`Easing y: ${easingNames[easingY]}`, 10, FONT_SIZE*3, FONT_SIZE, LIGHTGRAY)
  DrawText(`t (${boundedT ? 'b' : 'u'}) = ${t.toFixed(2)} d = ${d.toFixed(2)}`, 10, FONT_SIZE*4, FONT_SIZE, LIGHTGRAY)
  DrawText("Use ENTER to play or pause movement, use SPACE to restart", 10, GetScreenHeight() - FONT_SIZE*2, FONT_SIZE, LIGHTGRAY)
  DrawText("Use D and W or A and S keys to change duration", 10, GetScreenHeight() - FONT_SIZE*3, FONT_SIZE, LIGHTGRAY)
  DrawText("Use LEFT or RIGHT keys to choose easing for the x axis", 10, GetScreenHeight() - FONT_SIZE*4, FONT_SIZE, LIGHTGRAY)
  DrawText("Use UP or DOWN keys to choose easing for the y axis", 10, GetScreenHeight() - FONT_SIZE*5, FONT_SIZE, LIGHTGRAY)
  EndDrawing()
}