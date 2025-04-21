const screenWidth = 800
const screenHeight = 450
const MAX_COLUMNS = 20
const DEG2RAD = 0.0174533

let camera
let cameraMode

const cubes = []

let cameraModeNames
let cameraProjectionNames

async function InitGame () {
  InitWindow(screenWidth, screenHeight)
  camera = new Camera3D()
  camera.position.x = 0
  camera.position.y = 2
  camera.position.z = 4

  camera.target.x = 0
  camera.target.y = 2
  camera.target.z = 0

  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0

  camera.fovy = 60
  camera.projection = CAMERA_PERSPECTIVE

  cameraMode = CAMERA_FIRST_PERSON

  let i = MAX_COLUMNS
  while(i--) {
    const height = GetRandomValue(1, 12)
    cubes.push({
      height,
      position: new Vector3({
        x: GetRandomValue(-15, 15),
        y: height / 2,
        z: GetRandomValue(-15, 15)
      }),
      color: new Color({
        r: GetRandomValue(20, 255),
        g: GetRandomValue(10, 55),
        b: 30,
        a: 255
      })
    })
  }

  cameraModeNames = {
    [CAMERA_FREE]: 'Free',
    [CAMERA_FIRST_PERSON]: 'First Person',
    [CAMERA_THIRD_PERSON]: 'Third Person',
    [CAMERA_ORBITAL]: 'Orbital'
  }

  cameraProjectionNames = {
    [CAMERA_PERSPECTIVE]: 'Perspective',
    [CAMERA_ORTHOGRAPHIC]: 'Orthographic'
  }

  console.log({ cameraModeNames, cameraProjectionNames })

  DisableCursor()
}

function UpdateGame(ts) {
  if (IsKeyPressed(KEY_ONE)){
    cameraMode = CAMERA_FREE
    camera.up.x = 0
    camera.up.y = 1
    camera.up.z = 0
  }

  if (IsKeyPressed(KEY_TWO)){
    cameraMode = CAMERA_FIRST_PERSON
    camera.up.x = 0
    camera.up.y = 1
    camera.up.z = 0
  }

  if (IsKeyPressed(KEY_THREE)){
    cameraMode = CAMERA_THIRD_PERSON
    camera.up.x = 0
    camera.up.y = 1
    camera.up.z = 0
  }

  if (IsKeyPressed(KEY_FOUR)){
    cameraMode = CAMERA_ORBITAL
    camera.up.x = 0
    camera.up.y = 1
    camera.up.z = 0
  }

  if (IsKeyPressed(KEY_P)){
    if (camera.projection === CAMERA_PERSPECTIVE){
      // Create isometric view
      cameraMode = CAMERA_THIRD_PERSON
      // Note: The target distance is related to the render distance in the orthographic projection
      camera.position.x = 0
      camera.position.y = 2
      camera.position.z = -100
      camera.target.x = 0
      camera.target.y = 2
      camera.target.z = 0
      camera.up.x = 0
      camera.up.y = 1
      camera.up.z = 0
      camera.projection = CAMERA_ORTHOGRAPHIC
      camera.fovy = 20 // near plane width in CAMERA_ORTHOGRAPHIC
      CameraYaw(camera, -135 * DEG2RAD, true)
      CameraPitch(camera, -45 * DEG2RAD, true, true, false)
    } else if (camera.projection === CAMERA_ORTHOGRAPHIC) {
      // Reset to default view
      cameraMode = CAMERA_THIRD_PERSON
      camera.position.x = 0
      camera.position.y = 2
      camera.position.z = 10
      camera.target.x = 0
      camera.target.y = 2
      camera.target.z = 0
      camera.up.x = 0
      camera.up.y = 1
      camera.up.z = 0
      camera.projection = CAMERA_PERSPECTIVE
      camera.fovy = 60
    }
  }

  // I reuse these, so I can allocate once and free them
  let v3 = new Vector3({ x: 0, y: 0, z: 0})
  let v2 = new Vector3({ x: 32, y: 32})

  UpdateCamera(camera, cameraMode)
  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginMode3D(camera)
  
  DrawPlane(v3, v2, LIGHTGRAY) // Draw ground
  v3.x = -16
  v3.y = 2.5
  v3.z = 0
  DrawCube(v3, 1, 5, 32, BLUE)     // Draw a blue wall
  v3.x = 16
  v3.y = 2.5
  v3.z = 0
  DrawCube(v3, 1, 5, 32, LIME)      // Draw a green wall
  v3.x = 0
  v3.y = 2.5
  v3.z = 16
  DrawCube(v3, 32, 5, 1, GOLD)      // Draw a yellow wall

  for (const { height, position, color } of cubes) {
    DrawCube(position, 2, height, 2, color)
    DrawCubeWires(position, 2, height, 2, MAROON)
  }

  // Draw player cube
  if (cameraMode == CAMERA_THIRD_PERSON) {
    DrawCube(camera.target, 0.5, 0.5, 0.5, PURPLE)
    DrawCubeWires(camera.target, 0.5, 0.5, 0.5, DARKPURPLE)
  }
    
  EndMode3D()

  // Draw info boxes
  DrawRectangle(5, 5, 330, 100, Fade(SKYBLUE, 0.5))
  DrawRectangleLines(5, 5, 330, 100, BLUE)

  DrawText("Camera controls:", 15, 15, 10, BLACK)
  DrawText("- Move keys: W, A, S, D, Space, Left-Ctrl", 15, 30, 10, BLACK)
  DrawText("- Look around: arrow keys or mouse", 15, 45, 10, BLACK)
  DrawText("- Camera mode keys: 1, 2, 3, 4", 15, 60, 10, BLACK)
  DrawText("- Zoom keys: num-plus, num-minus or mouse scroll", 15, 75, 10, BLACK)
  DrawText("- Camera projection key: P", 15, 90, 10, BLACK)

  DrawRectangle(600, 5, 195, 100, Fade(SKYBLUE, 0.5))
  DrawRectangleLines(600, 5, 195, 100, BLUE)

  DrawText("Camera status:", 610, 15, 10, BLACK);
  DrawText("- Mode: " + (cameraModeNames[cameraMode] || 'Custom'), 610, 30, 10, BLACK)
  DrawText("- Projection: " + (cameraProjectionNames[camera.projection] || 'Custom'), 610, 45, 10, BLACK)
  DrawText(`- Position: (${camera.position.x.toFixed(3)}, ${camera.position.y.toFixed(3)}, ${camera.position.z.toFixed(3)})`, 610, 60, 10, BLACK)
  DrawText(`- Target: (${camera.target.x.toFixed(3)}, ${camera.target.y.toFixed(3)}, ${camera.target.z.toFixed(3)})`, 610, 75, 10, BLACK)
  DrawText(`- Up: (${camera.up.x.toFixed(3)}, ${camera.up.y.toFixed(3)}, ${camera.up.z.toFixed(3)})`, 610, 90, 10, BLACK)

  EndDrawing()
  
  free(v3)
  free(v2)
}