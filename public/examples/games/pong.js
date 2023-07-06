// PONG example
// this example uses classes as game states & objects, just for fun

const screenWidth = 800
const screenHeight = 450
const caliber = 20

let state

async function InitGame () {
  InitWindow(screenWidth, screenHeight)
  // state = new GameStateTitle()
  state = new GameStatePlay()

}

function UpdateGame (ts) {
  state.update()
  BeginDrawing()
  state.draw()
  EndDrawing()
}

// base-class for all game-states
class GameState {
  update() {}
  draw() {}
}

class GameStateTitle extends GameState {
  update() {
    if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP)) {
      state = new GameStatePlay()
    }
  }

  draw() {
    ClearBackground(BLACK)
    DrawText('PONG', 120, 20, 120, GRAY)
    DrawText('Player 1: Q, A', 120, 370, 20, GRAY)
    DrawText('Player 2: I, J', 120, 400, 20, GRAY)
    DrawText('Press ENTER to PLAY', 120, 430, 20, GRAY)
  }
}

class GameStatePlay extends GameState {
  constructor() {
    super()
    this.player1 = new Player(caliber)
    this.player2 = new Player(screenWidth - (caliber * 2))

    this.walls = {
      n: new Rectangle({x: caliber, y: caliber*1.5, width: screenWidth-(caliber*2), height: caliber }),
      s: new Rectangle({x: caliber, y: screenHeight-caliber, width: screenWidth-(caliber*2), height: caliber }),
      w: new Rectangle({x: 0, y: caliber*1.5, width: caliber, height: screenHeight }),
      e: new Rectangle({x: screenWidth-caliber, y: caliber*1.5, width: caliber, height: screenHeight })
    }

    this.ball = new Ball(this.walls)
    this.ball.serve()
  }

  update() {
    if (IsKeyDown(KEY_Q)) {
      this.player1.moveUp()
    } else if (IsKeyDown(KEY_A)) {
      this.player1.moveDown()
    }

    if (IsKeyDown(KEY_I)) {
      this.player2.moveUp()
    } else if (IsKeyDown(KEY_J)) {
      this.player2.moveDown()
    }

    // are collision broke?

    if (CheckCollisionRecs(this.walls.e, this.ball)) {
      this.player1.score++
      this.ball.serve()
    }
    if (CheckCollisionRecs(this.walls.w, this.ball)) {
      this.player2.score++
      this.ball.serve()
    }

    if (CheckCollisionRecs(this.walls.n, this.ball) || CheckCollisionRecs(this.walls.s, this.ball)) {
      this.ball.bounceWall()
    }

    if (CheckCollisionRecs(this.player1, this.ball) || CheckCollisionRecs(this.player2, this.ball)) {
      this.ball.bouncePaddle()
    }

    if (this.player1.score > 10 || this.player2.score > 10) {
      state = new GameStateEnd(this.player1.score > this.player2.score ? 1 : 2)
    }
  }

  draw() {
    ClearBackground(BLACK)
    this.player1.draw()
    this.player2.draw()
    this.ball.draw()
  }
}

class GameStateEnd extends GameState {
  constructor(winner) {
    super()
    this.winner = winner
  }

  update(){
    if (IsKeyPressed(KEY_ENTER) || IsGestureDetected(GESTURE_TAP)){
      state = new GameStatePlay()
    }
  }

  draw() {
    ClearBackground(BLACK)
    DrawText(`Winner is Player ${this.winner}`, 120 , 50, 60, GRAY)
    DrawText("Press ENTER to PLAY AGAIN", 120, 420, 20, GRAY)
    DrawText("Press ESCAPE to QUIT", 120, 450, 20, GRAY)
  }
}

// these are used to represent objects in GameStatePlay

class Thing {
  constructor(init) {
    this.rect = new Rectangle(init)
  }
  
  // like `extends`, but Rectangle is not initially defined
  get x(){ return this.rect.x }
  get y(){ return this.rect.y }
  get width(){ return this.rect.width }
  get height(){ return this.rect.height }
  set x(x){ return this.rect.x = x }
  set y(y){ return this.rect.y = y }
  set width(width){ return this.rect.width = width }
  set height(height){ return this.rect.height = height }
}

class Ball extends Thing {
  constructor(walls){
    super({
      x: screenWidth / 2,
      y: (screenHeight / 2) - caliber,
      width:caliber,
      height: caliber * 2
    })

    this.walls = walls
    this.velX = caliber/4
    this.velY = caliber/4
  }

  bounceWall(){
    console.log('bounce wall')
    this.velY = this.velY * -1
  }

  bouncePaddle(){
    console.log('bounce paddle')
    this.velX = this.velX * -1
  }

  serve(){
    this.x = (screenWidth/2) - (caliber/2)
    this.y = GetRandomValue(this.walls.w.y + caliber, this.walls.w.height - this.height)
  }

  draw() {
    this.x += this.velX
    this.y += this.velY
    DrawRectangle(this.x, this.y, this.width, this.height, WHITE)
  }
}

class Player extends Thing {
  constructor(x) {
    super({
      x,
      y: caliber * 2.5,
      width: caliber,
      height: caliber * 6
    })
    this.score = 0
    this.speed = 10
  }

  moveUp() {
    if (this.y > (caliber * 2.5)) {
      this.y -= this.speed
    }
  }

  moveDown() {
    if (this.y < (screenHeight - this.height - caliber)) {
      this.y += this.speed
    }
  }

  draw() {
    DrawRectangle(this.x, this.y, this.width, this.height, WHITE)
    DrawText(this.score.toString().padStart(2, '0'), this.x, 10, 20, GRAY)
  }
}
