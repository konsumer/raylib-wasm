
// TODO: inline this?
import Module from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas, userInit, userUpdate) {
  const raylib = {}

  // Vector2, 2 components
  raylib.Vector2 = class Vector2 {
    constructor(init = {}, _address) {
      this._size = 8
      this._address = _address || mod._malloc(this._size)
      this.x = init.x || 0
      this.y = init.y || 0
    }
    
    get x () {
      return mod.getValue(this._address + 0, 'float')
    }
    set x (x) {
      mod.setValue(this._address + 0, x, 'float')
    }

  
    get y () {
      return mod.getValue(this._address + 4, 'float')
    }
    set y (y) {
      mod.setValue(this._address + 4, y, 'float')
    }

  }

  // Vector3, 3 components
  raylib.Vector3 = class Vector3 {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)
      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
    }
    
    get x () {
      return mod.getValue(this._address + 0, 'float')
    }
    set x (x) {
      mod.setValue(this._address + 0, x, 'float')
    }

  
    get y () {
      return mod.getValue(this._address + 4, 'float')
    }
    set y (y) {
      mod.setValue(this._address + 4, y, 'float')
    }

  
    get z () {
      return mod.getValue(this._address + 8, 'float')
    }
    set z (z) {
      mod.setValue(this._address + 8, z, 'float')
    }

  }

  // Vector4, 4 components
  raylib.Vector4 = class Vector4 {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)
      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
      this.w = init.w || 0
    }
    
    get x () {
      return mod.getValue(this._address + 0, 'float')
    }
    set x (x) {
      mod.setValue(this._address + 0, x, 'float')
    }

  
    get y () {
      return mod.getValue(this._address + 4, 'float')
    }
    set y (y) {
      mod.setValue(this._address + 4, y, 'float')
    }

  
    get z () {
      return mod.getValue(this._address + 8, 'float')
    }
    set z (z) {
      mod.setValue(this._address + 8, z, 'float')
    }

  
    get w () {
      return mod.getValue(this._address + 12, 'float')
    }
    set w (w) {
      mod.setValue(this._address + 12, w, 'float')
    }

  }

  // Matrix, 4x4 components, column major, OpenGL style, right-handed
  raylib.Matrix = class Matrix {
    constructor(init = {}, _address) {
      this._size = 64
      this._address = _address || mod._malloc(this._size)
      this.m0 = init.m0 || 0
      this.m4 = init.m4 || 0
      this.m8 = init.m8 || 0
      this.m12 = init.m12 || 0
      this.m1 = init.m1 || 0
      this.m5 = init.m5 || 0
      this.m9 = init.m9 || 0
      this.m13 = init.m13 || 0
      this.m2 = init.m2 || 0
      this.m6 = init.m6 || 0
      this.m10 = init.m10 || 0
      this.m14 = init.m14 || 0
      this.m3 = init.m3 || 0
      this.m7 = init.m7 || 0
      this.m11 = init.m11 || 0
      this.m15 = init.m15 || 0
    }
    
    get m0 () {
      return mod.getValue(this._address + 0, 'float')
    }
    set m0 (m0) {
      mod.setValue(this._address + 0, m0, 'float')
    }

  
    get m4 () {
      return mod.getValue(this._address + 4, 'float')
    }
    set m4 (m4) {
      mod.setValue(this._address + 4, m4, 'float')
    }

  
    get m8 () {
      return mod.getValue(this._address + 8, 'float')
    }
    set m8 (m8) {
      mod.setValue(this._address + 8, m8, 'float')
    }

  
    get m12 () {
      return mod.getValue(this._address + 12, 'float')
    }
    set m12 (m12) {
      mod.setValue(this._address + 12, m12, 'float')
    }

  
    get m1 () {
      return mod.getValue(this._address + 16, 'float')
    }
    set m1 (m1) {
      mod.setValue(this._address + 16, m1, 'float')
    }

  
    get m5 () {
      return mod.getValue(this._address + 20, 'float')
    }
    set m5 (m5) {
      mod.setValue(this._address + 20, m5, 'float')
    }

  
    get m9 () {
      return mod.getValue(this._address + 24, 'float')
    }
    set m9 (m9) {
      mod.setValue(this._address + 24, m9, 'float')
    }

  
    get m13 () {
      return mod.getValue(this._address + 28, 'float')
    }
    set m13 (m13) {
      mod.setValue(this._address + 28, m13, 'float')
    }

  
    get m2 () {
      return mod.getValue(this._address + 32, 'float')
    }
    set m2 (m2) {
      mod.setValue(this._address + 32, m2, 'float')
    }

  
    get m6 () {
      return mod.getValue(this._address + 36, 'float')
    }
    set m6 (m6) {
      mod.setValue(this._address + 36, m6, 'float')
    }

  
    get m10 () {
      return mod.getValue(this._address + 40, 'float')
    }
    set m10 (m10) {
      mod.setValue(this._address + 40, m10, 'float')
    }

  
    get m14 () {
      return mod.getValue(this._address + 44, 'float')
    }
    set m14 (m14) {
      mod.setValue(this._address + 44, m14, 'float')
    }

  
    get m3 () {
      return mod.getValue(this._address + 48, 'float')
    }
    set m3 (m3) {
      mod.setValue(this._address + 48, m3, 'float')
    }

  
    get m7 () {
      return mod.getValue(this._address + 52, 'float')
    }
    set m7 (m7) {
      mod.setValue(this._address + 52, m7, 'float')
    }

  
    get m11 () {
      return mod.getValue(this._address + 56, 'float')
    }
    set m11 (m11) {
      mod.setValue(this._address + 56, m11, 'float')
    }

  
    get m15 () {
      return mod.getValue(this._address + 60, 'float')
    }
    set m15 (m15) {
      mod.setValue(this._address + 60, m15, 'float')
    }

  }

  // Color, 4 components, R8G8B8A8 (32bit)
  raylib.Color = class Color {
    constructor(init = {}, _address) {
      this._size = 4
      this._address = _address || mod._malloc(this._size)
      this.r = init.r || 0
      this.g = init.g || 0
      this.b = init.b || 0
      this.a = init.a || 0
    }
    
    get r () {
      return mod.HEAPU8[this._address + 0]
    }
    set r (r) {
      mod.HEAPU8[this._address + 0] = r
    }

  
    get g () {
      return mod.HEAPU8[this._address + 1]
    }
    set g (g) {
      mod.HEAPU8[this._address + 1] = g
    }

  
    get b () {
      return mod.HEAPU8[this._address + 2]
    }
    set b (b) {
      mod.HEAPU8[this._address + 2] = b
    }

  
    get a () {
      return mod.HEAPU8[this._address + 3]
    }
    set a (a) {
      mod.HEAPU8[this._address + 3] = a
    }

  }

  // Rectangle, 4 components
  raylib.Rectangle = class Rectangle {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)
      this.x = init.x || 0
      this.y = init.y || 0
      this.width = init.width || 0
      this.height = init.height || 0
    }
    
    get x () {
      return mod.getValue(this._address + 0, 'float')
    }
    set x (x) {
      mod.setValue(this._address + 0, x, 'float')
    }

  
    get y () {
      return mod.getValue(this._address + 4, 'float')
    }
    set y (y) {
      mod.setValue(this._address + 4, y, 'float')
    }

  
    get width () {
      return mod.getValue(this._address + 8, 'float')
    }
    set width (width) {
      mod.setValue(this._address + 8, width, 'float')
    }

  
    get height () {
      return mod.getValue(this._address + 12, 'float')
    }
    set height (height) {
      mod.setValue(this._address + 12, height, 'float')
    }

  }

  // Image, pixel data stored in CPU memory (RAM)
  raylib.Image = class Image {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)
      this.data = init.data || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
    get data () {
      return mod.getValue(this._address + 0, '*')
    }
    set data (data) {
      mod.setValue(this._address + 0, data, '*')
    }

  
    get width () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width (width) {
      mod.setValue(this._address + 4, width, 'i32')
    }

  
    get height () {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height (height) {
      mod.setValue(this._address + 8, height, 'i32')
    }

  
    get mipmaps () {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps (mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }

  
    get format () {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format (format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // Texture, tex data stored in GPU memory (VRAM)
  raylib.Texture = class Texture {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)
      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
    get id () {
      return mod.HEAPU32[this._address + 0]
    }
    set id (id) {
      mod.HEAPU32[this._address + 0] = id
    }

  
    get width () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width (width) {
      mod.setValue(this._address + 4, width, 'i32')
    }

  
    get height () {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height (height) {
      mod.setValue(this._address + 8, height, 'i32')
    }

  
    get mipmaps () {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps (mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }

  
    get format () {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format (format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // RenderTexture, fbo for texture rendering
  raylib.RenderTexture = class RenderTexture {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)
      this.id = init.id || 0
      this.texture = init.texture || new Texture()
      this.depth = init.depth || new Texture()
    }
    
    get id () {
      return mod.HEAPU32[this._address + 0]
    }
    set id (id) {
      mod.HEAPU32[this._address + 0] = id
    }

  
    get texture () {
      return mod.getValue(this._address + 4, '*')
    }
    set texture (texture) {
      mod.setValue(this._address + 4, texture, '*')
    }

  
    get depth () {
      return mod.getValue(this._address + 24, '*')
    }
    set depth (depth) {
      mod.setValue(this._address + 24, depth, '*')
    }

  }

  // NPatchInfo, n-patch layout info
  raylib.NPatchInfo = class NPatchInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)
      this.source = init.source || new Rectangle()
      this.left = init.left || 0
      this.top = init.top || 0
      this.right = init.right || 0
      this.bottom = init.bottom || 0
      this.layout = init.layout || 0
    }
    
    get source () {
      return mod.getValue(this._address + 0, '*')
    }
    set source (source) {
      mod.setValue(this._address + 0, source, '*')
    }

  
    get left () {
      return mod.getValue(this._address + 16, 'i32')
    }
    set left (left) {
      mod.setValue(this._address + 16, left, 'i32')
    }

  
    get top () {
      return mod.getValue(this._address + 20, 'i32')
    }
    set top (top) {
      mod.setValue(this._address + 20, top, 'i32')
    }

  
    get right () {
      return mod.getValue(this._address + 24, 'i32')
    }
    set right (right) {
      mod.setValue(this._address + 24, right, 'i32')
    }

  
    get bottom () {
      return mod.getValue(this._address + 28, 'i32')
    }
    set bottom (bottom) {
      mod.setValue(this._address + 28, bottom, 'i32')
    }

  
    get layout () {
      return mod.getValue(this._address + 32, 'i32')
    }
    set layout (layout) {
      mod.setValue(this._address + 32, layout, 'i32')
    }

  }

  // GlyphInfo, font characters glyphs info
  raylib.GlyphInfo = class GlyphInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)
      this.value = init.value || 0
      this.offsetX = init.offsetX || 0
      this.offsetY = init.offsetY || 0
      this.advanceX = init.advanceX || 0
      this.image = init.image || new Image()
    }
    
    get value () {
      return mod.getValue(this._address + 0, 'i32')
    }
    set value (value) {
      mod.setValue(this._address + 0, value, 'i32')
    }

  
    get offsetX () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set offsetX (offsetX) {
      mod.setValue(this._address + 4, offsetX, 'i32')
    }

  
    get offsetY () {
      return mod.getValue(this._address + 8, 'i32')
    }
    set offsetY (offsetY) {
      mod.setValue(this._address + 8, offsetY, 'i32')
    }

  
    get advanceX () {
      return mod.getValue(this._address + 12, 'i32')
    }
    set advanceX (advanceX) {
      mod.setValue(this._address + 12, advanceX, 'i32')
    }

  
    get image () {
      return mod.getValue(this._address + 16, '*')
    }
    set image (image) {
      mod.setValue(this._address + 16, image, '*')
    }

  }

  // Font, font texture and GlyphInfo array data
  raylib.Font = class Font {
    constructor(init = {}, _address) {
      this._size = 40
      this._address = _address || mod._malloc(this._size)
      this.baseSize = init.baseSize || 0
      this.glyphCount = init.glyphCount || 0
      this.glyphPadding = init.glyphPadding || 0
      this.texture = init.texture || new Texture2D()
      this.recs = init.recs || new Rectangle()
      this.glyphs = init.glyphs || new GlyphInfo()
    }
    
    get baseSize () {
      return mod.getValue(this._address + 0, 'i32')
    }
    set baseSize (baseSize) {
      mod.setValue(this._address + 0, baseSize, 'i32')
    }

  
    get glyphCount () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set glyphCount (glyphCount) {
      mod.setValue(this._address + 4, glyphCount, 'i32')
    }

  
    get glyphPadding () {
      return mod.getValue(this._address + 8, 'i32')
    }
    set glyphPadding (glyphPadding) {
      mod.setValue(this._address + 8, glyphPadding, 'i32')
    }

  
    get texture () {
      return mod.getValue(this._address + 12, '*')
    }
    set texture (texture) {
      mod.setValue(this._address + 12, texture, '*')
    }

  
    get recs () {
      return mod.getValue(this._address + 32, '*')
    }
    set recs (recs) {
      mod.setValue(this._address + 32, recs, '*')
    }

  
    get glyphs () {
      return mod.getValue(this._address + 36, '*')
    }
    set glyphs (glyphs) {
      mod.setValue(this._address + 36, glyphs, '*')
    }

  }

  // Camera, defines position/orientation in 3d space
  raylib.Camera3D = class Camera3D {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)
      this.position = init.position || new Vector3()
      this.target = init.target || new Vector3()
      this.up = init.up || new Vector3()
      this.fovy = init.fovy || 0
      this.projection = init.projection || 0
    }
    
    get position () {
      return mod.getValue(this._address + 0, '*')
    }
    set position (position) {
      mod.setValue(this._address + 0, position, '*')
    }

  
    get target () {
      return mod.getValue(this._address + 12, '*')
    }
    set target (target) {
      mod.setValue(this._address + 12, target, '*')
    }

  
    get up () {
      return mod.getValue(this._address + 24, '*')
    }
    set up (up) {
      mod.setValue(this._address + 24, up, '*')
    }

  
    get fovy () {
      return mod.getValue(this._address + 36, 'float')
    }
    set fovy (fovy) {
      mod.setValue(this._address + 36, fovy, 'float')
    }

  
    get projection () {
      return mod.getValue(this._address + 40, 'i32')
    }
    set projection (projection) {
      mod.setValue(this._address + 40, projection, 'i32')
    }

  }

  // Camera2D, defines position/orientation in 2d space
  raylib.Camera2D = class Camera2D {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)
      this.offset = init.offset || new Vector2()
      this.target = init.target || new Vector2()
      this.rotation = init.rotation || 0
      this.zoom = init.zoom || 0
    }
    
    get offset () {
      return mod.getValue(this._address + 0, '*')
    }
    set offset (offset) {
      mod.setValue(this._address + 0, offset, '*')
    }

  
    get target () {
      return mod.getValue(this._address + 8, '*')
    }
    set target (target) {
      mod.setValue(this._address + 8, target, '*')
    }

  
    get rotation () {
      return mod.getValue(this._address + 16, 'float')
    }
    set rotation (rotation) {
      mod.setValue(this._address + 16, rotation, 'float')
    }

  
    get zoom () {
      return mod.getValue(this._address + 20, 'float')
    }
    set zoom (zoom) {
      mod.setValue(this._address + 20, zoom, 'float')
    }

  }

  // Mesh, vertex data and vao/vbo
  raylib.Mesh = class Mesh {
    constructor(init = {}, _address) {
      this._size = 60
      this._address = _address || mod._malloc(this._size)
      this.vertexCount = init.vertexCount || 0
      this.triangleCount = init.triangleCount || 0
      this.vertices = init.vertices || 0
      this.texcoords = init.texcoords || 0
      this.texcoords2 = init.texcoords2 || 0
      this.normals = init.normals || 0
      this.tangents = init.tangents || 0
      this.colors = init.colors || 0
      this.indices = init.indices || 0
      this.animVertices = init.animVertices || 0
      this.animNormals = init.animNormals || 0
      this.boneIds = init.boneIds || 0
      this.boneWeights = init.boneWeights || 0
      this.vaoId = init.vaoId || 0
      this.vboId = init.vboId || 0
    }
    
    get vertexCount () {
      return mod.getValue(this._address + 0, 'i32')
    }
    set vertexCount (vertexCount) {
      mod.setValue(this._address + 0, vertexCount, 'i32')
    }

  
    get triangleCount () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set triangleCount (triangleCount) {
      mod.setValue(this._address + 4, triangleCount, 'i32')
    }

  
    get vertices () {
      return mod.getValue(this._address + 8, '*')
    }
    set vertices (vertices) {
      mod.setValue(this._address + 8, vertices, '*')
    }

  
    get texcoords () {
      return mod.getValue(this._address + 12, '*')
    }
    set texcoords (texcoords) {
      mod.setValue(this._address + 12, texcoords, '*')
    }

  
    get texcoords2 () {
      return mod.getValue(this._address + 16, '*')
    }
    set texcoords2 (texcoords2) {
      mod.setValue(this._address + 16, texcoords2, '*')
    }

  
    get normals () {
      return mod.getValue(this._address + 20, '*')
    }
    set normals (normals) {
      mod.setValue(this._address + 20, normals, '*')
    }

  
    get tangents () {
      return mod.getValue(this._address + 24, '*')
    }
    set tangents (tangents) {
      mod.setValue(this._address + 24, tangents, '*')
    }

  
    get colors () {
      return mod.getValue(this._address + 28, '*')
    }
    set colors (colors) {
      mod.setValue(this._address + 28, colors, '*')
    }

  
    get indices () {
      return mod.getValue(this._address + 32, '*')
    }
    set indices (indices) {
      mod.setValue(this._address + 32, indices, '*')
    }

  
    get animVertices () {
      return mod.getValue(this._address + 36, '*')
    }
    set animVertices (animVertices) {
      mod.setValue(this._address + 36, animVertices, '*')
    }

  
    get animNormals () {
      return mod.getValue(this._address + 40, '*')
    }
    set animNormals (animNormals) {
      mod.setValue(this._address + 40, animNormals, '*')
    }

  
    get boneIds () {
      return mod.getValue(this._address + 44, '*')
    }
    set boneIds (boneIds) {
      mod.setValue(this._address + 44, boneIds, '*')
    }

  
    get boneWeights () {
      return mod.getValue(this._address + 48, '*')
    }
    set boneWeights (boneWeights) {
      mod.setValue(this._address + 48, boneWeights, '*')
    }

  
    get vaoId () {
      return mod.HEAPU32[this._address + 52]
    }
    set vaoId (vaoId) {
      mod.HEAPU32[this._address + 52] = vaoId
    }

  
    get vboId () {
      return mod.getValue(this._address + 56, '*')
    }
    set vboId (vboId) {
      mod.setValue(this._address + 56, vboId, '*')
    }

  }

  // Shader
  raylib.Shader = class Shader {
    constructor(init = {}, _address) {
      this._size = 8
      this._address = _address || mod._malloc(this._size)
      this.id = init.id || 0
      this.locs = init.locs || 0
    }
    
    get id () {
      return mod.HEAPU32[this._address + 0]
    }
    set id (id) {
      mod.HEAPU32[this._address + 0] = id
    }

  
    get locs () {
      return mod.getValue(this._address + 4, '*')
    }
    set locs (locs) {
      mod.setValue(this._address + 4, locs, '*')
    }

  }

  // MaterialMap
  raylib.MaterialMap = class MaterialMap {
    constructor(init = {}, _address) {
      this._size = 28
      this._address = _address || mod._malloc(this._size)
      this.texture = init.texture || new Texture2D()
      this.color = init.color || new Color()
      this.value = init.value || 0
    }
    
    get texture () {
      return mod.getValue(this._address + 0, '*')
    }
    set texture (texture) {
      mod.setValue(this._address + 0, texture, '*')
    }

  
    get color () {
      return mod.getValue(this._address + 20, '*')
    }
    set color (color) {
      mod.setValue(this._address + 20, color, '*')
    }

  
    get value () {
      return mod.getValue(this._address + 24, 'float')
    }
    set value (value) {
      mod.setValue(this._address + 24, value, 'float')
    }

  }

  // Material, includes shader and maps
  raylib.Material = class Material {
    constructor(init = {}, _address) {
      this._size = 28
      this._address = _address || mod._malloc(this._size)
      this.shader = init.shader || new Shader()
      this.maps = init.maps || new MaterialMap()
      this.params = init.params || [0, 0, 0, 0]
    }
    
    get shader () {
      return mod.getValue(this._address + 0, '*')
    }
    set shader (shader) {
      mod.setValue(this._address + 0, shader, '*')
    }

  
    get maps () {
      return mod.getValue(this._address + 8, '*')
    }
    set maps (maps) {
      mod.setValue(this._address + 8, maps, '*')
    }

  
    get params () {
      return mod.getValue(this._address + 12, '*')
    }
    set params (params) {
      mod.setValue(this._address + 12, params, '*')
    }

  }

  // Transform, vertex transformation data
  raylib.Transform = class Transform {
    constructor(init = {}, _address) {
      this._size = 40
      this._address = _address || mod._malloc(this._size)
      this.translation = init.translation || new Vector3()
      this.rotation = init.rotation || new Quaternion()
      this.scale = init.scale || new Vector3()
    }
    
    get translation () {
      return mod.getValue(this._address + 0, '*')
    }
    set translation (translation) {
      mod.setValue(this._address + 0, translation, '*')
    }

  
    get rotation () {
      return mod.getValue(this._address + 12, '*')
    }
    set rotation (rotation) {
      mod.setValue(this._address + 12, rotation, '*')
    }

  
    get scale () {
      return mod.getValue(this._address + 28, '*')
    }
    set scale (scale) {
      mod.setValue(this._address + 28, scale, '*')
    }

  }

  // Bone, skeletal animation bone
  raylib.BoneInfo = class BoneInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)
      this.name = init.name || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.parent = init.parent || 0
    }
    
    get name () {
      return mod.getValue(this._address + 0, '*')
    }
    set name (name) {
      mod.setValue(this._address + 0, name, '*')
    }

  
    get parent () {
      return mod.getValue(this._address + 32, 'i32')
    }
    set parent (parent) {
      mod.setValue(this._address + 32, parent, 'i32')
    }

  }

  // Model, meshes, materials and animation data
  raylib.Model = class Model {
    constructor(init = {}, _address) {
      this._size = 96
      this._address = _address || mod._malloc(this._size)
      this.transform = init.transform || new Matrix()
      this.meshCount = init.meshCount || 0
      this.materialCount = init.materialCount || 0
      this.meshes = init.meshes || new Mesh()
      this.materials = init.materials || new Material()
      this.meshMaterial = init.meshMaterial || 0
      this.boneCount = init.boneCount || 0
      this.bones = init.bones || new BoneInfo()
      this.bindPose = init.bindPose || new Transform()
    }
    
    get transform () {
      return mod.getValue(this._address + 0, '*')
    }
    set transform (transform) {
      mod.setValue(this._address + 0, transform, '*')
    }

  
    get meshCount () {
      return mod.getValue(this._address + 64, 'i32')
    }
    set meshCount (meshCount) {
      mod.setValue(this._address + 64, meshCount, 'i32')
    }

  
    get materialCount () {
      return mod.getValue(this._address + 68, 'i32')
    }
    set materialCount (materialCount) {
      mod.setValue(this._address + 68, materialCount, 'i32')
    }

  
    get meshes () {
      return mod.getValue(this._address + 72, '*')
    }
    set meshes (meshes) {
      mod.setValue(this._address + 72, meshes, '*')
    }

  
    get materials () {
      return mod.getValue(this._address + 76, '*')
    }
    set materials (materials) {
      mod.setValue(this._address + 76, materials, '*')
    }

  
    get meshMaterial () {
      return mod.getValue(this._address + 80, '*')
    }
    set meshMaterial (meshMaterial) {
      mod.setValue(this._address + 80, meshMaterial, '*')
    }

  
    get boneCount () {
      return mod.getValue(this._address + 84, 'i32')
    }
    set boneCount (boneCount) {
      mod.setValue(this._address + 84, boneCount, 'i32')
    }

  
    get bones () {
      return mod.getValue(this._address + 88, '*')
    }
    set bones (bones) {
      mod.setValue(this._address + 88, bones, '*')
    }

  
    get bindPose () {
      return mod.getValue(this._address + 92, '*')
    }
    set bindPose (bindPose) {
      mod.setValue(this._address + 92, bindPose, '*')
    }

  }

  // ModelAnimation
  raylib.ModelAnimation = class ModelAnimation {
    constructor(init = {}, _address) {
      this._size = 48
      this._address = _address || mod._malloc(this._size)
      this.boneCount = init.boneCount || 0
      this.frameCount = init.frameCount || 0
      this.bones = init.bones || new BoneInfo()
      this.framePoses = init.framePoses || new Transform()
      this.name = init.name || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    
    get boneCount () {
      return mod.getValue(this._address + 0, 'i32')
    }
    set boneCount (boneCount) {
      mod.setValue(this._address + 0, boneCount, 'i32')
    }

  
    get frameCount () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set frameCount (frameCount) {
      mod.setValue(this._address + 4, frameCount, 'i32')
    }

  
    get bones () {
      return mod.getValue(this._address + 8, '*')
    }
    set bones (bones) {
      mod.setValue(this._address + 8, bones, '*')
    }

  
    get framePoses () {
      return mod.getValue(this._address + 12, '*')
    }
    set framePoses (framePoses) {
      mod.setValue(this._address + 12, framePoses, '*')
    }

  
    get name () {
      return mod.getValue(this._address + 16, '*')
    }
    set name (name) {
      mod.setValue(this._address + 16, name, '*')
    }

  }

  // Ray, ray for raycasting
  raylib.Ray = class Ray {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)
      this.position = init.position || new Vector3()
      this.direction = init.direction || new Vector3()
    }
    
    get position () {
      return mod.getValue(this._address + 0, '*')
    }
    set position (position) {
      mod.setValue(this._address + 0, position, '*')
    }

  
    get direction () {
      return mod.getValue(this._address + 12, '*')
    }
    set direction (direction) {
      mod.setValue(this._address + 12, direction, '*')
    }

  }

  // RayCollision, ray hit information
  raylib.RayCollision = class RayCollision {
    constructor(init = {}, _address) {
      this._size = 29
      this._address = _address || mod._malloc(this._size)
      this.hit = init.hit || 0
      this.distance = init.distance || 0
      this.point = init.point || new Vector3()
      this.normal = init.normal || new Vector3()
    }
    
    get hit () {
      return mod.getValue(this._address + 0, 'i1')
    }
    set hit (hit) {
      mod.setValue(this._address + 0, hit, 'i1')
    }

  
    get distance () {
      return mod.getValue(this._address + 1, 'float')
    }
    set distance (distance) {
      mod.setValue(this._address + 1, distance, 'float')
    }

  
    get point () {
      return mod.getValue(this._address + 5, '*')
    }
    set point (point) {
      mod.setValue(this._address + 5, point, '*')
    }

  
    get normal () {
      return mod.getValue(this._address + 17, '*')
    }
    set normal (normal) {
      mod.setValue(this._address + 17, normal, '*')
    }

  }

  // BoundingBox
  raylib.BoundingBox = class BoundingBox {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)
      this.min = init.min || new Vector3()
      this.max = init.max || new Vector3()
    }
    
    get min () {
      return mod.getValue(this._address + 0, '*')
    }
    set min (min) {
      mod.setValue(this._address + 0, min, '*')
    }

  
    get max () {
      return mod.getValue(this._address + 12, '*')
    }
    set max (max) {
      mod.setValue(this._address + 12, max, '*')
    }

  }

  // Wave, audio wave data
  raylib.Wave = class Wave {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)
      this.frameCount = init.frameCount || 0
      this.sampleRate = init.sampleRate || 0
      this.sampleSize = init.sampleSize || 0
      this.channels = init.channels || 0
      this.data = init.data || 0
    }
    
    get frameCount () {
      return mod.HEAPU32[this._address + 0]
    }
    set frameCount (frameCount) {
      mod.HEAPU32[this._address + 0] = frameCount
    }

  
    get sampleRate () {
      return mod.HEAPU32[this._address + 4]
    }
    set sampleRate (sampleRate) {
      mod.HEAPU32[this._address + 4] = sampleRate
    }

  
    get sampleSize () {
      return mod.HEAPU32[this._address + 8]
    }
    set sampleSize (sampleSize) {
      mod.HEAPU32[this._address + 8] = sampleSize
    }

  
    get channels () {
      return mod.HEAPU32[this._address + 12]
    }
    set channels (channels) {
      mod.HEAPU32[this._address + 12] = channels
    }

  
    get data () {
      return mod.getValue(this._address + 16, '*')
    }
    set data (data) {
      mod.setValue(this._address + 16, data, '*')
    }

  }

  // AudioStream, custom audio stream
  raylib.AudioStream = class AudioStream {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)
      this.buffer = init.buffer || 0
      this.processor = init.processor || 0
      this.sampleRate = init.sampleRate || 0
      this.sampleSize = init.sampleSize || 0
      this.channels = init.channels || 0
    }
    
    get buffer () {
      return mod.getValue(this._address + 0, '*')
    }
    set buffer (buffer) {
      mod.setValue(this._address + 0, buffer, '*')
    }

  
    get processor () {
      return mod.getValue(this._address + 4, '*')
    }
    set processor (processor) {
      mod.setValue(this._address + 4, processor, '*')
    }

  
    get sampleRate () {
      return mod.HEAPU32[this._address + 8]
    }
    set sampleRate (sampleRate) {
      mod.HEAPU32[this._address + 8] = sampleRate
    }

  
    get sampleSize () {
      return mod.HEAPU32[this._address + 12]
    }
    set sampleSize (sampleSize) {
      mod.HEAPU32[this._address + 12] = sampleSize
    }

  
    get channels () {
      return mod.HEAPU32[this._address + 16]
    }
    set channels (channels) {
      mod.HEAPU32[this._address + 16] = channels
    }

  }

  // Sound
  raylib.Sound = class Sound {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)
      this.stream = init.stream || new AudioStream()
      this.frameCount = init.frameCount || 0
    }
    
    get stream () {
      return mod.getValue(this._address + 0, '*')
    }
    set stream (stream) {
      mod.setValue(this._address + 0, stream, '*')
    }

  
    get frameCount () {
      return mod.HEAPU32[this._address + 20]
    }
    set frameCount (frameCount) {
      mod.HEAPU32[this._address + 20] = frameCount
    }

  }

  // Music, audio stream, anything longer than ~10 seconds should be streamed
  raylib.Music = class Music {
    constructor(init = {}, _address) {
      this._size = 33
      this._address = _address || mod._malloc(this._size)
      this.stream = init.stream || new AudioStream()
      this.frameCount = init.frameCount || 0
      this.looping = init.looping || 0
      this.ctxType = init.ctxType || 0
      this.ctxData = init.ctxData || 0
    }
    
    get stream () {
      return mod.getValue(this._address + 0, '*')
    }
    set stream (stream) {
      mod.setValue(this._address + 0, stream, '*')
    }

  
    get frameCount () {
      return mod.HEAPU32[this._address + 20]
    }
    set frameCount (frameCount) {
      mod.HEAPU32[this._address + 20] = frameCount
    }

  
    get looping () {
      return mod.getValue(this._address + 24, 'i1')
    }
    set looping (looping) {
      mod.setValue(this._address + 24, looping, 'i1')
    }

  
    get ctxType () {
      return mod.getValue(this._address + 25, 'i32')
    }
    set ctxType (ctxType) {
      mod.setValue(this._address + 25, ctxType, 'i32')
    }

  
    get ctxData () {
      return mod.getValue(this._address + 29, '*')
    }
    set ctxData (ctxData) {
      mod.setValue(this._address + 29, ctxData, '*')
    }

  }

  // VrDeviceInfo, Head-Mounted-Display device parameters
  raylib.VrDeviceInfo = class VrDeviceInfo {
    constructor(init = {}, _address) {
      this._size = 64
      this._address = _address || mod._malloc(this._size)
      this.hResolution = init.hResolution || 0
      this.vResolution = init.vResolution || 0
      this.hScreenSize = init.hScreenSize || 0
      this.vScreenSize = init.vScreenSize || 0
      this.vScreenCenter = init.vScreenCenter || 0
      this.eyeToScreenDistance = init.eyeToScreenDistance || 0
      this.lensSeparationDistance = init.lensSeparationDistance || 0
      this.interpupillaryDistance = init.interpupillaryDistance || 0
      this.lensDistortionValues = init.lensDistortionValues || [0, 0, 0, 0]
      this.chromaAbCorrection = init.chromaAbCorrection || [0, 0, 0, 0]
    }
    
    get hResolution () {
      return mod.getValue(this._address + 0, 'i32')
    }
    set hResolution (hResolution) {
      mod.setValue(this._address + 0, hResolution, 'i32')
    }

  
    get vResolution () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set vResolution (vResolution) {
      mod.setValue(this._address + 4, vResolution, 'i32')
    }

  
    get hScreenSize () {
      return mod.getValue(this._address + 8, 'float')
    }
    set hScreenSize (hScreenSize) {
      mod.setValue(this._address + 8, hScreenSize, 'float')
    }

  
    get vScreenSize () {
      return mod.getValue(this._address + 12, 'float')
    }
    set vScreenSize (vScreenSize) {
      mod.setValue(this._address + 12, vScreenSize, 'float')
    }

  
    get vScreenCenter () {
      return mod.getValue(this._address + 16, 'float')
    }
    set vScreenCenter (vScreenCenter) {
      mod.setValue(this._address + 16, vScreenCenter, 'float')
    }

  
    get eyeToScreenDistance () {
      return mod.getValue(this._address + 20, 'float')
    }
    set eyeToScreenDistance (eyeToScreenDistance) {
      mod.setValue(this._address + 20, eyeToScreenDistance, 'float')
    }

  
    get lensSeparationDistance () {
      return mod.getValue(this._address + 24, 'float')
    }
    set lensSeparationDistance (lensSeparationDistance) {
      mod.setValue(this._address + 24, lensSeparationDistance, 'float')
    }

  
    get interpupillaryDistance () {
      return mod.getValue(this._address + 28, 'float')
    }
    set interpupillaryDistance (interpupillaryDistance) {
      mod.setValue(this._address + 28, interpupillaryDistance, 'float')
    }

  
    get lensDistortionValues () {
      return mod.getValue(this._address + 32, '*')
    }
    set lensDistortionValues (lensDistortionValues) {
      mod.setValue(this._address + 32, lensDistortionValues, '*')
    }

  
    get chromaAbCorrection () {
      return mod.getValue(this._address + 48, '*')
    }
    set chromaAbCorrection (chromaAbCorrection) {
      mod.setValue(this._address + 48, chromaAbCorrection, '*')
    }

  }

  // VrStereoConfig, VR stereo rendering configuration for simulator
  raylib.VrStereoConfig = class VrStereoConfig {
    constructor(init = {}, _address) {
      this._size = 304
      this._address = _address || mod._malloc(this._size)
      this.projection = init.projection || [new Matrix(), new Matrix()]
      this.viewOffset = init.viewOffset || [new Matrix(), new Matrix()]
      this.leftLensCenter = init.leftLensCenter || [0, 0]
      this.rightLensCenter = init.rightLensCenter || [0, 0]
      this.leftScreenCenter = init.leftScreenCenter || [0, 0]
      this.rightScreenCenter = init.rightScreenCenter || [0, 0]
      this.scale = init.scale || [0, 0]
      this.scaleIn = init.scaleIn || [0, 0]
    }
    
    get projection () {
      return mod.getValue(this._address + 0, '*')
    }
    set projection (projection) {
      mod.setValue(this._address + 0, projection, '*')
    }

  
    get viewOffset () {
      return mod.getValue(this._address + 128, '*')
    }
    set viewOffset (viewOffset) {
      mod.setValue(this._address + 128, viewOffset, '*')
    }

  
    get leftLensCenter () {
      return mod.getValue(this._address + 256, '*')
    }
    set leftLensCenter (leftLensCenter) {
      mod.setValue(this._address + 256, leftLensCenter, '*')
    }

  
    get rightLensCenter () {
      return mod.getValue(this._address + 264, '*')
    }
    set rightLensCenter (rightLensCenter) {
      mod.setValue(this._address + 264, rightLensCenter, '*')
    }

  
    get leftScreenCenter () {
      return mod.getValue(this._address + 272, '*')
    }
    set leftScreenCenter (leftScreenCenter) {
      mod.setValue(this._address + 272, leftScreenCenter, '*')
    }

  
    get rightScreenCenter () {
      return mod.getValue(this._address + 280, '*')
    }
    set rightScreenCenter (rightScreenCenter) {
      mod.setValue(this._address + 280, rightScreenCenter, '*')
    }

  
    get scale () {
      return mod.getValue(this._address + 288, '*')
    }
    set scale (scale) {
      mod.setValue(this._address + 288, scale, '*')
    }

  
    get scaleIn () {
      return mod.getValue(this._address + 296, '*')
    }
    set scaleIn (scaleIn) {
      mod.setValue(this._address + 296, scaleIn, '*')
    }

  }

  // File path list
  raylib.FilePathList = class FilePathList {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)
      this.capacity = init.capacity || 0
      this.count = init.count || 0
      this.paths = init.paths || 0
    }
    
    get capacity () {
      return mod.HEAPU32[this._address + 0]
    }
    set capacity (capacity) {
      mod.HEAPU32[this._address + 0] = capacity
    }

  
    get count () {
      return mod.HEAPU32[this._address + 4]
    }
    set count (count) {
      mod.HEAPU32[this._address + 4] = count
    }

  
    get paths () {
      return mod.getValue(this._address + 8, '*')
    }
    set paths (paths) {
      mod.setValue(this._address + 8, paths, '*')
    }

  }

  // Quaternion, 4 components (Vector4 alias)
  raylib.Quaternion = class Quaternion {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)
      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
      this.w = init.w || 0
    }
    
    get x () {
      return mod.getValue(this._address + 0, 'float')
    }
    set x (x) {
      mod.setValue(this._address + 0, x, 'float')
    }

  
    get y () {
      return mod.getValue(this._address + 4, 'float')
    }
    set y (y) {
      mod.setValue(this._address + 4, y, 'float')
    }

  
    get z () {
      return mod.getValue(this._address + 8, 'float')
    }
    set z (z) {
      mod.setValue(this._address + 8, z, 'float')
    }

  
    get w () {
      return mod.getValue(this._address + 12, 'float')
    }
    set w (w) {
      mod.setValue(this._address + 12, w, 'float')
    }

  }

  // Texture2D, same as Texture
  raylib.Texture2D = class Texture2D {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)
      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
    get id () {
      return mod.HEAPU32[this._address + 0]
    }
    set id (id) {
      mod.HEAPU32[this._address + 0] = id
    }

  
    get width () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width (width) {
      mod.setValue(this._address + 4, width, 'i32')
    }

  
    get height () {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height (height) {
      mod.setValue(this._address + 8, height, 'i32')
    }

  
    get mipmaps () {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps (mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }

  
    get format () {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format (format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // TextureCubemap, same as Texture
  raylib.TextureCubemap = class TextureCubemap {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)
      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
    get id () {
      return mod.HEAPU32[this._address + 0]
    }
    set id (id) {
      mod.HEAPU32[this._address + 0] = id
    }

  
    get width () {
      return mod.getValue(this._address + 4, 'i32')
    }
    set width (width) {
      mod.setValue(this._address + 4, width, 'i32')
    }

  
    get height () {
      return mod.getValue(this._address + 8, 'i32')
    }
    set height (height) {
      mod.setValue(this._address + 8, height, 'i32')
    }

  
    get mipmaps () {
      return mod.getValue(this._address + 12, 'i32')
    }
    set mipmaps (mipmaps) {
      mod.setValue(this._address + 12, mipmaps, 'i32')
    }

  
    get format () {
      return mod.getValue(this._address + 16, 'i32')
    }
    set format (format) {
      mod.setValue(this._address + 16, format, 'i32')
    }

  }

  // RenderTexture2D, same as RenderTexture
  raylib.RenderTexture2D = class RenderTexture2D {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)
      this.id = init.id || 0
      this.texture = init.texture || new Texture()
      this.depth = init.depth || new Texture()
    }
    
    get id () {
      return mod.HEAPU32[this._address + 0]
    }
    set id (id) {
      mod.HEAPU32[this._address + 0] = id
    }

  
    get texture () {
      return mod.getValue(this._address + 4, '*')
    }
    set texture (texture) {
      mod.setValue(this._address + 4, texture, '*')
    }

  
    get depth () {
      return mod.getValue(this._address + 24, '*')
    }
    set depth (depth) {
      mod.setValue(this._address + 24, depth, '*')
    }

  }

  // Camera type fallback, defaults to Camera3D
  raylib.Camera = class Camera {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)
      this.position = init.position || new Vector3()
      this.target = init.target || new Vector3()
      this.up = init.up || new Vector3()
      this.fovy = init.fovy || 0
      this.projection = init.projection || 0
    }
    
    get position () {
      return mod.getValue(this._address + 0, '*')
    }
    set position (position) {
      mod.setValue(this._address + 0, position, '*')
    }

  
    get target () {
      return mod.getValue(this._address + 12, '*')
    }
    set target (target) {
      mod.setValue(this._address + 12, target, '*')
    }

  
    get up () {
      return mod.getValue(this._address + 24, '*')
    }
    set up (up) {
      mod.setValue(this._address + 24, up, '*')
    }

  
    get fovy () {
      return mod.getValue(this._address + 36, 'float')
    }
    set fovy (fovy) {
      mod.setValue(this._address + 36, fovy, 'float')
    }

  
    get projection () {
      return mod.getValue(this._address + 40, 'i32')
    }
    set projection (projection) {
      mod.setValue(this._address + 40, projection, 'i32')
    }

  }

  // ENUM ConfigFlags
  // System/Window config flags
  raylib.FLAG_VSYNC_HINT = 64 // Set to try enabling V-Sync on GPU
  raylib.FLAG_FULLSCREEN_MODE = 2 // Set to run program in fullscreen
  raylib.FLAG_WINDOW_RESIZABLE = 4 // Set to allow resizable window
  raylib.FLAG_WINDOW_UNDECORATED = 8 // Set to disable window decoration (frame and buttons)
  raylib.FLAG_WINDOW_HIDDEN = 128 // Set to hide window
  raylib.FLAG_WINDOW_MINIMIZED = 512 // Set to minimize window (iconify)
  raylib.FLAG_WINDOW_MAXIMIZED = 1024 // Set to maximize window (expanded to monitor)
  raylib.FLAG_WINDOW_UNFOCUSED = 2048 // Set to window non focused
  raylib.FLAG_WINDOW_TOPMOST = 4096 // Set to window always on top
  raylib.FLAG_WINDOW_ALWAYS_RUN = 256 // Set to allow windows running while minimized
  raylib.FLAG_WINDOW_TRANSPARENT = 16 // Set to allow transparent framebuffer
  raylib.FLAG_WINDOW_HIGHDPI = 8192 // Set to support HighDPI
  raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384 // Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED
  raylib.FLAG_MSAA_4X_HINT = 32 // Set to try enabling MSAA 4X
  raylib.FLAG_INTERLACED_HINT = 65536 // Set to try enabling interlaced video format (for V3D)

  // ENUM TraceLogLevel
  // Trace log level
  raylib.LOG_ALL = 0 // Display all logs
  raylib.LOG_TRACE = 1 // Trace logging, intended for internal use only
  raylib.LOG_DEBUG = 2 // Debug logging, used for internal debugging, it should be disabled on release builds
  raylib.LOG_INFO = 3 // Info logging, used for program execution info
  raylib.LOG_WARNING = 4 // Warning logging, used on recoverable failures
  raylib.LOG_ERROR = 5 // Error logging, used on unrecoverable failures
  raylib.LOG_FATAL = 6 // Fatal logging, used to abort program: exit(EXIT_FAILURE)
  raylib.LOG_NONE = 7 // Disable logging

  // ENUM KeyboardKey
  // Keyboard keys (US keyboard layout)
  raylib.KEY_NULL = 0 // Key: NULL, used for no key pressed
  raylib.KEY_APOSTROPHE = 39 // Key: '
  raylib.KEY_COMMA = 44 // Key: ,
  raylib.KEY_MINUS = 45 // Key: -
  raylib.KEY_PERIOD = 46 // Key: .
  raylib.KEY_SLASH = 47 // Key: /
  raylib.KEY_ZERO = 48 // Key: 0
  raylib.KEY_ONE = 49 // Key: 1
  raylib.KEY_TWO = 50 // Key: 2
  raylib.KEY_THREE = 51 // Key: 3
  raylib.KEY_FOUR = 52 // Key: 4
  raylib.KEY_FIVE = 53 // Key: 5
  raylib.KEY_SIX = 54 // Key: 6
  raylib.KEY_SEVEN = 55 // Key: 7
  raylib.KEY_EIGHT = 56 // Key: 8
  raylib.KEY_NINE = 57 // Key: 9
  raylib.KEY_SEMICOLON = 59 // Key: ;
  raylib.KEY_EQUAL = 61 // Key: =
  raylib.KEY_A = 65 // Key: A | a
  raylib.KEY_B = 66 // Key: B | b
  raylib.KEY_C = 67 // Key: C | c
  raylib.KEY_D = 68 // Key: D | d
  raylib.KEY_E = 69 // Key: E | e
  raylib.KEY_F = 70 // Key: F | f
  raylib.KEY_G = 71 // Key: G | g
  raylib.KEY_H = 72 // Key: H | h
  raylib.KEY_I = 73 // Key: I | i
  raylib.KEY_J = 74 // Key: J | j
  raylib.KEY_K = 75 // Key: K | k
  raylib.KEY_L = 76 // Key: L | l
  raylib.KEY_M = 77 // Key: M | m
  raylib.KEY_N = 78 // Key: N | n
  raylib.KEY_O = 79 // Key: O | o
  raylib.KEY_P = 80 // Key: P | p
  raylib.KEY_Q = 81 // Key: Q | q
  raylib.KEY_R = 82 // Key: R | r
  raylib.KEY_S = 83 // Key: S | s
  raylib.KEY_T = 84 // Key: T | t
  raylib.KEY_U = 85 // Key: U | u
  raylib.KEY_V = 86 // Key: V | v
  raylib.KEY_W = 87 // Key: W | w
  raylib.KEY_X = 88 // Key: X | x
  raylib.KEY_Y = 89 // Key: Y | y
  raylib.KEY_Z = 90 // Key: Z | z
  raylib.KEY_LEFT_BRACKET = 91 // Key: [
  raylib.KEY_BACKSLASH = 92 // Key: '\'
  raylib.KEY_RIGHT_BRACKET = 93 // Key: ]
  raylib.KEY_GRAVE = 96 // Key: `
  raylib.KEY_SPACE = 32 // Key: Space
  raylib.KEY_ESCAPE = 256 // Key: Esc
  raylib.KEY_ENTER = 257 // Key: Enter
  raylib.KEY_TAB = 258 // Key: Tab
  raylib.KEY_BACKSPACE = 259 // Key: Backspace
  raylib.KEY_INSERT = 260 // Key: Ins
  raylib.KEY_DELETE = 261 // Key: Del
  raylib.KEY_RIGHT = 262 // Key: Cursor right
  raylib.KEY_LEFT = 263 // Key: Cursor left
  raylib.KEY_DOWN = 264 // Key: Cursor down
  raylib.KEY_UP = 265 // Key: Cursor up
  raylib.KEY_PAGE_UP = 266 // Key: Page up
  raylib.KEY_PAGE_DOWN = 267 // Key: Page down
  raylib.KEY_HOME = 268 // Key: Home
  raylib.KEY_END = 269 // Key: End
  raylib.KEY_CAPS_LOCK = 280 // Key: Caps lock
  raylib.KEY_SCROLL_LOCK = 281 // Key: Scroll down
  raylib.KEY_NUM_LOCK = 282 // Key: Num lock
  raylib.KEY_PRINT_SCREEN = 283 // Key: Print screen
  raylib.KEY_PAUSE = 284 // Key: Pause
  raylib.KEY_F1 = 290 // Key: F1
  raylib.KEY_F2 = 291 // Key: F2
  raylib.KEY_F3 = 292 // Key: F3
  raylib.KEY_F4 = 293 // Key: F4
  raylib.KEY_F5 = 294 // Key: F5
  raylib.KEY_F6 = 295 // Key: F6
  raylib.KEY_F7 = 296 // Key: F7
  raylib.KEY_F8 = 297 // Key: F8
  raylib.KEY_F9 = 298 // Key: F9
  raylib.KEY_F10 = 299 // Key: F10
  raylib.KEY_F11 = 300 // Key: F11
  raylib.KEY_F12 = 301 // Key: F12
  raylib.KEY_LEFT_SHIFT = 340 // Key: Shift left
  raylib.KEY_LEFT_CONTROL = 341 // Key: Control left
  raylib.KEY_LEFT_ALT = 342 // Key: Alt left
  raylib.KEY_LEFT_SUPER = 343 // Key: Super left
  raylib.KEY_RIGHT_SHIFT = 344 // Key: Shift right
  raylib.KEY_RIGHT_CONTROL = 345 // Key: Control right
  raylib.KEY_RIGHT_ALT = 346 // Key: Alt right
  raylib.KEY_RIGHT_SUPER = 347 // Key: Super right
  raylib.KEY_KB_MENU = 348 // Key: KB menu
  raylib.KEY_KP_0 = 320 // Key: Keypad 0
  raylib.KEY_KP_1 = 321 // Key: Keypad 1
  raylib.KEY_KP_2 = 322 // Key: Keypad 2
  raylib.KEY_KP_3 = 323 // Key: Keypad 3
  raylib.KEY_KP_4 = 324 // Key: Keypad 4
  raylib.KEY_KP_5 = 325 // Key: Keypad 5
  raylib.KEY_KP_6 = 326 // Key: Keypad 6
  raylib.KEY_KP_7 = 327 // Key: Keypad 7
  raylib.KEY_KP_8 = 328 // Key: Keypad 8
  raylib.KEY_KP_9 = 329 // Key: Keypad 9
  raylib.KEY_KP_DECIMAL = 330 // Key: Keypad .
  raylib.KEY_KP_DIVIDE = 331 // Key: Keypad /
  raylib.KEY_KP_MULTIPLY = 332 // Key: Keypad *
  raylib.KEY_KP_SUBTRACT = 333 // Key: Keypad -
  raylib.KEY_KP_ADD = 334 // Key: Keypad +
  raylib.KEY_KP_ENTER = 335 // Key: Keypad Enter
  raylib.KEY_KP_EQUAL = 336 // Key: Keypad =
  raylib.KEY_BACK = 4 // Key: Android back button
  raylib.KEY_MENU = 82 // Key: Android menu button
  raylib.KEY_VOLUME_UP = 24 // Key: Android volume up button
  raylib.KEY_VOLUME_DOWN = 25 // Key: Android volume down button

  // ENUM MouseButton
  // Mouse buttons
  raylib.MOUSE_BUTTON_LEFT = 0 // Mouse button left
  raylib.MOUSE_BUTTON_RIGHT = 1 // Mouse button right
  raylib.MOUSE_BUTTON_MIDDLE = 2 // Mouse button middle (pressed wheel)
  raylib.MOUSE_BUTTON_SIDE = 3 // Mouse button side (advanced mouse device)
  raylib.MOUSE_BUTTON_EXTRA = 4 // Mouse button extra (advanced mouse device)
  raylib.MOUSE_BUTTON_FORWARD = 5 // Mouse button forward (advanced mouse device)
  raylib.MOUSE_BUTTON_BACK = 6 // Mouse button back (advanced mouse device)

  // ENUM MouseCursor
  // Mouse cursor
  raylib.MOUSE_CURSOR_DEFAULT = 0 // Default pointer shape
  raylib.MOUSE_CURSOR_ARROW = 1 // Arrow shape
  raylib.MOUSE_CURSOR_IBEAM = 2 // Text writing cursor shape
  raylib.MOUSE_CURSOR_CROSSHAIR = 3 // Cross shape
  raylib.MOUSE_CURSOR_POINTING_HAND = 4 // Pointing hand cursor
  raylib.MOUSE_CURSOR_RESIZE_EW = 5 // Horizontal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NS = 6 // Vertical resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NWSE = 7 // Top-left to bottom-right diagonal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NESW = 8 // The top-right to bottom-left diagonal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_ALL = 9 // The omnidirectional resize/move cursor shape
  raylib.MOUSE_CURSOR_NOT_ALLOWED = 10 // The operation-not-allowed shape

  // ENUM GamepadButton
  // Gamepad buttons
  raylib.GAMEPAD_BUTTON_UNKNOWN = 0 // Unknown button, just for error checking
  raylib.GAMEPAD_BUTTON_LEFT_FACE_UP = 1 // Gamepad left DPAD up button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2 // Gamepad left DPAD right button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3 // Gamepad left DPAD down button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4 // Gamepad left DPAD left button
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP = 5 // Gamepad right button up (i.e. PS3: Triangle, Xbox: Y)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6 // Gamepad right button right (i.e. PS3: Square, Xbox: X)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7 // Gamepad right button down (i.e. PS3: Cross, Xbox: A)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8 // Gamepad right button left (i.e. PS3: Circle, Xbox: B)
  raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9 // Gamepad top/back trigger left (first), it could be a trailing button
  raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10 // Gamepad top/back trigger left (second), it could be a trailing button
  raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11 // Gamepad top/back trigger right (one), it could be a trailing button
  raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12 // Gamepad top/back trigger right (second), it could be a trailing button
  raylib.GAMEPAD_BUTTON_MIDDLE_LEFT = 13 // Gamepad center buttons, left one (i.e. PS3: Select)
  raylib.GAMEPAD_BUTTON_MIDDLE = 14 // Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX)
  raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT = 15 // Gamepad center buttons, right one (i.e. PS3: Start)
  raylib.GAMEPAD_BUTTON_LEFT_THUMB = 16 // Gamepad joystick pressed button left
  raylib.GAMEPAD_BUTTON_RIGHT_THUMB = 17 // Gamepad joystick pressed button right

  // ENUM GamepadAxis
  // Gamepad axis
  raylib.GAMEPAD_AXIS_LEFT_X = 0 // Gamepad left stick X axis
  raylib.GAMEPAD_AXIS_LEFT_Y = 1 // Gamepad left stick Y axis
  raylib.GAMEPAD_AXIS_RIGHT_X = 2 // Gamepad right stick X axis
  raylib.GAMEPAD_AXIS_RIGHT_Y = 3 // Gamepad right stick Y axis
  raylib.GAMEPAD_AXIS_LEFT_TRIGGER = 4 // Gamepad back trigger left, pressure level: [1..-1]
  raylib.GAMEPAD_AXIS_RIGHT_TRIGGER = 5 // Gamepad back trigger right, pressure level: [1..-1]

  // ENUM MaterialMapIndex
  // Material map index
  raylib.MATERIAL_MAP_ALBEDO = 0 // Albedo material (same as: MATERIAL_MAP_DIFFUSE)
  raylib.MATERIAL_MAP_METALNESS = 1 // Metalness material (same as: MATERIAL_MAP_SPECULAR)
  raylib.MATERIAL_MAP_NORMAL = 2 // Normal material
  raylib.MATERIAL_MAP_ROUGHNESS = 3 // Roughness material
  raylib.MATERIAL_MAP_OCCLUSION = 4 // Ambient occlusion material
  raylib.MATERIAL_MAP_EMISSION = 5 // Emission material
  raylib.MATERIAL_MAP_HEIGHT = 6 // Heightmap material
  raylib.MATERIAL_MAP_CUBEMAP = 7 // Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_IRRADIANCE = 8 // Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_PREFILTER = 9 // Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_BRDF = 10 // Brdf material

  // ENUM ShaderLocationIndex
  // Shader location index
  raylib.SHADER_LOC_VERTEX_POSITION = 0 // Shader location: vertex attribute: position
  raylib.SHADER_LOC_VERTEX_TEXCOORD01 = 1 // Shader location: vertex attribute: texcoord01
  raylib.SHADER_LOC_VERTEX_TEXCOORD02 = 2 // Shader location: vertex attribute: texcoord02
  raylib.SHADER_LOC_VERTEX_NORMAL = 3 // Shader location: vertex attribute: normal
  raylib.SHADER_LOC_VERTEX_TANGENT = 4 // Shader location: vertex attribute: tangent
  raylib.SHADER_LOC_VERTEX_COLOR = 5 // Shader location: vertex attribute: color
  raylib.SHADER_LOC_MATRIX_MVP = 6 // Shader location: matrix uniform: model-view-projection
  raylib.SHADER_LOC_MATRIX_VIEW = 7 // Shader location: matrix uniform: view (camera transform)
  raylib.SHADER_LOC_MATRIX_PROJECTION = 8 // Shader location: matrix uniform: projection
  raylib.SHADER_LOC_MATRIX_MODEL = 9 // Shader location: matrix uniform: model (transform)
  raylib.SHADER_LOC_MATRIX_NORMAL = 10 // Shader location: matrix uniform: normal
  raylib.SHADER_LOC_VECTOR_VIEW = 11 // Shader location: vector uniform: view
  raylib.SHADER_LOC_COLOR_DIFFUSE = 12 // Shader location: vector uniform: diffuse color
  raylib.SHADER_LOC_COLOR_SPECULAR = 13 // Shader location: vector uniform: specular color
  raylib.SHADER_LOC_COLOR_AMBIENT = 14 // Shader location: vector uniform: ambient color
  raylib.SHADER_LOC_MAP_ALBEDO = 15 // Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE)
  raylib.SHADER_LOC_MAP_METALNESS = 16 // Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR)
  raylib.SHADER_LOC_MAP_NORMAL = 17 // Shader location: sampler2d texture: normal
  raylib.SHADER_LOC_MAP_ROUGHNESS = 18 // Shader location: sampler2d texture: roughness
  raylib.SHADER_LOC_MAP_OCCLUSION = 19 // Shader location: sampler2d texture: occlusion
  raylib.SHADER_LOC_MAP_EMISSION = 20 // Shader location: sampler2d texture: emission
  raylib.SHADER_LOC_MAP_HEIGHT = 21 // Shader location: sampler2d texture: height
  raylib.SHADER_LOC_MAP_CUBEMAP = 22 // Shader location: samplerCube texture: cubemap
  raylib.SHADER_LOC_MAP_IRRADIANCE = 23 // Shader location: samplerCube texture: irradiance
  raylib.SHADER_LOC_MAP_PREFILTER = 24 // Shader location: samplerCube texture: prefilter
  raylib.SHADER_LOC_MAP_BRDF = 25 // Shader location: sampler2d texture: brdf

  // ENUM ShaderUniformDataType
  // Shader uniform data type
  raylib.SHADER_UNIFORM_FLOAT = 0 // Shader uniform type: float
  raylib.SHADER_UNIFORM_VEC2 = 1 // Shader uniform type: vec2 (2 float)
  raylib.SHADER_UNIFORM_VEC3 = 2 // Shader uniform type: vec3 (3 float)
  raylib.SHADER_UNIFORM_VEC4 = 3 // Shader uniform type: vec4 (4 float)
  raylib.SHADER_UNIFORM_INT = 4 // Shader uniform type: int
  raylib.SHADER_UNIFORM_IVEC2 = 5 // Shader uniform type: ivec2 (2 int)
  raylib.SHADER_UNIFORM_IVEC3 = 6 // Shader uniform type: ivec3 (3 int)
  raylib.SHADER_UNIFORM_IVEC4 = 7 // Shader uniform type: ivec4 (4 int)
  raylib.SHADER_UNIFORM_SAMPLER2D = 8 // Shader uniform type: sampler2d

  // ENUM ShaderAttributeDataType
  // Shader attribute data types
  raylib.SHADER_ATTRIB_FLOAT = 0 // Shader attribute type: float
  raylib.SHADER_ATTRIB_VEC2 = 1 // Shader attribute type: vec2 (2 float)
  raylib.SHADER_ATTRIB_VEC3 = 2 // Shader attribute type: vec3 (3 float)
  raylib.SHADER_ATTRIB_VEC4 = 3 // Shader attribute type: vec4 (4 float)

  // ENUM PixelFormat
  // Pixel formats
  raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1 // 8 bit per pixel (no alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2 // 8*2 bpp (2 channels)
  raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3 // 16 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4 // 24 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5 // 16 bpp (1 bit alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6 // 16 bpp (4 bit alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7 // 32 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R32 = 8 // 32 bpp (1 channel - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9 // 32*3 bpp (3 channels - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10 // 32*4 bpp (4 channels - float)
  raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB = 11 // 4 bpp (no alpha)
  raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12 // 4 bpp (1 bit alpha)
  raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB = 15 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB = 16 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB = 18 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21 // 2 bpp

  // ENUM TextureFilter
  // Texture parameters: filter mode
  raylib.TEXTURE_FILTER_POINT = 0 // No filter, just pixel approximation
  raylib.TEXTURE_FILTER_BILINEAR = 1 // Linear filtering
  raylib.TEXTURE_FILTER_TRILINEAR = 2 // Trilinear filtering (linear with mipmaps)
  raylib.TEXTURE_FILTER_ANISOTROPIC_4X = 3 // Anisotropic filtering 4x
  raylib.TEXTURE_FILTER_ANISOTROPIC_8X = 4 // Anisotropic filtering 8x
  raylib.TEXTURE_FILTER_ANISOTROPIC_16X = 5 // Anisotropic filtering 16x

  // ENUM TextureWrap
  // Texture parameters: wrap mode
  raylib.TEXTURE_WRAP_REPEAT = 0 // Repeats texture in tiled mode
  raylib.TEXTURE_WRAP_CLAMP = 1 // Clamps texture to edge pixel in tiled mode
  raylib.TEXTURE_WRAP_MIRROR_REPEAT = 2 // Mirrors and repeats the texture in tiled mode
  raylib.TEXTURE_WRAP_MIRROR_CLAMP = 3 // Mirrors and clamps to border the texture in tiled mode

  // ENUM CubemapLayout
  // Cubemap layouts
  raylib.CUBEMAP_LAYOUT_AUTO_DETECT = 0 // Automatically detect layout type
  raylib.CUBEMAP_LAYOUT_LINE_VERTICAL = 1 // Layout is defined by a vertical line with faces
  raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2 // Layout is defined by a horizontal line with faces
  raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3 // Layout is defined by a 3x4 cross with cubemap faces
  raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4 // Layout is defined by a 4x3 cross with cubemap faces
  raylib.CUBEMAP_LAYOUT_PANORAMA = 5 // Layout is defined by a panorama image (equirrectangular map)

  // ENUM FontType
  // Font type, defines generation method
  raylib.FONT_DEFAULT = 0 // Default font generation, anti-aliased
  raylib.FONT_BITMAP = 1 // Bitmap font generation, no anti-aliasing
  raylib.FONT_SDF = 2 // SDF font generation, requires external shader

  // ENUM BlendMode
  // Color blending modes (pre-defined)
  raylib.BLEND_ALPHA = 0 // Blend textures considering alpha (default)
  raylib.BLEND_ADDITIVE = 1 // Blend textures adding colors
  raylib.BLEND_MULTIPLIED = 2 // Blend textures multiplying colors
  raylib.BLEND_ADD_COLORS = 3 // Blend textures adding colors (alternative)
  raylib.BLEND_SUBTRACT_COLORS = 4 // Blend textures subtracting colors (alternative)
  raylib.BLEND_ALPHA_PREMULTIPLY = 5 // Blend premultiplied textures considering alpha
  raylib.BLEND_CUSTOM = 6 // Blend textures using custom src/dst factors (use rlSetBlendFactors())
  raylib.BLEND_CUSTOM_SEPARATE = 7 // Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate())

  // ENUM Gesture
  // Gesture
  raylib.GESTURE_NONE = 0 // No gesture
  raylib.GESTURE_TAP = 1 // Tap gesture
  raylib.GESTURE_DOUBLETAP = 2 // Double tap gesture
  raylib.GESTURE_HOLD = 4 // Hold gesture
  raylib.GESTURE_DRAG = 8 // Drag gesture
  raylib.GESTURE_SWIPE_RIGHT = 16 // Swipe right gesture
  raylib.GESTURE_SWIPE_LEFT = 32 // Swipe left gesture
  raylib.GESTURE_SWIPE_UP = 64 // Swipe up gesture
  raylib.GESTURE_SWIPE_DOWN = 128 // Swipe down gesture
  raylib.GESTURE_PINCH_IN = 256 // Pinch in gesture
  raylib.GESTURE_PINCH_OUT = 512 // Pinch out gesture

  // ENUM CameraMode
  // Camera system modes
  raylib.CAMERA_CUSTOM = 0 // Custom camera
  raylib.CAMERA_FREE = 1 // Free camera
  raylib.CAMERA_ORBITAL = 2 // Orbital camera
  raylib.CAMERA_FIRST_PERSON = 3 // First person camera
  raylib.CAMERA_THIRD_PERSON = 4 // Third person camera

  // ENUM CameraProjection
  // Camera projection
  raylib.CAMERA_PERSPECTIVE = 0 // Perspective projection
  raylib.CAMERA_ORTHOGRAPHIC = 1 // Orthographic projection

  // ENUM NPatchLayout
  // N-patch layout
  raylib.NPATCH_NINE_PATCH = 0 // Npatch layout: 3x3 tiles
  raylib.NPATCH_THREE_PATCH_VERTICAL = 1 // Npatch layout: 1x3 tiles
  raylib.NPATCH_THREE_PATCH_HORIZONTAL = 2 // Npatch layout: 3x1 tiles


  // TODO: you can add wasmBinary here for inline-loading
  const mod = await Module({canvas})
  raylib.module = mod

  raylib.LIGHTGRAY = new raylib.Color({r: 200, g: 200, b: 200, a: 255}) // Light Gray
  raylib.GRAY = new raylib.Color({r: 130, g: 130, b: 130, a: 255}) // Gray
  raylib.DARKGRAY = new raylib.Color({r: 80, g: 80, b: 80, a: 255}) // Dark Gray
  raylib.YELLOW = new raylib.Color({r: 253, g: 249, b: 0, a: 255}) // Yellow
  raylib.GOLD = new raylib.Color({r: 255, g: 203, b: 0, a: 255}) // Gold
  raylib.ORANGE = new raylib.Color({r: 255, g: 161, b: 0, a: 255}) // Orange
  raylib.PINK = new raylib.Color({r: 255, g: 109, b: 194, a: 255}) // Pink
  raylib.RED = new raylib.Color({r: 230, g: 41, b: 55, a: 255}) // Red
  raylib.MAROON = new raylib.Color({r: 190, g: 33, b: 55, a: 255}) // Maroon
  raylib.GREEN = new raylib.Color({r: 0, g: 228, b: 48, a: 255}) // Green
  raylib.LIME = new raylib.Color({r: 0, g: 158, b: 47, a: 255}) // Lime
  raylib.DARKGREEN = new raylib.Color({r: 0, g: 117, b: 44, a: 255}) // Dark Green
  raylib.SKYBLUE = new raylib.Color({r: 102, g: 191, b: 255, a: 255}) // Sky Blue
  raylib.BLUE = new raylib.Color({r: 0, g: 121, b: 241, a: 255}) // Blue
  raylib.DARKBLUE = new raylib.Color({r: 0, g: 82, b: 172, a: 255}) // Dark Blue
  raylib.PURPLE = new raylib.Color({r: 200, g: 122, b: 255, a: 255}) // Purple
  raylib.VIOLET = new raylib.Color({r: 135, g: 60, b: 190, a: 255}) // Violet
  raylib.DARKPURPLE = new raylib.Color({r: 112, g: 31, b: 126, a: 255}) // Dark Purple
  raylib.BEIGE = new raylib.Color({r: 211, g: 176, b: 131, a: 255}) // Beige
  raylib.BROWN = new raylib.Color({r: 127, g: 106, b: 79, a: 255}) // Brown
  raylib.DARKBROWN = new raylib.Color({r: 76, g: 63, b: 47, a: 255}) // Dark Brown
  raylib.WHITE = new raylib.Color({r: 255, g: 255, b: 255, a: 255}) // White
  raylib.BLACK = new raylib.Color({r: 0, g: 0, b: 0, a: 255}) // Black
  raylib.BLANK = new raylib.Color({r: 0, g: 0, b: 0, a: 0}) // Blank (Transparent)
  raylib.MAGENTA = new raylib.Color({r: 255, g: 0, b: 255, a: 255}) // Magenta
  raylib.RAYWHITE = new raylib.Color({r: 245, g: 245, b: 245, a: 255}) // My own White (raylib logo)

  // Initialize window and OpenGL context: InitWindow(int, int, const char *) => void
  const _InitWindow = mod.cwrap('InitWindow', 'void', ['number', 'number', 'string'])
  raylib.InitWindow = (width, height, title) => _InitWindow(width, height, title)

  // Check if KEY_ESCAPE pressed or Close icon pressed: WindowShouldClose() => bool
  const _WindowShouldClose = mod.cwrap('WindowShouldClose', 'void', [])
  raylib.WindowShouldClose = () => _WindowShouldClose()

  // Close window and unload OpenGL context: CloseWindow() => void
  const _CloseWindow = mod.cwrap('CloseWindow', 'void', [])
  raylib.CloseWindow = () => _CloseWindow()

  // Check if window has been initialized successfully: IsWindowReady() => bool
  const _IsWindowReady = mod.cwrap('IsWindowReady', 'void', [])
  raylib.IsWindowReady = () => _IsWindowReady()

  // Check if window is currently fullscreen: IsWindowFullscreen() => bool
  const _IsWindowFullscreen = mod.cwrap('IsWindowFullscreen', 'void', [])
  raylib.IsWindowFullscreen = () => _IsWindowFullscreen()

  // Check if window has been resized last frame: IsWindowResized() => bool
  const _IsWindowResized = mod.cwrap('IsWindowResized', 'void', [])
  raylib.IsWindowResized = () => _IsWindowResized()

  // Check if one specific window flag is enabled: IsWindowState(unsigned int) => bool
  const _IsWindowState = mod.cwrap('IsWindowState', 'void', ['number'])
  raylib.IsWindowState = (flag) => _IsWindowState(flag)

  // Clear window configuration state flags: ClearWindowState(unsigned int) => void
  const _ClearWindowState = mod.cwrap('ClearWindowState', 'void', ['number'])
  raylib.ClearWindowState = (flags) => _ClearWindowState(flags)

  // Set monitor for the current window (fullscreen mode): SetWindowMonitor(int) => void
  const _SetWindowMonitor = mod.cwrap('SetWindowMonitor', 'void', ['number'])
  raylib.SetWindowMonitor = (monitor) => _SetWindowMonitor(monitor)

  // Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE): SetWindowMinSize(int, int) => void
  const _SetWindowMinSize = mod.cwrap('SetWindowMinSize', 'void', ['number', 'number'])
  raylib.SetWindowMinSize = (width, height) => _SetWindowMinSize(width, height)

  // Set window dimensions: SetWindowSize(int, int) => void
  const _SetWindowSize = mod.cwrap('SetWindowSize', 'void', ['number', 'number'])
  raylib.SetWindowSize = (width, height) => _SetWindowSize(width, height)

  // Get native window handle: GetWindowHandle() => void *
  const _GetWindowHandle = mod.cwrap('GetWindowHandle', 'void', [])
  raylib.GetWindowHandle = () => _GetWindowHandle()

  // Get current screen width: GetScreenWidth() => int
  const _GetScreenWidth = mod.cwrap('GetScreenWidth', 'void', [])
  raylib.GetScreenWidth = () => _GetScreenWidth()

  // Get current screen height: GetScreenHeight() => int
  const _GetScreenHeight = mod.cwrap('GetScreenHeight', 'void', [])
  raylib.GetScreenHeight = () => _GetScreenHeight()

  // Get current render width (it considers HiDPI): GetRenderWidth() => int
  const _GetRenderWidth = mod.cwrap('GetRenderWidth', 'void', [])
  raylib.GetRenderWidth = () => _GetRenderWidth()

  // Get current render height (it considers HiDPI): GetRenderHeight() => int
  const _GetRenderHeight = mod.cwrap('GetRenderHeight', 'void', [])
  raylib.GetRenderHeight = () => _GetRenderHeight()

  // Get number of connected monitors: GetMonitorCount() => int
  const _GetMonitorCount = mod.cwrap('GetMonitorCount', 'void', [])
  raylib.GetMonitorCount = () => _GetMonitorCount()

  // Get current connected monitor: GetCurrentMonitor() => int
  const _GetCurrentMonitor = mod.cwrap('GetCurrentMonitor', 'void', [])
  raylib.GetCurrentMonitor = () => _GetCurrentMonitor()

  // Get specified monitor position: GetMonitorPosition(int) => Vector2
  const _GetMonitorPosition = mod.cwrap('GetMonitorPosition', 'void', ['pointer', 'number'])
  raylib.GetMonitorPosition = (monitor) => {
    const _ret = new raylib.Vector2()
    _GetMonitorPosition(_ret._address, monitor)
    return _ret
  }

  // Get specified monitor width (current video mode used by monitor): GetMonitorWidth(int) => int
  const _GetMonitorWidth = mod.cwrap('GetMonitorWidth', 'void', ['number'])
  raylib.GetMonitorWidth = (monitor) => _GetMonitorWidth(monitor)

  // Get specified monitor height (current video mode used by monitor): GetMonitorHeight(int) => int
  const _GetMonitorHeight = mod.cwrap('GetMonitorHeight', 'void', ['number'])
  raylib.GetMonitorHeight = (monitor) => _GetMonitorHeight(monitor)

  // Get specified monitor physical width in millimetres: GetMonitorPhysicalWidth(int) => int
  const _GetMonitorPhysicalWidth = mod.cwrap('GetMonitorPhysicalWidth', 'void', ['number'])
  raylib.GetMonitorPhysicalWidth = (monitor) => _GetMonitorPhysicalWidth(monitor)

  // Get specified monitor physical height in millimetres: GetMonitorPhysicalHeight(int) => int
  const _GetMonitorPhysicalHeight = mod.cwrap('GetMonitorPhysicalHeight', 'void', ['number'])
  raylib.GetMonitorPhysicalHeight = (monitor) => _GetMonitorPhysicalHeight(monitor)

  // Get specified monitor refresh rate: GetMonitorRefreshRate(int) => int
  const _GetMonitorRefreshRate = mod.cwrap('GetMonitorRefreshRate', 'void', ['number'])
  raylib.GetMonitorRefreshRate = (monitor) => _GetMonitorRefreshRate(monitor)

  // Get window position XY on monitor: GetWindowPosition() => Vector2
  const _GetWindowPosition = mod.cwrap('GetWindowPosition', 'void', ['pointer'])
  raylib.GetWindowPosition = () => {
    const _ret = new raylib.Vector2()
    _GetWindowPosition(_ret._address)
    return _ret
  }

  // Get window scale DPI factor: GetWindowScaleDPI() => Vector2
  const _GetWindowScaleDPI = mod.cwrap('GetWindowScaleDPI', 'void', ['pointer'])
  raylib.GetWindowScaleDPI = () => {
    const _ret = new raylib.Vector2()
    _GetWindowScaleDPI(_ret._address)
    return _ret
  }

  // Get the human-readable, UTF-8 encoded name of the primary monitor: GetMonitorName(int) => const char *
  const _GetMonitorName = mod.cwrap('GetMonitorName', 'void', ['number'])
  raylib.GetMonitorName = (monitor) => _GetMonitorName(monitor)

  // Set clipboard text content: SetClipboardText(const char *) => void
  const _SetClipboardText = mod.cwrap('SetClipboardText', 'void', ['string'])
  raylib.SetClipboardText = (text) => _SetClipboardText(text)

  // Get clipboard text content: GetClipboardText() => const char *
  const _GetClipboardText = mod.cwrap('GetClipboardText', 'void', [])
  raylib.GetClipboardText = () => _GetClipboardText()

  // Enable waiting for events on EndDrawing(), no automatic event polling: EnableEventWaiting() => void
  const _EnableEventWaiting = mod.cwrap('EnableEventWaiting', 'void', [])
  raylib.EnableEventWaiting = () => _EnableEventWaiting()

  // Disable waiting for events on EndDrawing(), automatic events polling: DisableEventWaiting() => void
  const _DisableEventWaiting = mod.cwrap('DisableEventWaiting', 'void', [])
  raylib.DisableEventWaiting = () => _DisableEventWaiting()

  // Swap back buffer with front buffer (screen drawing): SwapScreenBuffer() => void
  const _SwapScreenBuffer = mod.cwrap('SwapScreenBuffer', 'void', [])
  raylib.SwapScreenBuffer = () => _SwapScreenBuffer()

  // Register all input events: PollInputEvents() => void
  const _PollInputEvents = mod.cwrap('PollInputEvents', 'void', [])
  raylib.PollInputEvents = () => _PollInputEvents()

  // Wait for some time (halt program execution): WaitTime(double) => void
  const _WaitTime = mod.cwrap('WaitTime', 'void', ['number'])
  raylib.WaitTime = (seconds) => _WaitTime(seconds)

  // Shows cursor: ShowCursor() => void
  const _ShowCursor = mod.cwrap('ShowCursor', 'void', [])
  raylib.ShowCursor = () => _ShowCursor()

  // Hides cursor: HideCursor() => void
  const _HideCursor = mod.cwrap('HideCursor', 'void', [])
  raylib.HideCursor = () => _HideCursor()

  // Check if cursor is not visible: IsCursorHidden() => bool
  const _IsCursorHidden = mod.cwrap('IsCursorHidden', 'void', [])
  raylib.IsCursorHidden = () => _IsCursorHidden()

  // Enables cursor (unlock cursor): EnableCursor() => void
  const _EnableCursor = mod.cwrap('EnableCursor', 'void', [])
  raylib.EnableCursor = () => _EnableCursor()

  // Disables cursor (lock cursor): DisableCursor() => void
  const _DisableCursor = mod.cwrap('DisableCursor', 'void', [])
  raylib.DisableCursor = () => _DisableCursor()

  // Check if cursor is on the screen: IsCursorOnScreen() => bool
  const _IsCursorOnScreen = mod.cwrap('IsCursorOnScreen', 'void', [])
  raylib.IsCursorOnScreen = () => _IsCursorOnScreen()

  // Set background color (framebuffer clear color): ClearBackground(Color) => void
  const _ClearBackground = mod.cwrap('ClearBackground', 'void', ['pointer'])
  raylib.ClearBackground = (color) => _ClearBackground(color._address)

  // Setup canvas (framebuffer) to start drawing: BeginDrawing() => void
  const _BeginDrawing = mod.cwrap('BeginDrawing', 'void', [])
  raylib.BeginDrawing = () => _BeginDrawing()

  // End canvas drawing and swap buffers (double buffering): EndDrawing() => void
  const _EndDrawing = mod.cwrap('EndDrawing', 'void', [])
  raylib.EndDrawing = () => _EndDrawing()

  // Begin 2D mode with custom camera (2D): BeginMode2D(Camera2D) => void
  const _BeginMode2D = mod.cwrap('BeginMode2D', 'void', ['pointer'])
  raylib.BeginMode2D = (camera) => _BeginMode2D(camera._address)

  // Ends 2D mode with custom camera: EndMode2D() => void
  const _EndMode2D = mod.cwrap('EndMode2D', 'void', [])
  raylib.EndMode2D = () => _EndMode2D()

  // Begin 3D mode with custom camera (3D): BeginMode3D(Camera3D) => void
  const _BeginMode3D = mod.cwrap('BeginMode3D', 'void', ['pointer'])
  raylib.BeginMode3D = (camera) => _BeginMode3D(camera._address)

  // Ends 3D mode and returns to default 2D orthographic mode: EndMode3D() => void
  const _EndMode3D = mod.cwrap('EndMode3D', 'void', [])
  raylib.EndMode3D = () => _EndMode3D()

  // Begin drawing to render texture: BeginTextureMode(RenderTexture2D) => void
  const _BeginTextureMode = mod.cwrap('BeginTextureMode', 'void', ['pointer'])
  raylib.BeginTextureMode = (target) => _BeginTextureMode(target._address)

  // Ends drawing to render texture: EndTextureMode() => void
  const _EndTextureMode = mod.cwrap('EndTextureMode', 'void', [])
  raylib.EndTextureMode = () => _EndTextureMode()

  // Begin custom shader drawing: BeginShaderMode(Shader) => void
  const _BeginShaderMode = mod.cwrap('BeginShaderMode', 'void', ['pointer'])
  raylib.BeginShaderMode = (shader) => _BeginShaderMode(shader._address)

  // End custom shader drawing (use default shader): EndShaderMode() => void
  const _EndShaderMode = mod.cwrap('EndShaderMode', 'void', [])
  raylib.EndShaderMode = () => _EndShaderMode()

  // Begin blending mode (alpha, additive, multiplied, subtract, custom): BeginBlendMode(int) => void
  const _BeginBlendMode = mod.cwrap('BeginBlendMode', 'void', ['number'])
  raylib.BeginBlendMode = (mode) => _BeginBlendMode(mode)

  // End blending mode (reset to default: alpha blending): EndBlendMode() => void
  const _EndBlendMode = mod.cwrap('EndBlendMode', 'void', [])
  raylib.EndBlendMode = () => _EndBlendMode()

  // Begin scissor mode (define screen area for following drawing): BeginScissorMode(int, int, int, int) => void
  const _BeginScissorMode = mod.cwrap('BeginScissorMode', 'void', ['number', 'number', 'number', 'number'])
  raylib.BeginScissorMode = (x, y, width, height) => _BeginScissorMode(x, y, width, height)

  // End scissor mode: EndScissorMode() => void
  const _EndScissorMode = mod.cwrap('EndScissorMode', 'void', [])
  raylib.EndScissorMode = () => _EndScissorMode()

  // Begin stereo rendering (requires VR simulator): BeginVrStereoMode(VrStereoConfig) => void
  const _BeginVrStereoMode = mod.cwrap('BeginVrStereoMode', 'void', ['pointer'])
  raylib.BeginVrStereoMode = (config) => _BeginVrStereoMode(config._address)

  // End stereo rendering (requires VR simulator): EndVrStereoMode() => void
  const _EndVrStereoMode = mod.cwrap('EndVrStereoMode', 'void', [])
  raylib.EndVrStereoMode = () => _EndVrStereoMode()

  // Load VR stereo config for VR simulator device parameters: LoadVrStereoConfig(VrDeviceInfo) => VrStereoConfig
  const _LoadVrStereoConfig = mod.cwrap('LoadVrStereoConfig', 'void', ['pointer', 'pointer'])
  raylib.LoadVrStereoConfig = (device) => {
    const _ret = new raylib.VrStereoConfig()
    _LoadVrStereoConfig(_ret._address, device._address)
    return _ret
  }

  // Unload VR stereo config: UnloadVrStereoConfig(VrStereoConfig) => void
  const _UnloadVrStereoConfig = mod.cwrap('UnloadVrStereoConfig', 'void', ['pointer'])
  raylib.UnloadVrStereoConfig = (config) => _UnloadVrStereoConfig(config._address)

  // Load shader from files and bind default locations: LoadShader(const char *, const char *) => Shader
  const _LoadShader = mod.cwrap('LoadShader', 'void', ['pointer', 'string', 'string'])
  raylib.LoadShader = (vsFileName, fsFileName) => {
    const _ret = new raylib.Shader()
    _LoadShader(_ret._address, vsFileName, fsFileName)
    return _ret
  }

  // Load shader from code strings and bind default locations: LoadShaderFromMemory(const char *, const char *) => Shader
  const _LoadShaderFromMemory = mod.cwrap('LoadShaderFromMemory', 'void', ['pointer', 'string', 'string'])
  raylib.LoadShaderFromMemory = (vsCode, fsCode) => {
    const _ret = new raylib.Shader()
    _LoadShaderFromMemory(_ret._address, vsCode, fsCode)
    return _ret
  }

  // Check if a shader is ready: IsShaderReady(Shader) => bool
  const _IsShaderReady = mod.cwrap('IsShaderReady', 'void', ['pointer'])
  raylib.IsShaderReady = (shader) => _IsShaderReady(shader._address)

  // Get shader uniform location: GetShaderLocation(Shader, const char *) => int
  const _GetShaderLocation = mod.cwrap('GetShaderLocation', 'void', ['pointer', 'string'])
  raylib.GetShaderLocation = (shader, uniformName) => _GetShaderLocation(shader._address, uniformName)

  // Get shader attribute location: GetShaderLocationAttrib(Shader, const char *) => int
  const _GetShaderLocationAttrib = mod.cwrap('GetShaderLocationAttrib', 'void', ['pointer', 'string'])
  raylib.GetShaderLocationAttrib = (shader, attribName) => _GetShaderLocationAttrib(shader._address, attribName)

  // Set shader uniform value: SetShaderValue(Shader, int, const void *, int) => void
  const _SetShaderValue = mod.cwrap('SetShaderValue', 'void', ['pointer', 'number', 'pointer', 'number'])
  raylib.SetShaderValue = (shader, locIndex, value, uniformType) => _SetShaderValue(shader._address, locIndex, value._address, uniformType)

  // Set shader uniform value vector: SetShaderValueV(Shader, int, const void *, int, int) => void
  const _SetShaderValueV = mod.cwrap('SetShaderValueV', 'void', ['pointer', 'number', 'pointer', 'number', 'number'])
  raylib.SetShaderValueV = (shader, locIndex, value, uniformType, count) => _SetShaderValueV(shader._address, locIndex, value._address, uniformType, count)

  // Set shader uniform value (matrix 4x4): SetShaderValueMatrix(Shader, int, Matrix) => void
  const _SetShaderValueMatrix = mod.cwrap('SetShaderValueMatrix', 'void', ['pointer', 'number', 'pointer'])
  raylib.SetShaderValueMatrix = (shader, locIndex, mat) => _SetShaderValueMatrix(shader._address, locIndex, mat._address)

  // Set shader uniform value for texture (sampler2d): SetShaderValueTexture(Shader, int, Texture2D) => void
  const _SetShaderValueTexture = mod.cwrap('SetShaderValueTexture', 'void', ['pointer', 'number', 'pointer'])
  raylib.SetShaderValueTexture = (shader, locIndex, texture) => _SetShaderValueTexture(shader._address, locIndex, texture._address)

  // Unload shader from GPU memory (VRAM): UnloadShader(Shader) => void
  const _UnloadShader = mod.cwrap('UnloadShader', 'void', ['pointer'])
  raylib.UnloadShader = (shader) => _UnloadShader(shader._address)

  // Get a ray trace from mouse position: GetMouseRay(Vector2, Camera) => Ray
  const _GetMouseRay = mod.cwrap('GetMouseRay', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetMouseRay = (mousePosition, camera) => {
    const _ret = new raylib.Ray()
    _GetMouseRay(_ret._address, mousePosition._address, camera._address)
    return _ret
  }

  // Get camera transform matrix (view matrix): GetCameraMatrix(Camera) => Matrix
  const _GetCameraMatrix = mod.cwrap('GetCameraMatrix', 'void', ['pointer', 'pointer'])
  raylib.GetCameraMatrix = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraMatrix(_ret._address, camera._address)
    return _ret
  }

  // Get camera 2d transform matrix: GetCameraMatrix2D(Camera2D) => Matrix
  const _GetCameraMatrix2D = mod.cwrap('GetCameraMatrix2D', 'void', ['pointer', 'pointer'])
  raylib.GetCameraMatrix2D = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraMatrix2D(_ret._address, camera._address)
    return _ret
  }

  // Get the screen space position for a 3d world space position: GetWorldToScreen(Vector3, Camera) => Vector2
  const _GetWorldToScreen = mod.cwrap('GetWorldToScreen', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetWorldToScreen = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreen(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get the world space position for a 2d camera screen space position: GetScreenToWorld2D(Vector2, Camera2D) => Vector2
  const _GetScreenToWorld2D = mod.cwrap('GetScreenToWorld2D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetScreenToWorld2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetScreenToWorld2D(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get size position for a 3d world space position: GetWorldToScreenEx(Vector3, Camera, int, int) => Vector2
  const _GetWorldToScreenEx = mod.cwrap('GetWorldToScreenEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number'])
  raylib.GetWorldToScreenEx = (position, camera, width, height) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreenEx(_ret._address, position._address, camera._address, width, height)
    return _ret
  }

  // Get the screen space position for a 2d camera world space position: GetWorldToScreen2D(Vector2, Camera2D) => Vector2
  const _GetWorldToScreen2D = mod.cwrap('GetWorldToScreen2D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetWorldToScreen2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreen2D(_ret._address, position._address, camera._address)
    return _ret
  }

  // Set target FPS (maximum): SetTargetFPS(int) => void
  const _SetTargetFPS = mod.cwrap('SetTargetFPS', 'void', ['number'])
  raylib.SetTargetFPS = (fps) => _SetTargetFPS(fps)

  // Get current FPS: GetFPS() => int
  const _GetFPS = mod.cwrap('GetFPS', 'void', [])
  raylib.GetFPS = () => _GetFPS()

  // Get time in seconds for last frame drawn (delta time): GetFrameTime() => float
  const _GetFrameTime = mod.cwrap('GetFrameTime', 'void', [])
  raylib.GetFrameTime = () => _GetFrameTime()

  // Get elapsed time in seconds since InitWindow(): GetTime() => double
  const _GetTime = mod.cwrap('GetTime', 'void', [])
  raylib.GetTime = () => _GetTime()

  // Get a random value between min and max (both included): GetRandomValue(int, int) => int
  const _GetRandomValue = mod.cwrap('GetRandomValue', 'void', ['number', 'number'])
  raylib.GetRandomValue = (min, max) => _GetRandomValue(min, max)

  // Set the seed for the random number generator: SetRandomSeed(unsigned int) => void
  const _SetRandomSeed = mod.cwrap('SetRandomSeed', 'void', ['number'])
  raylib.SetRandomSeed = (seed) => _SetRandomSeed(seed)

  // Takes a screenshot of current screen (filename extension defines format): TakeScreenshot(const char *) => void
  const _TakeScreenshot = mod.cwrap('TakeScreenshot', 'void', ['string'])
  raylib.TakeScreenshot = (fileName) => _TakeScreenshot(fileName)

  // Setup init configuration flags (view FLAGS): SetConfigFlags(unsigned int) => void
  const _SetConfigFlags = mod.cwrap('SetConfigFlags', 'void', ['number'])
  raylib.SetConfigFlags = (flags) => _SetConfigFlags(flags)

  // Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...): TraceLog(int, const char *, ...) => void
  const _TraceLog = mod.cwrap('TraceLog', 'void', ['number', 'string', 'pointer'])
  raylib.TraceLog = (logLevel, text, args) => _TraceLog(logLevel, text, args._address)

  // Set the current threshold (minimum) log level: SetTraceLogLevel(int) => void
  const _SetTraceLogLevel = mod.cwrap('SetTraceLogLevel', 'void', ['number'])
  raylib.SetTraceLogLevel = (logLevel) => _SetTraceLogLevel(logLevel)

  // Internal memory allocator: MemAlloc(unsigned int) => void *
  const _MemAlloc = mod.cwrap('MemAlloc', 'void', ['number'])
  raylib.MemAlloc = (size) => _MemAlloc(size)

  // Internal memory reallocator: MemRealloc(void *, unsigned int) => void *
  const _MemRealloc = mod.cwrap('MemRealloc', 'void', ['pointer', 'number'])
  raylib.MemRealloc = (ptr, size) => _MemRealloc(ptr._address, size)

  // Internal memory free: MemFree(void *) => void
  const _MemFree = mod.cwrap('MemFree', 'void', ['pointer'])
  raylib.MemFree = (ptr) => _MemFree(ptr._address)

  // Open URL with default system browser (if available): OpenURL(const char *) => void
  const _OpenURL = mod.cwrap('OpenURL', 'void', ['string'])
  raylib.OpenURL = (url) => _OpenURL(url)

  // Set custom trace log: SetTraceLogCallback(TraceLogCallback) => void
  const _SetTraceLogCallback = mod.cwrap('SetTraceLogCallback', 'void', ['pointer'])
  raylib.SetTraceLogCallback = (callback) => _SetTraceLogCallback(callback._address)

  // Set custom file binary data loader: SetLoadFileDataCallback(LoadFileDataCallback) => void
  const _SetLoadFileDataCallback = mod.cwrap('SetLoadFileDataCallback', 'void', ['pointer'])
  raylib.SetLoadFileDataCallback = (callback) => _SetLoadFileDataCallback(callback._address)

  // Set custom file binary data saver: SetSaveFileDataCallback(SaveFileDataCallback) => void
  const _SetSaveFileDataCallback = mod.cwrap('SetSaveFileDataCallback', 'void', ['pointer'])
  raylib.SetSaveFileDataCallback = (callback) => _SetSaveFileDataCallback(callback._address)

  // Set custom file text data loader: SetLoadFileTextCallback(LoadFileTextCallback) => void
  const _SetLoadFileTextCallback = mod.cwrap('SetLoadFileTextCallback', 'void', ['pointer'])
  raylib.SetLoadFileTextCallback = (callback) => _SetLoadFileTextCallback(callback._address)

  // Set custom file text data saver: SetSaveFileTextCallback(SaveFileTextCallback) => void
  const _SetSaveFileTextCallback = mod.cwrap('SetSaveFileTextCallback', 'void', ['pointer'])
  raylib.SetSaveFileTextCallback = (callback) => _SetSaveFileTextCallback(callback._address)

  // Load file data as byte array (read): LoadFileData(const char *, unsigned int *) => unsigned char *
  const _LoadFileData = mod.cwrap('LoadFileData', 'void', ['string', 'pointer'])
  raylib.LoadFileData = (fileName, bytesRead) => _LoadFileData(fileName, bytesRead._address)

  // Unload file data allocated by LoadFileData(): UnloadFileData(unsigned char *) => void
  const _UnloadFileData = mod.cwrap('UnloadFileData', 'void', ['pointer'])
  raylib.UnloadFileData = (data) => _UnloadFileData(data._address)

  // Save data to file from byte array (write), returns true on success: SaveFileData(const char *, void *, unsigned int) => bool
  const _SaveFileData = mod.cwrap('SaveFileData', 'void', ['string', 'pointer', 'number'])
  raylib.SaveFileData = (fileName, data, bytesToWrite) => _SaveFileData(fileName, data._address, bytesToWrite)

  // Export data to code (.h), returns true on success: ExportDataAsCode(const unsigned char *, unsigned int, const char *) => bool
  const _ExportDataAsCode = mod.cwrap('ExportDataAsCode', 'void', ['pointer', 'number', 'string'])
  raylib.ExportDataAsCode = (data, size, fileName) => _ExportDataAsCode(data._address, size, fileName)

  // Load text data from file (read), returns a '\0' terminated string: LoadFileText(const char *) => char *
  const _LoadFileText = mod.cwrap('LoadFileText', 'void', ['string'])
  raylib.LoadFileText = (fileName) => _LoadFileText(fileName)

  // Unload file text data allocated by LoadFileText(): UnloadFileText(char *) => void
  const _UnloadFileText = mod.cwrap('UnloadFileText', 'void', ['pointer'])
  raylib.UnloadFileText = (text) => _UnloadFileText(text._address)

  // Save text data to file (write), string must be '\0' terminated, returns true on success: SaveFileText(const char *, char *) => bool
  const _SaveFileText = mod.cwrap('SaveFileText', 'void', ['string', 'pointer'])
  raylib.SaveFileText = (fileName, text) => _SaveFileText(fileName, text._address)

  // Check if file exists: FileExists(const char *) => bool
  const _FileExists = mod.cwrap('FileExists', 'void', ['string'])
  raylib.FileExists = (fileName) => _FileExists(fileName)

  // Check if a directory path exists: DirectoryExists(const char *) => bool
  const _DirectoryExists = mod.cwrap('DirectoryExists', 'void', ['string'])
  raylib.DirectoryExists = (dirPath) => _DirectoryExists(dirPath)

  // Check file extension (including point: .png, .wav): IsFileExtension(const char *, const char *) => bool
  const _IsFileExtension = mod.cwrap('IsFileExtension', 'void', ['string', 'string'])
  raylib.IsFileExtension = (fileName, ext) => _IsFileExtension(fileName, ext)

  // Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h): GetFileLength(const char *) => int
  const _GetFileLength = mod.cwrap('GetFileLength', 'void', ['string'])
  raylib.GetFileLength = (fileName) => _GetFileLength(fileName)

  // Get pointer to extension for a filename string (includes dot: '.png'): GetFileExtension(const char *) => const char *
  const _GetFileExtension = mod.cwrap('GetFileExtension', 'void', ['string'])
  raylib.GetFileExtension = (fileName) => _GetFileExtension(fileName)

  // Get pointer to filename for a path string: GetFileName(const char *) => const char *
  const _GetFileName = mod.cwrap('GetFileName', 'void', ['string'])
  raylib.GetFileName = (filePath) => _GetFileName(filePath)

  // Get filename string without extension (uses static string): GetFileNameWithoutExt(const char *) => const char *
  const _GetFileNameWithoutExt = mod.cwrap('GetFileNameWithoutExt', 'void', ['string'])
  raylib.GetFileNameWithoutExt = (filePath) => _GetFileNameWithoutExt(filePath)

  // Get full path for a given fileName with path (uses static string): GetDirectoryPath(const char *) => const char *
  const _GetDirectoryPath = mod.cwrap('GetDirectoryPath', 'void', ['string'])
  raylib.GetDirectoryPath = (filePath) => _GetDirectoryPath(filePath)

  // Get previous directory path for a given path (uses static string): GetPrevDirectoryPath(const char *) => const char *
  const _GetPrevDirectoryPath = mod.cwrap('GetPrevDirectoryPath', 'void', ['string'])
  raylib.GetPrevDirectoryPath = (dirPath) => _GetPrevDirectoryPath(dirPath)

  // Get current working directory (uses static string): GetWorkingDirectory() => const char *
  const _GetWorkingDirectory = mod.cwrap('GetWorkingDirectory', 'void', [])
  raylib.GetWorkingDirectory = () => _GetWorkingDirectory()

  // Get the directory if the running application (uses static string): GetApplicationDirectory() => const char *
  const _GetApplicationDirectory = mod.cwrap('GetApplicationDirectory', 'void', [])
  raylib.GetApplicationDirectory = () => _GetApplicationDirectory()

  // Change working directory, return true on success: ChangeDirectory(const char *) => bool
  const _ChangeDirectory = mod.cwrap('ChangeDirectory', 'void', ['string'])
  raylib.ChangeDirectory = (dir) => _ChangeDirectory(dir)

  // Check if a given path is a file or a directory: IsPathFile(const char *) => bool
  const _IsPathFile = mod.cwrap('IsPathFile', 'void', ['string'])
  raylib.IsPathFile = (path) => _IsPathFile(path)

  // Load directory filepaths: LoadDirectoryFiles(const char *) => FilePathList
  const _LoadDirectoryFiles = mod.cwrap('LoadDirectoryFiles', 'void', ['pointer', 'string'])
  raylib.LoadDirectoryFiles = (dirPath) => {
    const _ret = new raylib.FilePathList()
    _LoadDirectoryFiles(_ret._address, dirPath)
    return _ret
  }

  // Load directory filepaths with extension filtering and recursive directory scan: LoadDirectoryFilesEx(const char *, const char *, bool) => FilePathList
  const _LoadDirectoryFilesEx = mod.cwrap('LoadDirectoryFilesEx', 'void', ['pointer', 'string', 'string', 'boolean'])
  raylib.LoadDirectoryFilesEx = (basePath, filter, scanSubdirs) => {
    const _ret = new raylib.FilePathList()
    _LoadDirectoryFilesEx(_ret._address, basePath, filter, scanSubdirs)
    return _ret
  }

  // Unload filepaths: UnloadDirectoryFiles(FilePathList) => void
  const _UnloadDirectoryFiles = mod.cwrap('UnloadDirectoryFiles', 'void', ['pointer'])
  raylib.UnloadDirectoryFiles = (files) => _UnloadDirectoryFiles(files._address)

  // Check if a file has been dropped into window: IsFileDropped() => bool
  const _IsFileDropped = mod.cwrap('IsFileDropped', 'void', [])
  raylib.IsFileDropped = () => _IsFileDropped()

  // Load dropped filepaths: LoadDroppedFiles() => FilePathList
  const _LoadDroppedFiles = mod.cwrap('LoadDroppedFiles', 'void', ['pointer'])
  raylib.LoadDroppedFiles = () => {
    const _ret = new raylib.FilePathList()
    _LoadDroppedFiles(_ret._address)
    return _ret
  }

  // Unload dropped filepaths: UnloadDroppedFiles(FilePathList) => void
  const _UnloadDroppedFiles = mod.cwrap('UnloadDroppedFiles', 'void', ['pointer'])
  raylib.UnloadDroppedFiles = (files) => _UnloadDroppedFiles(files._address)

  // Get file modification time (last write time): GetFileModTime(const char *) => long
  const _GetFileModTime = mod.cwrap('GetFileModTime', 'void', ['string'])
  raylib.GetFileModTime = (fileName) => _GetFileModTime(fileName)

  // Compress data (DEFLATE algorithm), memory must be MemFree(): CompressData(const unsigned char *, int, int *) => unsigned char *
  const _CompressData = mod.cwrap('CompressData', 'void', ['pointer', 'number', 'pointer'])
  raylib.CompressData = (data, dataSize, compDataSize) => _CompressData(data._address, dataSize, compDataSize._address)

  // Decompress data (DEFLATE algorithm), memory must be MemFree(): DecompressData(const unsigned char *, int, int *) => unsigned char *
  const _DecompressData = mod.cwrap('DecompressData', 'void', ['pointer', 'number', 'pointer'])
  raylib.DecompressData = (compData, compDataSize, dataSize) => _DecompressData(compData._address, compDataSize, dataSize._address)

  // Encode data to Base64 string, memory must be MemFree(): EncodeDataBase64(const unsigned char *, int, int *) => char *
  const _EncodeDataBase64 = mod.cwrap('EncodeDataBase64', 'void', ['pointer', 'number', 'pointer'])
  raylib.EncodeDataBase64 = (data, dataSize, outputSize) => _EncodeDataBase64(data._address, dataSize, outputSize._address)

  // Decode Base64 string data, memory must be MemFree(): DecodeDataBase64(const unsigned char *, int *) => unsigned char *
  const _DecodeDataBase64 = mod.cwrap('DecodeDataBase64', 'void', ['pointer', 'pointer'])
  raylib.DecodeDataBase64 = (data, outputSize) => _DecodeDataBase64(data._address, outputSize._address)

  // Check if a key has been pressed once: IsKeyPressed(int) => bool
  const _IsKeyPressed = mod.cwrap('IsKeyPressed', 'void', ['number'])
  raylib.IsKeyPressed = (key) => _IsKeyPressed(key)

  // Check if a key is being pressed: IsKeyDown(int) => bool
  const _IsKeyDown = mod.cwrap('IsKeyDown', 'void', ['number'])
  raylib.IsKeyDown = (key) => _IsKeyDown(key)

  // Check if a key has been released once: IsKeyReleased(int) => bool
  const _IsKeyReleased = mod.cwrap('IsKeyReleased', 'void', ['number'])
  raylib.IsKeyReleased = (key) => _IsKeyReleased(key)

  // Check if a key is NOT being pressed: IsKeyUp(int) => bool
  const _IsKeyUp = mod.cwrap('IsKeyUp', 'void', ['number'])
  raylib.IsKeyUp = (key) => _IsKeyUp(key)

  // Set a custom key to exit program (default is ESC): SetExitKey(int) => void
  const _SetExitKey = mod.cwrap('SetExitKey', 'void', ['number'])
  raylib.SetExitKey = (key) => _SetExitKey(key)

  // Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty: GetKeyPressed() => int
  const _GetKeyPressed = mod.cwrap('GetKeyPressed', 'void', [])
  raylib.GetKeyPressed = () => _GetKeyPressed()

  // Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty: GetCharPressed() => int
  const _GetCharPressed = mod.cwrap('GetCharPressed', 'void', [])
  raylib.GetCharPressed = () => _GetCharPressed()

  // Check if a gamepad is available: IsGamepadAvailable(int) => bool
  const _IsGamepadAvailable = mod.cwrap('IsGamepadAvailable', 'void', ['number'])
  raylib.IsGamepadAvailable = (gamepad) => _IsGamepadAvailable(gamepad)

  // Get gamepad internal name id: GetGamepadName(int) => const char *
  const _GetGamepadName = mod.cwrap('GetGamepadName', 'void', ['number'])
  raylib.GetGamepadName = (gamepad) => _GetGamepadName(gamepad)

  // Check if a gamepad button has been pressed once: IsGamepadButtonPressed(int, int) => bool
  const _IsGamepadButtonPressed = mod.cwrap('IsGamepadButtonPressed', 'void', ['number', 'number'])
  raylib.IsGamepadButtonPressed = (gamepad, button) => _IsGamepadButtonPressed(gamepad, button)

  // Check if a gamepad button is being pressed: IsGamepadButtonDown(int, int) => bool
  const _IsGamepadButtonDown = mod.cwrap('IsGamepadButtonDown', 'void', ['number', 'number'])
  raylib.IsGamepadButtonDown = (gamepad, button) => _IsGamepadButtonDown(gamepad, button)

  // Check if a gamepad button has been released once: IsGamepadButtonReleased(int, int) => bool
  const _IsGamepadButtonReleased = mod.cwrap('IsGamepadButtonReleased', 'void', ['number', 'number'])
  raylib.IsGamepadButtonReleased = (gamepad, button) => _IsGamepadButtonReleased(gamepad, button)

  // Check if a gamepad button is NOT being pressed: IsGamepadButtonUp(int, int) => bool
  const _IsGamepadButtonUp = mod.cwrap('IsGamepadButtonUp', 'void', ['number', 'number'])
  raylib.IsGamepadButtonUp = (gamepad, button) => _IsGamepadButtonUp(gamepad, button)

  // Get the last gamepad button pressed: GetGamepadButtonPressed() => int
  const _GetGamepadButtonPressed = mod.cwrap('GetGamepadButtonPressed', 'void', [])
  raylib.GetGamepadButtonPressed = () => _GetGamepadButtonPressed()

  // Get gamepad axis count for a gamepad: GetGamepadAxisCount(int) => int
  const _GetGamepadAxisCount = mod.cwrap('GetGamepadAxisCount', 'void', ['number'])
  raylib.GetGamepadAxisCount = (gamepad) => _GetGamepadAxisCount(gamepad)

  // Get axis movement value for a gamepad axis: GetGamepadAxisMovement(int, int) => float
  const _GetGamepadAxisMovement = mod.cwrap('GetGamepadAxisMovement', 'void', ['number', 'number'])
  raylib.GetGamepadAxisMovement = (gamepad, axis) => _GetGamepadAxisMovement(gamepad, axis)

  // Set internal gamepad mappings (SDL_GameControllerDB): SetGamepadMappings(const char *) => int
  const _SetGamepadMappings = mod.cwrap('SetGamepadMappings', 'void', ['string'])
  raylib.SetGamepadMappings = (mappings) => _SetGamepadMappings(mappings)

  // Check if a mouse button has been pressed once: IsMouseButtonPressed(int) => bool
  const _IsMouseButtonPressed = mod.cwrap('IsMouseButtonPressed', 'void', ['number'])
  raylib.IsMouseButtonPressed = (button) => _IsMouseButtonPressed(button)

  // Check if a mouse button is being pressed: IsMouseButtonDown(int) => bool
  const _IsMouseButtonDown = mod.cwrap('IsMouseButtonDown', 'void', ['number'])
  raylib.IsMouseButtonDown = (button) => _IsMouseButtonDown(button)

  // Check if a mouse button has been released once: IsMouseButtonReleased(int) => bool
  const _IsMouseButtonReleased = mod.cwrap('IsMouseButtonReleased', 'void', ['number'])
  raylib.IsMouseButtonReleased = (button) => _IsMouseButtonReleased(button)

  // Check if a mouse button is NOT being pressed: IsMouseButtonUp(int) => bool
  const _IsMouseButtonUp = mod.cwrap('IsMouseButtonUp', 'void', ['number'])
  raylib.IsMouseButtonUp = (button) => _IsMouseButtonUp(button)

  // Get mouse position X: GetMouseX() => int
  const _GetMouseX = mod.cwrap('GetMouseX', 'void', [])
  raylib.GetMouseX = () => _GetMouseX()

  // Get mouse position Y: GetMouseY() => int
  const _GetMouseY = mod.cwrap('GetMouseY', 'void', [])
  raylib.GetMouseY = () => _GetMouseY()

  // Get mouse position XY: GetMousePosition() => Vector2
  const _GetMousePosition = mod.cwrap('GetMousePosition', 'void', ['pointer'])
  raylib.GetMousePosition = () => {
    const _ret = new raylib.Vector2()
    _GetMousePosition(_ret._address)
    return _ret
  }

  // Get mouse delta between frames: GetMouseDelta() => Vector2
  const _GetMouseDelta = mod.cwrap('GetMouseDelta', 'void', ['pointer'])
  raylib.GetMouseDelta = () => {
    const _ret = new raylib.Vector2()
    _GetMouseDelta(_ret._address)
    return _ret
  }

  // Set mouse position XY: SetMousePosition(int, int) => void
  const _SetMousePosition = mod.cwrap('SetMousePosition', 'void', ['number', 'number'])
  raylib.SetMousePosition = (x, y) => _SetMousePosition(x, y)

  // Set mouse offset: SetMouseOffset(int, int) => void
  const _SetMouseOffset = mod.cwrap('SetMouseOffset', 'void', ['number', 'number'])
  raylib.SetMouseOffset = (offsetX, offsetY) => _SetMouseOffset(offsetX, offsetY)

  // Set mouse scaling: SetMouseScale(float, float) => void
  const _SetMouseScale = mod.cwrap('SetMouseScale', 'void', ['number', 'number'])
  raylib.SetMouseScale = (scaleX, scaleY) => _SetMouseScale(scaleX, scaleY)

  // Get mouse wheel movement for X or Y, whichever is larger: GetMouseWheelMove() => float
  const _GetMouseWheelMove = mod.cwrap('GetMouseWheelMove', 'void', [])
  raylib.GetMouseWheelMove = () => _GetMouseWheelMove()

  // Get mouse wheel movement for both X and Y: GetMouseWheelMoveV() => Vector2
  const _GetMouseWheelMoveV = mod.cwrap('GetMouseWheelMoveV', 'void', ['pointer'])
  raylib.GetMouseWheelMoveV = () => {
    const _ret = new raylib.Vector2()
    _GetMouseWheelMoveV(_ret._address)
    return _ret
  }

  // Set mouse cursor: SetMouseCursor(int) => void
  const _SetMouseCursor = mod.cwrap('SetMouseCursor', 'void', ['number'])
  raylib.SetMouseCursor = (cursor) => _SetMouseCursor(cursor)

  // Get touch position X for touch point 0 (relative to screen size): GetTouchX() => int
  const _GetTouchX = mod.cwrap('GetTouchX', 'void', [])
  raylib.GetTouchX = () => _GetTouchX()

  // Get touch position Y for touch point 0 (relative to screen size): GetTouchY() => int
  const _GetTouchY = mod.cwrap('GetTouchY', 'void', [])
  raylib.GetTouchY = () => _GetTouchY()

  // Get touch position XY for a touch point index (relative to screen size): GetTouchPosition(int) => Vector2
  const _GetTouchPosition = mod.cwrap('GetTouchPosition', 'void', ['pointer', 'number'])
  raylib.GetTouchPosition = (index) => {
    const _ret = new raylib.Vector2()
    _GetTouchPosition(_ret._address, index)
    return _ret
  }

  // Get touch point identifier for given index: GetTouchPointId(int) => int
  const _GetTouchPointId = mod.cwrap('GetTouchPointId', 'void', ['number'])
  raylib.GetTouchPointId = (index) => _GetTouchPointId(index)

  // Get number of touch points: GetTouchPointCount() => int
  const _GetTouchPointCount = mod.cwrap('GetTouchPointCount', 'void', [])
  raylib.GetTouchPointCount = () => _GetTouchPointCount()

  // Enable a set of gestures using flags: SetGesturesEnabled(unsigned int) => void
  const _SetGesturesEnabled = mod.cwrap('SetGesturesEnabled', 'void', ['number'])
  raylib.SetGesturesEnabled = (flags) => _SetGesturesEnabled(flags)

  // Check if a gesture have been detected: IsGestureDetected(int) => bool
  const _IsGestureDetected = mod.cwrap('IsGestureDetected', 'void', ['number'])
  raylib.IsGestureDetected = (gesture) => _IsGestureDetected(gesture)

  // Get latest detected gesture: GetGestureDetected() => int
  const _GetGestureDetected = mod.cwrap('GetGestureDetected', 'void', [])
  raylib.GetGestureDetected = () => _GetGestureDetected()

  // Get gesture hold time in milliseconds: GetGestureHoldDuration() => float
  const _GetGestureHoldDuration = mod.cwrap('GetGestureHoldDuration', 'void', [])
  raylib.GetGestureHoldDuration = () => _GetGestureHoldDuration()

  // Get gesture drag vector: GetGestureDragVector() => Vector2
  const _GetGestureDragVector = mod.cwrap('GetGestureDragVector', 'void', ['pointer'])
  raylib.GetGestureDragVector = () => {
    const _ret = new raylib.Vector2()
    _GetGestureDragVector(_ret._address)
    return _ret
  }

  // Get gesture drag angle: GetGestureDragAngle() => float
  const _GetGestureDragAngle = mod.cwrap('GetGestureDragAngle', 'void', [])
  raylib.GetGestureDragAngle = () => _GetGestureDragAngle()

  // Get gesture pinch delta: GetGesturePinchVector() => Vector2
  const _GetGesturePinchVector = mod.cwrap('GetGesturePinchVector', 'void', ['pointer'])
  raylib.GetGesturePinchVector = () => {
    const _ret = new raylib.Vector2()
    _GetGesturePinchVector(_ret._address)
    return _ret
  }

  // Get gesture pinch angle: GetGesturePinchAngle() => float
  const _GetGesturePinchAngle = mod.cwrap('GetGesturePinchAngle', 'void', [])
  raylib.GetGesturePinchAngle = () => _GetGesturePinchAngle()

  // Update camera position for selected mode: UpdateCamera(Camera *, int) => void
  const _UpdateCamera = mod.cwrap('UpdateCamera', 'void', ['pointer', 'number'])
  raylib.UpdateCamera = (camera, mode) => _UpdateCamera(camera._address, mode)

  // Update camera movement/rotation: UpdateCameraPro(Camera *, Vector3, Vector3, float) => void
  const _UpdateCameraPro = mod.cwrap('UpdateCameraPro', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.UpdateCameraPro = (camera, movement, rotation, zoom) => _UpdateCameraPro(camera._address, movement._address, rotation._address, zoom)

  // Set texture and rectangle to be used on shapes drawing: SetShapesTexture(Texture2D, Rectangle) => void
  const _SetShapesTexture = mod.cwrap('SetShapesTexture', 'void', ['pointer', 'pointer'])
  raylib.SetShapesTexture = (texture, source) => _SetShapesTexture(texture._address, source._address)

  // Draw a pixel: DrawPixel(int, int, Color) => void
  const _DrawPixel = mod.cwrap('DrawPixel', 'void', ['number', 'number', 'pointer'])
  raylib.DrawPixel = (posX, posY, color) => _DrawPixel(posX, posY, color._address)

  // Draw a pixel (Vector version): DrawPixelV(Vector2, Color) => void
  const _DrawPixelV = mod.cwrap('DrawPixelV', 'void', ['pointer', 'pointer'])
  raylib.DrawPixelV = (position, color) => _DrawPixelV(position._address, color._address)

  // Draw a line: DrawLine(int, int, int, int, Color) => void
  const _DrawLine = mod.cwrap('DrawLine', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawLine = (startPosX, startPosY, endPosX, endPosY, color) => _DrawLine(startPosX, startPosY, endPosX, endPosY, color._address)

  // Draw a line (Vector version): DrawLineV(Vector2, Vector2, Color) => void
  const _DrawLineV = mod.cwrap('DrawLineV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawLineV = (startPos, endPos, color) => _DrawLineV(startPos._address, endPos._address, color._address)

  // Draw a line defining thickness: DrawLineEx(Vector2, Vector2, float, Color) => void
  const _DrawLineEx = mod.cwrap('DrawLineEx', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineEx = (startPos, endPos, thick, color) => _DrawLineEx(startPos._address, endPos._address, thick, color._address)

  // Draw a line using cubic-bezier curves in-out: DrawLineBezier(Vector2, Vector2, float, Color) => void
  const _DrawLineBezier = mod.cwrap('DrawLineBezier', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezier = (startPos, endPos, thick, color) => _DrawLineBezier(startPos._address, endPos._address, thick, color._address)

  // Draw line using quadratic bezier curves with a control point: DrawLineBezierQuad(Vector2, Vector2, Vector2, float, Color) => void
  const _DrawLineBezierQuad = mod.cwrap('DrawLineBezierQuad', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezierQuad = (startPos, endPos, controlPos, thick, color) => _DrawLineBezierQuad(startPos._address, endPos._address, controlPos._address, thick, color._address)

  // Draw line using cubic bezier curves with 2 control points: DrawLineBezierCubic(Vector2, Vector2, Vector2, Vector2, float, Color) => void
  const _DrawLineBezierCubic = mod.cwrap('DrawLineBezierCubic', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezierCubic = (startPos, endPos, startControlPos, endControlPos, thick, color) => _DrawLineBezierCubic(startPos._address, endPos._address, startControlPos._address, endControlPos._address, thick, color._address)

  // Draw lines sequence: DrawLineStrip(Vector2 *, int, Color) => void
  const _DrawLineStrip = mod.cwrap('DrawLineStrip', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawLineStrip = (points, pointCount, color) => _DrawLineStrip(points._address, pointCount, color._address)

  // Draw a color-filled circle: DrawCircle(int, int, float, Color) => void
  const _DrawCircle = mod.cwrap('DrawCircle', 'void', ['number', 'number', 'number', 'pointer'])
  raylib.DrawCircle = (centerX, centerY, radius, color) => _DrawCircle(centerX, centerY, radius, color._address)

  // Draw a piece of a circle: DrawCircleSector(Vector2, float, float, float, int, Color) => void
  const _DrawCircleSector = mod.cwrap('DrawCircleSector', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCircleSector = (center, radius, startAngle, endAngle, segments, color) => _DrawCircleSector(center._address, radius, startAngle, endAngle, segments, color._address)

  // Draw circle sector outline: DrawCircleSectorLines(Vector2, float, float, float, int, Color) => void
  const _DrawCircleSectorLines = mod.cwrap('DrawCircleSectorLines', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCircleSectorLines = (center, radius, startAngle, endAngle, segments, color) => _DrawCircleSectorLines(center._address, radius, startAngle, endAngle, segments, color._address)

  // Draw a gradient-filled circle: DrawCircleGradient(int, int, float, Color, Color) => void
  const _DrawCircleGradient = mod.cwrap('DrawCircleGradient', 'void', ['number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawCircleGradient = (centerX, centerY, radius, color1, color2) => _DrawCircleGradient(centerX, centerY, radius, color1._address, color2._address)

  // Draw a color-filled circle (Vector version): DrawCircleV(Vector2, float, Color) => void
  const _DrawCircleV = mod.cwrap('DrawCircleV', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawCircleV = (center, radius, color) => _DrawCircleV(center._address, radius, color._address)

  // Draw circle outline: DrawCircleLines(int, int, float, Color) => void
  const _DrawCircleLines = mod.cwrap('DrawCircleLines', 'void', ['number', 'number', 'number', 'pointer'])
  raylib.DrawCircleLines = (centerX, centerY, radius, color) => _DrawCircleLines(centerX, centerY, radius, color._address)

  // Draw ellipse: DrawEllipse(int, int, float, float, Color) => void
  const _DrawEllipse = mod.cwrap('DrawEllipse', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawEllipse = (centerX, centerY, radiusH, radiusV, color) => _DrawEllipse(centerX, centerY, radiusH, radiusV, color._address)

  // Draw ellipse outline: DrawEllipseLines(int, int, float, float, Color) => void
  const _DrawEllipseLines = mod.cwrap('DrawEllipseLines', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawEllipseLines = (centerX, centerY, radiusH, radiusV, color) => _DrawEllipseLines(centerX, centerY, radiusH, radiusV, color._address)

  // Draw ring: DrawRing(Vector2, float, float, float, float, int, Color) => void
  const _DrawRing = mod.cwrap('DrawRing', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRing = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => _DrawRing(center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address)

  // Draw ring outline: DrawRingLines(Vector2, float, float, float, float, int, Color) => void
  const _DrawRingLines = mod.cwrap('DrawRingLines', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRingLines = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => _DrawRingLines(center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address)

  // Draw a color-filled rectangle: DrawRectangle(int, int, int, int, Color) => void
  const _DrawRectangle = mod.cwrap('DrawRectangle', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangle = (posX, posY, width, height, color) => _DrawRectangle(posX, posY, width, height, color._address)

  // Draw a color-filled rectangle (Vector version): DrawRectangleV(Vector2, Vector2, Color) => void
  const _DrawRectangleV = mod.cwrap('DrawRectangleV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawRectangleV = (position, size, color) => _DrawRectangleV(position._address, size._address, color._address)

  // Draw a color-filled rectangle: DrawRectangleRec(Rectangle, Color) => void
  const _DrawRectangleRec = mod.cwrap('DrawRectangleRec', 'void', ['pointer', 'pointer'])
  raylib.DrawRectangleRec = (rec, color) => _DrawRectangleRec(rec._address, color._address)

  // Draw a color-filled rectangle with pro parameters: DrawRectanglePro(Rectangle, Vector2, float, Color) => void
  const _DrawRectanglePro = mod.cwrap('DrawRectanglePro', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawRectanglePro = (rec, origin, rotation, color) => _DrawRectanglePro(rec._address, origin._address, rotation, color._address)

  // Draw a vertical-gradient-filled rectangle: DrawRectangleGradientV(int, int, int, int, Color, Color) => void
  const _DrawRectangleGradientV = mod.cwrap('DrawRectangleGradientV', 'void', ['number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientV = (posX, posY, width, height, color1, color2) => _DrawRectangleGradientV(posX, posY, width, height, color1._address, color2._address)

  // Draw a horizontal-gradient-filled rectangle: DrawRectangleGradientH(int, int, int, int, Color, Color) => void
  const _DrawRectangleGradientH = mod.cwrap('DrawRectangleGradientH', 'void', ['number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientH = (posX, posY, width, height, color1, color2) => _DrawRectangleGradientH(posX, posY, width, height, color1._address, color2._address)

  // Draw a gradient-filled rectangle with custom vertex colors: DrawRectangleGradientEx(Rectangle, Color, Color, Color, Color) => void
  const _DrawRectangleGradientEx = mod.cwrap('DrawRectangleGradientEx', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientEx = (rec, col1, col2, col3, col4) => _DrawRectangleGradientEx(rec._address, col1._address, col2._address, col3._address, col4._address)

  // Draw rectangle outline: DrawRectangleLines(int, int, int, int, Color) => void
  const _DrawRectangleLines = mod.cwrap('DrawRectangleLines', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangleLines = (posX, posY, width, height, color) => _DrawRectangleLines(posX, posY, width, height, color._address)

  // Draw rectangle outline with extended parameters: DrawRectangleLinesEx(Rectangle, float, Color) => void
  const _DrawRectangleLinesEx = mod.cwrap('DrawRectangleLinesEx', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawRectangleLinesEx = (rec, lineThick, color) => _DrawRectangleLinesEx(rec._address, lineThick, color._address)

  // Draw rectangle with rounded edges: DrawRectangleRounded(Rectangle, float, int, Color) => void
  const _DrawRectangleRounded = mod.cwrap('DrawRectangleRounded', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRounded = (rec, roundness, segments, color) => _DrawRectangleRounded(rec._address, roundness, segments, color._address)

  // Draw rectangle with rounded edges outline: DrawRectangleRoundedLines(Rectangle, float, int, float, Color) => void
  const _DrawRectangleRoundedLines = mod.cwrap('DrawRectangleRoundedLines', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRoundedLines = (rec, roundness, segments, lineThick, color) => _DrawRectangleRoundedLines(rec._address, roundness, segments, lineThick, color._address)

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle(Vector2, Vector2, Vector2, Color) => void
  const _DrawTriangle = mod.cwrap('DrawTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangle = (v1, v2, v3, color) => _DrawTriangle(v1._address, v2._address, v3._address, color._address)

  // Draw triangle outline (vertex in counter-clockwise order!): DrawTriangleLines(Vector2, Vector2, Vector2, Color) => void
  const _DrawTriangleLines = mod.cwrap('DrawTriangleLines', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangleLines = (v1, v2, v3, color) => _DrawTriangleLines(v1._address, v2._address, v3._address, color._address)

  // Draw a triangle fan defined by points (first vertex is the center): DrawTriangleFan(Vector2 *, int, Color) => void
  const _DrawTriangleFan = mod.cwrap('DrawTriangleFan', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleFan = (points, pointCount, color) => _DrawTriangleFan(points._address, pointCount, color._address)

  // Draw a triangle strip defined by points: DrawTriangleStrip(Vector2 *, int, Color) => void
  const _DrawTriangleStrip = mod.cwrap('DrawTriangleStrip', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleStrip = (points, pointCount, color) => _DrawTriangleStrip(points._address, pointCount, color._address)

  // Draw a regular polygon (Vector version): DrawPoly(Vector2, int, float, float, Color) => void
  const _DrawPoly = mod.cwrap('DrawPoly', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPoly = (center, sides, radius, rotation, color) => _DrawPoly(center._address, sides, radius, rotation, color._address)

  // Draw a polygon outline of n sides: DrawPolyLines(Vector2, int, float, float, Color) => void
  const _DrawPolyLines = mod.cwrap('DrawPolyLines', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPolyLines = (center, sides, radius, rotation, color) => _DrawPolyLines(center._address, sides, radius, rotation, color._address)

  // Draw a polygon outline of n sides with extended parameters: DrawPolyLinesEx(Vector2, int, float, float, float, Color) => void
  const _DrawPolyLinesEx = mod.cwrap('DrawPolyLinesEx', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPolyLinesEx = (center, sides, radius, rotation, lineThick, color) => _DrawPolyLinesEx(center._address, sides, radius, rotation, lineThick, color._address)

  // Check collision between two rectangles: CheckCollisionRecs(Rectangle, Rectangle) => bool
  const _CheckCollisionRecs = mod.cwrap('CheckCollisionRecs', 'void', ['pointer', 'pointer'])
  raylib.CheckCollisionRecs = (rec1, rec2) => _CheckCollisionRecs(rec1._address, rec2._address)

  // Check collision between two circles: CheckCollisionCircles(Vector2, float, Vector2, float) => bool
  const _CheckCollisionCircles = mod.cwrap('CheckCollisionCircles', 'void', ['pointer', 'number', 'pointer', 'number'])
  raylib.CheckCollisionCircles = (center1, radius1, center2, radius2) => _CheckCollisionCircles(center1._address, radius1, center2._address, radius2)

  // Check collision between circle and rectangle: CheckCollisionCircleRec(Vector2, float, Rectangle) => bool
  const _CheckCollisionCircleRec = mod.cwrap('CheckCollisionCircleRec', 'void', ['pointer', 'number', 'pointer'])
  raylib.CheckCollisionCircleRec = (center, radius, rec) => _CheckCollisionCircleRec(center._address, radius, rec._address)

  // Check if point is inside rectangle: CheckCollisionPointRec(Vector2, Rectangle) => bool
  const _CheckCollisionPointRec = mod.cwrap('CheckCollisionPointRec', 'void', ['pointer', 'pointer'])
  raylib.CheckCollisionPointRec = (point, rec) => _CheckCollisionPointRec(point._address, rec._address)

  // Check if point is inside circle: CheckCollisionPointCircle(Vector2, Vector2, float) => bool
  const _CheckCollisionPointCircle = mod.cwrap('CheckCollisionPointCircle', 'void', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointCircle = (point, center, radius) => _CheckCollisionPointCircle(point._address, center._address, radius)

  // Check if point is inside a triangle: CheckCollisionPointTriangle(Vector2, Vector2, Vector2, Vector2) => bool
  const _CheckCollisionPointTriangle = mod.cwrap('CheckCollisionPointTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.CheckCollisionPointTriangle = (point, p1, p2, p3) => _CheckCollisionPointTriangle(point._address, p1._address, p2._address, p3._address)

  // Check if point is within a polygon described by array of vertices: CheckCollisionPointPoly(Vector2, Vector2 *, int) => bool
  const _CheckCollisionPointPoly = mod.cwrap('CheckCollisionPointPoly', 'void', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointPoly = (point, points, pointCount) => _CheckCollisionPointPoly(point._address, points._address, pointCount)

  // Check the collision between two lines defined by two points each, returns collision point by reference: CheckCollisionLines(Vector2, Vector2, Vector2, Vector2, Vector2 *) => bool
  const _CheckCollisionLines = mod.cwrap('CheckCollisionLines', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.CheckCollisionLines = (startPos1, endPos1, startPos2, endPos2, collisionPoint) => _CheckCollisionLines(startPos1._address, endPos1._address, startPos2._address, endPos2._address, collisionPoint._address)

  // Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]: CheckCollisionPointLine(Vector2, Vector2, Vector2, int) => bool
  const _CheckCollisionPointLine = mod.cwrap('CheckCollisionPointLine', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointLine = (point, p1, p2, threshold) => _CheckCollisionPointLine(point._address, p1._address, p2._address, threshold)

  // Get collision rectangle for two rectangles collision: GetCollisionRec(Rectangle, Rectangle) => Rectangle
  const _GetCollisionRec = mod.cwrap('GetCollisionRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetCollisionRec = (rec1, rec2) => {
    const _ret = new raylib.Rectangle()
    _GetCollisionRec(_ret._address, rec1._address, rec2._address)
    return _ret
  }

  // Load image from file into CPU memory (RAM): LoadImage(const char *) => Image
  const _LoadImage = mod.cwrap('LoadImage', 'void', ['pointer', 'string'])
  raylib.LoadImage = (fileName) => {
    const _ret = new raylib.Image()
    _LoadImage(_ret._address, fileName)
    return _ret
  }

  // Load image from RAW file data: LoadImageRaw(const char *, int, int, int, int) => Image
  const _LoadImageRaw = mod.cwrap('LoadImageRaw', 'void', ['pointer', 'string', 'number', 'number', 'number', 'number'])
  raylib.LoadImageRaw = (fileName, width, height, format, headerSize) => {
    const _ret = new raylib.Image()
    _LoadImageRaw(_ret._address, fileName, width, height, format, headerSize)
    return _ret
  }

  // Load image sequence from file (frames appended to image.data): LoadImageAnim(const char *, int *) => Image
  const _LoadImageAnim = mod.cwrap('LoadImageAnim', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadImageAnim = (fileName, frames) => {
    const _ret = new raylib.Image()
    _LoadImageAnim(_ret._address, fileName, frames._address)
    return _ret
  }

  // Load image from memory buffer, fileType refers to extension: i.e. '.png': LoadImageFromMemory(const char *, const unsigned char *, int) => Image
  const _LoadImageFromMemory = mod.cwrap('LoadImageFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadImageFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Image()
    _LoadImageFromMemory(_ret._address, fileType, fileData._address, dataSize)
    return _ret
  }

  // Load image from GPU texture data: LoadImageFromTexture(Texture2D) => Image
  const _LoadImageFromTexture = mod.cwrap('LoadImageFromTexture', 'void', ['pointer', 'pointer'])
  raylib.LoadImageFromTexture = (texture) => {
    const _ret = new raylib.Image()
    _LoadImageFromTexture(_ret._address, texture._address)
    return _ret
  }

  // Load image from screen buffer and (screenshot): LoadImageFromScreen() => Image
  const _LoadImageFromScreen = mod.cwrap('LoadImageFromScreen', 'void', ['pointer'])
  raylib.LoadImageFromScreen = () => {
    const _ret = new raylib.Image()
    _LoadImageFromScreen(_ret._address)
    return _ret
  }

  // Check if an image is ready: IsImageReady(Image) => bool
  const _IsImageReady = mod.cwrap('IsImageReady', 'void', ['pointer'])
  raylib.IsImageReady = (image) => _IsImageReady(image._address)

  // Unload image from CPU memory (RAM): UnloadImage(Image) => void
  const _UnloadImage = mod.cwrap('UnloadImage', 'void', ['pointer'])
  raylib.UnloadImage = (image) => _UnloadImage(image._address)

  // Export image data to file, returns true on success: ExportImage(Image, const char *) => bool
  const _ExportImage = mod.cwrap('ExportImage', 'void', ['pointer', 'string'])
  raylib.ExportImage = (image, fileName) => _ExportImage(image._address, fileName)

  // Export image as code file defining an array of bytes, returns true on success: ExportImageAsCode(Image, const char *) => bool
  const _ExportImageAsCode = mod.cwrap('ExportImageAsCode', 'void', ['pointer', 'string'])
  raylib.ExportImageAsCode = (image, fileName) => _ExportImageAsCode(image._address, fileName)

  // Generate image: plain color: GenImageColor(int, int, Color) => Image
  const _GenImageColor = mod.cwrap('GenImageColor', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.GenImageColor = (width, height, color) => {
    const _ret = new raylib.Image()
    _GenImageColor(_ret._address, width, height, color._address)
    return _ret
  }

  // Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient: GenImageGradientLinear(int, int, int, Color, Color) => Image
  const _GenImageGradientLinear = mod.cwrap('GenImageGradientLinear', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientLinear = (width, height, direction, start, end) => {
    const _ret = new raylib.Image()
    _GenImageGradientLinear(_ret._address, width, height, direction, start._address, end._address)
    return _ret
  }

  // Generate image: radial gradient: GenImageGradientRadial(int, int, float, Color, Color) => Image
  const _GenImageGradientRadial = mod.cwrap('GenImageGradientRadial', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientRadial = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    _GenImageGradientRadial(_ret._address, width, height, density, inner._address, outer._address)
    return _ret
  }

  // Generate image: square gradient: GenImageGradientSquare(int, int, float, Color, Color) => Image
  const _GenImageGradientSquare = mod.cwrap('GenImageGradientSquare', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientSquare = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    _GenImageGradientSquare(_ret._address, width, height, density, inner._address, outer._address)
    return _ret
  }

  // Generate image: checked: GenImageChecked(int, int, int, int, Color, Color) => Image
  const _GenImageChecked = mod.cwrap('GenImageChecked', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageChecked = (width, height, checksX, checksY, col1, col2) => {
    const _ret = new raylib.Image()
    _GenImageChecked(_ret._address, width, height, checksX, checksY, col1._address, col2._address)
    return _ret
  }

  // Generate image: white noise: GenImageWhiteNoise(int, int, float) => Image
  const _GenImageWhiteNoise = mod.cwrap('GenImageWhiteNoise', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenImageWhiteNoise = (width, height, factor) => {
    const _ret = new raylib.Image()
    _GenImageWhiteNoise(_ret._address, width, height, factor)
    return _ret
  }

  // Generate image: perlin noise: GenImagePerlinNoise(int, int, int, int, float) => Image
  const _GenImagePerlinNoise = mod.cwrap('GenImagePerlinNoise', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number'])
  raylib.GenImagePerlinNoise = (width, height, offsetX, offsetY, scale) => {
    const _ret = new raylib.Image()
    _GenImagePerlinNoise(_ret._address, width, height, offsetX, offsetY, scale)
    return _ret
  }

  // Generate image: cellular algorithm, bigger tileSize means bigger cells: GenImageCellular(int, int, int) => Image
  const _GenImageCellular = mod.cwrap('GenImageCellular', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenImageCellular = (width, height, tileSize) => {
    const _ret = new raylib.Image()
    _GenImageCellular(_ret._address, width, height, tileSize)
    return _ret
  }

  // Generate image: grayscale image from text data: GenImageText(int, int, const char *) => Image
  const _GenImageText = mod.cwrap('GenImageText', 'void', ['pointer', 'number', 'number', 'string'])
  raylib.GenImageText = (width, height, text) => {
    const _ret = new raylib.Image()
    _GenImageText(_ret._address, width, height, text)
    return _ret
  }

  // Create an image duplicate (useful for transformations): ImageCopy(Image) => Image
  const _ImageCopy = mod.cwrap('ImageCopy', 'void', ['pointer', 'pointer'])
  raylib.ImageCopy = (image) => {
    const _ret = new raylib.Image()
    _ImageCopy(_ret._address, image._address)
    return _ret
  }

  // Create an image from another image piece: ImageFromImage(Image, Rectangle) => Image
  const _ImageFromImage = mod.cwrap('ImageFromImage', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageFromImage = (image, rec) => {
    const _ret = new raylib.Image()
    _ImageFromImage(_ret._address, image._address, rec._address)
    return _ret
  }

  // Create an image from text (default font): ImageText(const char *, int, Color) => Image
  const _ImageText = mod.cwrap('ImageText', 'void', ['pointer', 'string', 'number', 'pointer'])
  raylib.ImageText = (text, fontSize, color) => {
    const _ret = new raylib.Image()
    _ImageText(_ret._address, text, fontSize, color._address)
    return _ret
  }

  // Create an image from text (custom sprite font): ImageTextEx(Font, const char *, float, float, Color) => Image
  const _ImageTextEx = mod.cwrap('ImageTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number', 'pointer'])
  raylib.ImageTextEx = (font, text, fontSize, spacing, tint) => {
    const _ret = new raylib.Image()
    _ImageTextEx(_ret._address, font._address, text, fontSize, spacing, tint._address)
    return _ret
  }

  // Convert image data to desired format: ImageFormat(Image *, int) => void
  const _ImageFormat = mod.cwrap('ImageFormat', 'void', ['pointer', 'number'])
  raylib.ImageFormat = (image, newFormat) => _ImageFormat(image._address, newFormat)

  // Convert image to POT (power-of-two): ImageToPOT(Image *, Color) => void
  const _ImageToPOT = mod.cwrap('ImageToPOT', 'void', ['pointer', 'pointer'])
  raylib.ImageToPOT = (image, fill) => _ImageToPOT(image._address, fill._address)

  // Crop an image to a defined rectangle: ImageCrop(Image *, Rectangle) => void
  const _ImageCrop = mod.cwrap('ImageCrop', 'void', ['pointer', 'pointer'])
  raylib.ImageCrop = (image, crop) => _ImageCrop(image._address, crop._address)

  // Crop image depending on alpha value: ImageAlphaCrop(Image *, float) => void
  const _ImageAlphaCrop = mod.cwrap('ImageAlphaCrop', 'void', ['pointer', 'number'])
  raylib.ImageAlphaCrop = (image, threshold) => _ImageAlphaCrop(image._address, threshold)

  // Clear alpha channel to desired color: ImageAlphaClear(Image *, Color, float) => void
  const _ImageAlphaClear = mod.cwrap('ImageAlphaClear', 'void', ['pointer', 'pointer', 'number'])
  raylib.ImageAlphaClear = (image, color, threshold) => _ImageAlphaClear(image._address, color._address, threshold)

  // Apply alpha mask to image: ImageAlphaMask(Image *, Image) => void
  const _ImageAlphaMask = mod.cwrap('ImageAlphaMask', 'void', ['pointer', 'pointer'])
  raylib.ImageAlphaMask = (image, alphaMask) => _ImageAlphaMask(image._address, alphaMask._address)

  // Premultiply alpha channel: ImageAlphaPremultiply(Image *) => void
  const _ImageAlphaPremultiply = mod.cwrap('ImageAlphaPremultiply', 'void', ['pointer'])
  raylib.ImageAlphaPremultiply = (image) => _ImageAlphaPremultiply(image._address)

  // Apply Gaussian blur using a box blur approximation: ImageBlurGaussian(Image *, int) => void
  const _ImageBlurGaussian = mod.cwrap('ImageBlurGaussian', 'void', ['pointer', 'number'])
  raylib.ImageBlurGaussian = (image, blurSize) => _ImageBlurGaussian(image._address, blurSize)

  // Resize image (Bicubic scaling algorithm): ImageResize(Image *, int, int) => void
  const _ImageResize = mod.cwrap('ImageResize', 'void', ['pointer', 'number', 'number'])
  raylib.ImageResize = (image, newWidth, newHeight) => _ImageResize(image._address, newWidth, newHeight)

  // Resize image (Nearest-Neighbor scaling algorithm): ImageResizeNN(Image *, int, int) => void
  const _ImageResizeNN = mod.cwrap('ImageResizeNN', 'void', ['pointer', 'number', 'number'])
  raylib.ImageResizeNN = (image, newWidth, newHeight) => _ImageResizeNN(image._address, newWidth, newHeight)

  // Resize canvas and fill with color: ImageResizeCanvas(Image *, int, int, int, int, Color) => void
  const _ImageResizeCanvas = mod.cwrap('ImageResizeCanvas', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageResizeCanvas = (image, newWidth, newHeight, offsetX, offsetY, fill) => _ImageResizeCanvas(image._address, newWidth, newHeight, offsetX, offsetY, fill._address)

  // Compute all mipmap levels for a provided image: ImageMipmaps(Image *) => void
  const _ImageMipmaps = mod.cwrap('ImageMipmaps', 'void', ['pointer'])
  raylib.ImageMipmaps = (image) => _ImageMipmaps(image._address)

  // Dither image data to 16bpp or lower (Floyd-Steinberg dithering): ImageDither(Image *, int, int, int, int) => void
  const _ImageDither = mod.cwrap('ImageDither', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.ImageDither = (image, rBpp, gBpp, bBpp, aBpp) => _ImageDither(image._address, rBpp, gBpp, bBpp, aBpp)

  // Flip image vertically: ImageFlipVertical(Image *) => void
  const _ImageFlipVertical = mod.cwrap('ImageFlipVertical', 'void', ['pointer'])
  raylib.ImageFlipVertical = (image) => _ImageFlipVertical(image._address)

  // Flip image horizontally: ImageFlipHorizontal(Image *) => void
  const _ImageFlipHorizontal = mod.cwrap('ImageFlipHorizontal', 'void', ['pointer'])
  raylib.ImageFlipHorizontal = (image) => _ImageFlipHorizontal(image._address)

  // Rotate image by input angle in degrees (-359 to 359) : ImageRotate(Image *, int) => void
  const _ImageRotate = mod.cwrap('ImageRotate', 'void', ['pointer', 'number'])
  raylib.ImageRotate = (image, degrees) => _ImageRotate(image._address, degrees)

  // Rotate image clockwise 90deg: ImageRotateCW(Image *) => void
  const _ImageRotateCW = mod.cwrap('ImageRotateCW', 'void', ['pointer'])
  raylib.ImageRotateCW = (image) => _ImageRotateCW(image._address)

  // Rotate image counter-clockwise 90deg: ImageRotateCCW(Image *) => void
  const _ImageRotateCCW = mod.cwrap('ImageRotateCCW', 'void', ['pointer'])
  raylib.ImageRotateCCW = (image) => _ImageRotateCCW(image._address)

  // Modify image color: tint: ImageColorTint(Image *, Color) => void
  const _ImageColorTint = mod.cwrap('ImageColorTint', 'void', ['pointer', 'pointer'])
  raylib.ImageColorTint = (image, color) => _ImageColorTint(image._address, color._address)

  // Modify image color: invert: ImageColorInvert(Image *) => void
  const _ImageColorInvert = mod.cwrap('ImageColorInvert', 'void', ['pointer'])
  raylib.ImageColorInvert = (image) => _ImageColorInvert(image._address)

  // Modify image color: grayscale: ImageColorGrayscale(Image *) => void
  const _ImageColorGrayscale = mod.cwrap('ImageColorGrayscale', 'void', ['pointer'])
  raylib.ImageColorGrayscale = (image) => _ImageColorGrayscale(image._address)

  // Modify image color: contrast (-100 to 100): ImageColorContrast(Image *, float) => void
  const _ImageColorContrast = mod.cwrap('ImageColorContrast', 'void', ['pointer', 'number'])
  raylib.ImageColorContrast = (image, contrast) => _ImageColorContrast(image._address, contrast)

  // Modify image color: brightness (-255 to 255): ImageColorBrightness(Image *, int) => void
  const _ImageColorBrightness = mod.cwrap('ImageColorBrightness', 'void', ['pointer', 'number'])
  raylib.ImageColorBrightness = (image, brightness) => _ImageColorBrightness(image._address, brightness)

  // Modify image color: replace color: ImageColorReplace(Image *, Color, Color) => void
  const _ImageColorReplace = mod.cwrap('ImageColorReplace', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageColorReplace = (image, color, replace) => _ImageColorReplace(image._address, color._address, replace._address)

  // Load color data from image as a Color array (RGBA - 32bit): LoadImageColors(Image) => Color *
  const _LoadImageColors = mod.cwrap('LoadImageColors', 'void', ['pointer', 'pointer'])
  raylib.LoadImageColors = (image) => {
    const _ret = new raylib.Color()
    _LoadImageColors(_ret._address, image._address)
    return _ret
  }

  // Load colors palette from image as a Color array (RGBA - 32bit): LoadImagePalette(Image, int, int *) => Color *
  const _LoadImagePalette = mod.cwrap('LoadImagePalette', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.LoadImagePalette = (image, maxPaletteSize, colorCount) => {
    const _ret = new raylib.Color()
    _LoadImagePalette(_ret._address, image._address, maxPaletteSize, colorCount._address)
    return _ret
  }

  // Unload color data loaded with LoadImageColors(): UnloadImageColors(Color *) => void
  const _UnloadImageColors = mod.cwrap('UnloadImageColors', 'void', ['pointer'])
  raylib.UnloadImageColors = (colors) => _UnloadImageColors(colors._address)

  // Unload colors palette loaded with LoadImagePalette(): UnloadImagePalette(Color *) => void
  const _UnloadImagePalette = mod.cwrap('UnloadImagePalette', 'void', ['pointer'])
  raylib.UnloadImagePalette = (colors) => _UnloadImagePalette(colors._address)

  // Get image alpha border rectangle: GetImageAlphaBorder(Image, float) => Rectangle
  const _GetImageAlphaBorder = mod.cwrap('GetImageAlphaBorder', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetImageAlphaBorder = (image, threshold) => {
    const _ret = new raylib.Rectangle()
    _GetImageAlphaBorder(_ret._address, image._address, threshold)
    return _ret
  }

  // Get image pixel color at (x, y) position: GetImageColor(Image, int, int) => Color
  const _GetImageColor = mod.cwrap('GetImageColor', 'void', ['pointer', 'pointer', 'number', 'number'])
  raylib.GetImageColor = (image, x, y) => {
    const _ret = new raylib.Color()
    _GetImageColor(_ret._address, image._address, x, y)
    return _ret
  }

  // Clear image background with given color: ImageClearBackground(Image *, Color) => void
  const _ImageClearBackground = mod.cwrap('ImageClearBackground', 'void', ['pointer', 'pointer'])
  raylib.ImageClearBackground = (dst, color) => _ImageClearBackground(dst._address, color._address)

  // Draw pixel within an image: ImageDrawPixel(Image *, int, int, Color) => void
  const _ImageDrawPixel = mod.cwrap('ImageDrawPixel', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.ImageDrawPixel = (dst, posX, posY, color) => _ImageDrawPixel(dst._address, posX, posY, color._address)

  // Draw pixel within an image (Vector version): ImageDrawPixelV(Image *, Vector2, Color) => void
  const _ImageDrawPixelV = mod.cwrap('ImageDrawPixelV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageDrawPixelV = (dst, position, color) => _ImageDrawPixelV(dst._address, position._address, color._address)

  // Draw line within an image: ImageDrawLine(Image *, int, int, int, int, Color) => void
  const _ImageDrawLine = mod.cwrap('ImageDrawLine', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawLine = (dst, startPosX, startPosY, endPosX, endPosY, color) => _ImageDrawLine(dst._address, startPosX, startPosY, endPosX, endPosY, color._address)

  // Draw line within an image (Vector version): ImageDrawLineV(Image *, Vector2, Vector2, Color) => void
  const _ImageDrawLineV = mod.cwrap('ImageDrawLineV', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawLineV = (dst, start, end, color) => _ImageDrawLineV(dst._address, start._address, end._address, color._address)

  // Draw a filled circle within an image: ImageDrawCircle(Image *, int, int, int, Color) => void
  const _ImageDrawCircle = mod.cwrap('ImageDrawCircle', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawCircle = (dst, centerX, centerY, radius, color) => _ImageDrawCircle(dst._address, centerX, centerY, radius, color._address)

  // Draw a filled circle within an image (Vector version): ImageDrawCircleV(Image *, Vector2, int, Color) => void
  const _ImageDrawCircleV = mod.cwrap('ImageDrawCircleV', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawCircleV = (dst, center, radius, color) => _ImageDrawCircleV(dst._address, center._address, radius, color._address)

  // Draw circle outline within an image: ImageDrawCircleLines(Image *, int, int, int, Color) => void
  const _ImageDrawCircleLines = mod.cwrap('ImageDrawCircleLines', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawCircleLines = (dst, centerX, centerY, radius, color) => _ImageDrawCircleLines(dst._address, centerX, centerY, radius, color._address)

  // Draw circle outline within an image (Vector version): ImageDrawCircleLinesV(Image *, Vector2, int, Color) => void
  const _ImageDrawCircleLinesV = mod.cwrap('ImageDrawCircleLinesV', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawCircleLinesV = (dst, center, radius, color) => _ImageDrawCircleLinesV(dst._address, center._address, radius, color._address)

  // Draw rectangle within an image: ImageDrawRectangle(Image *, int, int, int, int, Color) => void
  const _ImageDrawRectangle = mod.cwrap('ImageDrawRectangle', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawRectangle = (dst, posX, posY, width, height, color) => _ImageDrawRectangle(dst._address, posX, posY, width, height, color._address)

  // Draw rectangle within an image (Vector version): ImageDrawRectangleV(Image *, Vector2, Vector2, Color) => void
  const _ImageDrawRectangleV = mod.cwrap('ImageDrawRectangleV', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawRectangleV = (dst, position, size, color) => _ImageDrawRectangleV(dst._address, position._address, size._address, color._address)

  // Draw rectangle within an image: ImageDrawRectangleRec(Image *, Rectangle, Color) => void
  const _ImageDrawRectangleRec = mod.cwrap('ImageDrawRectangleRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageDrawRectangleRec = (dst, rec, color) => _ImageDrawRectangleRec(dst._address, rec._address, color._address)

  // Draw rectangle lines within an image: ImageDrawRectangleLines(Image *, Rectangle, int, Color) => void
  const _ImageDrawRectangleLines = mod.cwrap('ImageDrawRectangleLines', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawRectangleLines = (dst, rec, thick, color) => _ImageDrawRectangleLines(dst._address, rec._address, thick, color._address)

  // Draw a source image within a destination image (tint applied to source): ImageDraw(Image *, Image, Rectangle, Rectangle, Color) => void
  const _ImageDraw = mod.cwrap('ImageDraw', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDraw = (dst, src, srcRec, dstRec, tint) => _ImageDraw(dst._address, src._address, srcRec._address, dstRec._address, tint._address)

  // Draw text (using default font) within an image (destination): ImageDrawText(Image *, const char *, int, int, int, Color) => void
  const _ImageDrawText = mod.cwrap('ImageDrawText', 'void', ['pointer', 'string', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawText = (dst, text, posX, posY, fontSize, color) => _ImageDrawText(dst._address, text, posX, posY, fontSize, color._address)

  // Draw text (custom sprite font) within an image (destination): ImageDrawTextEx(Image *, Font, const char *, Vector2, float, float, Color) => void
  const _ImageDrawTextEx = mod.cwrap('ImageDrawTextEx', 'void', ['pointer', 'pointer', 'string', 'pointer', 'number', 'number', 'pointer'])
  raylib.ImageDrawTextEx = (dst, font, text, position, fontSize, spacing, tint) => _ImageDrawTextEx(dst._address, font._address, text, position._address, fontSize, spacing, tint._address)

  // Load texture from file into GPU memory (VRAM): LoadTexture(const char *) => Texture2D
  const _LoadTexture = mod.cwrap('LoadTexture', 'void', ['pointer', 'string'])
  raylib.LoadTexture = (fileName) => {
    const _ret = new raylib.Texture2D()
    _LoadTexture(_ret._address, fileName)
    return _ret
  }

  // Load texture from image data: LoadTextureFromImage(Image) => Texture2D
  const _LoadTextureFromImage = mod.cwrap('LoadTextureFromImage', 'void', ['pointer', 'pointer'])
  raylib.LoadTextureFromImage = (image) => {
    const _ret = new raylib.Texture2D()
    _LoadTextureFromImage(_ret._address, image._address)
    return _ret
  }

  // Load cubemap from image, multiple image cubemap layouts supported: LoadTextureCubemap(Image, int) => TextureCubemap
  const _LoadTextureCubemap = mod.cwrap('LoadTextureCubemap', 'void', ['pointer', 'pointer', 'number'])
  raylib.LoadTextureCubemap = (image, layout) => {
    const _ret = new raylib.TextureCubemap()
    _LoadTextureCubemap(_ret._address, image._address, layout)
    return _ret
  }

  // Load texture for rendering (framebuffer): LoadRenderTexture(int, int) => RenderTexture2D
  const _LoadRenderTexture = mod.cwrap('LoadRenderTexture', 'void', ['pointer', 'number', 'number'])
  raylib.LoadRenderTexture = (width, height) => {
    const _ret = new raylib.RenderTexture2D()
    _LoadRenderTexture(_ret._address, width, height)
    return _ret
  }

  // Check if a texture is ready: IsTextureReady(Texture2D) => bool
  const _IsTextureReady = mod.cwrap('IsTextureReady', 'void', ['pointer'])
  raylib.IsTextureReady = (texture) => _IsTextureReady(texture._address)

  // Unload texture from GPU memory (VRAM): UnloadTexture(Texture2D) => void
  const _UnloadTexture = mod.cwrap('UnloadTexture', 'void', ['pointer'])
  raylib.UnloadTexture = (texture) => _UnloadTexture(texture._address)

  // Check if a render texture is ready: IsRenderTextureReady(RenderTexture2D) => bool
  const _IsRenderTextureReady = mod.cwrap('IsRenderTextureReady', 'void', ['pointer'])
  raylib.IsRenderTextureReady = (target) => _IsRenderTextureReady(target._address)

  // Unload render texture from GPU memory (VRAM): UnloadRenderTexture(RenderTexture2D) => void
  const _UnloadRenderTexture = mod.cwrap('UnloadRenderTexture', 'void', ['pointer'])
  raylib.UnloadRenderTexture = (target) => _UnloadRenderTexture(target._address)

  // Update GPU texture with new data: UpdateTexture(Texture2D, const void *) => void
  const _UpdateTexture = mod.cwrap('UpdateTexture', 'void', ['pointer', 'pointer'])
  raylib.UpdateTexture = (texture, pixels) => _UpdateTexture(texture._address, pixels._address)

  // Update GPU texture rectangle with new data: UpdateTextureRec(Texture2D, Rectangle, const void *) => void
  const _UpdateTextureRec = mod.cwrap('UpdateTextureRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.UpdateTextureRec = (texture, rec, pixels) => _UpdateTextureRec(texture._address, rec._address, pixels._address)

  // Generate GPU mipmaps for a texture: GenTextureMipmaps(Texture2D *) => void
  const _GenTextureMipmaps = mod.cwrap('GenTextureMipmaps', 'void', ['pointer'])
  raylib.GenTextureMipmaps = (texture) => _GenTextureMipmaps(texture._address)

  // Set texture scaling filter mode: SetTextureFilter(Texture2D, int) => void
  const _SetTextureFilter = mod.cwrap('SetTextureFilter', 'void', ['pointer', 'number'])
  raylib.SetTextureFilter = (texture, filter) => _SetTextureFilter(texture._address, filter)

  // Set texture wrapping mode: SetTextureWrap(Texture2D, int) => void
  const _SetTextureWrap = mod.cwrap('SetTextureWrap', 'void', ['pointer', 'number'])
  raylib.SetTextureWrap = (texture, wrap) => _SetTextureWrap(texture._address, wrap)

  // Draw a Texture2D: DrawTexture(Texture2D, int, int, Color) => void
  const _DrawTexture = mod.cwrap('DrawTexture', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawTexture = (texture, posX, posY, tint) => _DrawTexture(texture._address, posX, posY, tint._address)

  // Draw a Texture2D with position defined as Vector2: DrawTextureV(Texture2D, Vector2, Color) => void
  const _DrawTextureV = mod.cwrap('DrawTextureV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawTextureV = (texture, position, tint) => _DrawTextureV(texture._address, position._address, tint._address)

  // Draw a Texture2D with extended parameters: DrawTextureEx(Texture2D, Vector2, float, float, Color) => void
  const _DrawTextureEx = mod.cwrap('DrawTextureEx', 'void', ['pointer', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextureEx = (texture, position, rotation, scale, tint) => _DrawTextureEx(texture._address, position._address, rotation, scale, tint._address)

  // Draw a part of a texture defined by a rectangle: DrawTextureRec(Texture2D, Rectangle, Vector2, Color) => void
  const _DrawTextureRec = mod.cwrap('DrawTextureRec', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTextureRec = (texture, source, position, tint) => _DrawTextureRec(texture._address, source._address, position._address, tint._address)

  // Draw a part of a texture defined by a rectangle with 'pro' parameters: DrawTexturePro(Texture2D, Rectangle, Rectangle, Vector2, float, Color) => void
  const _DrawTexturePro = mod.cwrap('DrawTexturePro', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawTexturePro = (texture, source, dest, origin, rotation, tint) => _DrawTexturePro(texture._address, source._address, dest._address, origin._address, rotation, tint._address)

  // Draws a texture (or part of it) that stretches or shrinks nicely: DrawTextureNPatch(Texture2D, NPatchInfo, Rectangle, Vector2, float, Color) => void
  const _DrawTextureNPatch = mod.cwrap('DrawTextureNPatch', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawTextureNPatch = (texture, nPatchInfo, dest, origin, rotation, tint) => _DrawTextureNPatch(texture._address, nPatchInfo._address, dest._address, origin._address, rotation, tint._address)

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: Fade(Color, float) => Color
  const _Fade = mod.cwrap('Fade', 'void', ['pointer', 'pointer', 'number'])
  raylib.Fade = (color, alpha) => {
    const _ret = new raylib.Color()
    _Fade(_ret._address, color._address, alpha)
    return _ret
  }

  // Get hexadecimal value for a Color: ColorToInt(Color) => int
  const _ColorToInt = mod.cwrap('ColorToInt', 'void', ['pointer'])
  raylib.ColorToInt = (color) => _ColorToInt(color._address)

  // Get Color normalized as float [0..1]: ColorNormalize(Color) => Vector4
  const _ColorNormalize = mod.cwrap('ColorNormalize', 'void', ['pointer', 'pointer'])
  raylib.ColorNormalize = (color) => {
    const _ret = new raylib.Vector4()
    _ColorNormalize(_ret._address, color._address)
    return _ret
  }

  // Get Color from normalized values [0..1]: ColorFromNormalized(Vector4) => Color
  const _ColorFromNormalized = mod.cwrap('ColorFromNormalized', 'void', ['pointer', 'pointer'])
  raylib.ColorFromNormalized = (normalized) => {
    const _ret = new raylib.Color()
    _ColorFromNormalized(_ret._address, normalized._address)
    return _ret
  }

  // Get HSV values for a Color, hue [0..360], saturation/value [0..1]: ColorToHSV(Color) => Vector3
  const _ColorToHSV = mod.cwrap('ColorToHSV', 'void', ['pointer', 'pointer'])
  raylib.ColorToHSV = (color) => {
    const _ret = new raylib.Vector3()
    _ColorToHSV(_ret._address, color._address)
    return _ret
  }

  // Get a Color from HSV values, hue [0..360], saturation/value [0..1]: ColorFromHSV(float, float, float) => Color
  const _ColorFromHSV = mod.cwrap('ColorFromHSV', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.ColorFromHSV = (hue, saturation, value) => {
    const _ret = new raylib.Color()
    _ColorFromHSV(_ret._address, hue, saturation, value)
    return _ret
  }

  // Get color multiplied with another color: ColorTint(Color, Color) => Color
  const _ColorTint = mod.cwrap('ColorTint', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ColorTint = (color, tint) => {
    const _ret = new raylib.Color()
    _ColorTint(_ret._address, color._address, tint._address)
    return _ret
  }

  // Get color with brightness correction, brightness factor goes from -1.0f to 1.0f: ColorBrightness(Color, float) => Color
  const _ColorBrightness = mod.cwrap('ColorBrightness', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorBrightness = (color, factor) => {
    const _ret = new raylib.Color()
    _ColorBrightness(_ret._address, color._address, factor)
    return _ret
  }

  // Get color with contrast correction, contrast values between -1.0f and 1.0f: ColorContrast(Color, float) => Color
  const _ColorContrast = mod.cwrap('ColorContrast', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorContrast = (color, contrast) => {
    const _ret = new raylib.Color()
    _ColorContrast(_ret._address, color._address, contrast)
    return _ret
  }

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: ColorAlpha(Color, float) => Color
  const _ColorAlpha = mod.cwrap('ColorAlpha', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorAlpha = (color, alpha) => {
    const _ret = new raylib.Color()
    _ColorAlpha(_ret._address, color._address, alpha)
    return _ret
  }

  // Get src alpha-blended into dst color with tint: ColorAlphaBlend(Color, Color, Color) => Color
  const _ColorAlphaBlend = mod.cwrap('ColorAlphaBlend', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ColorAlphaBlend = (dst, src, tint) => {
    const _ret = new raylib.Color()
    _ColorAlphaBlend(_ret._address, dst._address, src._address, tint._address)
    return _ret
  }

  // Get Color structure from hexadecimal value: GetColor(unsigned int) => Color
  const _GetColor = mod.cwrap('GetColor', 'void', ['pointer', 'number'])
  raylib.GetColor = (hexValue) => {
    const _ret = new raylib.Color()
    _GetColor(_ret._address, hexValue)
    return _ret
  }

  // Get Color from a source pixel pointer of certain format: GetPixelColor(void *, int) => Color
  const _GetPixelColor = mod.cwrap('GetPixelColor', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetPixelColor = (srcPtr, format) => {
    const _ret = new raylib.Color()
    _GetPixelColor(_ret._address, srcPtr._address, format)
    return _ret
  }

  // Set color formatted into destination pixel pointer: SetPixelColor(void *, Color, int) => void
  const _SetPixelColor = mod.cwrap('SetPixelColor', 'void', ['pointer', 'pointer', 'number'])
  raylib.SetPixelColor = (dstPtr, color, format) => _SetPixelColor(dstPtr._address, color._address, format)

  // Get pixel data size in bytes for certain format: GetPixelDataSize(int, int, int) => int
  const _GetPixelDataSize = mod.cwrap('GetPixelDataSize', 'void', ['number', 'number', 'number'])
  raylib.GetPixelDataSize = (width, height, format) => _GetPixelDataSize(width, height, format)

  // Get the default Font: GetFontDefault() => Font
  const _GetFontDefault = mod.cwrap('GetFontDefault', 'void', ['pointer'])
  raylib.GetFontDefault = () => {
    const _ret = new raylib.Font()
    _GetFontDefault(_ret._address)
    return _ret
  }

  // Load font from file into GPU memory (VRAM): LoadFont(const char *) => Font
  const _LoadFont = mod.cwrap('LoadFont', 'void', ['pointer', 'string'])
  raylib.LoadFont = (fileName) => {
    const _ret = new raylib.Font()
    _LoadFont(_ret._address, fileName)
    return _ret
  }

  // Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set: LoadFontEx(const char *, int, int *, int) => Font
  const _LoadFontEx = mod.cwrap('LoadFontEx', 'void', ['pointer', 'string', 'number', 'pointer', 'number'])
  raylib.LoadFontEx = (fileName, fontSize, fontChars, glyphCount) => {
    const _ret = new raylib.Font()
    _LoadFontEx(_ret._address, fileName, fontSize, fontChars._address, glyphCount)
    return _ret
  }

  // Load font from Image (XNA style): LoadFontFromImage(Image, Color, int) => Font
  const _LoadFontFromImage = mod.cwrap('LoadFontFromImage', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.LoadFontFromImage = (image, key, firstChar) => {
    const _ret = new raylib.Font()
    _LoadFontFromImage(_ret._address, image._address, key._address, firstChar)
    return _ret
  }

  // Load font from memory buffer, fileType refers to extension: i.e. '.ttf': LoadFontFromMemory(const char *, const unsigned char *, int, int, int *, int) => Font
  const _LoadFontFromMemory = mod.cwrap('LoadFontFromMemory', 'void', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer', 'number'])
  raylib.LoadFontFromMemory = (fileType, fileData, dataSize, fontSize, fontChars, glyphCount) => {
    const _ret = new raylib.Font()
    _LoadFontFromMemory(_ret._address, fileType, fileData._address, dataSize, fontSize, fontChars._address, glyphCount)
    return _ret
  }

  // Check if a font is ready: IsFontReady(Font) => bool
  const _IsFontReady = mod.cwrap('IsFontReady', 'void', ['pointer'])
  raylib.IsFontReady = (font) => _IsFontReady(font._address)

  // Load font data for further use: LoadFontData(const unsigned char *, int, int, int *, int, int) => GlyphInfo *
  const _LoadFontData = mod.cwrap('LoadFontData', 'void', ['pointer', 'pointer', 'number', 'number', 'pointer', 'number', 'number'])
  raylib.LoadFontData = (fileData, dataSize, fontSize, fontChars, glyphCount, type) => {
    const _ret = new raylib.GlyphInfo()
    _LoadFontData(_ret._address, fileData._address, dataSize, fontSize, fontChars._address, glyphCount, type)
    return _ret
  }

  // Generate image font atlas using chars info: GenImageFontAtlas(const GlyphInfo *, Rectangle **, int, int, int, int) => Image
  const _GenImageFontAtlas = mod.cwrap('GenImageFontAtlas', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number', 'number', 'number'])
  raylib.GenImageFontAtlas = (chars, recs, glyphCount, fontSize, padding, packMethod) => {
    const _ret = new raylib.Image()
    _GenImageFontAtlas(_ret._address, chars._address, recs._address, glyphCount, fontSize, padding, packMethod)
    return _ret
  }

  // Unload font chars info data (RAM): UnloadFontData(GlyphInfo *, int) => void
  const _UnloadFontData = mod.cwrap('UnloadFontData', 'void', ['pointer', 'number'])
  raylib.UnloadFontData = (chars, glyphCount) => _UnloadFontData(chars._address, glyphCount)

  // Unload font from GPU memory (VRAM): UnloadFont(Font) => void
  const _UnloadFont = mod.cwrap('UnloadFont', 'void', ['pointer'])
  raylib.UnloadFont = (font) => _UnloadFont(font._address)

  // Export font as code file, returns true on success: ExportFontAsCode(Font, const char *) => bool
  const _ExportFontAsCode = mod.cwrap('ExportFontAsCode', 'void', ['pointer', 'string'])
  raylib.ExportFontAsCode = (font, fileName) => _ExportFontAsCode(font._address, fileName)

  // Draw current FPS: DrawFPS(int, int) => void
  const _DrawFPS = mod.cwrap('DrawFPS', 'void', ['number', 'number'])
  raylib.DrawFPS = (posX, posY) => _DrawFPS(posX, posY)

  // Draw text (using default font): DrawText(const char *, int, int, int, Color) => void
  const _DrawText = mod.cwrap('DrawText', 'void', ['string', 'number', 'number', 'number', 'pointer'])
  raylib.DrawText = (text, posX, posY, fontSize, color) => _DrawText(text, posX, posY, fontSize, color._address)

  // Draw text using font and additional parameters: DrawTextEx(Font, const char *, Vector2, float, float, Color) => void
  const _DrawTextEx = mod.cwrap('DrawTextEx', 'void', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextEx = (font, text, position, fontSize, spacing, tint) => _DrawTextEx(font._address, text, position._address, fontSize, spacing, tint._address)

  // Draw text using Font and pro parameters (rotation): DrawTextPro(Font, const char *, Vector2, Vector2, float, float, float, Color) => void
  const _DrawTextPro = mod.cwrap('DrawTextPro', 'void', ['pointer', 'string', 'pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawTextPro = (font, text, position, origin, rotation, fontSize, spacing, tint) => _DrawTextPro(font._address, text, position._address, origin._address, rotation, fontSize, spacing, tint._address)

  // Draw one character (codepoint): DrawTextCodepoint(Font, int, Vector2, float, Color) => void
  const _DrawTextCodepoint = mod.cwrap('DrawTextCodepoint', 'void', ['pointer', 'number', 'pointer', 'number', 'pointer'])
  raylib.DrawTextCodepoint = (font, codepoint, position, fontSize, tint) => _DrawTextCodepoint(font._address, codepoint, position._address, fontSize, tint._address)

  // Draw multiple character (codepoint): DrawTextCodepoints(Font, const int *, int, Vector2, float, float, Color) => void
  const _DrawTextCodepoints = mod.cwrap('DrawTextCodepoints', 'void', ['pointer', 'pointer', 'number', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextCodepoints = (font, codepoints, count, position, fontSize, spacing, tint) => _DrawTextCodepoints(font._address, codepoints._address, count, position._address, fontSize, spacing, tint._address)

  // Measure string width for default font: MeasureText(const char *, int) => int
  const _MeasureText = mod.cwrap('MeasureText', 'void', ['string', 'number'])
  raylib.MeasureText = (text, fontSize) => _MeasureText(text, fontSize)

  // Measure string size for Font: MeasureTextEx(Font, const char *, float, float) => Vector2
  const _MeasureTextEx = mod.cwrap('MeasureTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number'])
  raylib.MeasureTextEx = (font, text, fontSize, spacing) => {
    const _ret = new raylib.Vector2()
    _MeasureTextEx(_ret._address, font._address, text, fontSize, spacing)
    return _ret
  }

  // Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found: GetGlyphIndex(Font, int) => int
  const _GetGlyphIndex = mod.cwrap('GetGlyphIndex', 'void', ['pointer', 'number'])
  raylib.GetGlyphIndex = (font, codepoint) => _GetGlyphIndex(font._address, codepoint)

  // Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found: GetGlyphInfo(Font, int) => GlyphInfo
  const _GetGlyphInfo = mod.cwrap('GetGlyphInfo', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetGlyphInfo = (font, codepoint) => {
    const _ret = new raylib.GlyphInfo()
    _GetGlyphInfo(_ret._address, font._address, codepoint)
    return _ret
  }

  // Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found: GetGlyphAtlasRec(Font, int) => Rectangle
  const _GetGlyphAtlasRec = mod.cwrap('GetGlyphAtlasRec', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetGlyphAtlasRec = (font, codepoint) => {
    const _ret = new raylib.Rectangle()
    _GetGlyphAtlasRec(_ret._address, font._address, codepoint)
    return _ret
  }

  // Load UTF-8 text encoded from codepoints array: LoadUTF8(const int *, int) => char *
  const _LoadUTF8 = mod.cwrap('LoadUTF8', 'void', ['pointer', 'number'])
  raylib.LoadUTF8 = (codepoints, length) => _LoadUTF8(codepoints._address, length)

  // Unload UTF-8 text encoded from codepoints array: UnloadUTF8(char *) => void
  const _UnloadUTF8 = mod.cwrap('UnloadUTF8', 'void', ['pointer'])
  raylib.UnloadUTF8 = (text) => _UnloadUTF8(text._address)

  // Load all codepoints from a UTF-8 text string, codepoints count returned by parameter: LoadCodepoints(const char *, int *) => int *
  const _LoadCodepoints = mod.cwrap('LoadCodepoints', 'void', ['string', 'pointer'])
  raylib.LoadCodepoints = (text, count) => _LoadCodepoints(text, count._address)

  // Unload codepoints data from memory: UnloadCodepoints(int *) => void
  const _UnloadCodepoints = mod.cwrap('UnloadCodepoints', 'void', ['pointer'])
  raylib.UnloadCodepoints = (codepoints) => _UnloadCodepoints(codepoints._address)

  // Get total number of codepoints in a UTF-8 encoded string: GetCodepointCount(const char *) => int
  const _GetCodepointCount = mod.cwrap('GetCodepointCount', 'void', ['string'])
  raylib.GetCodepointCount = (text) => _GetCodepointCount(text)

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepoint(const char *, int *) => int
  const _GetCodepoint = mod.cwrap('GetCodepoint', 'void', ['string', 'pointer'])
  raylib.GetCodepoint = (text, codepointSize) => _GetCodepoint(text, codepointSize._address)

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointNext(const char *, int *) => int
  const _GetCodepointNext = mod.cwrap('GetCodepointNext', 'void', ['string', 'pointer'])
  raylib.GetCodepointNext = (text, codepointSize) => _GetCodepointNext(text, codepointSize._address)

  // Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointPrevious(const char *, int *) => int
  const _GetCodepointPrevious = mod.cwrap('GetCodepointPrevious', 'void', ['string', 'pointer'])
  raylib.GetCodepointPrevious = (text, codepointSize) => _GetCodepointPrevious(text, codepointSize._address)

  // Encode one codepoint into UTF-8 byte array (array length returned as parameter): CodepointToUTF8(int, int *) => const char *
  const _CodepointToUTF8 = mod.cwrap('CodepointToUTF8', 'void', ['number', 'pointer'])
  raylib.CodepointToUTF8 = (codepoint, utf8Size) => _CodepointToUTF8(codepoint, utf8Size._address)

  // Copy one string to another, returns bytes copied: TextCopy(char *, const char *) => int
  const _TextCopy = mod.cwrap('TextCopy', 'void', ['pointer', 'string'])
  raylib.TextCopy = (dst, src) => _TextCopy(dst._address, src)

  // Check if two text string are equal: TextIsEqual(const char *, const char *) => bool
  const _TextIsEqual = mod.cwrap('TextIsEqual', 'void', ['string', 'string'])
  raylib.TextIsEqual = (text1, text2) => _TextIsEqual(text1, text2)

  // Get text length, checks for '\0' ending: TextLength(const char *) => unsigned int
  const _TextLength = mod.cwrap('TextLength', 'void', ['string'])
  raylib.TextLength = (text) => _TextLength(text)

  // Text formatting with variables (sprintf() style): TextFormat(const char *, ...) => const char *
  const _TextFormat = mod.cwrap('TextFormat', 'void', ['string', 'pointer'])
  raylib.TextFormat = (text, args) => _TextFormat(text, args._address)

  // Get a piece of a text string: TextSubtext(const char *, int, int) => const char *
  const _TextSubtext = mod.cwrap('TextSubtext', 'void', ['string', 'number', 'number'])
  raylib.TextSubtext = (text, position, length) => _TextSubtext(text, position, length)

  // Replace text string (WARNING: memory must be freed!): TextReplace(char *, const char *, const char *) => char *
  const _TextReplace = mod.cwrap('TextReplace', 'void', ['pointer', 'string', 'string'])
  raylib.TextReplace = (text, replace, by) => _TextReplace(text._address, replace, by)

  // Insert text in a position (WARNING: memory must be freed!): TextInsert(const char *, const char *, int) => char *
  const _TextInsert = mod.cwrap('TextInsert', 'void', ['string', 'string', 'number'])
  raylib.TextInsert = (text, insert, position) => _TextInsert(text, insert, position)

  // Join text strings with delimiter: TextJoin(const char **, int, const char *) => const char *
  const _TextJoin = mod.cwrap('TextJoin', 'void', ['pointer', 'number', 'string'])
  raylib.TextJoin = (textList, count, delimiter) => _TextJoin(textList._address, count, delimiter)

  // Split text into multiple strings: TextSplit(const char *, char, int *) => const char **
  const _TextSplit = mod.cwrap('TextSplit', 'void', ['string', 'number', 'pointer'])
  raylib.TextSplit = (text, delimiter, count) => _TextSplit(text, delimiter, count._address)

  // Append text at specific position and move cursor!: TextAppend(char *, const char *, int *) => void
  const _TextAppend = mod.cwrap('TextAppend', 'void', ['pointer', 'string', 'pointer'])
  raylib.TextAppend = (text, append, position) => _TextAppend(text._address, append, position._address)

  // Find first text occurrence within a string: TextFindIndex(const char *, const char *) => int
  const _TextFindIndex = mod.cwrap('TextFindIndex', 'void', ['string', 'string'])
  raylib.TextFindIndex = (text, find) => _TextFindIndex(text, find)

  // Get upper case version of provided string: TextToUpper(const char *) => const char *
  const _TextToUpper = mod.cwrap('TextToUpper', 'void', ['string'])
  raylib.TextToUpper = (text) => _TextToUpper(text)

  // Get lower case version of provided string: TextToLower(const char *) => const char *
  const _TextToLower = mod.cwrap('TextToLower', 'void', ['string'])
  raylib.TextToLower = (text) => _TextToLower(text)

  // Get Pascal case notation version of provided string: TextToPascal(const char *) => const char *
  const _TextToPascal = mod.cwrap('TextToPascal', 'void', ['string'])
  raylib.TextToPascal = (text) => _TextToPascal(text)

  // Get integer value from text (negative values not supported): TextToInteger(const char *) => int
  const _TextToInteger = mod.cwrap('TextToInteger', 'void', ['string'])
  raylib.TextToInteger = (text) => _TextToInteger(text)

  // Draw a line in 3D world space: DrawLine3D(Vector3, Vector3, Color) => void
  const _DrawLine3D = mod.cwrap('DrawLine3D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawLine3D = (startPos, endPos, color) => _DrawLine3D(startPos._address, endPos._address, color._address)

  // Draw a point in 3D space, actually a small line: DrawPoint3D(Vector3, Color) => void
  const _DrawPoint3D = mod.cwrap('DrawPoint3D', 'void', ['pointer', 'pointer'])
  raylib.DrawPoint3D = (position, color) => _DrawPoint3D(position._address, color._address)

  // Draw a circle in 3D world space: DrawCircle3D(Vector3, float, Vector3, float, Color) => void
  const _DrawCircle3D = mod.cwrap('DrawCircle3D', 'void', ['pointer', 'number', 'pointer', 'number', 'pointer'])
  raylib.DrawCircle3D = (center, radius, rotationAxis, rotationAngle, color) => _DrawCircle3D(center._address, radius, rotationAxis._address, rotationAngle, color._address)

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle3D(Vector3, Vector3, Vector3, Color) => void
  const _DrawTriangle3D = mod.cwrap('DrawTriangle3D', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangle3D = (v1, v2, v3, color) => _DrawTriangle3D(v1._address, v2._address, v3._address, color._address)

  // Draw a triangle strip defined by points: DrawTriangleStrip3D(Vector3 *, int, Color) => void
  const _DrawTriangleStrip3D = mod.cwrap('DrawTriangleStrip3D', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleStrip3D = (points, pointCount, color) => _DrawTriangleStrip3D(points._address, pointCount, color._address)

  // Draw cube: DrawCube(Vector3, float, float, float, Color) => void
  const _DrawCube = mod.cwrap('DrawCube', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCube = (position, width, height, length, color) => _DrawCube(position._address, width, height, length, color._address)

  // Draw cube (Vector version): DrawCubeV(Vector3, Vector3, Color) => void
  const _DrawCubeV = mod.cwrap('DrawCubeV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawCubeV = (position, size, color) => _DrawCubeV(position._address, size._address, color._address)

  // Draw cube wires: DrawCubeWires(Vector3, float, float, float, Color) => void
  const _DrawCubeWires = mod.cwrap('DrawCubeWires', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCubeWires = (position, width, height, length, color) => _DrawCubeWires(position._address, width, height, length, color._address)

  // Draw cube wires (Vector version): DrawCubeWiresV(Vector3, Vector3, Color) => void
  const _DrawCubeWiresV = mod.cwrap('DrawCubeWiresV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawCubeWiresV = (position, size, color) => _DrawCubeWiresV(position._address, size._address, color._address)

  // Draw sphere: DrawSphere(Vector3, float, Color) => void
  const _DrawSphere = mod.cwrap('DrawSphere', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawSphere = (centerPos, radius, color) => _DrawSphere(centerPos._address, radius, color._address)

  // Draw sphere with extended parameters: DrawSphereEx(Vector3, float, int, int, Color) => void
  const _DrawSphereEx = mod.cwrap('DrawSphereEx', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawSphereEx = (centerPos, radius, rings, slices, color) => _DrawSphereEx(centerPos._address, radius, rings, slices, color._address)

  // Draw sphere wires: DrawSphereWires(Vector3, float, int, int, Color) => void
  const _DrawSphereWires = mod.cwrap('DrawSphereWires', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawSphereWires = (centerPos, radius, rings, slices, color) => _DrawSphereWires(centerPos._address, radius, rings, slices, color._address)

  // Draw a cylinder/cone: DrawCylinder(Vector3, float, float, float, int, Color) => void
  const _DrawCylinder = mod.cwrap('DrawCylinder', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinder = (position, radiusTop, radiusBottom, height, slices, color) => _DrawCylinder(position._address, radiusTop, radiusBottom, height, slices, color._address)

  // Draw a cylinder with base at startPos and top at endPos: DrawCylinderEx(Vector3, Vector3, float, float, int, Color) => void
  const _DrawCylinderEx = mod.cwrap('DrawCylinderEx', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderEx = (startPos, endPos, startRadius, endRadius, sides, color) => _DrawCylinderEx(startPos._address, endPos._address, startRadius, endRadius, sides, color._address)

  // Draw a cylinder/cone wires: DrawCylinderWires(Vector3, float, float, float, int, Color) => void
  const _DrawCylinderWires = mod.cwrap('DrawCylinderWires', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderWires = (position, radiusTop, radiusBottom, height, slices, color) => _DrawCylinderWires(position._address, radiusTop, radiusBottom, height, slices, color._address)

  // Draw a cylinder wires with base at startPos and top at endPos: DrawCylinderWiresEx(Vector3, Vector3, float, float, int, Color) => void
  const _DrawCylinderWiresEx = mod.cwrap('DrawCylinderWiresEx', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderWiresEx = (startPos, endPos, startRadius, endRadius, sides, color) => _DrawCylinderWiresEx(startPos._address, endPos._address, startRadius, endRadius, sides, color._address)

  // Draw a capsule with the center of its sphere caps at startPos and endPos: DrawCapsule(Vector3, Vector3, float, int, int, Color) => void
  const _DrawCapsule = mod.cwrap('DrawCapsule', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCapsule = (startPos, endPos, radius, slices, rings, color) => _DrawCapsule(startPos._address, endPos._address, radius, slices, rings, color._address)

  // Draw capsule wireframe with the center of its sphere caps at startPos and endPos: DrawCapsuleWires(Vector3, Vector3, float, int, int, Color) => void
  const _DrawCapsuleWires = mod.cwrap('DrawCapsuleWires', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCapsuleWires = (startPos, endPos, radius, slices, rings, color) => _DrawCapsuleWires(startPos._address, endPos._address, radius, slices, rings, color._address)

  // Draw a plane XZ: DrawPlane(Vector3, Vector2, Color) => void
  const _DrawPlane = mod.cwrap('DrawPlane', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawPlane = (centerPos, size, color) => _DrawPlane(centerPos._address, size._address, color._address)

  // Draw a ray line: DrawRay(Ray, Color) => void
  const _DrawRay = mod.cwrap('DrawRay', 'void', ['pointer', 'pointer'])
  raylib.DrawRay = (ray, color) => _DrawRay(ray._address, color._address)

  // Draw a grid (centered at (0, 0, 0)): DrawGrid(int, float) => void
  const _DrawGrid = mod.cwrap('DrawGrid', 'void', ['number', 'number'])
  raylib.DrawGrid = (slices, spacing) => _DrawGrid(slices, spacing)

  // Load model from files (meshes and materials): LoadModel(const char *) => Model
  const _LoadModel = mod.cwrap('LoadModel', 'void', ['pointer', 'string'])
  raylib.LoadModel = (fileName) => {
    const _ret = new raylib.Model()
    _LoadModel(_ret._address, fileName)
    return _ret
  }

  // Load model from generated mesh (default material): LoadModelFromMesh(Mesh) => Model
  const _LoadModelFromMesh = mod.cwrap('LoadModelFromMesh', 'void', ['pointer', 'pointer'])
  raylib.LoadModelFromMesh = (mesh) => {
    const _ret = new raylib.Model()
    _LoadModelFromMesh(_ret._address, mesh._address)
    return _ret
  }

  // Check if a model is ready: IsModelReady(Model) => bool
  const _IsModelReady = mod.cwrap('IsModelReady', 'void', ['pointer'])
  raylib.IsModelReady = (model) => _IsModelReady(model._address)

  // Unload model (including meshes) from memory (RAM and/or VRAM): UnloadModel(Model) => void
  const _UnloadModel = mod.cwrap('UnloadModel', 'void', ['pointer'])
  raylib.UnloadModel = (model) => _UnloadModel(model._address)

  // Compute model bounding box limits (considers all meshes): GetModelBoundingBox(Model) => BoundingBox
  const _GetModelBoundingBox = mod.cwrap('GetModelBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.GetModelBoundingBox = (model) => {
    const _ret = new raylib.BoundingBox()
    _GetModelBoundingBox(_ret._address, model._address)
    return _ret
  }

  // Draw a model (with texture if set): DrawModel(Model, Vector3, float, Color) => void
  const _DrawModel = mod.cwrap('DrawModel', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModel = (model, position, scale, tint) => _DrawModel(model._address, position._address, scale, tint._address)

  // Draw a model with extended parameters: DrawModelEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelEx = mod.cwrap('DrawModelEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw a model wires (with texture if set): DrawModelWires(Model, Vector3, float, Color) => void
  const _DrawModelWires = mod.cwrap('DrawModelWires', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModelWires = (model, position, scale, tint) => _DrawModelWires(model._address, position._address, scale, tint._address)

  // Draw a model wires (with texture if set) with extended parameters: DrawModelWiresEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelWiresEx = mod.cwrap('DrawModelWiresEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelWiresEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelWiresEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw bounding box (wires): DrawBoundingBox(BoundingBox, Color) => void
  const _DrawBoundingBox = mod.cwrap('DrawBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.DrawBoundingBox = (box, color) => _DrawBoundingBox(box._address, color._address)

  // Draw a billboard texture: DrawBillboard(Camera, Texture2D, Vector3, float, Color) => void
  const _DrawBillboard = mod.cwrap('DrawBillboard', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawBillboard = (camera, texture, position, size, tint) => _DrawBillboard(camera._address, texture._address, position._address, size, tint._address)

  // Draw a billboard texture defined by source: DrawBillboardRec(Camera, Texture2D, Rectangle, Vector3, Vector2, Color) => void
  const _DrawBillboardRec = mod.cwrap('DrawBillboardRec', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawBillboardRec = (camera, texture, source, position, size, tint) => _DrawBillboardRec(camera._address, texture._address, source._address, position._address, size._address, tint._address)

  // Draw a billboard texture defined by source and rotation: DrawBillboardPro(Camera, Texture2D, Rectangle, Vector3, Vector3, Vector2, Vector2, float, Color) => void
  const _DrawBillboardPro = mod.cwrap('DrawBillboardPro', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawBillboardPro = (camera, texture, source, position, up, size, origin, rotation, tint) => _DrawBillboardPro(camera._address, texture._address, source._address, position._address, up._address, size._address, origin._address, rotation, tint._address)

  // Upload mesh vertex data in GPU and provide VAO/VBO ids: UploadMesh(Mesh *, bool) => void
  const _UploadMesh = mod.cwrap('UploadMesh', 'void', ['pointer', 'boolean'])
  raylib.UploadMesh = (mesh, dynamic) => _UploadMesh(mesh._address, dynamic)

  // Update mesh vertex data in GPU for a specific buffer index: UpdateMeshBuffer(Mesh, int, const void *, int, int) => void
  const _UpdateMeshBuffer = mod.cwrap('UpdateMeshBuffer', 'void', ['pointer', 'number', 'pointer', 'number', 'number'])
  raylib.UpdateMeshBuffer = (mesh, index, data, dataSize, offset) => _UpdateMeshBuffer(mesh._address, index, data._address, dataSize, offset)

  // Unload mesh data from CPU and GPU: UnloadMesh(Mesh) => void
  const _UnloadMesh = mod.cwrap('UnloadMesh', 'void', ['pointer'])
  raylib.UnloadMesh = (mesh) => _UnloadMesh(mesh._address)

  // Draw a 3d mesh with material and transform: DrawMesh(Mesh, Material, Matrix) => void
  const _DrawMesh = mod.cwrap('DrawMesh', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawMesh = (mesh, material, transform) => _DrawMesh(mesh._address, material._address, transform._address)

  // Draw multiple mesh instances with material and different transforms: DrawMeshInstanced(Mesh, Material, const Matrix *, int) => void
  const _DrawMeshInstanced = mod.cwrap('DrawMeshInstanced', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.DrawMeshInstanced = (mesh, material, transforms, instances) => _DrawMeshInstanced(mesh._address, material._address, transforms._address, instances)

  // Export mesh data to file, returns true on success: ExportMesh(Mesh, const char *) => bool
  const _ExportMesh = mod.cwrap('ExportMesh', 'void', ['pointer', 'string'])
  raylib.ExportMesh = (mesh, fileName) => _ExportMesh(mesh._address, fileName)

  // Compute mesh bounding box limits: GetMeshBoundingBox(Mesh) => BoundingBox
  const _GetMeshBoundingBox = mod.cwrap('GetMeshBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.GetMeshBoundingBox = (mesh) => {
    const _ret = new raylib.BoundingBox()
    _GetMeshBoundingBox(_ret._address, mesh._address)
    return _ret
  }

  // Compute mesh tangents: GenMeshTangents(Mesh *) => void
  const _GenMeshTangents = mod.cwrap('GenMeshTangents', 'void', ['pointer'])
  raylib.GenMeshTangents = (mesh) => _GenMeshTangents(mesh._address)

  // Generate polygonal mesh: GenMeshPoly(int, float) => Mesh
  const _GenMeshPoly = mod.cwrap('GenMeshPoly', 'void', ['pointer', 'number', 'number'])
  raylib.GenMeshPoly = (sides, radius) => {
    const _ret = new raylib.Mesh()
    _GenMeshPoly(_ret._address, sides, radius)
    return _ret
  }

  // Generate plane mesh (with subdivisions): GenMeshPlane(float, float, int, int) => Mesh
  const _GenMeshPlane = mod.cwrap('GenMeshPlane', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshPlane = (width, length, resX, resZ) => {
    const _ret = new raylib.Mesh()
    _GenMeshPlane(_ret._address, width, length, resX, resZ)
    return _ret
  }

  // Generate cuboid mesh: GenMeshCube(float, float, float) => Mesh
  const _GenMeshCube = mod.cwrap('GenMeshCube', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCube = (width, height, length) => {
    const _ret = new raylib.Mesh()
    _GenMeshCube(_ret._address, width, height, length)
    return _ret
  }

  // Generate sphere mesh (standard sphere): GenMeshSphere(float, int, int) => Mesh
  const _GenMeshSphere = mod.cwrap('GenMeshSphere', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshSphere(_ret._address, radius, rings, slices)
    return _ret
  }

  // Generate half-sphere mesh (no bottom cap): GenMeshHemiSphere(float, int, int) => Mesh
  const _GenMeshHemiSphere = mod.cwrap('GenMeshHemiSphere', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshHemiSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshHemiSphere(_ret._address, radius, rings, slices)
    return _ret
  }

  // Generate cylinder mesh: GenMeshCylinder(float, float, int) => Mesh
  const _GenMeshCylinder = mod.cwrap('GenMeshCylinder', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCylinder = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshCylinder(_ret._address, radius, height, slices)
    return _ret
  }

  // Generate cone/pyramid mesh: GenMeshCone(float, float, int) => Mesh
  const _GenMeshCone = mod.cwrap('GenMeshCone', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCone = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshCone(_ret._address, radius, height, slices)
    return _ret
  }

  // Generate torus mesh: GenMeshTorus(float, float, int, int) => Mesh
  const _GenMeshTorus = mod.cwrap('GenMeshTorus', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshTorus = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    _GenMeshTorus(_ret._address, radius, size, radSeg, sides)
    return _ret
  }

  // Generate trefoil knot mesh: GenMeshKnot(float, float, int, int) => Mesh
  const _GenMeshKnot = mod.cwrap('GenMeshKnot', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshKnot = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    _GenMeshKnot(_ret._address, radius, size, radSeg, sides)
    return _ret
  }

  // Generate heightmap mesh from image data: GenMeshHeightmap(Image, Vector3) => Mesh
  const _GenMeshHeightmap = mod.cwrap('GenMeshHeightmap', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GenMeshHeightmap = (heightmap, size) => {
    const _ret = new raylib.Mesh()
    _GenMeshHeightmap(_ret._address, heightmap._address, size._address)
    return _ret
  }

  // Generate cubes-based map mesh from image data: GenMeshCubicmap(Image, Vector3) => Mesh
  const _GenMeshCubicmap = mod.cwrap('GenMeshCubicmap', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GenMeshCubicmap = (cubicmap, cubeSize) => {
    const _ret = new raylib.Mesh()
    _GenMeshCubicmap(_ret._address, cubicmap._address, cubeSize._address)
    return _ret
  }

  // Load materials from model file: LoadMaterials(const char *, int *) => Material *
  const _LoadMaterials = mod.cwrap('LoadMaterials', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadMaterials = (fileName, materialCount) => {
    const _ret = new raylib.Material()
    _LoadMaterials(_ret._address, fileName, materialCount._address)
    return _ret
  }

  // Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps): LoadMaterialDefault() => Material
  const _LoadMaterialDefault = mod.cwrap('LoadMaterialDefault', 'void', ['pointer'])
  raylib.LoadMaterialDefault = () => {
    const _ret = new raylib.Material()
    _LoadMaterialDefault(_ret._address)
    return _ret
  }

  // Check if a material is ready: IsMaterialReady(Material) => bool
  const _IsMaterialReady = mod.cwrap('IsMaterialReady', 'void', ['pointer'])
  raylib.IsMaterialReady = (material) => _IsMaterialReady(material._address)

  // Unload material from GPU memory (VRAM): UnloadMaterial(Material) => void
  const _UnloadMaterial = mod.cwrap('UnloadMaterial', 'void', ['pointer'])
  raylib.UnloadMaterial = (material) => _UnloadMaterial(material._address)

  // Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...): SetMaterialTexture(Material *, int, Texture2D) => void
  const _SetMaterialTexture = mod.cwrap('SetMaterialTexture', 'void', ['pointer', 'number', 'pointer'])
  raylib.SetMaterialTexture = (material, mapType, texture) => _SetMaterialTexture(material._address, mapType, texture._address)

  // Set material for a mesh: SetModelMeshMaterial(Model *, int, int) => void
  const _SetModelMeshMaterial = mod.cwrap('SetModelMeshMaterial', 'void', ['pointer', 'number', 'number'])
  raylib.SetModelMeshMaterial = (model, meshId, materialId) => _SetModelMeshMaterial(model._address, meshId, materialId)

  // Load model animations from file: LoadModelAnimations(const char *, unsigned int *) => ModelAnimation *
  const _LoadModelAnimations = mod.cwrap('LoadModelAnimations', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadModelAnimations = (fileName, animCount) => {
    const _ret = new raylib.ModelAnimation()
    _LoadModelAnimations(_ret._address, fileName, animCount._address)
    return _ret
  }

  // Update model animation pose: UpdateModelAnimation(Model, ModelAnimation, int) => void
  const _UpdateModelAnimation = mod.cwrap('UpdateModelAnimation', 'void', ['pointer', 'pointer', 'number'])
  raylib.UpdateModelAnimation = (model, anim, frame) => _UpdateModelAnimation(model._address, anim._address, frame)

  // Unload animation data: UnloadModelAnimation(ModelAnimation) => void
  const _UnloadModelAnimation = mod.cwrap('UnloadModelAnimation', 'void', ['pointer'])
  raylib.UnloadModelAnimation = (anim) => _UnloadModelAnimation(anim._address)

  // Unload animation array data: UnloadModelAnimations(ModelAnimation *, unsigned int) => void
  const _UnloadModelAnimations = mod.cwrap('UnloadModelAnimations', 'void', ['pointer', 'number'])
  raylib.UnloadModelAnimations = (animations, count) => _UnloadModelAnimations(animations._address, count)

  // Check model animation skeleton match: IsModelAnimationValid(Model, ModelAnimation) => bool
  const _IsModelAnimationValid = mod.cwrap('IsModelAnimationValid', 'void', ['pointer', 'pointer'])
  raylib.IsModelAnimationValid = (model, anim) => _IsModelAnimationValid(model._address, anim._address)

  // Check collision between two spheres: CheckCollisionSpheres(Vector3, float, Vector3, float) => bool
  const _CheckCollisionSpheres = mod.cwrap('CheckCollisionSpheres', 'void', ['pointer', 'number', 'pointer', 'number'])
  raylib.CheckCollisionSpheres = (center1, radius1, center2, radius2) => _CheckCollisionSpheres(center1._address, radius1, center2._address, radius2)

  // Check collision between two bounding boxes: CheckCollisionBoxes(BoundingBox, BoundingBox) => bool
  const _CheckCollisionBoxes = mod.cwrap('CheckCollisionBoxes', 'void', ['pointer', 'pointer'])
  raylib.CheckCollisionBoxes = (box1, box2) => _CheckCollisionBoxes(box1._address, box2._address)

  // Check collision between box and sphere: CheckCollisionBoxSphere(BoundingBox, Vector3, float) => bool
  const _CheckCollisionBoxSphere = mod.cwrap('CheckCollisionBoxSphere', 'void', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionBoxSphere = (box, center, radius) => _CheckCollisionBoxSphere(box._address, center._address, radius)

  // Get collision info between ray and sphere: GetRayCollisionSphere(Ray, Vector3, float) => RayCollision
  const _GetRayCollisionSphere = mod.cwrap('GetRayCollisionSphere', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.GetRayCollisionSphere = (ray, center, radius) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionSphere(_ret._address, ray._address, center._address, radius)
    return _ret
  }

  // Get collision info between ray and box: GetRayCollisionBox(Ray, BoundingBox) => RayCollision
  const _GetRayCollisionBox = mod.cwrap('GetRayCollisionBox', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionBox = (ray, box) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionBox(_ret._address, ray._address, box._address)
    return _ret
  }

  // Get collision info between ray and mesh: GetRayCollisionMesh(Ray, Mesh, Matrix) => RayCollision
  const _GetRayCollisionMesh = mod.cwrap('GetRayCollisionMesh', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionMesh = (ray, mesh, transform) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionMesh(_ret._address, ray._address, mesh._address, transform._address)
    return _ret
  }

  // Get collision info between ray and triangle: GetRayCollisionTriangle(Ray, Vector3, Vector3, Vector3) => RayCollision
  const _GetRayCollisionTriangle = mod.cwrap('GetRayCollisionTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionTriangle = (ray, p1, p2, p3) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionTriangle(_ret._address, ray._address, p1._address, p2._address, p3._address)
    return _ret
  }

  // Get collision info between ray and quad: GetRayCollisionQuad(Ray, Vector3, Vector3, Vector3, Vector3) => RayCollision
  const _GetRayCollisionQuad = mod.cwrap('GetRayCollisionQuad', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionQuad = (ray, p1, p2, p3, p4) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionQuad(_ret._address, ray._address, p1._address, p2._address, p3._address, p4._address)
    return _ret
  }

  // Initialize audio device and context: InitAudioDevice() => void
  const _InitAudioDevice = mod.cwrap('InitAudioDevice', 'void', [])
  raylib.InitAudioDevice = () => _InitAudioDevice()

  // Close the audio device and context: CloseAudioDevice() => void
  const _CloseAudioDevice = mod.cwrap('CloseAudioDevice', 'void', [])
  raylib.CloseAudioDevice = () => _CloseAudioDevice()

  // Check if audio device has been initialized successfully: IsAudioDeviceReady() => bool
  const _IsAudioDeviceReady = mod.cwrap('IsAudioDeviceReady', 'void', [])
  raylib.IsAudioDeviceReady = () => _IsAudioDeviceReady()

  // Set master volume (listener): SetMasterVolume(float) => void
  const _SetMasterVolume = mod.cwrap('SetMasterVolume', 'void', ['number'])
  raylib.SetMasterVolume = (volume) => _SetMasterVolume(volume)

  // Load wave data from file: LoadWave(const char *) => Wave
  const _LoadWave = mod.cwrap('LoadWave', 'void', ['pointer', 'string'])
  raylib.LoadWave = (fileName) => {
    const _ret = new raylib.Wave()
    _LoadWave(_ret._address, fileName)
    return _ret
  }

  // Load wave from memory buffer, fileType refers to extension: i.e. '.wav': LoadWaveFromMemory(const char *, const unsigned char *, int) => Wave
  const _LoadWaveFromMemory = mod.cwrap('LoadWaveFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadWaveFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Wave()
    _LoadWaveFromMemory(_ret._address, fileType, fileData._address, dataSize)
    return _ret
  }

  // Checks if wave data is ready: IsWaveReady(Wave) => bool
  const _IsWaveReady = mod.cwrap('IsWaveReady', 'void', ['pointer'])
  raylib.IsWaveReady = (wave) => _IsWaveReady(wave._address)

  // Load sound from file: LoadSound(const char *) => Sound
  const _LoadSound = mod.cwrap('LoadSound', 'void', ['pointer', 'string'])
  raylib.LoadSound = (fileName) => {
    const _ret = new raylib.Sound()
    _LoadSound(_ret._address, fileName)
    return _ret
  }

  // Load sound from wave data: LoadSoundFromWave(Wave) => Sound
  const _LoadSoundFromWave = mod.cwrap('LoadSoundFromWave', 'void', ['pointer', 'pointer'])
  raylib.LoadSoundFromWave = (wave) => {
    const _ret = new raylib.Sound()
    _LoadSoundFromWave(_ret._address, wave._address)
    return _ret
  }

  // Checks if a sound is ready: IsSoundReady(Sound) => bool
  const _IsSoundReady = mod.cwrap('IsSoundReady', 'void', ['pointer'])
  raylib.IsSoundReady = (sound) => _IsSoundReady(sound._address)

  // Update sound buffer with new data: UpdateSound(Sound, const void *, int) => void
  const _UpdateSound = mod.cwrap('UpdateSound', 'void', ['pointer', 'pointer', 'number'])
  raylib.UpdateSound = (sound, data, sampleCount) => _UpdateSound(sound._address, data._address, sampleCount)

  // Unload wave data: UnloadWave(Wave) => void
  const _UnloadWave = mod.cwrap('UnloadWave', 'void', ['pointer'])
  raylib.UnloadWave = (wave) => _UnloadWave(wave._address)

  // Unload sound: UnloadSound(Sound) => void
  const _UnloadSound = mod.cwrap('UnloadSound', 'void', ['pointer'])
  raylib.UnloadSound = (sound) => _UnloadSound(sound._address)

  // Export wave data to file, returns true on success: ExportWave(Wave, const char *) => bool
  const _ExportWave = mod.cwrap('ExportWave', 'void', ['pointer', 'string'])
  raylib.ExportWave = (wave, fileName) => _ExportWave(wave._address, fileName)

  // Export wave sample data to code (.h), returns true on success: ExportWaveAsCode(Wave, const char *) => bool
  const _ExportWaveAsCode = mod.cwrap('ExportWaveAsCode', 'void', ['pointer', 'string'])
  raylib.ExportWaveAsCode = (wave, fileName) => _ExportWaveAsCode(wave._address, fileName)

  // Play a sound: PlaySound(Sound) => void
  const _PlaySound = mod.cwrap('PlaySound', 'void', ['pointer'])
  raylib.PlaySound = (sound) => _PlaySound(sound._address)

  // Stop playing a sound: StopSound(Sound) => void
  const _StopSound = mod.cwrap('StopSound', 'void', ['pointer'])
  raylib.StopSound = (sound) => _StopSound(sound._address)

  // Pause a sound: PauseSound(Sound) => void
  const _PauseSound = mod.cwrap('PauseSound', 'void', ['pointer'])
  raylib.PauseSound = (sound) => _PauseSound(sound._address)

  // Resume a paused sound: ResumeSound(Sound) => void
  const _ResumeSound = mod.cwrap('ResumeSound', 'void', ['pointer'])
  raylib.ResumeSound = (sound) => _ResumeSound(sound._address)

  // Check if a sound is currently playing: IsSoundPlaying(Sound) => bool
  const _IsSoundPlaying = mod.cwrap('IsSoundPlaying', 'void', ['pointer'])
  raylib.IsSoundPlaying = (sound) => _IsSoundPlaying(sound._address)

  // Set volume for a sound (1.0 is max level): SetSoundVolume(Sound, float) => void
  const _SetSoundVolume = mod.cwrap('SetSoundVolume', 'void', ['pointer', 'number'])
  raylib.SetSoundVolume = (sound, volume) => _SetSoundVolume(sound._address, volume)

  // Set pitch for a sound (1.0 is base level): SetSoundPitch(Sound, float) => void
  const _SetSoundPitch = mod.cwrap('SetSoundPitch', 'void', ['pointer', 'number'])
  raylib.SetSoundPitch = (sound, pitch) => _SetSoundPitch(sound._address, pitch)

  // Set pan for a sound (0.5 is center): SetSoundPan(Sound, float) => void
  const _SetSoundPan = mod.cwrap('SetSoundPan', 'void', ['pointer', 'number'])
  raylib.SetSoundPan = (sound, pan) => _SetSoundPan(sound._address, pan)

  // Copy a wave to a new wave: WaveCopy(Wave) => Wave
  const _WaveCopy = mod.cwrap('WaveCopy', 'void', ['pointer', 'pointer'])
  raylib.WaveCopy = (wave) => {
    const _ret = new raylib.Wave()
    _WaveCopy(_ret._address, wave._address)
    return _ret
  }

  // Crop a wave to defined samples range: WaveCrop(Wave *, int, int) => void
  const _WaveCrop = mod.cwrap('WaveCrop', 'void', ['pointer', 'number', 'number'])
  raylib.WaveCrop = (wave, initSample, finalSample) => _WaveCrop(wave._address, initSample, finalSample)

  // Convert wave data to desired format: WaveFormat(Wave *, int, int, int) => void
  const _WaveFormat = mod.cwrap('WaveFormat', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.WaveFormat = (wave, sampleRate, sampleSize, channels) => _WaveFormat(wave._address, sampleRate, sampleSize, channels)

  // Load samples data from wave as a 32bit float data array: LoadWaveSamples(Wave) => float *
  const _LoadWaveSamples = mod.cwrap('LoadWaveSamples', 'void', ['pointer'])
  raylib.LoadWaveSamples = (wave) => _LoadWaveSamples(wave._address)

  // Unload samples data loaded with LoadWaveSamples(): UnloadWaveSamples(float *) => void
  const _UnloadWaveSamples = mod.cwrap('UnloadWaveSamples', 'void', ['pointer'])
  raylib.UnloadWaveSamples = (samples) => _UnloadWaveSamples(samples._address)

  // Load music stream from file: LoadMusicStream(const char *) => Music
  const _LoadMusicStream = mod.cwrap('LoadMusicStream', 'void', ['pointer', 'string'])
  raylib.LoadMusicStream = (fileName) => {
    const _ret = new raylib.Music()
    _LoadMusicStream(_ret._address, fileName)
    return _ret
  }

  // Load music stream from data: LoadMusicStreamFromMemory(const char *, const unsigned char *, int) => Music
  const _LoadMusicStreamFromMemory = mod.cwrap('LoadMusicStreamFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadMusicStreamFromMemory = (fileType, data, dataSize) => {
    const _ret = new raylib.Music()
    _LoadMusicStreamFromMemory(_ret._address, fileType, data._address, dataSize)
    return _ret
  }

  // Checks if a music stream is ready: IsMusicReady(Music) => bool
  const _IsMusicReady = mod.cwrap('IsMusicReady', 'void', ['pointer'])
  raylib.IsMusicReady = (music) => _IsMusicReady(music._address)

  // Unload music stream: UnloadMusicStream(Music) => void
  const _UnloadMusicStream = mod.cwrap('UnloadMusicStream', 'void', ['pointer'])
  raylib.UnloadMusicStream = (music) => _UnloadMusicStream(music._address)

  // Start music playing: PlayMusicStream(Music) => void
  const _PlayMusicStream = mod.cwrap('PlayMusicStream', 'void', ['pointer'])
  raylib.PlayMusicStream = (music) => _PlayMusicStream(music._address)

  // Check if music is playing: IsMusicStreamPlaying(Music) => bool
  const _IsMusicStreamPlaying = mod.cwrap('IsMusicStreamPlaying', 'void', ['pointer'])
  raylib.IsMusicStreamPlaying = (music) => _IsMusicStreamPlaying(music._address)

  // Updates buffers for music streaming: UpdateMusicStream(Music) => void
  const _UpdateMusicStream = mod.cwrap('UpdateMusicStream', 'void', ['pointer'])
  raylib.UpdateMusicStream = (music) => _UpdateMusicStream(music._address)

  // Stop music playing: StopMusicStream(Music) => void
  const _StopMusicStream = mod.cwrap('StopMusicStream', 'void', ['pointer'])
  raylib.StopMusicStream = (music) => _StopMusicStream(music._address)

  // Pause music playing: PauseMusicStream(Music) => void
  const _PauseMusicStream = mod.cwrap('PauseMusicStream', 'void', ['pointer'])
  raylib.PauseMusicStream = (music) => _PauseMusicStream(music._address)

  // Resume playing paused music: ResumeMusicStream(Music) => void
  const _ResumeMusicStream = mod.cwrap('ResumeMusicStream', 'void', ['pointer'])
  raylib.ResumeMusicStream = (music) => _ResumeMusicStream(music._address)

  // Seek music to a position (in seconds): SeekMusicStream(Music, float) => void
  const _SeekMusicStream = mod.cwrap('SeekMusicStream', 'void', ['pointer', 'number'])
  raylib.SeekMusicStream = (music, position) => _SeekMusicStream(music._address, position)

  // Set volume for music (1.0 is max level): SetMusicVolume(Music, float) => void
  const _SetMusicVolume = mod.cwrap('SetMusicVolume', 'void', ['pointer', 'number'])
  raylib.SetMusicVolume = (music, volume) => _SetMusicVolume(music._address, volume)

  // Set pitch for a music (1.0 is base level): SetMusicPitch(Music, float) => void
  const _SetMusicPitch = mod.cwrap('SetMusicPitch', 'void', ['pointer', 'number'])
  raylib.SetMusicPitch = (music, pitch) => _SetMusicPitch(music._address, pitch)

  // Set pan for a music (0.5 is center): SetMusicPan(Music, float) => void
  const _SetMusicPan = mod.cwrap('SetMusicPan', 'void', ['pointer', 'number'])
  raylib.SetMusicPan = (music, pan) => _SetMusicPan(music._address, pan)

  // Get music time length (in seconds): GetMusicTimeLength(Music) => float
  const _GetMusicTimeLength = mod.cwrap('GetMusicTimeLength', 'void', ['pointer'])
  raylib.GetMusicTimeLength = (music) => _GetMusicTimeLength(music._address)

  // Get current music time played (in seconds): GetMusicTimePlayed(Music) => float
  const _GetMusicTimePlayed = mod.cwrap('GetMusicTimePlayed', 'void', ['pointer'])
  raylib.GetMusicTimePlayed = (music) => _GetMusicTimePlayed(music._address)

  // Load audio stream (to stream raw audio pcm data): LoadAudioStream(unsigned int, unsigned int, unsigned int) => AudioStream
  const _LoadAudioStream = mod.cwrap('LoadAudioStream', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.LoadAudioStream = (sampleRate, sampleSize, channels) => {
    const _ret = new raylib.AudioStream()
    _LoadAudioStream(_ret._address, sampleRate, sampleSize, channels)
    return _ret
  }

  // Checks if an audio stream is ready: IsAudioStreamReady(AudioStream) => bool
  const _IsAudioStreamReady = mod.cwrap('IsAudioStreamReady', 'void', ['pointer'])
  raylib.IsAudioStreamReady = (stream) => _IsAudioStreamReady(stream._address)

  // Unload audio stream and free memory: UnloadAudioStream(AudioStream) => void
  const _UnloadAudioStream = mod.cwrap('UnloadAudioStream', 'void', ['pointer'])
  raylib.UnloadAudioStream = (stream) => _UnloadAudioStream(stream._address)

  // Update audio stream buffers with data: UpdateAudioStream(AudioStream, const void *, int) => void
  const _UpdateAudioStream = mod.cwrap('UpdateAudioStream', 'void', ['pointer', 'pointer', 'number'])
  raylib.UpdateAudioStream = (stream, data, frameCount) => _UpdateAudioStream(stream._address, data._address, frameCount)

  // Check if any audio stream buffers requires refill: IsAudioStreamProcessed(AudioStream) => bool
  const _IsAudioStreamProcessed = mod.cwrap('IsAudioStreamProcessed', 'void', ['pointer'])
  raylib.IsAudioStreamProcessed = (stream) => _IsAudioStreamProcessed(stream._address)

  // Play audio stream: PlayAudioStream(AudioStream) => void
  const _PlayAudioStream = mod.cwrap('PlayAudioStream', 'void', ['pointer'])
  raylib.PlayAudioStream = (stream) => _PlayAudioStream(stream._address)

  // Pause audio stream: PauseAudioStream(AudioStream) => void
  const _PauseAudioStream = mod.cwrap('PauseAudioStream', 'void', ['pointer'])
  raylib.PauseAudioStream = (stream) => _PauseAudioStream(stream._address)

  // Resume audio stream: ResumeAudioStream(AudioStream) => void
  const _ResumeAudioStream = mod.cwrap('ResumeAudioStream', 'void', ['pointer'])
  raylib.ResumeAudioStream = (stream) => _ResumeAudioStream(stream._address)

  // Check if audio stream is playing: IsAudioStreamPlaying(AudioStream) => bool
  const _IsAudioStreamPlaying = mod.cwrap('IsAudioStreamPlaying', 'void', ['pointer'])
  raylib.IsAudioStreamPlaying = (stream) => _IsAudioStreamPlaying(stream._address)

  // Stop audio stream: StopAudioStream(AudioStream) => void
  const _StopAudioStream = mod.cwrap('StopAudioStream', 'void', ['pointer'])
  raylib.StopAudioStream = (stream) => _StopAudioStream(stream._address)

  // Set volume for audio stream (1.0 is max level): SetAudioStreamVolume(AudioStream, float) => void
  const _SetAudioStreamVolume = mod.cwrap('SetAudioStreamVolume', 'void', ['pointer', 'number'])
  raylib.SetAudioStreamVolume = (stream, volume) => _SetAudioStreamVolume(stream._address, volume)

  // Set pitch for audio stream (1.0 is base level): SetAudioStreamPitch(AudioStream, float) => void
  const _SetAudioStreamPitch = mod.cwrap('SetAudioStreamPitch', 'void', ['pointer', 'number'])
  raylib.SetAudioStreamPitch = (stream, pitch) => _SetAudioStreamPitch(stream._address, pitch)

  // Set pan for audio stream (0.5 is centered): SetAudioStreamPan(AudioStream, float) => void
  const _SetAudioStreamPan = mod.cwrap('SetAudioStreamPan', 'void', ['pointer', 'number'])
  raylib.SetAudioStreamPan = (stream, pan) => _SetAudioStreamPan(stream._address, pan)

  // Default size for new audio streams: SetAudioStreamBufferSizeDefault(int) => void
  const _SetAudioStreamBufferSizeDefault = mod.cwrap('SetAudioStreamBufferSizeDefault', 'void', ['number'])
  raylib.SetAudioStreamBufferSizeDefault = (size) => _SetAudioStreamBufferSizeDefault(size)

  // Audio thread callback to request new data: SetAudioStreamCallback(AudioStream, AudioCallback) => void
  const _SetAudioStreamCallback = mod.cwrap('SetAudioStreamCallback', 'void', ['pointer', 'pointer'])
  raylib.SetAudioStreamCallback = (stream, callback) => _SetAudioStreamCallback(stream._address, callback._address)

  // Attach audio stream processor to stream: AttachAudioStreamProcessor(AudioStream, AudioCallback) => void
  const _AttachAudioStreamProcessor = mod.cwrap('AttachAudioStreamProcessor', 'void', ['pointer', 'pointer'])
  raylib.AttachAudioStreamProcessor = (stream, processor) => _AttachAudioStreamProcessor(stream._address, processor._address)

  // Detach audio stream processor from stream: DetachAudioStreamProcessor(AudioStream, AudioCallback) => void
  const _DetachAudioStreamProcessor = mod.cwrap('DetachAudioStreamProcessor', 'void', ['pointer', 'pointer'])
  raylib.DetachAudioStreamProcessor = (stream, processor) => _DetachAudioStreamProcessor(stream._address, processor._address)

  // Attach audio stream processor to the entire audio pipeline: AttachAudioMixedProcessor(AudioCallback) => void
  const _AttachAudioMixedProcessor = mod.cwrap('AttachAudioMixedProcessor', 'void', ['pointer'])
  raylib.AttachAudioMixedProcessor = (processor) => _AttachAudioMixedProcessor(processor._address)

  // Detach audio stream processor from the entire audio pipeline: DetachAudioMixedProcessor(AudioCallback) => void
  const _DetachAudioMixedProcessor = mod.cwrap('DetachAudioMixedProcessor', 'void', ['pointer'])
  raylib.DetachAudioMixedProcessor = (processor) => _DetachAudioMixedProcessor(processor._address)


  // insert remote file in WASM filesystem
  raylib.addFile = async filename => {
    const p = filename.split('/').slice(0,-1)
    for (const i in p) {
      mod.FS.mkdir(p.slice(0, i + 1).join('/'))
    }
    mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
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
  if (userInit) {
    await userInit(raylib)
  }

  if (userUpdate) {
    const updateLoop = (timeStamp) => {
      userUpdate(timeStamp, raylib)
      requestAnimationFrame(updateLoop)
    }
    updateLoop()
  }

  return raylib
}

export default setup

