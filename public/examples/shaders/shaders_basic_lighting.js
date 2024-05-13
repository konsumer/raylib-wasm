const GLSL_VERSION = 100

const screenWidth = 800
const screenHeight = 450

let camera
let shader
let model
let cube
let vec0
let lights

// eventually I might do this as a more generic uniform-handler, but this works for now

const LIGHT_DIRECTIONAL = 0
const LIGHT_POINT = 1

let lightsCount = 0

class Light {
  constructor(type, position, target, color, shader){
    this.enabledLoc = GetShaderLocation(shader, `lights[${lightsCount}].enabled`)
    this.typeLoc = GetShaderLocation(shader, `lights[${lightsCount}].type`)
    this.positionLoc = GetShaderLocation(shader, `lights[${lightsCount}].position`)
    this.targetLoc = GetShaderLocation(shader, `lights[${lightsCount}].target`)
    this.colorLoc = GetShaderLocation(shader, `lights[${lightsCount}].color`)
    this.shader = shader
    this.position = position
    this.target = target
    this.color = color
    this.type = type
    this.enabled = true

    lightsCount++
  }

  set enabled (val) {
    mod.setValue(this.shader.locs + this.enabledLoc, val ? 1 : 0, 'i32')
    SetShaderValue(this.shader, this.enabledLoc, this.shader.locs + this.enabledLoc, SHADER_UNIFORM_INT)
  }

  get enabled() {
    return !!mod.getValue(this.shader.locs + this.enabledLoc, 'i32')
  }

  set type (val) {
    mod.setValue(this.typeLoc, val, 'i32')
    SetShaderValue(this.shader, this.typeLoc, this.shader.locs + this.typeLoc, SHADER_UNIFORM_INT)
  }

  get type() {
    return mod.getValue(this.shader.locs + this.typeLoc, 'i32')
  }

  set position (val) {
    SetShaderValue(this.shader, this.positionLoc, val._address, SHADER_UNIFORM_VEC3)
  }

  get position() {
    return new Vector3({}, this.shader.locs + this.positionLoc)
  }

  set target (val) {
    SetShaderValue(this.shader, this.targetLoc, val._address, SHADER_UNIFORM_VEC3)
  }

  get target() {
    return new Vector3({}, this.shader.locs + this.targetLoc)
  }

  set color (val) {
    SetShaderValue(this.shader, this.colorLoc, val._address, SHADER_UNIFORM_VEC4)
  }

  get color() {
    return new Color({}, this.shader.locs + this.colorLoc)
  }
}



const InitGame = async () => {
  SetConfigFlags(FLAG_MSAA_4X_HINT)
  InitWindow(screenWidth, screenHeight, "raylib [shaders] example - basic lighting")
  camera = new Camera()
  vec0 = Vector3Zero()
  
  camera.position.x = 2
  camera.position.y = 4
  camera.position.z = 6

  camera.target.x = 0
  camera.target.y = 0.5
  camera.target.z = 0

  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0

  camera.fovy = 45
  camera.projection = CAMERA_PERSPECTIVE

  await addFile(`/examples/shaders/resources/shaders/glsl${GLSL_VERSION}/lighting.vs`, 'lighting.vs')
  await addFile(`/examples/shaders/resources/shaders/glsl${GLSL_VERSION}/lighting.fs`, 'lighting.fs')
  shader = await LoadShader('lighting.vs', 'lighting.fs')

  model = LoadModelFromMesh(GenMeshPlane(10.0, 10.0, 3, 3))
  cube = LoadModelFromMesh(GenMeshCube(2.0, 4.0, 2.0))

  lights = [
    new Light(LIGHT_POINT, new Vector3({x: -2, y: 1, z: -2 }), vec0, YELLOW, shader),
    new Light(LIGHT_POINT, new Vector3({x: 2, y: 1, z: 2 }), vec0, RED, shader),
    new Light(LIGHT_POINT, new Vector3({x: -2, y: 1, z: 2 }), vec0, GREEN, shader),
    new Light(LIGHT_POINT, new Vector3({x: 2, y: 1, z: -2 }), vec0, BLUE, shader)
  ]

  model.materials.shader = shader
  cube.materials.shader = shader

  // these don't seem to have correct settings
  console.log(lights)

  console.log(mod)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginMode3D(camera)
  DrawModel(model, vec0, 1, WHITE)
  DrawModel(cube, vec0, 1, WHITE)

  for (const light of lights) {
    if (light.enabled) {
      DrawSphereEx(light.position, 0.2, 8, 8, light.color)
    } else {
      DrawSphereWires(light.position, 0.2, 8, 8, ColorAlpha(light.color, 0.3))
    }
  }

  DrawGrid(10, 1)
  EndMode3D()
  DrawFPS(10, 10)
  DrawText("Use keys [Y][R][G][B] to toggle lights", 10, 40, 20, DARKGRAY)
  EndDrawing()
}
