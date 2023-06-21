// this is the wrapper of raylib that will set things up, and call the user's code

const onResize = () => {
  window.removeEventListener('resize', onResize)
  setTimeout(() => {
    window.addEventListener('resize', onResize)
  }, 1000)
  const { clientWidth, clientHeight } = document.body
  document.getElementById('canvas').className = clientWidth > clientHeight ? 'landscape' : 'portrait'
}
onResize()

const int8SignedToUnsigned = (int8) => Uint8Array.from(Int8Array.of(int8))[0]

// TODO:  this could be auto-generated or libraryized
class Color {
  constructor(r=0, g=0, b=0, a=0) {
    this.size = 4
    this.address = Module._malloc(this.size)
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  get r () {
    return Module.HEAPU8[this.address]
  }
  get g () {
    return Module.HEAPU8[this.address + 1]
  }
  get b () {
    return Module.HEAPU8[this.address + 2]
  }
  get a () {
    return Module.HEAPU8[this.address + 3]
  }
  
  set r (r) {
    Module.HEAPU8[this.address] = r
  }
  set g (g) {
    Module.HEAPU8[this.address + 1] = g
  }
  set b (b) {
    Module.HEAPU8[this.address + 2] = b
  }
  set a (a) {
    Module.HEAPU8[this.address + 3] = a
  }
}

class Texture {
  constructor(filename) {
    this.size = 20
    this.address = Module._malloc(this.size)
    window.loadFile(filename).then(() => {
      let ptr_filename = Module.allocateUTF8(filename)
      Module._LoadTexture(this.address, ptr_filename)
    })
  }

  get id () {
    return Module.getValue(this.address, '*')
  }

  get width () {
    return Module.getValue(this.address + 4, 'i32')
  }

  get height () {
    return Module.getValue(this.address + 8, 'i32')
  }

  get mipmaps () {
    return Module.getValue(this.address + 12, 'i32')
  }

  get format () {
    return Module.getValue(this.address + 16, 'i32')
  }
}

class Vector2 {
  constructor(x=0, y=0) {
    this.size = 8
    this.address = Module._malloc(this.size)
    this.x = x
    this.y = y
  }

  get x () {
    return Module.getValue(this.address, 'float')
  }

  get y () {
    return Module.getValue(this.address + 4, 'float')
  }

  set x (x) {
    Module.setValue(this.address, x, 'float')
  }

  set y (y) {
    Module.setValue(this.address + 4, y, 'float')
  }
}

window.loadFile = async filename => {
  FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
}

window.raylib = {
  // TODO: this could be auto-generated or libraryized
  ClearBackground(color) {
    Module._ClearBackground(color.address)
  },
  
  DrawRectangle(x, y, h, w, color) {
    Module._DrawRectangle(x, y, h, w, color.address)
  },
  
  InitWindow(w, h) {
    Module._InitWindow(w,h,"")
  },

  DrawText(text, x, y, size, color) {
    let ptr_text = Module.allocateUTF8(text)
    Module._DrawText(ptr_text, x, y, size, color.address)
    Module._free(ptr_text)
  },

  LoadTexture(filename) {
    return new Texture(filename)
  },

  GetMousePosition() {
    const ret = new Vector2()
    Module._GetMousePosition(ret.address)
    return ret
  },

  DrawTexture(texture, x, y, color) {
    Module._DrawTexture(texture.address, x, y, color.address)
  },

  FLAG_VSYNC_HINT         : 0x00000040,   // Set to try enabling V-Sync on GPU
  FLAG_FULLSCREEN_MODE    : 0x00000002,   // Set to run program in fullscreen
  FLAG_WINDOW_RESIZABLE   : 0x00000004,   // Set to allow resizable window
  FLAG_WINDOW_UNDECORATED : 0x00000008,   // Set to disable window decoration (frame and buttons)
  FLAG_WINDOW_HIDDEN      : 0x00000080,   // Set to hide window
  FLAG_WINDOW_MINIMIZED   : 0x00000200,   // Set to minimize window (iconify)
  FLAG_WINDOW_MAXIMIZED   : 0x00000400,   // Set to maximize window (expanded to monitor)
  FLAG_WINDOW_UNFOCUSED   : 0x00000800,   // Set to window non focused
  FLAG_WINDOW_TOPMOST     : 0x00001000,   // Set to window always on top
  FLAG_WINDOW_ALWAYS_RUN  : 0x00000100,   // Set to allow windows running while minimized
  FLAG_WINDOW_TRANSPARENT : 0x00000010,   // Set to allow transparent framebuffer
  FLAG_WINDOW_HIGHDPI     : 0x00002000,   // Set to support HighDPI
  FLAG_WINDOW_MOUSE_PASSTHROUGH : 0x00004000, // Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED
  FLAG_MSAA_4X_HINT       : 0x00000020,   // Set to try enabling MSAA 4X
  FLAG_INTERLACED_HINT    : 0x00010000,    // Set to try enabling interlaced video format (for V3D)

  // Trace log level
  // NOTE: Organized by priority level
  LOG_ALL : 0,        // Display all logs
  LOG_TRACE : 1,          // Trace logging, intended for internal use only
  LOG_DEBUG : 2,          // Debug logging, used for internal debugging, it should be disabled on release builds
  LOG_INFO : 3,           // Info logging, used for program execution info
  LOG_WARNING : 4,        // Warning logging, used on recoverable failures
  LOG_ERROR : 5,          // Error logging, used on unrecoverable failures
  LOG_FATAL : 6,          // Fatal logging, used to abort program: exit(EXIT_FAILURE)
  LOG_NONE : 7,            // Disable logging

  // Keyboard keys (US keyboard layout)
  // NOTE: Use GetKeyPressed() to allow redefining
  // required keys for alternative layouts
  KEY_NULL            : 0,        // Key: NULL, used for no key pressed
  // Alphanumeric keys
  KEY_APOSTROPHE      : 39,       // Key: '
  KEY_COMMA           : 44,       // Key: ,
  KEY_MINUS           : 45,       // Key: -
  KEY_PERIOD          : 46,       // Key: .
  KEY_SLASH           : 47,       // Key: /
  KEY_ZERO            : 48,       // Key: 0
  KEY_ONE             : 49,       // Key: 1
  KEY_TWO             : 50,       // Key: 2
  KEY_THREE           : 51,       // Key: 3
  KEY_FOUR            : 52,       // Key: 4
  KEY_FIVE            : 53,       // Key: 5
  KEY_SIX             : 54,       // Key: 6
  KEY_SEVEN           : 55,       // Key: 7
  KEY_EIGHT           : 56,       // Key: 8
  KEY_NINE            : 57,       // Key: 9
  KEY_SEMICOLON       : 59,       // Key: ;
  KEY_EQUAL           : 61,       // Key: :
  KEY_A               : 65,       // Key: A | a
  KEY_B               : 66,       // Key: B | b
  KEY_C               : 67,       // Key: C | c
  KEY_D               : 68,       // Key: D | d
  KEY_E               : 69,       // Key: E | e
  KEY_F               : 70,       // Key: F | f
  KEY_G               : 71,       // Key: G | g
  KEY_H               : 72,       // Key: H | h
  KEY_I               : 73,       // Key: I | i
  KEY_J               : 74,       // Key: J | j
  KEY_K               : 75,       // Key: K | k
  KEY_L               : 76,       // Key: L | l
  KEY_M               : 77,       // Key: M | m
  KEY_N               : 78,       // Key: N | n
  KEY_O               : 79,       // Key: O | o
  KEY_P               : 80,       // Key: P | p
  KEY_Q               : 81,       // Key: Q | q
  KEY_R               : 82,       // Key: R | r
  KEY_S               : 83,       // Key: S | s
  KEY_T               : 84,       // Key: T | t
  KEY_U               : 85,       // Key: U | u
  KEY_V               : 86,       // Key: V | v
  KEY_W               : 87,       // Key: W | w
  KEY_X               : 88,       // Key: X | x
  KEY_Y               : 89,       // Key: Y | y
  KEY_Z               : 90,       // Key: Z | z
  KEY_LEFT_BRACKET    : 91,       // Key: [
  KEY_BACKSLASH       : 92,       // Key: '\'
  KEY_RIGHT_BRACKET   : 93,       // Key: ]
  KEY_GRAVE           : 96,       // Key: `
  // Function keys
  KEY_SPACE           : 32,       // Key: Space
  KEY_ESCAPE          : 256,      // Key: Esc
  KEY_ENTER           : 257,      // Key: Enter
  KEY_TAB             : 258,      // Key: Tab
  KEY_BACKSPACE       : 259,      // Key: Backspace
  KEY_INSERT          : 260,      // Key: Ins
  KEY_DELETE          : 261,      // Key: Del
  KEY_RIGHT           : 262,      // Key: Cursor right
  KEY_LEFT            : 263,      // Key: Cursor left
  KEY_DOWN            : 264,      // Key: Cursor down
  KEY_UP              : 265,      // Key: Cursor up
  KEY_PAGE_UP         : 266,      // Key: Page up
  KEY_PAGE_DOWN       : 267,      // Key: Page down
  KEY_HOME            : 268,      // Key: Home
  KEY_END             : 269,      // Key: End
  KEY_CAPS_LOCK       : 280,      // Key: Caps lock
  KEY_SCROLL_LOCK     : 281,      // Key: Scroll down
  KEY_NUM_LOCK        : 282,      // Key: Num lock
  KEY_PRINT_SCREEN    : 283,      // Key: Print screen
  KEY_PAUSE           : 284,      // Key: Pause
  KEY_F1              : 290,      // Key: F1
  KEY_F2              : 291,      // Key: F2
  KEY_F3              : 292,      // Key: F3
  KEY_F4              : 293,      // Key: F4
  KEY_F5              : 294,      // Key: F5
  KEY_F6              : 295,      // Key: F6
  KEY_F7              : 296,      // Key: F7
  KEY_F8              : 297,      // Key: F8
  KEY_F9              : 298,      // Key: F9
  KEY_F10             : 299,      // Key: F10
  KEY_F11             : 300,      // Key: F11
  KEY_F12             : 301,      // Key: F12
  KEY_LEFT_SHIFT      : 340,      // Key: Shift left
  KEY_LEFT_CONTROL    : 341,      // Key: Control left
  KEY_LEFT_ALT        : 342,      // Key: Alt left
  KEY_LEFT_SUPER      : 343,      // Key: Super left
  KEY_RIGHT_SHIFT     : 344,      // Key: Shift right
  KEY_RIGHT_CONTROL   : 345,      // Key: Control right
  KEY_RIGHT_ALT       : 346,      // Key: Alt right
  KEY_RIGHT_SUPER     : 347,      // Key: Super right
  KEY_KB_MENU         : 348,      // Key: KB menu
  // Keypad keys
  KEY_KP_0            : 320,      // Key: Keypad 0
  KEY_KP_1            : 321,      // Key: Keypad 1
  KEY_KP_2            : 322,      // Key: Keypad 2
  KEY_KP_3            : 323,      // Key: Keypad 3
  KEY_KP_4            : 324,      // Key: Keypad 4
  KEY_KP_5            : 325,      // Key: Keypad 5
  KEY_KP_6            : 326,      // Key: Keypad 6
  KEY_KP_7            : 327,      // Key: Keypad 7
  KEY_KP_8            : 328,      // Key: Keypad 8
  KEY_KP_9            : 329,      // Key: Keypad 9
  KEY_KP_DECIMAL      : 330,      // Key: Keypad .
  KEY_KP_DIVIDE       : 331,      // Key: Keypad /
  KEY_KP_MULTIPLY     : 332,      // Key: Keypad *
  KEY_KP_SUBTRACT     : 333,      // Key: Keypad -
  KEY_KP_ADD          : 334,      // Key: Keypad +
  KEY_KP_ENTER        : 335,      // Key: Keypad Enter
  KEY_KP_EQUAL        : 336,      // Key: Keypad :
  // Android key buttons
  KEY_BACK            : 4,        // Key: Android back button
  KEY_MENU            : 82,       // Key: Android menu button
  KEY_VOLUME_UP       : 24,       // Key: Android volume up button
  KEY_VOLUME_DOWN     : 25,       // Key: Android volume down button

  // Mouse buttons
  MOUSE_BUTTON_LEFT    : 0,       // Mouse button left
  MOUSE_BUTTON_RIGHT   : 1,       // Mouse button right
  MOUSE_BUTTON_MIDDLE  : 2,       // Mouse button middle (pressed wheel)
  MOUSE_BUTTON_SIDE    : 3,       // Mouse button side (advanced mouse device)
  MOUSE_BUTTON_EXTRA   : 4,       // Mouse button extra (advanced mouse device)
  MOUSE_BUTTON_FORWARD : 5,       // Mouse button forward (advanced mouse device)
  MOUSE_BUTTON_BACK    : 6,       // Mouse button back (advanced mouse device)


  // Mouse cursor
  MOUSE_CURSOR_DEFAULT       : 0,     // Default pointer shape
  MOUSE_CURSOR_ARROW         : 1,     // Arrow shape
  MOUSE_CURSOR_IBEAM         : 2,     // Text writing cursor shape
  MOUSE_CURSOR_CROSSHAIR     : 3,     // Cross shape
  MOUSE_CURSOR_POINTING_HAND : 4,     // Pointing hand cursor
  MOUSE_CURSOR_RESIZE_EW     : 5,     // Horizontal resize/move arrow shape
  MOUSE_CURSOR_RESIZE_NS     : 6,     // Vertical resize/move arrow shape
  MOUSE_CURSOR_RESIZE_NWSE   : 7,     // Top-left to bottom-right diagonal resize/move arrow shape
  MOUSE_CURSOR_RESIZE_NESW   : 8,     // The top-right to bottom-left diagonal resize/move arrow shape
  MOUSE_CURSOR_RESIZE_ALL    : 9,     // The omnidirectional resize/move cursor shape
  MOUSE_CURSOR_NOT_ALLOWED   : 10,    // The operation-not-allowed shape


  // Gamepad buttons
  GAMEPAD_BUTTON_UNKNOWN : 0,         // Unknown button, just for error checking
  GAMEPAD_BUTTON_LEFT_FACE_UP : 1,        // Gamepad left DPAD up button
  GAMEPAD_BUTTON_LEFT_FACE_RIGHT : 2,     // Gamepad left DPAD right button
  GAMEPAD_BUTTON_LEFT_FACE_DOWN : 3,      // Gamepad left DPAD down button
  GAMEPAD_BUTTON_LEFT_FACE_LEFT : 4,      // Gamepad left DPAD left button
  GAMEPAD_BUTTON_RIGHT_FACE_UP : 5,       // Gamepad right button up (i.e. PS3: Triangle, Xbox: Y)
  GAMEPAD_BUTTON_RIGHT_FACE_RIGHT : 6,    // Gamepad right button right (i.e. PS3: Square, Xbox: X)
  GAMEPAD_BUTTON_RIGHT_FACE_DOWN : 7,     // Gamepad right button down (i.e. PS3: Cross, Xbox: A)
  GAMEPAD_BUTTON_RIGHT_FACE_LEFT : 8,     // Gamepad right button left (i.e. PS3: Circle, Xbox: B)
  GAMEPAD_BUTTON_LEFT_TRIGGER_1 : 9,      // Gamepad top/back trigger left (first), it could be a trailing button
  GAMEPAD_BUTTON_LEFT_TRIGGER_2 : 10,      // Gamepad top/back trigger left (second), it could be a trailing button
  GAMEPAD_BUTTON_RIGHT_TRIGGER_1 : 11,     // Gamepad top/back trigger right (one), it could be a trailing button
  GAMEPAD_BUTTON_RIGHT_TRIGGER_2 : 12,     // Gamepad top/back trigger right (second), it could be a trailing button
  GAMEPAD_BUTTON_MIDDLE_LEFT : 13,         // Gamepad center buttons, left one (i.e. PS3: Select)
  GAMEPAD_BUTTON_MIDDLE : 14,              // Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX)
  GAMEPAD_BUTTON_MIDDLE_RIGHT : 15,        // Gamepad center buttons, right one (i.e. PS3: Start)
  GAMEPAD_BUTTON_LEFT_THUMB : 16,          // Gamepad joystick pressed button left
  GAMEPAD_BUTTON_RIGHT_THUMB : 17,          // Gamepad joystick pressed button right

  // Gamepad axis
  GAMEPAD_AXIS_LEFT_X        : 0,     // Gamepad left stick X axis
  GAMEPAD_AXIS_LEFT_Y        : 1,     // Gamepad left stick Y axis
  GAMEPAD_AXIS_RIGHT_X       : 2,     // Gamepad right stick X axis
  GAMEPAD_AXIS_RIGHT_Y       : 3,     // Gamepad right stick Y axis
  GAMEPAD_AXIS_LEFT_TRIGGER  : 4,     // Gamepad back trigger left, pressure level: [1..-1]
  GAMEPAD_AXIS_RIGHT_TRIGGER : 5,      // Gamepad back trigger right, pressure level: [1..-1]


  // Material map index
  MATERIAL_MAP_ALBEDO : 0,        // Albedo material (same as: MATERIAL_MAP_DIFFUSE)
  MATERIAL_MAP_METALNESS: 1,         // Metalness material (same as: MATERIAL_MAP_SPECULAR)
  MATERIAL_MAP_NORMAL: 2,            // Normal material
  MATERIAL_MAP_ROUGHNESS: 3,         // Roughness material
  MATERIAL_MAP_OCCLUSION: 4,         // Ambient occlusion material
  MATERIAL_MAP_EMISSION: 5,          // Emission material
  MATERIAL_MAP_HEIGHT: 6,            // Heightmap material
  MATERIAL_MAP_CUBEMAP: 7,           // Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  MATERIAL_MAP_IRRADIANCE: 8,        // Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  MATERIAL_MAP_PREFILTER: 10,         // Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  MATERIAL_MAP_BRDF: 11,               // Brdf material
  MATERIAL_MAP_DIFFUSE  : 0, //    MATERIAL_MAP_ALBEDO
  MATERIAL_MAP_SPECULAR : 1, //    MATERIAL_MAP_METALNESS

  // Shader location index
  SHADER_LOC_VERTEX_POSITION : 0, // Shader location: vertex attribute: position
  SHADER_LOC_VERTEX_TEXCOORD01 : 1,   // Shader location: vertex attribute: texcoord01
  SHADER_LOC_VERTEX_TEXCOORD02 : 2,   // Shader location: vertex attribute: texcoord02
  SHADER_LOC_VERTEX_NORMAL : 3,       // Shader location: vertex attribute: normal
  SHADER_LOC_VERTEX_TANGENT : 4,      // Shader location: vertex attribute: tangent
  SHADER_LOC_VERTEX_COLOR : 5,        // Shader location: vertex attribute: color
  SHADER_LOC_MATRIX_MVP : 6,          // Shader location: matrix uniform: model-view-projection
  SHADER_LOC_MATRIX_VIEW : 7,         // Shader location: matrix uniform: view (camera transform)
  SHADER_LOC_MATRIX_PROJECTION : 8,   // Shader location: matrix uniform: projection
  SHADER_LOC_MATRIX_MODEL : 9,        // Shader location: matrix uniform: model (transform)
  SHADER_LOC_MATRIX_NORMAL : 10,       // Shader location: matrix uniform: normal
  SHADER_LOC_VECTOR_VIEW : 11,         // Shader location: vector uniform: view
  SHADER_LOC_COLOR_DIFFUSE : 12,       // Shader location: vector uniform: diffuse color
  SHADER_LOC_COLOR_SPECULAR : 13,      // Shader location: vector uniform: specular color
  SHADER_LOC_COLOR_AMBIENT : 14,       // Shader location: vector uniform: ambient color
  SHADER_LOC_MAP_ALBEDO : 15,          // Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE)
  SHADER_LOC_MAP_METALNESS : 16,       // Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR)
  SHADER_LOC_MAP_NORMAL : 17,          // Shader location: sampler2d texture: normal
  SHADER_LOC_MAP_ROUGHNESS : 18,       // Shader location: sampler2d texture: roughness
  SHADER_LOC_MAP_OCCLUSION : 19,       // Shader location: sampler2d texture: occlusion
  SHADER_LOC_MAP_EMISSION : 20,        // Shader location: sampler2d texture: emission
  SHADER_LOC_MAP_HEIGHT : 21,          // Shader location: sampler2d texture: height
  SHADER_LOC_MAP_CUBEMAP : 22,         // Shader location: samplerCube texture: cubemap
  SHADER_LOC_MAP_IRRADIANCE : 23,      // Shader location: samplerCube texture: irradiance
  SHADER_LOC_MAP_PREFILTER : 24,       // Shader location: samplerCube texture: prefilter
  SHADER_LOC_MAP_BRDF : 25,             // Shader location: sampler2d texture: brdf

  SHADER_LOC_MAP_DIFFUSE:15, // SHADER_LOC_MAP_ALBEDO
  SHADER_LOC_MAP_SPECULAR:16, //SHADER_LOC_MAP_METALNESS

  // Shader uniform data type
  SHADER_UNIFORM_FLOAT : 0,       // Shader uniform type: float
  SHADER_UNIFORM_VEC2 : 1,            // Shader uniform type: vec2 (2 float)
  SHADER_UNIFORM_VEC3 : 2,            // Shader uniform type: vec3 (3 float)
  SHADER_UNIFORM_VEC4 : 3,            // Shader uniform type: vec4 (4 float)
  SHADER_UNIFORM_INT : 4,             // Shader uniform type: int
  SHADER_UNIFORM_IVEC2 : 5,           // Shader uniform type: ivec2 (2 int)
  SHADER_UNIFORM_IVEC3 : 6,           // Shader uniform type: ivec3 (3 int)
  SHADER_UNIFORM_IVEC4 : 7,           // Shader uniform type: ivec4 (4 int)
  SHADER_UNIFORM_SAMPLER2D : 8,        // Shader uniform type: sampler2d

  // Shader attribute data types
  SHADER_ATTRIB_FLOAT : 0,        // Shader attribute type: float
  SHADER_ATTRIB_VEC2 : 1,             // Shader attribute type: vec2 (2 float)
  SHADER_ATTRIB_VEC3 : 2,             // Shader attribute type: vec3 (3 float)
  SHADER_ATTRIB_VEC4 : 3,             // Shader attribute type: vec4 (4 float)

  // Pixel formats
  // NOTE: Support depends on OpenGL version and platform
  PIXELFORMAT_UNCOMPRESSED_GRAYSCALE : 1, // 8 bit per pixel (no alpha)
  PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA : 2,    // 8*2 bpp (2 channels)
  PIXELFORMAT_UNCOMPRESSED_R5G6B5 : 3,        // 16 bpp
  PIXELFORMAT_UNCOMPRESSED_R8G8B8: 4,        // 24 bpp
  PIXELFORMAT_UNCOMPRESSED_R5G5B5A1: 5,      // 16 bpp (1 bit alpha)
  PIXELFORMAT_UNCOMPRESSED_R4G4B4A4: 6,      // 16 bpp (4 bit alpha)
  PIXELFORMAT_UNCOMPRESSED_R8G8B8A8: 7,      // 32 bpp
  PIXELFORMAT_UNCOMPRESSED_R32: 8,           // 32 bpp (1 channel - float)
  PIXELFORMAT_UNCOMPRESSED_R32G32B32: 9,     // 32*3 bpp (3 channels - float)
  PIXELFORMAT_UNCOMPRESSED_R32G32B32A32: 10,  // 32*4 bpp (4 channels - float)
  PIXELFORMAT_COMPRESSED_DXT1_RGB : 11,        // 4 bpp (no alpha)
  PIXELFORMAT_COMPRESSED_DXT1_RGBA: 12,       // 4 bpp (1 bit alpha)
  PIXELFORMAT_COMPRESSED_DXT3_RGBA: 13,       // 8 bpp
  PIXELFORMAT_COMPRESSED_DXT5_RGBA: 14,       // 8 bpp
  PIXELFORMAT_COMPRESSED_ETC1_RGB: 15,        // 4 bpp
  PIXELFORMAT_COMPRESSED_ETC2_RGB: 16,        // 4 bpp
  PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA: 17,   // 8 bpp
  PIXELFORMAT_COMPRESSED_PVRT_RGB: 18,        // 4 bpp
  PIXELFORMAT_COMPRESSED_PVRT_RGBA: 19,       // 4 bpp
  PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA: 20,   // 8 bpp
  PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA: 21,    // 2 bpp

  // Texture parameters: filter mode
  // NOTE 1: Filtering considers mipmaps if available in the texture
  // NOTE 2: Filter is accordingly set for minification and magnification
  TEXTURE_FILTER_POINT : 0,               // No filter, just pixel approximation
  TEXTURE_FILTER_BILINEAR: 1,                // Linear filtering
  TEXTURE_FILTER_TRILINEAR: 2,               // Trilinear filtering (linear with mipmaps)
  TEXTURE_FILTER_ANISOTROPIC_4X: 3,          // Anisotropic filtering 4x
  TEXTURE_FILTER_ANISOTROPIC_8X: 4,          // Anisotropic filtering 8x
  TEXTURE_FILTER_ANISOTROPIC_16X: 5,         // Anisotropic filtering 16x

  // Texture parameters: wrap mode
  TEXTURE_WRAP_REPEAT : 0,                // Repeats texture in tiled mode
  TEXTURE_WRAP_CLAMP: 1,                     // Clamps texture to edge pixel in tiled mode
  TEXTURE_WRAP_MIRROR_REPEAT: 2,             // Mirrors and repeats the texture in tiled mode
  TEXTURE_WRAP_MIRROR_CLAMP: 3,               // Mirrors and clamps to border the texture in tiled mode

  // Cubemap layouts
  CUBEMAP_LAYOUT_AUTO_DETECT : 0,         // Automatically detect layout type
  CUBEMAP_LAYOUT_LINE_VERTICAL: 1,           // Layout is defined by a vertical line with faces
  CUBEMAP_LAYOUT_LINE_HORIZONTAL: 2,         // Layout is defined by a horizontal line with faces
  CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR: 3,     // Layout is defined by a 3x4 cross with cubemap faces
  CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE: 4,     // Layout is defined by a 4x3 cross with cubemap faces
  CUBEMAP_LAYOUT_PANORAMA: 5,                 // Layout is defined by a panorama image (equirrectangular map)

  // Font type, defines generation method
  FONT_DEFAULT : 0,               // Default font generation, anti-aliased
  FONT_BITMAP : 1,                    // Bitmap font generation, no anti-aliasing
  FONT_SDF : 2,                        // SDF font generation, requires external shader

  // Color blending modes (pre-defined)
  BLEND_ALPHA : 0,                // Blend textures considering alpha (default)
  BLEND_ADDITIVE : 1,                 // Blend textures adding colors
  BLEND_MULTIPLIED : 2,               // Blend textures multiplying colors
  BLEND_ADD_COLORS : 3,               // Blend textures adding colors (alternative)
  BLEND_SUBTRACT_COLORS : 4,          // Blend textures subtracting colors (alternative)
  BLEND_ALPHA_PREMULTIPLY : 5,        // Blend premultiplied textures considering alpha
  BLEND_CUSTOM : 6,                   // Blend textures using custom src/dst factors (use rlSetBlendFactors())
  BLEND_CUSTOM_SEPARATE : 7,           // Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate())

  // Gesture
  // NOTE: Provided as bit-wise flags to enable only desired gestures
  GESTURE_NONE        : 0,        // No gesture
  GESTURE_TAP         : 1,        // Tap gesture
  GESTURE_DOUBLETAP   : 2,        // Double tap gesture
  GESTURE_HOLD        : 4,        // Hold gesture
  GESTURE_DRAG        : 8,        // Drag gesture
  GESTURE_SWIPE_RIGHT : 16,       // Swipe right gesture
  GESTURE_SWIPE_LEFT  : 32,       // Swipe left gesture
  GESTURE_SWIPE_UP    : 64,       // Swipe up gesture
  GESTURE_SWIPE_DOWN  : 128,      // Swipe down gesture
  GESTURE_PINCH_IN    : 256,      // Pinch in gesture
  GESTURE_PINCH_OUT   : 512,      // Pinch out gesture

  // Camera system modes
  CAMERA_CUSTOM : 0,              // Custom camera
  CAMERA_FREE : 1,                // Free camera
  CAMERA_ORBITAL : 2,             // Orbital camera
  CAMERA_FIRST_PERSON : 3,        // First person camera
  CAMERA_THIRD_PERSON : 4,        // Third person camera

  // Camera projection
  CAMERA_PERSPECTIVE : 0,         // Perspective projection
  CAMERA_ORTHOGRAPHIC : 1,        // Orthographic projection

  // N-patch layout
  NPATCH_NINE_PATCH : 0,          // Npatch layout: 3x3 tiles
  NPATCH_THREE_PATCH_VERTICAL : 1,    // Npatch layout: 1x3 tiles
  NPATCH_THREE_PATCH_HORIZONTAL : 2   // Npatch layout: 3x1 tiles
}

window.Module = {
  preRun: [],
  
  postRun: [function(){
    // TODO: these could use some wrapping to make them a bit nicer
    for (const o of Object.keys(window.Module)) {
      if (o.match(/^_[A-Z]/)) {
        const k = o.replace(/^_/, '')
        if (!window.raylib[k]) {
          window.raylib[k] = window.Module[o]
        }
      }
    }

    const colors = {
      LIGHTGRAY: new Color(200, 200, 200, 255),
      GRAY: new Color(130, 130, 130, 255),
      DARKGRAY: new Color(80, 80, 80, 255),
      YELLOW: new Color(253, 249, 0, 255),
      GOLD: new Color(255, 203, 0, 255),
      ORANGE: new Color(255, 161, 0, 255),
      PINK: new Color(255, 109, 194, 255),
      RED: new Color(230, 41, 55, 255),
      MAROON: new Color(190, 33, 55, 255),
      GREEN: new Color(0, 228, 48, 255),
      LIME: new Color(0, 158, 47, 255),
      DARKGREEN: new Color(0, 117, 44, 255),
      SKYBLUE: new Color(102, 191, 255, 255),
      BLUE: new Color(0, 121, 241, 255),
      DARKBLUE: new Color(0, 82, 172, 255),
      PURPLE: new Color(200, 122, 255, 255),
      VIOLET: new Color(135, 60, 190, 255),
      DARKPURPLE: new Color(112, 31, 126, 255),
      BEIGE: new Color(211, 176, 131, 255),
      BROWN: new Color(127, 106, 79, 255),
      DARKBROWN: new Color(76, 63, 47, 255),
      WHITE: new Color(255, 255, 255, 255),
      BLACK: new Color(0, 0, 0, 255),
      BLANK: new Color(0, 0, 0, 0),
      MAGENTA: new Color(255, 0, 255, 255),
      RAYWHITE: new Color(245, 245, 245, 255)
    }

    for (const c of Object.keys(colors)) {
      raylib[c] = colors[c]
    }

    const updateLoop = (timeStamp) => {
      if (UpdateGame) {
        UpdateGame(timeStamp)
      }
      requestAnimationFrame(updateLoop)
    }

    if (InitGame) {
      InitGame()
    }

    requestAnimationFrame(updateLoop)
  }],
  
  print: (function() {
    var element = document.getElementById('output');
    if (element) element.value = ''
    return function(text) {
      if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ')
      console.log(text)
      if (element) {
        element.value += text + "\n"
        element.scrollTop = element.scrollHeight
      }
    }
  })(),
  
  canvas: (() => {
    var canvas = document.getElementById('canvas')
    canvas.addEventListener("webglcontextlost", (e) => { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false)
    return canvas
  })(),
  
  setStatus: (text) => {
    document.getElementById('status').innerHTML = text
  },
  
  totalDependencies: 0,
  
  monitorRunDependencies: (left) => {
    window.Module.totalDependencies = Math.max(window.Module.totalDependencies, left)
    window.Module.setStatus(left ? 'Preparing... (' + (window.Module.totalDependencies-left) + '/' + window.Module.totalDependencies + ')' : 'All downloads complete.')
  }
}

window.Module.setStatus('Downloading...');

window.onerror = (event) => {
  window.Module.setStatus('Exception thrown, see JavaScript console')
  window.Module.setStatus = (text) => {
    if (text) console.error('[post-exception status] ' + text)
  }
}