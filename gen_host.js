// this will generate the main chunk of the host
// it will be hand-edited after

import { readFile, writeFile } from 'fs/promises'

let { defines, structs, aliases, enums, callbacks, functions } = await fetch('https://raw.githubusercontent.com/raysan5/raylib/master/parser/output/raylib_api.json').then(r => r.json())

// these are args that represent files that should be pre-loaded first
const fileFuncArgs = {
  // I am not pre-loading for these, so you will have to raylib.addFile first before using these functions
  // FileExists: ['fileName'],
  // GetFileLength: ['fileName'],
  // GetFileModTime: ['fileName'],

  LoadFileData: ['fileName'],
  LoadFileText: ['fileName'],
  LoadFont: ['fileName'],
  LoadFontEx: ['fileName'],
  LoadImage: ['fileName'],
  LoadImageAnim: ['fileName'],
  LoadImageRaw: ['fileName'],
  LoadMaterials: ['fileName'],
  LoadModel: ['fileName'],
  LoadModelAnimations: ['fileName'],
  LoadMusicStream: ['fileName'],
  LoadSound: ['fileName'],
  LoadTexture: ['fileName'],
  LoadWave: ['fileName']
}

// currently not used, but these are functions that output a file to fake FS
// you can raylib.mod.FS.readFile them or maybe we will wrap them later
const fileFuncRet = {
  ExportDataAsCode: ['fileName'],
  ExportFontAsCode: ['fileName'],
  ExportImage: ['fileName'],
  ExportImageAsCode: ['fileName'],
  ExportMesh: ['fileName'],
  ExportWave: ['fileName'],
  ExportWaveAsCode: ['fileName'],
  SaveFileData: ['fileName'],
  SaveFileText: ['fileName'],
  TakeScreenshot: ['fileName']
}

// add type-aliases & a keyed list for lookup
const mappedStructs = structs.reduce((a, c) => ({ ...a, [c.name]: c }), {})
for (const { type, name, description } of aliases) {
  mappedStructs[name] = {
    ...mappedStructs[type],
    description,
    name
  }
}
structs = Object.values(mappedStructs)

// strip desktop-only stuff
functions = functions.filter(f => !f.description.includes('only PLATFORM_DESKTOP'))

// generate a default-value for a type
function defaultValue (type) {
  // array-types
  const a = type.match(/([a-zA-Z 0-9]+) *\[([0-9]+)\]/)
  if (a) {
    const v = defaultValue(a[1])
    return '[' + [...(new Array(parseInt(a[2])))].map(() => v).join(', ') + ']'
  }
  // structs
  if (type.match(/^[A-Z]/)) {
    return `new ${type.replace(/\*/g, '').replace(/ /g, '')}()`
  }

  if (type === 'string' || type === 'char*' || type === 'const char*') {
    return "''"
  }

  return 0
}

// emscripten type-converters are a bit incomplete. This makes values easier to use with c-types
// TODO: check unsigned is working right
const irTypes = ['i8', 'i16', 'i32', 'i64', 'float', 'double', '*']
const mapType = type => {
  if (type.includes('*')) {
    return '*'
  }

  if (type === 'int') {
    return 'i32'
  }

  if (type === 'bool') {
    return 'i1'
  }

  if (!irTypes.includes(type)) {
    console.log(`mapType: defaulting to pointer: ${type}`)
    return '*'
  }
  return type
}
const valGetter = (name, type) => {
  if (type === 'u8' || type === 'unsigned char') {
    return `mod.HEAPU8[${name}]`
  }
  if (type === 'u32' || type === 'unsigned int') {
    return `mod.HEAPU32[${name}]`
  }
  if (type === 'string') {
    return `mod.UTF8ToString(${name})`
  }
  return `mod.getValue(${name}, '${mapType(type)}')`
}
const valSetter = (name, valueName, type) => {
  if (type === 'u8' || type === 'unsigned char') {
    return `mod.HEAPU8[${name}] = ${valueName}`
  }
  if (type === 'u32' || type === 'unsigned int') {
    return `mod.HEAPU32[${name}] = ${valueName}`
  }
  if (type === 'string') {
    return `mod.stringToUTF8(${name}, ${valueName})`
  }
  return `mod.setValue(${name}, ${valueName}, '${mapType(type)}')`
}

// get the byte-size of a type
function getSize (type) {
  // pointers are 32bit
  if (type.includes('*')) {
    return 4
  }

  // arrays are size * typeSize
  if (type.includes('[')) {
    const t = type.split('[')
    return getSize(t[0]) * t[1].split(']')[0]
  }

  // structs are size of all fields addded
  if (mappedStructs[type]) {
    return mappedStructs[type].fields.reduce((a, c) => a + getSize(c.type), 0)
  }

  // the rest (atoms) have a size
  switch (type) {
    case 'bool':
    case 'char':
    case 'unsigned char':
      return 1
    case 'int':
    case 'unsigned int':
    case 'float':
      return 4
    default:
      console.log(`SIZE? ${type}`)
      return 0
  }
}

// indent a string
const indentString = (str, count = 2, indent = ' ') => str.replace(/^/gm, indent.repeat(count))

// create all the wasm-memory getters/setters for a struct
function outputGetters (struct) {
  let offsetSize = 0
  return struct.fields.map(field => {
    const size = getSize(field.type)

    const out = `
    get ${field.name} () {
      return ${valGetter(`this._address + ${offsetSize}`, field.type)}
    }
    set ${field.name} (${field.name}) {
      ${valSetter(`this._address + ${offsetSize}`, field.name, field.type)}
    }
`
    offsetSize += size
    return out
  }).join('\n  ')
}

// for functions, map input/output type to JS-ish param (for cwrap/ccall auto-conversion)
function mapTypeToJs (type) {
  if (type === 'const char *') {
    return "'string'"
  }
  if (type.includes('*')) {
    return "'pointer'"
  }
  switch (type) {
    case 'bool':
      return "'boolean'"
    case 'int':
    case 'float':
    case 'double':
    case 'char':
    case 'long':
    case 'unsigned int':
      return "'number'"
    default:
      return "'pointer'"
  }
}

let code = `
const wasmBinary = new Uint8Array([${(await readFile('build/raylib_wasm.wasm')).join(',')}])

const importLocation = ''

${(await readFile('build/raylib_wasm.js', 'utf8')).replace('export default Module;', '').replace(/import\.meta\.url/g, 'importLocation')}

// run this function before calling anything
function raylib_run(canvas, userInit, userUpdate) {
  const raylib = {}

`
for (const s of structs) {
  const size = s.fields.reduce((a, c) => a + getSize(c.type), 0)
  code += `  // ${s.description}
  raylib.${s.name} = class ${s.name} {
    constructor(init = {}, _address) {
      this._size = ${size}
      this._address = _address || mod._malloc(this._size)
      ${s.fields.map(f => `this.${f.name} = init.${f.name} || ${defaultValue(f.type)}`).join('\n      ')}
    }
    ${outputGetters(s)}
  }\n\n`
}

for (const e of enums) {
  code += `  // ENUM ${e.name}\n  // ${e.description}`
  for (const v of e.values) {
    code += `\n  raylib.${v.name} = ${v.value} // ${v.description}`
  }
  code += '\n\n'
}

code += `
  const mod = Module({canvas, wasmBinary})
  raylib.module = mod
`

for (const c of defines.filter(c => c.type === 'COLOR')) {
  code += `\n  raylib.${c.name} = ${c.value.replace(/CLITERAL\(Color\){ ([0-9]+), ([0-9]+), ([0-9]+), ([0-9]+) }/, 'new raylib.Color({r: $1, g: $2, b: $3, a: $4})')} // ${c.description}`
}

code += '\n\n'

for (const { name, description, returnType, params = [] } of functions) {
  const returnsStruct = mappedStructs[returnType.replace('*', '').replace(' ', '')]
  const wasmParams = params.map(p => p.name)
  const callParams = [...wasmParams]
  const callParamTypes = params.map(p => mapTypeToJs(p.type))
  for (const i in callParams) {
    if (callParamTypes[i] === "'pointer'") {
      callParams[i] = `${callParams[i]}._address`
    }
  }
  code += `  // ${description}: ${name}(${params.map(p => p.type).join(', ')}) => ${returnType}\n  `
  if (returnsStruct) {
    callParams.unshift('_ret._address')
    callParamTypes.unshift("'pointer'")
    code += `const _${name} = mod.cwrap('${name}', 'void', [${callParamTypes.join(', ')}])\n  `
    if (fileFuncArgs[name]) {
      wasmParams.push('skipLoad')
      code += `raylib.${name} = async (${wasmParams.join(', ')}) => {\n  `
      code += fileFuncArgs[name].map(a => `  !skipLoad && await raylib.addFile(${a})`).join('\n  ') + '\n  '
    } else {
      code += `raylib.${name} = (${wasmParams.join(', ')}) => {\n  `
    }

    code += `  const _ret = new raylib.${returnsStruct.name}()
    _${name}(${callParams.join(', ')})
    return _ret
  }

`
  } else {
    code += `const _${name} = mod.cwrap('${name}', 'void', [${callParamTypes.join(', ')}])\n  `

    if (fileFuncArgs[name]) {
      code += `raylib.${name} = async (${wasmParams.join(', ')}) => {\n  `
      code += fileFuncArgs[name].map(a => `  await raylib.addFile(${a})`).join('\n  ') + '\n  '
      code += `return _${name}(${callParams.join(', ')})\n  }\n\n`
    } else {
      code += `raylib.${name} = (${wasmParams.join(', ')}) => _${name}(${callParams.join(', ')})\n\n`
    }
  }
}

code += `
  // insert remote file in WASM filesystem
  raylib.addFile = async (filename, target) => {
    if (!target) {
      target = filename
    }
    const p = target.split('/').slice(0,-1)
    for (const i in p) {
      mod.FS.mkdir(p.slice(0, i + 1).join('/'))
    }
    mod.FS.writeFile(target, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // more convenient free() for structs
  raylib.free = ptr => ptr._address ? mod._free(ptr._address) : mod._free(ptr)

  // we use raylib to namespace operations to a single wasm runtime instance
  // this is sort of like importing all the stuff from raylib object, if you only have 1 on page
  raylib.globalize = () => {
    for (const k of Object.keys(raylib)) {
      window[k] = raylib[k]
    }
  }

  // process user-functions, make raylib look like it's global
  const updateLoop = (timeStamp) => {
    userUpdate(timeStamp, raylib)
    requestAnimationFrame(updateLoop)
  }

  if (userInit) {
    userInit(raylib).then(() => {
      if (userUpdate) {
        updateLoop()
      }
    })
  } else {
    if (userUpdate) {
      updateLoop()
    }
  }

  return raylib
}

class RaylibComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.canvas = document.createElement('canvas')
    this.shadow.appendChild(this.canvas)
  }
  connectedCallback() {
    console.log('code', this.innerHTML)
  }
}

window.customElements.define('raylib-game', RaylibComponent)

`

/*
 connectedCallback() {
    const userCode = this.innerHTML
    const f = new Function(['runGame', 'canvas'], userCode + '\\n' + \`
if (typeof InitGame === 'undefined') {
  console.error('Make sure to add InitGame() to your raylib-game.')
  return
}
if (typeof UpdateGame === 'undefined') {
  console.error('Make sure to add UpdateGame() to your raylib-game.')
  return
}
let Vector2,Vector3,Vector4,Matrix,Color,Rectangle,Image,Texture,RenderTexture,NPatchInfo,GlyphInfo,Font,Camera3D,Camera2D,Mesh,Shader,MaterialMap,Material,Transform,BoneInfo,Model,ModelAnimation,Ray,RayCollision,BoundingBox,Wave,AudioStream,Sound,Music,VrDeviceInfo,VrStereoConfig,FilePathList,Quaternion,Texture2D,TextureCubemap,RenderTexture2D,Camera,FLAG_VSYNC_HINT,FLAG_FULLSCREEN_MODE,FLAG_WINDOW_RESIZABLE,FLAG_WINDOW_UNDECORATED,FLAG_WINDOW_HIDDEN,FLAG_WINDOW_MINIMIZED,FLAG_WINDOW_MAXIMIZED,FLAG_WINDOW_UNFOCUSED,FLAG_WINDOW_TOPMOST,FLAG_WINDOW_ALWAYS_RUN,FLAG_WINDOW_TRANSPARENT,FLAG_WINDOW_HIGHDPI,FLAG_WINDOW_MOUSE_PASSTHROUGH,FLAG_MSAA_4X_HINT,FLAG_INTERLACED_HINT,LOG_ALL,LOG_TRACE,LOG_DEBUG,LOG_INFO,LOG_WARNING,LOG_ERROR,LOG_FATAL,LOG_NONE,KEY_NULL,KEY_APOSTROPHE,KEY_COMMA,KEY_MINUS,KEY_PERIOD,KEY_SLASH,KEY_ZERO,KEY_ONE,KEY_TWO,KEY_THREE,KEY_FOUR,KEY_FIVE,KEY_SIX,KEY_SEVEN,KEY_EIGHT,KEY_NINE,KEY_SEMICOLON,KEY_EQUAL,KEY_A,KEY_B,KEY_C,KEY_D,KEY_E,KEY_F,KEY_G,KEY_H,KEY_I,KEY_J,KEY_K,KEY_L,KEY_M,KEY_N,KEY_O,KEY_P,KEY_Q,KEY_R,KEY_S,KEY_T,KEY_U,KEY_V,KEY_W,KEY_X,KEY_Y,KEY_Z,KEY_LEFT_BRACKET,KEY_BACKSLASH,KEY_RIGHT_BRACKET,KEY_GRAVE,KEY_SPACE,KEY_ESCAPE,KEY_ENTER,KEY_TAB,KEY_BACKSPACE,KEY_INSERT,KEY_DELETE,KEY_RIGHT,KEY_LEFT,KEY_DOWN,KEY_UP,KEY_PAGE_UP,KEY_PAGE_DOWN,KEY_HOME,KEY_END,KEY_CAPS_LOCK,KEY_SCROLL_LOCK,KEY_NUM_LOCK,KEY_PRINT_SCREEN,KEY_PAUSE,KEY_F1,KEY_F2,KEY_F3,KEY_F4,KEY_F5,KEY_F6,KEY_F7,KEY_F8,KEY_F9,KEY_F10,KEY_F11,KEY_F12,KEY_LEFT_SHIFT,KEY_LEFT_CONTROL,KEY_LEFT_ALT,KEY_LEFT_SUPER,KEY_RIGHT_SHIFT,KEY_RIGHT_CONTROL,KEY_RIGHT_ALT,KEY_RIGHT_SUPER,KEY_KB_MENU,KEY_KP_0,KEY_KP_1,KEY_KP_2,KEY_KP_3,KEY_KP_4,KEY_KP_5,KEY_KP_6,KEY_KP_7,KEY_KP_8,KEY_KP_9,KEY_KP_DECIMAL,KEY_KP_DIVIDE,KEY_KP_MULTIPLY,KEY_KP_SUBTRACT,KEY_KP_ADD,KEY_KP_ENTER,KEY_KP_EQUAL,KEY_BACK,KEY_MENU,KEY_VOLUME_UP,KEY_VOLUME_DOWN,MOUSE_BUTTON_LEFT,MOUSE_BUTTON_RIGHT,MOUSE_BUTTON_MIDDLE,MOUSE_BUTTON_SIDE,MOUSE_BUTTON_EXTRA,MOUSE_BUTTON_FORWARD,MOUSE_BUTTON_BACK,MOUSE_CURSOR_DEFAULT,MOUSE_CURSOR_ARROW,MOUSE_CURSOR_IBEAM,MOUSE_CURSOR_CROSSHAIR,MOUSE_CURSOR_POINTING_HAND,MOUSE_CURSOR_RESIZE_EW,MOUSE_CURSOR_RESIZE_NS,MOUSE_CURSOR_RESIZE_NWSE,MOUSE_CURSOR_RESIZE_NESW,MOUSE_CURSOR_RESIZE_ALL,MOUSE_CURSOR_NOT_ALLOWED,GAMEPAD_BUTTON_UNKNOWN,GAMEPAD_BUTTON_LEFT_FACE_UP,GAMEPAD_BUTTON_LEFT_FACE_RIGHT,GAMEPAD_BUTTON_LEFT_FACE_DOWN,GAMEPAD_BUTTON_LEFT_FACE_LEFT,GAMEPAD_BUTTON_RIGHT_FACE_UP,GAMEPAD_BUTTON_RIGHT_FACE_RIGHT,GAMEPAD_BUTTON_RIGHT_FACE_DOWN,GAMEPAD_BUTTON_RIGHT_FACE_LEFT,GAMEPAD_BUTTON_LEFT_TRIGGER_1,GAMEPAD_BUTTON_LEFT_TRIGGER_2,GAMEPAD_BUTTON_RIGHT_TRIGGER_1,GAMEPAD_BUTTON_RIGHT_TRIGGER_2,GAMEPAD_BUTTON_MIDDLE_LEFT,GAMEPAD_BUTTON_MIDDLE,GAMEPAD_BUTTON_MIDDLE_RIGHT,GAMEPAD_BUTTON_LEFT_THUMB,GAMEPAD_BUTTON_RIGHT_THUMB,GAMEPAD_AXIS_LEFT_X,GAMEPAD_AXIS_LEFT_Y,GAMEPAD_AXIS_RIGHT_X,GAMEPAD_AXIS_RIGHT_Y,GAMEPAD_AXIS_LEFT_TRIGGER,GAMEPAD_AXIS_RIGHT_TRIGGER,MATERIAL_MAP_ALBEDO,MATERIAL_MAP_METALNESS,MATERIAL_MAP_NORMAL,MATERIAL_MAP_ROUGHNESS,MATERIAL_MAP_OCCLUSION,MATERIAL_MAP_EMISSION,MATERIAL_MAP_HEIGHT,MATERIAL_MAP_CUBEMAP,MATERIAL_MAP_IRRADIANCE,MATERIAL_MAP_PREFILTER,MATERIAL_MAP_BRDF,SHADER_LOC_VERTEX_POSITION,SHADER_LOC_VERTEX_TEXCOORD01,SHADER_LOC_VERTEX_TEXCOORD02,SHADER_LOC_VERTEX_NORMAL,SHADER_LOC_VERTEX_TANGENT,SHADER_LOC_VERTEX_COLOR,SHADER_LOC_MATRIX_MVP,SHADER_LOC_MATRIX_VIEW,SHADER_LOC_MATRIX_PROJECTION,SHADER_LOC_MATRIX_MODEL,SHADER_LOC_MATRIX_NORMAL,SHADER_LOC_VECTOR_VIEW,SHADER_LOC_COLOR_DIFFUSE,SHADER_LOC_COLOR_SPECULAR,SHADER_LOC_COLOR_AMBIENT,SHADER_LOC_MAP_ALBEDO,SHADER_LOC_MAP_METALNESS,SHADER_LOC_MAP_NORMAL,SHADER_LOC_MAP_ROUGHNESS,SHADER_LOC_MAP_OCCLUSION,SHADER_LOC_MAP_EMISSION,SHADER_LOC_MAP_HEIGHT,SHADER_LOC_MAP_CUBEMAP,SHADER_LOC_MAP_IRRADIANCE,SHADER_LOC_MAP_PREFILTER,SHADER_LOC_MAP_BRDF,SHADER_UNIFORM_FLOAT,SHADER_UNIFORM_VEC2,SHADER_UNIFORM_VEC3,SHADER_UNIFORM_VEC4,SHADER_UNIFORM_INT,SHADER_UNIFORM_IVEC2,SHADER_UNIFORM_IVEC3,SHADER_UNIFORM_IVEC4,SHADER_UNIFORM_SAMPLER2D,SHADER_ATTRIB_FLOAT,SHADER_ATTRIB_VEC2,SHADER_ATTRIB_VEC3,SHADER_ATTRIB_VEC4,PIXELFORMAT_UNCOMPRESSED_GRAYSCALE,PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA,PIXELFORMAT_UNCOMPRESSED_R5G6B5,PIXELFORMAT_UNCOMPRESSED_R8G8B8,PIXELFORMAT_UNCOMPRESSED_R5G5B5A1,PIXELFORMAT_UNCOMPRESSED_R4G4B4A4,PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,PIXELFORMAT_UNCOMPRESSED_R32,PIXELFORMAT_UNCOMPRESSED_R32G32B32,PIXELFORMAT_UNCOMPRESSED_R32G32B32A32,PIXELFORMAT_COMPRESSED_DXT1_RGB,PIXELFORMAT_COMPRESSED_DXT1_RGBA,PIXELFORMAT_COMPRESSED_DXT3_RGBA,PIXELFORMAT_COMPRESSED_DXT5_RGBA,PIXELFORMAT_COMPRESSED_ETC1_RGB,PIXELFORMAT_COMPRESSED_ETC2_RGB,PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA,PIXELFORMAT_COMPRESSED_PVRT_RGB,PIXELFORMAT_COMPRESSED_PVRT_RGBA,PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA,PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA,TEXTURE_FILTER_POINT,TEXTURE_FILTER_BILINEAR,TEXTURE_FILTER_TRILINEAR,TEXTURE_FILTER_ANISOTROPIC_4X,TEXTURE_FILTER_ANISOTROPIC_8X,TEXTURE_FILTER_ANISOTROPIC_16X,TEXTURE_WRAP_REPEAT,TEXTURE_WRAP_CLAMP,TEXTURE_WRAP_MIRROR_REPEAT,TEXTURE_WRAP_MIRROR_CLAMP,CUBEMAP_LAYOUT_AUTO_DETECT,CUBEMAP_LAYOUT_LINE_VERTICAL,CUBEMAP_LAYOUT_LINE_HORIZONTAL,CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR,CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE,CUBEMAP_LAYOUT_PANORAMA,FONT_DEFAULT,FONT_BITMAP,FONT_SDF,BLEND_ALPHA,BLEND_ADDITIVE,BLEND_MULTIPLIED,BLEND_ADD_COLORS,BLEND_SUBTRACT_COLORS,BLEND_ALPHA_PREMULTIPLY,BLEND_CUSTOM,BLEND_CUSTOM_SEPARATE,GESTURE_NONE,GESTURE_TAP,GESTURE_DOUBLETAP,GESTURE_HOLD,GESTURE_DRAG,GESTURE_SWIPE_RIGHT,GESTURE_SWIPE_LEFT,GESTURE_SWIPE_UP,GESTURE_SWIPE_DOWN,GESTURE_PINCH_IN,GESTURE_PINCH_OUT,CAMERA_CUSTOM,CAMERA_FREE,CAMERA_ORBITAL,CAMERA_FIRST_PERSON,CAMERA_THIRD_PERSON,CAMERA_PERSPECTIVE,CAMERA_ORTHOGRAPHIC,NPATCH_NINE_PATCH,NPATCH_THREE_PATCH_VERTICAL,NPATCH_THREE_PATCH_HORIZONTAL,module,LIGHTGRAY,GRAY,DARKGRAY,YELLOW,GOLD,ORANGE,PINK,RED,MAROON,GREEN,LIME,DARKGREEN,SKYBLUE,BLUE,DARKBLUE,PURPLE,VIOLET,DARKPURPLE,BEIGE,BROWN,DARKBROWN,WHITE,BLACK,BLANK,MAGENTA,RAYWHITE,InitWindow,WindowShouldClose,CloseWindow,IsWindowReady,IsWindowFullscreen,IsWindowResized,IsWindowState,ClearWindowState,SetWindowMonitor,SetWindowMinSize,SetWindowSize,GetWindowHandle,GetScreenWidth,GetScreenHeight,GetRenderWidth,GetRenderHeight,GetMonitorCount,GetCurrentMonitor,GetMonitorPosition,GetMonitorWidth,GetMonitorHeight,GetMonitorPhysicalWidth,GetMonitorPhysicalHeight,GetMonitorRefreshRate,GetWindowPosition,GetWindowScaleDPI,GetMonitorName,SetClipboardText,GetClipboardText,EnableEventWaiting,DisableEventWaiting,SwapScreenBuffer,PollInputEvents,WaitTime,ShowCursor,HideCursor,IsCursorHidden,EnableCursor,DisableCursor,IsCursorOnScreen,ClearBackground,BeginDrawing,EndDrawing,BeginMode2D,EndMode2D,BeginMode3D,EndMode3D,BeginTextureMode,EndTextureMode,BeginShaderMode,EndShaderMode,BeginBlendMode,EndBlendMode,BeginScissorMode,EndScissorMode,BeginVrStereoMode,EndVrStereoMode,LoadVrStereoConfig,UnloadVrStereoConfig,LoadShader,LoadShaderFromMemory,IsShaderReady,GetShaderLocation,GetShaderLocationAttrib,SetShaderValue,SetShaderValueV,SetShaderValueMatrix,SetShaderValueTexture,UnloadShader,GetMouseRay,GetCameraMatrix,GetCameraMatrix2D,GetWorldToScreen,GetScreenToWorld2D,GetWorldToScreenEx,GetWorldToScreen2D,SetTargetFPS,GetFPS,GetFrameTime,GetTime,GetRandomValue,SetRandomSeed,TakeScreenshot,SetConfigFlags,TraceLog,SetTraceLogLevel,MemAlloc,MemRealloc,MemFree,OpenURL,SetTraceLogCallback,SetLoadFileDataCallback,SetSaveFileDataCallback,SetLoadFileTextCallback,SetSaveFileTextCallback,LoadFileData,UnloadFileData,SaveFileData,ExportDataAsCode,LoadFileText,UnloadFileText,SaveFileText,FileExists,DirectoryExists,IsFileExtension,GetFileLength,GetFileExtension,GetFileName,GetFileNameWithoutExt,GetDirectoryPath,GetPrevDirectoryPath,GetWorkingDirectory,GetApplicationDirectory,ChangeDirectory,IsPathFile,LoadDirectoryFiles,LoadDirectoryFilesEx,UnloadDirectoryFiles,IsFileDropped,LoadDroppedFiles,UnloadDroppedFiles,GetFileModTime,CompressData,DecompressData,EncodeDataBase64,DecodeDataBase64,IsKeyPressed,IsKeyDown,IsKeyReleased,IsKeyUp,SetExitKey,GetKeyPressed,GetCharPressed,IsGamepadAvailable,GetGamepadName,IsGamepadButtonPressed,IsGamepadButtonDown,IsGamepadButtonReleased,IsGamepadButtonUp,GetGamepadButtonPressed,GetGamepadAxisCount,GetGamepadAxisMovement,SetGamepadMappings,IsMouseButtonPressed,IsMouseButtonDown,IsMouseButtonReleased,IsMouseButtonUp,GetMouseX,GetMouseY,GetMousePosition,GetMouseDelta,SetMousePosition,SetMouseOffset,SetMouseScale,GetMouseWheelMove,GetMouseWheelMoveV,SetMouseCursor,GetTouchX,GetTouchY,GetTouchPosition,GetTouchPointId,GetTouchPointCount,SetGesturesEnabled,IsGestureDetected,GetGestureDetected,GetGestureHoldDuration,GetGestureDragVector,GetGestureDragAngle,GetGesturePinchVector,GetGesturePinchAngle,UpdateCamera,UpdateCameraPro,SetShapesTexture,DrawPixel,DrawPixelV,DrawLine,DrawLineV,DrawLineEx,DrawLineBezier,DrawLineBezierQuad,DrawLineBezierCubic,DrawLineStrip,DrawCircle,DrawCircleSector,DrawCircleSectorLines,DrawCircleGradient,DrawCircleV,DrawCircleLines,DrawEllipse,DrawEllipseLines,DrawRing,DrawRingLines,DrawRectangle,DrawRectangleV,DrawRectangleRec,DrawRectanglePro,DrawRectangleGradientV,DrawRectangleGradientH,DrawRectangleGradientEx,DrawRectangleLines,DrawRectangleLinesEx,DrawRectangleRounded,DrawRectangleRoundedLines,DrawTriangle,DrawTriangleLines,DrawTriangleFan,DrawTriangleStrip,DrawPoly,DrawPolyLines,DrawPolyLinesEx,CheckCollisionRecs,CheckCollisionCircles,CheckCollisionCircleRec,CheckCollisionPointRec,CheckCollisionPointCircle,CheckCollisionPointTriangle,CheckCollisionPointPoly,CheckCollisionLines,CheckCollisionPointLine,GetCollisionRec,LoadImage,LoadImageRaw,LoadImageAnim,LoadImageFromMemory,LoadImageFromTexture,LoadImageFromScreen,IsImageReady,UnloadImage,ExportImage,ExportImageAsCode,GenImageColor,GenImageGradientLinear,GenImageGradientRadial,GenImageGradientSquare,GenImageChecked,GenImageWhiteNoise,GenImagePerlinNoise,GenImageCellular,GenImageText,ImageCopy,ImageFromImage,ImageText,ImageTextEx,ImageFormat,ImageToPOT,ImageCrop,ImageAlphaCrop,ImageAlphaClear,ImageAlphaMask,ImageAlphaPremultiply,ImageBlurGaussian,ImageResize,ImageResizeNN,ImageResizeCanvas,ImageMipmaps,ImageDither,ImageFlipVertical,ImageFlipHorizontal,ImageRotate,ImageRotateCW,ImageRotateCCW,ImageColorTint,ImageColorInvert,ImageColorGrayscale,ImageColorContrast,ImageColorBrightness,ImageColorReplace,LoadImageColors,LoadImagePalette,UnloadImageColors,UnloadImagePalette,GetImageAlphaBorder,GetImageColor,ImageClearBackground,ImageDrawPixel,ImageDrawPixelV,ImageDrawLine,ImageDrawLineV,ImageDrawCircle,ImageDrawCircleV,ImageDrawCircleLines,ImageDrawCircleLinesV,ImageDrawRectangle,ImageDrawRectangleV,ImageDrawRectangleRec,ImageDrawRectangleLines,ImageDraw,ImageDrawText,ImageDrawTextEx,LoadTexture,LoadTextureFromImage,LoadTextureCubemap,LoadRenderTexture,IsTextureReady,UnloadTexture,IsRenderTextureReady,UnloadRenderTexture,UpdateTexture,UpdateTextureRec,GenTextureMipmaps,SetTextureFilter,SetTextureWrap,DrawTexture,DrawTextureV,DrawTextureEx,DrawTextureRec,DrawTexturePro,DrawTextureNPatch,Fade,ColorToInt,ColorNormalize,ColorFromNormalized,ColorToHSV,ColorFromHSV,ColorTint,ColorBrightness,ColorContrast,ColorAlpha,ColorAlphaBlend,GetColor,GetPixelColor,SetPixelColor,GetPixelDataSize,GetFontDefault,LoadFont,LoadFontEx,LoadFontFromImage,LoadFontFromMemory,IsFontReady,LoadFontData,GenImageFontAtlas,UnloadFontData,UnloadFont,ExportFontAsCode,DrawFPS,DrawText,DrawTextEx,DrawTextPro,DrawTextCodepoint,DrawTextCodepoints,MeasureText,MeasureTextEx,GetGlyphIndex,GetGlyphInfo,GetGlyphAtlasRec,LoadUTF8,UnloadUTF8,LoadCodepoints,UnloadCodepoints,GetCodepointCount,GetCodepoint,GetCodepointNext,GetCodepointPrevious,CodepointToUTF8,TextCopy,TextIsEqual,TextLength,TextFormat,TextSubtext,TextReplace,TextInsert,TextJoin,TextSplit,TextAppend,TextFindIndex,TextToUpper,TextToLower,TextToPascal,TextToInteger,DrawLine3D,DrawPoint3D,DrawCircle3D,DrawTriangle3D,DrawTriangleStrip3D,DrawCube,DrawCubeV,DrawCubeWires,DrawCubeWiresV,DrawSphere,DrawSphereEx,DrawSphereWires,DrawCylinder,DrawCylinderEx,DrawCylinderWires,DrawCylinderWiresEx,DrawCapsule,DrawCapsuleWires,DrawPlane,DrawRay,DrawGrid,LoadModel,LoadModelFromMesh,IsModelReady,UnloadModel,GetModelBoundingBox,DrawModel,DrawModelEx,DrawModelWires,DrawModelWiresEx,DrawBoundingBox,DrawBillboard,DrawBillboardRec,DrawBillboardPro,UploadMesh,UpdateMeshBuffer,UnloadMesh,DrawMesh,DrawMeshInstanced,ExportMesh,GetMeshBoundingBox,GenMeshTangents,GenMeshPoly,GenMeshPlane,GenMeshCube,GenMeshSphere,GenMeshHemiSphere,GenMeshCylinder,GenMeshCone,GenMeshTorus,GenMeshKnot,GenMeshHeightmap,GenMeshCubicmap,LoadMaterials,LoadMaterialDefault,IsMaterialReady,UnloadMaterial,SetMaterialTexture,SetModelMeshMaterial,LoadModelAnimations,UpdateModelAnimation,UnloadModelAnimation,UnloadModelAnimations,IsModelAnimationValid,CheckCollisionSpheres,CheckCollisionBoxes,CheckCollisionBoxSphere,GetRayCollisionSphere,GetRayCollisionBox,GetRayCollisionMesh,GetRayCollisionTriangle,GetRayCollisionQuad,InitAudioDevice,CloseAudioDevice,IsAudioDeviceReady,SetMasterVolume,LoadWave,LoadWaveFromMemory,IsWaveReady,LoadSound,LoadSoundFromWave,IsSoundReady,UpdateSound,UnloadWave,UnloadSound,ExportWave,ExportWaveAsCode,PlaySound,StopSound,PauseSound,ResumeSound,IsSoundPlaying,SetSoundVolume,SetSoundPitch,SetSoundPan,WaveCopy,WaveCrop,WaveFormat,LoadWaveSamples,UnloadWaveSamples,LoadMusicStream,LoadMusicStreamFromMemory,IsMusicReady,UnloadMusicStream,PlayMusicStream,IsMusicStreamPlaying,UpdateMusicStream,StopMusicStream,PauseMusicStream,ResumeMusicStream,SeekMusicStream,SetMusicVolume,SetMusicPitch,SetMusicPan,GetMusicTimeLength,GetMusicTimePlayed,LoadAudioStream,IsAudioStreamReady,UnloadAudioStream,UpdateAudioStream,IsAudioStreamProcessed,PlayAudioStream,PauseAudioStream,ResumeAudioStream,IsAudioStreamPlaying,StopAudioStream,SetAudioStreamVolume,SetAudioStreamPitch,SetAudioStreamPan,SetAudioStreamBufferSizeDefault,SetAudioStreamCallback,AttachAudioStreamProcessor,DetachAudioStreamProcessor,AttachAudioMixedProcessor,DetachAudioMixedProcessor,addFile,free,globalize
runGame(canvas, async raylib => {
  for (const r of Object.keys(raylib)) {
    eval(r + '=raylib.' + r)
  }
  await InitGame()
}, UpdateGame)\`)
    f(raylib_run, this.canvas)
  }
  */

// regular web JS
await writeFile('site/raylib.js', code)

// ES6 web module
await writeFile('site/raylib.module.js', code.replace("const importLocation = ''", 'const importLocation = import.meta.url') + `
export raylib_run
export default raylib_run
export RaylibComponent
export Module
export wasmBinary
`)
