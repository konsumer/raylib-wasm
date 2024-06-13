const GLSL_VERSION = 100

const screenWidth = 800
const screenHeight = 450

let camera
let shader
let model
let cube
let lights

// eventually I might do this as a more generic uniform-handler, but this works for now

const LIGHT_DIRECTIONAL = 0
const LIGHT_POINT = 1

const lightsCount = 0

class Light {
  constructor (type, position, target, color, shader) {
    this.position = new UniformVector3(shader, 'position', position._address)
    this.target = new UniformVector3(shader, 'target', target._address)

    const c = new Vector4({ x: color.r, y: color.g, z: color.b, w: color.a })
    this.color = new UniformColor(shader, 'color', c._address)

    this.type = new UniformInt(shader, 'type')
    this.type.value = type

    this.enabled = new UniformInt(shader, 'enabled')
    this.enabled.value = 1
  }
}

const InitGame = async () => {
  SetConfigFlags(FLAG_MSAA_4X_HINT)
  InitWindow(screenWidth, screenHeight, 'raylib [shaders] example - basic lighting')
  camera = new Camera()

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

  await addFile(`./examples/shaders/resources/shaders/glsl${GLSL_VERSION}/lighting.vs`, 'lighting.vs')
  await addFile(`./examples/shaders/resources/shaders/glsl${GLSL_VERSION}/lighting.fs`, 'lighting.fs')
  shader = await LoadShader('lighting.vs', 'lighting.fs')

  model = LoadModelFromMesh(GenMeshPlane(10.0, 10.0, 3, 3))
  cube = LoadModelFromMesh(GenMeshCube(2.0, 4.0, 2.0))

  lights = [
    new Light(LIGHT_POINT, new Vector3({ x: -2, y: 1, z: -2 }), Vector3Zero(), YELLOW, shader),
    new Light(LIGHT_POINT, new Vector3({ x: 2, y: 1, z: 2 }), Vector3Zero(), RED, shader),
    new Light(LIGHT_POINT, new Vector3({ x: -2, y: 1, z: 2 }), Vector3Zero(), GREEN, shader),
    new Light(LIGHT_POINT, new Vector3({ x: 2, y: 1, z: -2 }), Vector3Zero(), BLUE, shader)
  ]

  // I think this is issue: it's not connecting the lights to materials
  model.materials.shader._address = shader._address
  cube.materials.shader._address = shader._address

  console.log(lights)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  BeginMode3D(camera)
  DrawModel(model, Vector3Zero(), 1, WHITE)
  DrawModel(cube, Vector3Zero(), 1, WHITE)

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
  DrawText('Use keys [Y][R][G][B] to toggle lights', 10, 40, 20, DARKGRAY)
  EndDrawing()
}
