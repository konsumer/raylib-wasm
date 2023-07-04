const G = 400
const PLAYER_JUMP_SPD = 350
const PLAYER_HOR_SPD = 200

const screenWidth = 800
const screenHeight = 450

const envItems = []
let camera
const player = {
  canJump: false,
  speed: 0
}
let playerRect

// these are statics (shared between calls) used in camera functions
let evenOutSpeed = 700
let eveningOut = false
let evenOutTarget
let bbox

const updateFunctions = {
  "Follow player center": (delta) => {
    camera.offset.x = screenWidth / 2
    camera.offset.y = screenHeight / 2
    camera.target.x = player.position.x
    camera.target.y = player.position.y
  },
  
  "Follow player center, but clamp to map edges": (delta) => {
    camera.target.x = player.position.x
    camera.target.y = player.position.y

    camera.offset.x = screenWidth / 2
    camera.offset.y = screenHeight / 2

    let minX = 1000
    let minY = 1000
    let maxX = -1000
    let maxY = -1000

    for (const ei of envItems) {
      minX = Math.min(ei.rect.x, minX)
      maxX = Math.max(ei.rect.x + ei.rect.width, maxX)
      minY = Math.min(ei.rect.y, minY)
      maxY = Math.max(ei.rect.y + ei.rect.height, maxY)
    }

    const v = new Vector2({ x:maxX, y:maxY })
    const max = GetWorldToScreen2D(v, camera)
    v.x = minX
    v.y = minY
    const min = GetWorldToScreen2D(v, camera)
    free(v)

    if (max.x < screenWidth) {
      camera.offset.x = screenWidth - (max.x - screenWidth/2)
    }
    if (max.y < screenHeight) {
      camera.offset.y = screenHeight - (max.y - screenHeight/2)
    }
    if (min.x > 0) {
      camera.offset.x = (screenWidth/2) - min.x
    }
    if (min.y > 0) {
      camera.offset.y = (screenHeight/2) - min.y
    }
    free(min)
    free(max)
  },
  
  "Follow player center; smoothed": (delta) => {
    const minSpeed = 30
    const minEffectLength = 10
    const fractionSpeed = 0.8

    camera.offset.x = screenWidth / 2
    camera.offset.y = screenHeight / 2

    const diff = Vector2Subtract(player.position, camera.target);
    const length = Vector2Length(diff)

    if (length > minEffectLength) {
      const speed = Math.max(fractionSpeed*length, minSpeed)
      const v = Vector2Add(camera.target, Vector2Scale(diff, speed*delta/length));
      camera.target.x = v.x
      camera.target.y = v.y
      free(v)
    }
    free(diff)
  },
  
  "Follow player center horizontally; update player center vertically after landing": (delta) => {
    camera.offset.x = screenWidth / 2
    camera.offset.y = screenHeight / 2
    camera.target.x = player.position.x

    if (eveningOut) {
      if (evenOutTarget > camera.target.y) {
        camera.target.y += evenOutSpeed*delta
        if (camera.target.y > evenOutTarget) {
          camera.target.y = evenOutTarget
          eveningOut = false
        }
      } else {
        camera.target.y -= evenOutSpeed*delta;
        if (camera.target.y < evenOutTarget) {
          camera.target.y = evenOutTarget
          eveningOut = false
        }
      }
    } else {
      if (player.canJump && (player.speed == 0) && (player.position.y != camera.target.y)) {
        eveningOut = true
        evenOutTarget = player.position.y
      }
    }
  },
  
  // TODO: this one seems broke
  "Player push camera on getting too close to screen edge": (delta) => {
    const v = new Vector2({ x:(1 - bbox.x) * 0.5 * screenWidth, y: (1 - bbox.y) * 0.5 * screenHeight})
    const bboxWorldMin = GetScreenToWorld2D(v, camera)
    v.x = (1 + bbox.x) * 0.5 * screenWidth
    v.y = (1 + bbox.y) * 0.5 * screenHeight
    const bboxWorldMax = GetScreenToWorld2D(v, camera)
    camera.offset.x = (1 - bbox.x) * 0.5 * screenWidth
    camera.offset.y = (1 - bbox.y) * 0.5 * screenHeight

    if (player.position.x < bboxWorldMin.x){
      camera.target.x = player.position.x
    }
    if (player.position.y < bboxWorldMin.y){
      camera.target.y = player.position.y
    }
    if (player.position.x > bboxWorldMax.x){
      camera.target.x = bboxWorldMin.x + (player.position.x - bboxWorldMax.x)
    }
    if (player.position.y > bboxWorldMax.y) {
      camera.target.y = bboxWorldMin.y + (player.position.y - bboxWorldMax.y)
    }
    
    free(v)
    free(bboxWorldMin)
    free(bboxWorldMax)
  }
}
let cameraOption = 0
const cameraUpdaters = Object.values(updateFunctions)
const cameraDescriptions = Object.keys(updateFunctions)

function UpdatePlayer(delta) {
  if (IsKeyDown(KEY_LEFT)) {
    player.position.x -= (PLAYER_HOR_SPD * delta)
  }
  if (IsKeyDown(KEY_RIGHT)) {
    player.position.x += (PLAYER_HOR_SPD * delta)
  }
  if (IsKeyDown(KEY_SPACE) && player.canJump) {
    player.speed = -PLAYER_JUMP_SPD
    player.canJump = false
  }

  let hitObstacle = false
  for (const ei of envItems) {
    if (
      ei.blocking &&
      ei.rect.x <= player.position.x &&
      ei.rect.x + ei.rect.width >= player.position.x &&
      ei.rect.y >= player.position.y &&
      ei.rect.y <= player.position.y + player.speed * delta
    ) {
      hitObstacle = true
      player.speed = 0
      player.position.y = ei.rect.y
    }
  }

  if (!hitObstacle) {
    player.position.y += player.speed * delta
    player.speed += G*delta
    player.canJump = false
  } else {
    player.canJump = true
  }
}


const InitGame = async () => {
  InitWindow(screenWidth, screenHeight)
  player.position = new Vector2({ x: 400, y: 280})
  camera = new Camera2D({ position: player.position, offset: new Vector2({ x: screenWidth/2, y: screenHeight/2 }), rotation: 0, zoom: 1 })

  envItems.push({ rect: new Rectangle({ x: 0, y:0, width:1000, height:400 }), blocking: false, color: LIGHTGRAY })
  envItems.push({ rect: new Rectangle({ x: 0, y:400, width:1000, height:200 }), blocking: true, color: GRAY })
  envItems.push({ rect: new Rectangle({ x: 300, y:200, width:400, height:10 }), blocking: true, color: GRAY })
  envItems.push({ rect: new Rectangle({ x: 250, y:300, width:100, height:10 }), blocking: true, color: GRAY })
  envItems.push({ rect: new Rectangle({ x: 650, y:300, width:100, height:10 }), blocking: true, color: GRAY })

  playerRect = new Rectangle({ x: player.position.x - 20, y: player.position.y - 40, width: 40, height: 40 })
  bbox = new Vector2({ x:2, y:2 })
}

const UpdateGame = (ts) => {
  const delta = GetFrameTime()
  UpdatePlayer(delta)
  camera.zoom += (GetMouseWheelMove() * 0.05)

  if (camera.zoom > 3) {
    camera.zoom = 3
  } else if (camera.zoom < 0.25) {
    camera.zoom = 0.25
  }

  if (IsKeyPressed(KEY_R)) {
    camera.zoom = 1
    player.position.x = 400
    player.position.y = 280
  }

  if (IsKeyPressed(KEY_C)){
    cameraOption = (cameraOption + 1) % cameraUpdaters.length
  }
  
  cameraUpdaters[cameraOption](delta)

  playerRect.x = player.position.x - 20
  playerRect.y = player.position.y - 40

  BeginDrawing()
  ClearBackground(LIGHTGRAY)

  BeginMode2D(camera)
  for (const env of envItems) {
    DrawRectangleRec(env.rect, env.color)
  }
  DrawRectangleRec(playerRect, RED)
  EndMode2D()

  DrawText("Controls:", 20, 20, 10, BLACK)
  DrawText("- Right/Left to move", 40, 40, 10, DARKGRAY)
  DrawText("- Space to jump", 40, 60, 10, DARKGRAY)
  DrawText("- Mouse Wheel to Zoom in-out, R to reset zoom", 40, 80, 10, DARKGRAY)
  DrawText("- C to change camera mode", 40, 100, 10, DARKGRAY)
  DrawText("Current camera mode:", 20, 120, 10, BLACK)
  DrawText(cameraDescriptions[cameraOption], 40, 140, 10, DARKGRAY)

  EndDrawing()
}
