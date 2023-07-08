// PONG example
// Ideas from https://github.com/circonfl3x/raylib-pong/blob/main/raylibpong/pong.cc

const WIDTH = 640
const HEIGHT = 480

// game objects
let ply
let cpu
let b = { x: WIDTH/2, y: 120, bx: -5, by: -5, r: 10 }

const checkCollision = (x1,x2, y1,y2,w1,h1,r) => x1 <= (x2 + r) && y1 <= (y2 + r) && x2 <= (x1 + w1) && y2 <= (y1 + h1)

const InitGame = async () => {
  InitWindow(WIDTH, HEIGHT)
  ply = new Rectangle({ x: 20, y: 100, width: 20, height: 70 })
  cpu = new Rectangle({ x: WIDTH-35, y: 100, width: 20, height: 70 })
  
  // you can add things to objects that are not part of C struct, for js
  ply.score = 0
  cpu.score = 0
}

let f = 0
const UpdateGame = (ts) => {
  if(checkCollision(ply.x, b.x, ply.y, b.y, ply.width, ply.height, b.r) || checkCollision(cpu.x, b.x, cpu.y, b.y, cpu.width,cpu.height,b.r)) {
    b.bx = -1 * b.bx
  }

  // CPU player follows paddle, but misses sometimes
  if (f++ % 10 === 0) {
    cpu.y = b.y
  }

  b.x += b.bx
  b.y += b.by

  if(b.x < 5){
    cpu.score ++
    b.x = (WIDTH/2) - b.r
    b.y = 120
    b.bx = -5
  } else if(b.x > WIDTH - 5) {
    ply.score ++
    b.x = (WIDTH/2) - b.r
    b.y = 120
    b.bx = 5
  }
  
  if(b.y < 5) {
    b.by = -1 * b.by
  }else if(b.y > HEIGHT - 5) {
    b.by = -(b.by)
  }
    

  if(IsKeyDown(KEY_W) || IsKeyDown(KEY_UP)) {
    if(ply.y >= 5) {
      ply.y -= 5
    }
  }else if(IsKeyDown(KEY_S) || IsKeyDown(KEY_DOWN)) {
    if(ply.y <= (HEIGHT-ply.height)) {
      ply.y += 5
    }
  }

  BeginDrawing()
  ClearBackground(BLACK)
  DrawRectangle(0, 0, (WIDTH/2), HEIGHT, BLUE);
  DrawRectangle((WIDTH/2), 0, (WIDTH/2), HEIGHT, GREEN);
  DrawRectangleRec(ply, GREEN)
  DrawRectangleRec(cpu, BLUE)
  DrawText(ply.score.toString(), (WIDTH/2) - 200, 30, 48, GREEN)
  DrawText(cpu.score.toString(), (WIDTH/2) + 200, 30, 48, BLUE)
  DrawCircle(b.x, b.y, b.r, b.x < (WIDTH/2) ? GREEN : BLUE)
  EndDrawing()
}