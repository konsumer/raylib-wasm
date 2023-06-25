
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
  raylib.InitWindow = (width, height, title) => mod.ccall('InitWindow', 'pointer', ['number', 'number', 'string'], [width, height, title])

  // Check if KEY_ESCAPE pressed or Close icon pressed: WindowShouldClose() => bool
  raylib.WindowShouldClose = () => mod.ccall('WindowShouldClose', 'boolean', [], [])

  // Close window and unload OpenGL context: CloseWindow() => void
  raylib.CloseWindow = () => mod.ccall('CloseWindow', 'pointer', [], [])

  // Check if window has been initialized successfully: IsWindowReady() => bool
  raylib.IsWindowReady = () => mod.ccall('IsWindowReady', 'boolean', [], [])

  // Check if window is currently fullscreen: IsWindowFullscreen() => bool
  raylib.IsWindowFullscreen = () => mod.ccall('IsWindowFullscreen', 'boolean', [], [])

  // Check if window has been resized last frame: IsWindowResized() => bool
  raylib.IsWindowResized = () => mod.ccall('IsWindowResized', 'boolean', [], [])

  // Check if one specific window flag is enabled: IsWindowState(unsigned int) => bool
  raylib.IsWindowState = (flag) => mod.ccall('IsWindowState', 'boolean', ['number'], [flag])

  // Clear window configuration state flags: ClearWindowState(unsigned int) => void
  raylib.ClearWindowState = (flags) => mod.ccall('ClearWindowState', 'pointer', ['number'], [flags])

  // Set monitor for the current window (fullscreen mode): SetWindowMonitor(int) => void
  raylib.SetWindowMonitor = (monitor) => mod.ccall('SetWindowMonitor', 'pointer', ['number'], [monitor])

  // Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE): SetWindowMinSize(int, int) => void
  raylib.SetWindowMinSize = (width, height) => mod.ccall('SetWindowMinSize', 'pointer', ['number', 'number'], [width, height])

  // Set window dimensions: SetWindowSize(int, int) => void
  raylib.SetWindowSize = (width, height) => mod.ccall('SetWindowSize', 'pointer', ['number', 'number'], [width, height])

  // Get native window handle: GetWindowHandle() => void *
  raylib.GetWindowHandle = () => mod.ccall('GetWindowHandle', 'pointer', [], [])

  // Get current screen width: GetScreenWidth() => int
  raylib.GetScreenWidth = () => mod.ccall('GetScreenWidth', 'number', [], [])

  // Get current screen height: GetScreenHeight() => int
  raylib.GetScreenHeight = () => mod.ccall('GetScreenHeight', 'number', [], [])

  // Get current render width (it considers HiDPI): GetRenderWidth() => int
  raylib.GetRenderWidth = () => mod.ccall('GetRenderWidth', 'number', [], [])

  // Get current render height (it considers HiDPI): GetRenderHeight() => int
  raylib.GetRenderHeight = () => mod.ccall('GetRenderHeight', 'number', [], [])

  // Get number of connected monitors: GetMonitorCount() => int
  raylib.GetMonitorCount = () => mod.ccall('GetMonitorCount', 'number', [], [])

  // Get current connected monitor: GetCurrentMonitor() => int
  raylib.GetCurrentMonitor = () => mod.ccall('GetCurrentMonitor', 'number', [], [])

  // Get specified monitor position: GetMonitorPosition(int) => Vector2
  raylib.GetMonitorPosition = (monitor) => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetMonitorPosition', 'void', ['pointer', 'number'], [_ret._address, monitor])
    return _ret
  }

  // Get specified monitor width (current video mode used by monitor): GetMonitorWidth(int) => int
  raylib.GetMonitorWidth = (monitor) => mod.ccall('GetMonitorWidth', 'number', ['number'], [monitor])

  // Get specified monitor height (current video mode used by monitor): GetMonitorHeight(int) => int
  raylib.GetMonitorHeight = (monitor) => mod.ccall('GetMonitorHeight', 'number', ['number'], [monitor])

  // Get specified monitor physical width in millimetres: GetMonitorPhysicalWidth(int) => int
  raylib.GetMonitorPhysicalWidth = (monitor) => mod.ccall('GetMonitorPhysicalWidth', 'number', ['number'], [monitor])

  // Get specified monitor physical height in millimetres: GetMonitorPhysicalHeight(int) => int
  raylib.GetMonitorPhysicalHeight = (monitor) => mod.ccall('GetMonitorPhysicalHeight', 'number', ['number'], [monitor])

  // Get specified monitor refresh rate: GetMonitorRefreshRate(int) => int
  raylib.GetMonitorRefreshRate = (monitor) => mod.ccall('GetMonitorRefreshRate', 'number', ['number'], [monitor])

  // Get window position XY on monitor: GetWindowPosition() => Vector2
  raylib.GetWindowPosition = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetWindowPosition', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Get window scale DPI factor: GetWindowScaleDPI() => Vector2
  raylib.GetWindowScaleDPI = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetWindowScaleDPI', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Get the human-readable, UTF-8 encoded name of the primary monitor: GetMonitorName(int) => const char *
  raylib.GetMonitorName = (monitor) => mod.ccall('GetMonitorName', 'string', ['number'], [monitor])

  // Set clipboard text content: SetClipboardText(const char *) => void
  raylib.SetClipboardText = (text) => mod.ccall('SetClipboardText', 'pointer', ['string'], [text])

  // Get clipboard text content: GetClipboardText() => const char *
  raylib.GetClipboardText = () => mod.ccall('GetClipboardText', 'string', [], [])

  // Enable waiting for events on EndDrawing(), no automatic event polling: EnableEventWaiting() => void
  raylib.EnableEventWaiting = () => mod.ccall('EnableEventWaiting', 'pointer', [], [])

  // Disable waiting for events on EndDrawing(), automatic events polling: DisableEventWaiting() => void
  raylib.DisableEventWaiting = () => mod.ccall('DisableEventWaiting', 'pointer', [], [])

  // Swap back buffer with front buffer (screen drawing): SwapScreenBuffer() => void
  raylib.SwapScreenBuffer = () => mod.ccall('SwapScreenBuffer', 'pointer', [], [])

  // Register all input events: PollInputEvents() => void
  raylib.PollInputEvents = () => mod.ccall('PollInputEvents', 'pointer', [], [])

  // Wait for some time (halt program execution): WaitTime(double) => void
  raylib.WaitTime = (seconds) => mod.ccall('WaitTime', 'pointer', ['number'], [seconds])

  // Shows cursor: ShowCursor() => void
  raylib.ShowCursor = () => mod.ccall('ShowCursor', 'pointer', [], [])

  // Hides cursor: HideCursor() => void
  raylib.HideCursor = () => mod.ccall('HideCursor', 'pointer', [], [])

  // Check if cursor is not visible: IsCursorHidden() => bool
  raylib.IsCursorHidden = () => mod.ccall('IsCursorHidden', 'boolean', [], [])

  // Enables cursor (unlock cursor): EnableCursor() => void
  raylib.EnableCursor = () => mod.ccall('EnableCursor', 'pointer', [], [])

  // Disables cursor (lock cursor): DisableCursor() => void
  raylib.DisableCursor = () => mod.ccall('DisableCursor', 'pointer', [], [])

  // Check if cursor is on the screen: IsCursorOnScreen() => bool
  raylib.IsCursorOnScreen = () => mod.ccall('IsCursorOnScreen', 'boolean', [], [])

  // Set background color (framebuffer clear color): ClearBackground(Color) => void
  raylib.ClearBackground = (color) => mod.ccall('ClearBackground', 'pointer', ['pointer'], [color._address])

  // Setup canvas (framebuffer) to start drawing: BeginDrawing() => void
  raylib.BeginDrawing = () => mod.ccall('BeginDrawing', 'pointer', [], [])

  // End canvas drawing and swap buffers (double buffering): EndDrawing() => void
  raylib.EndDrawing = () => mod.ccall('EndDrawing', 'pointer', [], [])

  // Begin 2D mode with custom camera (2D): BeginMode2D(Camera2D) => void
  raylib.BeginMode2D = (camera) => mod.ccall('BeginMode2D', 'pointer', ['pointer'], [camera._address])

  // Ends 2D mode with custom camera: EndMode2D() => void
  raylib.EndMode2D = () => mod.ccall('EndMode2D', 'pointer', [], [])

  // Begin 3D mode with custom camera (3D): BeginMode3D(Camera3D) => void
  raylib.BeginMode3D = (camera) => mod.ccall('BeginMode3D', 'pointer', ['pointer'], [camera._address])

  // Ends 3D mode and returns to default 2D orthographic mode: EndMode3D() => void
  raylib.EndMode3D = () => mod.ccall('EndMode3D', 'pointer', [], [])

  // Begin drawing to render texture: BeginTextureMode(RenderTexture2D) => void
  raylib.BeginTextureMode = (target) => mod.ccall('BeginTextureMode', 'pointer', ['pointer'], [target._address])

  // Ends drawing to render texture: EndTextureMode() => void
  raylib.EndTextureMode = () => mod.ccall('EndTextureMode', 'pointer', [], [])

  // Begin custom shader drawing: BeginShaderMode(Shader) => void
  raylib.BeginShaderMode = (shader) => mod.ccall('BeginShaderMode', 'pointer', ['pointer'], [shader._address])

  // End custom shader drawing (use default shader): EndShaderMode() => void
  raylib.EndShaderMode = () => mod.ccall('EndShaderMode', 'pointer', [], [])

  // Begin blending mode (alpha, additive, multiplied, subtract, custom): BeginBlendMode(int) => void
  raylib.BeginBlendMode = (mode) => mod.ccall('BeginBlendMode', 'pointer', ['number'], [mode])

  // End blending mode (reset to default: alpha blending): EndBlendMode() => void
  raylib.EndBlendMode = () => mod.ccall('EndBlendMode', 'pointer', [], [])

  // Begin scissor mode (define screen area for following drawing): BeginScissorMode(int, int, int, int) => void
  raylib.BeginScissorMode = (x, y, width, height) => mod.ccall('BeginScissorMode', 'pointer', ['number', 'number', 'number', 'number'], [x, y, width, height])

  // End scissor mode: EndScissorMode() => void
  raylib.EndScissorMode = () => mod.ccall('EndScissorMode', 'pointer', [], [])

  // Begin stereo rendering (requires VR simulator): BeginVrStereoMode(VrStereoConfig) => void
  raylib.BeginVrStereoMode = (config) => mod.ccall('BeginVrStereoMode', 'pointer', ['pointer'], [config._address])

  // End stereo rendering (requires VR simulator): EndVrStereoMode() => void
  raylib.EndVrStereoMode = () => mod.ccall('EndVrStereoMode', 'pointer', [], [])

  // Load VR stereo config for VR simulator device parameters: LoadVrStereoConfig(VrDeviceInfo) => VrStereoConfig
  raylib.LoadVrStereoConfig = (device) => {
    const _ret = new raylib.VrStereoConfig()
    mod.ccall('LoadVrStereoConfig', 'void', ['pointer', 'pointer'], [_ret._address, device._address])
    return _ret
  }

  // Unload VR stereo config: UnloadVrStereoConfig(VrStereoConfig) => void
  raylib.UnloadVrStereoConfig = (config) => mod.ccall('UnloadVrStereoConfig', 'pointer', ['pointer'], [config._address])

  // Load shader from files and bind default locations: LoadShader(const char *, const char *) => Shader
  raylib.LoadShader = (vsFileName, fsFileName) => {
    const _ret = new raylib.Shader()
    mod.ccall('LoadShader', 'void', ['pointer', 'string', 'string'], [_ret._address, vsFileName, fsFileName])
    return _ret
  }

  // Load shader from code strings and bind default locations: LoadShaderFromMemory(const char *, const char *) => Shader
  raylib.LoadShaderFromMemory = (vsCode, fsCode) => {
    const _ret = new raylib.Shader()
    mod.ccall('LoadShaderFromMemory', 'void', ['pointer', 'string', 'string'], [_ret._address, vsCode, fsCode])
    return _ret
  }

  // Check if a shader is ready: IsShaderReady(Shader) => bool
  raylib.IsShaderReady = (shader) => mod.ccall('IsShaderReady', 'boolean', ['pointer'], [shader._address])

  // Get shader uniform location: GetShaderLocation(Shader, const char *) => int
  raylib.GetShaderLocation = (shader, uniformName) => mod.ccall('GetShaderLocation', 'number', ['pointer', 'string'], [shader._address, uniformName])

  // Get shader attribute location: GetShaderLocationAttrib(Shader, const char *) => int
  raylib.GetShaderLocationAttrib = (shader, attribName) => mod.ccall('GetShaderLocationAttrib', 'number', ['pointer', 'string'], [shader._address, attribName])

  // Set shader uniform value: SetShaderValue(Shader, int, const void *, int) => void
  raylib.SetShaderValue = (shader, locIndex, value, uniformType) => mod.ccall('SetShaderValue', 'pointer', ['pointer', 'number', 'pointer', 'number'], [shader._address, locIndex, value._address, uniformType])

  // Set shader uniform value vector: SetShaderValueV(Shader, int, const void *, int, int) => void
  raylib.SetShaderValueV = (shader, locIndex, value, uniformType, count) => mod.ccall('SetShaderValueV', 'pointer', ['pointer', 'number', 'pointer', 'number', 'number'], [shader._address, locIndex, value._address, uniformType, count])

  // Set shader uniform value (matrix 4x4): SetShaderValueMatrix(Shader, int, Matrix) => void
  raylib.SetShaderValueMatrix = (shader, locIndex, mat) => mod.ccall('SetShaderValueMatrix', 'pointer', ['pointer', 'number', 'pointer'], [shader._address, locIndex, mat._address])

  // Set shader uniform value for texture (sampler2d): SetShaderValueTexture(Shader, int, Texture2D) => void
  raylib.SetShaderValueTexture = (shader, locIndex, texture) => mod.ccall('SetShaderValueTexture', 'pointer', ['pointer', 'number', 'pointer'], [shader._address, locIndex, texture._address])

  // Unload shader from GPU memory (VRAM): UnloadShader(Shader) => void
  raylib.UnloadShader = (shader) => mod.ccall('UnloadShader', 'pointer', ['pointer'], [shader._address])

  // Get a ray trace from mouse position: GetMouseRay(Vector2, Camera) => Ray
  raylib.GetMouseRay = (mousePosition, camera) => {
    const _ret = new raylib.Ray()
    mod.ccall('GetMouseRay', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, mousePosition._address, camera._address])
    return _ret
  }

  // Get camera transform matrix (view matrix): GetCameraMatrix(Camera) => Matrix
  raylib.GetCameraMatrix = (camera) => {
    const _ret = new raylib.Matrix()
    mod.ccall('GetCameraMatrix', 'void', ['pointer', 'pointer'], [_ret._address, camera._address])
    return _ret
  }

  // Get camera 2d transform matrix: GetCameraMatrix2D(Camera2D) => Matrix
  raylib.GetCameraMatrix2D = (camera) => {
    const _ret = new raylib.Matrix()
    mod.ccall('GetCameraMatrix2D', 'void', ['pointer', 'pointer'], [_ret._address, camera._address])
    return _ret
  }

  // Get the screen space position for a 3d world space position: GetWorldToScreen(Vector3, Camera) => Vector2
  raylib.GetWorldToScreen = (position, camera) => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetWorldToScreen', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, position._address, camera._address])
    return _ret
  }

  // Get the world space position for a 2d camera screen space position: GetScreenToWorld2D(Vector2, Camera2D) => Vector2
  raylib.GetScreenToWorld2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetScreenToWorld2D', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, position._address, camera._address])
    return _ret
  }

  // Get size position for a 3d world space position: GetWorldToScreenEx(Vector3, Camera, int, int) => Vector2
  raylib.GetWorldToScreenEx = (position, camera, width, height) => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetWorldToScreenEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number'], [_ret._address, position._address, camera._address, width, height])
    return _ret
  }

  // Get the screen space position for a 2d camera world space position: GetWorldToScreen2D(Vector2, Camera2D) => Vector2
  raylib.GetWorldToScreen2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetWorldToScreen2D', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, position._address, camera._address])
    return _ret
  }

  // Set target FPS (maximum): SetTargetFPS(int) => void
  raylib.SetTargetFPS = (fps) => mod.ccall('SetTargetFPS', 'pointer', ['number'], [fps])

  // Get current FPS: GetFPS() => int
  raylib.GetFPS = () => mod.ccall('GetFPS', 'number', [], [])

  // Get time in seconds for last frame drawn (delta time): GetFrameTime() => float
  raylib.GetFrameTime = () => mod.ccall('GetFrameTime', 'number', [], [])

  // Get elapsed time in seconds since InitWindow(): GetTime() => double
  raylib.GetTime = () => mod.ccall('GetTime', 'number', [], [])

  // Get a random value between min and max (both included): GetRandomValue(int, int) => int
  raylib.GetRandomValue = (min, max) => mod.ccall('GetRandomValue', 'number', ['number', 'number'], [min, max])

  // Set the seed for the random number generator: SetRandomSeed(unsigned int) => void
  raylib.SetRandomSeed = (seed) => mod.ccall('SetRandomSeed', 'pointer', ['number'], [seed])

  // Takes a screenshot of current screen (filename extension defines format): TakeScreenshot(const char *) => void
  raylib.TakeScreenshot = (fileName) => mod.ccall('TakeScreenshot', 'pointer', ['string'], [fileName])

  // Setup init configuration flags (view FLAGS): SetConfigFlags(unsigned int) => void
  raylib.SetConfigFlags = (flags) => mod.ccall('SetConfigFlags', 'pointer', ['number'], [flags])

  // Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...): TraceLog(int, const char *, ...) => void
  raylib.TraceLog = (logLevel, text, args) => mod.ccall('TraceLog', 'pointer', ['number', 'string', 'pointer'], [logLevel, text, args._address])

  // Set the current threshold (minimum) log level: SetTraceLogLevel(int) => void
  raylib.SetTraceLogLevel = (logLevel) => mod.ccall('SetTraceLogLevel', 'pointer', ['number'], [logLevel])

  // Internal memory allocator: MemAlloc(unsigned int) => void *
  raylib.MemAlloc = (size) => mod.ccall('MemAlloc', 'pointer', ['number'], [size])

  // Internal memory reallocator: MemRealloc(void *, unsigned int) => void *
  raylib.MemRealloc = (ptr, size) => mod.ccall('MemRealloc', 'pointer', ['pointer', 'number'], [ptr._address, size])

  // Internal memory free: MemFree(void *) => void
  raylib.MemFree = (ptr) => mod.ccall('MemFree', 'pointer', ['pointer'], [ptr._address])

  // Open URL with default system browser (if available): OpenURL(const char *) => void
  raylib.OpenURL = (url) => mod.ccall('OpenURL', 'pointer', ['string'], [url])

  // Set custom trace log: SetTraceLogCallback(TraceLogCallback) => void
  raylib.SetTraceLogCallback = (callback) => mod.ccall('SetTraceLogCallback', 'pointer', ['pointer'], [callback._address])

  // Set custom file binary data loader: SetLoadFileDataCallback(LoadFileDataCallback) => void
  raylib.SetLoadFileDataCallback = (callback) => mod.ccall('SetLoadFileDataCallback', 'pointer', ['pointer'], [callback._address])

  // Set custom file binary data saver: SetSaveFileDataCallback(SaveFileDataCallback) => void
  raylib.SetSaveFileDataCallback = (callback) => mod.ccall('SetSaveFileDataCallback', 'pointer', ['pointer'], [callback._address])

  // Set custom file text data loader: SetLoadFileTextCallback(LoadFileTextCallback) => void
  raylib.SetLoadFileTextCallback = (callback) => mod.ccall('SetLoadFileTextCallback', 'pointer', ['pointer'], [callback._address])

  // Set custom file text data saver: SetSaveFileTextCallback(SaveFileTextCallback) => void
  raylib.SetSaveFileTextCallback = (callback) => mod.ccall('SetSaveFileTextCallback', 'pointer', ['pointer'], [callback._address])

  // Load file data as byte array (read): LoadFileData(const char *, unsigned int *) => unsigned char *
  raylib.LoadFileData = (fileName, bytesRead) => mod.ccall('LoadFileData', 'pointer', ['string', 'pointer'], [fileName, bytesRead._address])

  // Unload file data allocated by LoadFileData(): UnloadFileData(unsigned char *) => void
  raylib.UnloadFileData = (data) => mod.ccall('UnloadFileData', 'pointer', ['pointer'], [data._address])

  // Save data to file from byte array (write), returns true on success: SaveFileData(const char *, void *, unsigned int) => bool
  raylib.SaveFileData = (fileName, data, bytesToWrite) => mod.ccall('SaveFileData', 'boolean', ['string', 'pointer', 'number'], [fileName, data._address, bytesToWrite])

  // Export data to code (.h), returns true on success: ExportDataAsCode(const unsigned char *, unsigned int, const char *) => bool
  raylib.ExportDataAsCode = (data, size, fileName) => mod.ccall('ExportDataAsCode', 'boolean', ['pointer', 'number', 'string'], [data._address, size, fileName])

  // Load text data from file (read), returns a '\0' terminated string: LoadFileText(const char *) => char *
  raylib.LoadFileText = (fileName) => mod.ccall('LoadFileText', 'pointer', ['string'], [fileName])

  // Unload file text data allocated by LoadFileText(): UnloadFileText(char *) => void
  raylib.UnloadFileText = (text) => mod.ccall('UnloadFileText', 'pointer', ['pointer'], [text._address])

  // Save text data to file (write), string must be '\0' terminated, returns true on success: SaveFileText(const char *, char *) => bool
  raylib.SaveFileText = (fileName, text) => mod.ccall('SaveFileText', 'boolean', ['string', 'pointer'], [fileName, text._address])

  // Check if file exists: FileExists(const char *) => bool
  raylib.FileExists = (fileName) => mod.ccall('FileExists', 'boolean', ['string'], [fileName])

  // Check if a directory path exists: DirectoryExists(const char *) => bool
  raylib.DirectoryExists = (dirPath) => mod.ccall('DirectoryExists', 'boolean', ['string'], [dirPath])

  // Check file extension (including point: .png, .wav): IsFileExtension(const char *, const char *) => bool
  raylib.IsFileExtension = (fileName, ext) => mod.ccall('IsFileExtension', 'boolean', ['string', 'string'], [fileName, ext])

  // Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h): GetFileLength(const char *) => int
  raylib.GetFileLength = (fileName) => mod.ccall('GetFileLength', 'number', ['string'], [fileName])

  // Get pointer to extension for a filename string (includes dot: '.png'): GetFileExtension(const char *) => const char *
  raylib.GetFileExtension = (fileName) => mod.ccall('GetFileExtension', 'string', ['string'], [fileName])

  // Get pointer to filename for a path string: GetFileName(const char *) => const char *
  raylib.GetFileName = (filePath) => mod.ccall('GetFileName', 'string', ['string'], [filePath])

  // Get filename string without extension (uses static string): GetFileNameWithoutExt(const char *) => const char *
  raylib.GetFileNameWithoutExt = (filePath) => mod.ccall('GetFileNameWithoutExt', 'string', ['string'], [filePath])

  // Get full path for a given fileName with path (uses static string): GetDirectoryPath(const char *) => const char *
  raylib.GetDirectoryPath = (filePath) => mod.ccall('GetDirectoryPath', 'string', ['string'], [filePath])

  // Get previous directory path for a given path (uses static string): GetPrevDirectoryPath(const char *) => const char *
  raylib.GetPrevDirectoryPath = (dirPath) => mod.ccall('GetPrevDirectoryPath', 'string', ['string'], [dirPath])

  // Get current working directory (uses static string): GetWorkingDirectory() => const char *
  raylib.GetWorkingDirectory = () => mod.ccall('GetWorkingDirectory', 'string', [], [])

  // Get the directory if the running application (uses static string): GetApplicationDirectory() => const char *
  raylib.GetApplicationDirectory = () => mod.ccall('GetApplicationDirectory', 'string', [], [])

  // Change working directory, return true on success: ChangeDirectory(const char *) => bool
  raylib.ChangeDirectory = (dir) => mod.ccall('ChangeDirectory', 'boolean', ['string'], [dir])

  // Check if a given path is a file or a directory: IsPathFile(const char *) => bool
  raylib.IsPathFile = (path) => mod.ccall('IsPathFile', 'boolean', ['string'], [path])

  // Load directory filepaths: LoadDirectoryFiles(const char *) => FilePathList
  raylib.LoadDirectoryFiles = (dirPath) => {
    const _ret = new raylib.FilePathList()
    mod.ccall('LoadDirectoryFiles', 'void', ['pointer', 'string'], [_ret._address, dirPath])
    return _ret
  }

  // Load directory filepaths with extension filtering and recursive directory scan: LoadDirectoryFilesEx(const char *, const char *, bool) => FilePathList
  raylib.LoadDirectoryFilesEx = (basePath, filter, scanSubdirs) => {
    const _ret = new raylib.FilePathList()
    mod.ccall('LoadDirectoryFilesEx', 'void', ['pointer', 'string', 'string', 'boolean'], [_ret._address, basePath, filter, scanSubdirs])
    return _ret
  }

  // Unload filepaths: UnloadDirectoryFiles(FilePathList) => void
  raylib.UnloadDirectoryFiles = (files) => mod.ccall('UnloadDirectoryFiles', 'pointer', ['pointer'], [files._address])

  // Check if a file has been dropped into window: IsFileDropped() => bool
  raylib.IsFileDropped = () => mod.ccall('IsFileDropped', 'boolean', [], [])

  // Load dropped filepaths: LoadDroppedFiles() => FilePathList
  raylib.LoadDroppedFiles = () => {
    const _ret = new raylib.FilePathList()
    mod.ccall('LoadDroppedFiles', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Unload dropped filepaths: UnloadDroppedFiles(FilePathList) => void
  raylib.UnloadDroppedFiles = (files) => mod.ccall('UnloadDroppedFiles', 'pointer', ['pointer'], [files._address])

  // Get file modification time (last write time): GetFileModTime(const char *) => long
  raylib.GetFileModTime = (fileName) => mod.ccall('GetFileModTime', 'number', ['string'], [fileName])

  // Compress data (DEFLATE algorithm), memory must be MemFree(): CompressData(const unsigned char *, int, int *) => unsigned char *
  raylib.CompressData = (data, dataSize, compDataSize) => mod.ccall('CompressData', 'pointer', ['pointer', 'number', 'pointer'], [data._address, dataSize, compDataSize._address])

  // Decompress data (DEFLATE algorithm), memory must be MemFree(): DecompressData(const unsigned char *, int, int *) => unsigned char *
  raylib.DecompressData = (compData, compDataSize, dataSize) => mod.ccall('DecompressData', 'pointer', ['pointer', 'number', 'pointer'], [compData._address, compDataSize, dataSize._address])

  // Encode data to Base64 string, memory must be MemFree(): EncodeDataBase64(const unsigned char *, int, int *) => char *
  raylib.EncodeDataBase64 = (data, dataSize, outputSize) => mod.ccall('EncodeDataBase64', 'pointer', ['pointer', 'number', 'pointer'], [data._address, dataSize, outputSize._address])

  // Decode Base64 string data, memory must be MemFree(): DecodeDataBase64(const unsigned char *, int *) => unsigned char *
  raylib.DecodeDataBase64 = (data, outputSize) => mod.ccall('DecodeDataBase64', 'pointer', ['pointer', 'pointer'], [data._address, outputSize._address])

  // Check if a key has been pressed once: IsKeyPressed(int) => bool
  raylib.IsKeyPressed = (key) => mod.ccall('IsKeyPressed', 'boolean', ['number'], [key])

  // Check if a key is being pressed: IsKeyDown(int) => bool
  raylib.IsKeyDown = (key) => mod.ccall('IsKeyDown', 'boolean', ['number'], [key])

  // Check if a key has been released once: IsKeyReleased(int) => bool
  raylib.IsKeyReleased = (key) => mod.ccall('IsKeyReleased', 'boolean', ['number'], [key])

  // Check if a key is NOT being pressed: IsKeyUp(int) => bool
  raylib.IsKeyUp = (key) => mod.ccall('IsKeyUp', 'boolean', ['number'], [key])

  // Set a custom key to exit program (default is ESC): SetExitKey(int) => void
  raylib.SetExitKey = (key) => mod.ccall('SetExitKey', 'pointer', ['number'], [key])

  // Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty: GetKeyPressed() => int
  raylib.GetKeyPressed = () => mod.ccall('GetKeyPressed', 'number', [], [])

  // Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty: GetCharPressed() => int
  raylib.GetCharPressed = () => mod.ccall('GetCharPressed', 'number', [], [])

  // Check if a gamepad is available: IsGamepadAvailable(int) => bool
  raylib.IsGamepadAvailable = (gamepad) => mod.ccall('IsGamepadAvailable', 'boolean', ['number'], [gamepad])

  // Get gamepad internal name id: GetGamepadName(int) => const char *
  raylib.GetGamepadName = (gamepad) => mod.ccall('GetGamepadName', 'string', ['number'], [gamepad])

  // Check if a gamepad button has been pressed once: IsGamepadButtonPressed(int, int) => bool
  raylib.IsGamepadButtonPressed = (gamepad, button) => mod.ccall('IsGamepadButtonPressed', 'boolean', ['number', 'number'], [gamepad, button])

  // Check if a gamepad button is being pressed: IsGamepadButtonDown(int, int) => bool
  raylib.IsGamepadButtonDown = (gamepad, button) => mod.ccall('IsGamepadButtonDown', 'boolean', ['number', 'number'], [gamepad, button])

  // Check if a gamepad button has been released once: IsGamepadButtonReleased(int, int) => bool
  raylib.IsGamepadButtonReleased = (gamepad, button) => mod.ccall('IsGamepadButtonReleased', 'boolean', ['number', 'number'], [gamepad, button])

  // Check if a gamepad button is NOT being pressed: IsGamepadButtonUp(int, int) => bool
  raylib.IsGamepadButtonUp = (gamepad, button) => mod.ccall('IsGamepadButtonUp', 'boolean', ['number', 'number'], [gamepad, button])

  // Get the last gamepad button pressed: GetGamepadButtonPressed() => int
  raylib.GetGamepadButtonPressed = () => mod.ccall('GetGamepadButtonPressed', 'number', [], [])

  // Get gamepad axis count for a gamepad: GetGamepadAxisCount(int) => int
  raylib.GetGamepadAxisCount = (gamepad) => mod.ccall('GetGamepadAxisCount', 'number', ['number'], [gamepad])

  // Get axis movement value for a gamepad axis: GetGamepadAxisMovement(int, int) => float
  raylib.GetGamepadAxisMovement = (gamepad, axis) => mod.ccall('GetGamepadAxisMovement', 'number', ['number', 'number'], [gamepad, axis])

  // Set internal gamepad mappings (SDL_GameControllerDB): SetGamepadMappings(const char *) => int
  raylib.SetGamepadMappings = (mappings) => mod.ccall('SetGamepadMappings', 'number', ['string'], [mappings])

  // Check if a mouse button has been pressed once: IsMouseButtonPressed(int) => bool
  raylib.IsMouseButtonPressed = (button) => mod.ccall('IsMouseButtonPressed', 'boolean', ['number'], [button])

  // Check if a mouse button is being pressed: IsMouseButtonDown(int) => bool
  raylib.IsMouseButtonDown = (button) => mod.ccall('IsMouseButtonDown', 'boolean', ['number'], [button])

  // Check if a mouse button has been released once: IsMouseButtonReleased(int) => bool
  raylib.IsMouseButtonReleased = (button) => mod.ccall('IsMouseButtonReleased', 'boolean', ['number'], [button])

  // Check if a mouse button is NOT being pressed: IsMouseButtonUp(int) => bool
  raylib.IsMouseButtonUp = (button) => mod.ccall('IsMouseButtonUp', 'boolean', ['number'], [button])

  // Get mouse position X: GetMouseX() => int
  raylib.GetMouseX = () => mod.ccall('GetMouseX', 'number', [], [])

  // Get mouse position Y: GetMouseY() => int
  raylib.GetMouseY = () => mod.ccall('GetMouseY', 'number', [], [])

  // Get mouse position XY: GetMousePosition() => Vector2
  raylib.GetMousePosition = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetMousePosition', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Get mouse delta between frames: GetMouseDelta() => Vector2
  raylib.GetMouseDelta = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetMouseDelta', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Set mouse position XY: SetMousePosition(int, int) => void
  raylib.SetMousePosition = (x, y) => mod.ccall('SetMousePosition', 'pointer', ['number', 'number'], [x, y])

  // Set mouse offset: SetMouseOffset(int, int) => void
  raylib.SetMouseOffset = (offsetX, offsetY) => mod.ccall('SetMouseOffset', 'pointer', ['number', 'number'], [offsetX, offsetY])

  // Set mouse scaling: SetMouseScale(float, float) => void
  raylib.SetMouseScale = (scaleX, scaleY) => mod.ccall('SetMouseScale', 'pointer', ['number', 'number'], [scaleX, scaleY])

  // Get mouse wheel movement for X or Y, whichever is larger: GetMouseWheelMove() => float
  raylib.GetMouseWheelMove = () => mod.ccall('GetMouseWheelMove', 'number', [], [])

  // Get mouse wheel movement for both X and Y: GetMouseWheelMoveV() => Vector2
  raylib.GetMouseWheelMoveV = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetMouseWheelMoveV', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Set mouse cursor: SetMouseCursor(int) => void
  raylib.SetMouseCursor = (cursor) => mod.ccall('SetMouseCursor', 'pointer', ['number'], [cursor])

  // Get touch position X for touch point 0 (relative to screen size): GetTouchX() => int
  raylib.GetTouchX = () => mod.ccall('GetTouchX', 'number', [], [])

  // Get touch position Y for touch point 0 (relative to screen size): GetTouchY() => int
  raylib.GetTouchY = () => mod.ccall('GetTouchY', 'number', [], [])

  // Get touch position XY for a touch point index (relative to screen size): GetTouchPosition(int) => Vector2
  raylib.GetTouchPosition = (index) => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetTouchPosition', 'void', ['pointer', 'number'], [_ret._address, index])
    return _ret
  }

  // Get touch point identifier for given index: GetTouchPointId(int) => int
  raylib.GetTouchPointId = (index) => mod.ccall('GetTouchPointId', 'number', ['number'], [index])

  // Get number of touch points: GetTouchPointCount() => int
  raylib.GetTouchPointCount = () => mod.ccall('GetTouchPointCount', 'number', [], [])

  // Enable a set of gestures using flags: SetGesturesEnabled(unsigned int) => void
  raylib.SetGesturesEnabled = (flags) => mod.ccall('SetGesturesEnabled', 'pointer', ['number'], [flags])

  // Check if a gesture have been detected: IsGestureDetected(int) => bool
  raylib.IsGestureDetected = (gesture) => mod.ccall('IsGestureDetected', 'boolean', ['number'], [gesture])

  // Get latest detected gesture: GetGestureDetected() => int
  raylib.GetGestureDetected = () => mod.ccall('GetGestureDetected', 'number', [], [])

  // Get gesture hold time in milliseconds: GetGestureHoldDuration() => float
  raylib.GetGestureHoldDuration = () => mod.ccall('GetGestureHoldDuration', 'number', [], [])

  // Get gesture drag vector: GetGestureDragVector() => Vector2
  raylib.GetGestureDragVector = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetGestureDragVector', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Get gesture drag angle: GetGestureDragAngle() => float
  raylib.GetGestureDragAngle = () => mod.ccall('GetGestureDragAngle', 'number', [], [])

  // Get gesture pinch delta: GetGesturePinchVector() => Vector2
  raylib.GetGesturePinchVector = () => {
    const _ret = new raylib.Vector2()
    mod.ccall('GetGesturePinchVector', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Get gesture pinch angle: GetGesturePinchAngle() => float
  raylib.GetGesturePinchAngle = () => mod.ccall('GetGesturePinchAngle', 'number', [], [])

  // Update camera position for selected mode: UpdateCamera(Camera *, int) => void
  raylib.UpdateCamera = (camera, mode) => mod.ccall('UpdateCamera', 'pointer', ['pointer', 'number'], [camera._address, mode])

  // Update camera movement/rotation: UpdateCameraPro(Camera *, Vector3, Vector3, float) => void
  raylib.UpdateCameraPro = (camera, movement, rotation, zoom) => mod.ccall('UpdateCameraPro', 'pointer', ['pointer', 'pointer', 'pointer', 'number'], [camera._address, movement._address, rotation._address, zoom])

  // Set texture and rectangle to be used on shapes drawing: SetShapesTexture(Texture2D, Rectangle) => void
  raylib.SetShapesTexture = (texture, source) => mod.ccall('SetShapesTexture', 'pointer', ['pointer', 'pointer'], [texture._address, source._address])

  // Draw a pixel: DrawPixel(int, int, Color) => void
  raylib.DrawPixel = (posX, posY, color) => mod.ccall('DrawPixel', 'pointer', ['number', 'number', 'pointer'], [posX, posY, color._address])

  // Draw a pixel (Vector version): DrawPixelV(Vector2, Color) => void
  raylib.DrawPixelV = (position, color) => mod.ccall('DrawPixelV', 'pointer', ['pointer', 'pointer'], [position._address, color._address])

  // Draw a line: DrawLine(int, int, int, int, Color) => void
  raylib.DrawLine = (startPosX, startPosY, endPosX, endPosY, color) => mod.ccall('DrawLine', 'pointer', ['number', 'number', 'number', 'number', 'pointer'], [startPosX, startPosY, endPosX, endPosY, color._address])

  // Draw a line (Vector version): DrawLineV(Vector2, Vector2, Color) => void
  raylib.DrawLineV = (startPos, endPos, color) => mod.ccall('DrawLineV', 'pointer', ['pointer', 'pointer', 'pointer'], [startPos._address, endPos._address, color._address])

  // Draw a line defining thickness: DrawLineEx(Vector2, Vector2, float, Color) => void
  raylib.DrawLineEx = (startPos, endPos, thick, color) => mod.ccall('DrawLineEx', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [startPos._address, endPos._address, thick, color._address])

  // Draw a line using cubic-bezier curves in-out: DrawLineBezier(Vector2, Vector2, float, Color) => void
  raylib.DrawLineBezier = (startPos, endPos, thick, color) => mod.ccall('DrawLineBezier', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [startPos._address, endPos._address, thick, color._address])

  // Draw line using quadratic bezier curves with a control point: DrawLineBezierQuad(Vector2, Vector2, Vector2, float, Color) => void
  raylib.DrawLineBezierQuad = (startPos, endPos, controlPos, thick, color) => mod.ccall('DrawLineBezierQuad', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer'], [startPos._address, endPos._address, controlPos._address, thick, color._address])

  // Draw line using cubic bezier curves with 2 control points: DrawLineBezierCubic(Vector2, Vector2, Vector2, Vector2, float, Color) => void
  raylib.DrawLineBezierCubic = (startPos, endPos, startControlPos, endControlPos, thick, color) => mod.ccall('DrawLineBezierCubic', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'], [startPos._address, endPos._address, startControlPos._address, endControlPos._address, thick, color._address])

  // Draw lines sequence: DrawLineStrip(Vector2 *, int, Color) => void
  raylib.DrawLineStrip = (points, pointCount, color) => mod.ccall('DrawLineStrip', 'pointer', ['pointer', 'number', 'pointer'], [points._address, pointCount, color._address])

  // Draw a color-filled circle: DrawCircle(int, int, float, Color) => void
  raylib.DrawCircle = (centerX, centerY, radius, color) => mod.ccall('DrawCircle', 'pointer', ['number', 'number', 'number', 'pointer'], [centerX, centerY, radius, color._address])

  // Draw a piece of a circle: DrawCircleSector(Vector2, float, float, float, int, Color) => void
  raylib.DrawCircleSector = (center, radius, startAngle, endAngle, segments, color) => mod.ccall('DrawCircleSector', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [center._address, radius, startAngle, endAngle, segments, color._address])

  // Draw circle sector outline: DrawCircleSectorLines(Vector2, float, float, float, int, Color) => void
  raylib.DrawCircleSectorLines = (center, radius, startAngle, endAngle, segments, color) => mod.ccall('DrawCircleSectorLines', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [center._address, radius, startAngle, endAngle, segments, color._address])

  // Draw a gradient-filled circle: DrawCircleGradient(int, int, float, Color, Color) => void
  raylib.DrawCircleGradient = (centerX, centerY, radius, color1, color2) => mod.ccall('DrawCircleGradient', 'pointer', ['number', 'number', 'number', 'pointer', 'pointer'], [centerX, centerY, radius, color1._address, color2._address])

  // Draw a color-filled circle (Vector version): DrawCircleV(Vector2, float, Color) => void
  raylib.DrawCircleV = (center, radius, color) => mod.ccall('DrawCircleV', 'pointer', ['pointer', 'number', 'pointer'], [center._address, radius, color._address])

  // Draw circle outline: DrawCircleLines(int, int, float, Color) => void
  raylib.DrawCircleLines = (centerX, centerY, radius, color) => mod.ccall('DrawCircleLines', 'pointer', ['number', 'number', 'number', 'pointer'], [centerX, centerY, radius, color._address])

  // Draw ellipse: DrawEllipse(int, int, float, float, Color) => void
  raylib.DrawEllipse = (centerX, centerY, radiusH, radiusV, color) => mod.ccall('DrawEllipse', 'pointer', ['number', 'number', 'number', 'number', 'pointer'], [centerX, centerY, radiusH, radiusV, color._address])

  // Draw ellipse outline: DrawEllipseLines(int, int, float, float, Color) => void
  raylib.DrawEllipseLines = (centerX, centerY, radiusH, radiusV, color) => mod.ccall('DrawEllipseLines', 'pointer', ['number', 'number', 'number', 'number', 'pointer'], [centerX, centerY, radiusH, radiusV, color._address])

  // Draw ring: DrawRing(Vector2, float, float, float, float, int, Color) => void
  raylib.DrawRing = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => mod.ccall('DrawRing', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'], [center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address])

  // Draw ring outline: DrawRingLines(Vector2, float, float, float, float, int, Color) => void
  raylib.DrawRingLines = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => mod.ccall('DrawRingLines', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'], [center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address])

  // Draw a color-filled rectangle: DrawRectangle(int, int, int, int, Color) => void
  raylib.DrawRectangle = (posX, posY, width, height, color) => mod.ccall('DrawRectangle', 'pointer', ['number', 'number', 'number', 'number', 'pointer'], [posX, posY, width, height, color._address])

  // Draw a color-filled rectangle (Vector version): DrawRectangleV(Vector2, Vector2, Color) => void
  raylib.DrawRectangleV = (position, size, color) => mod.ccall('DrawRectangleV', 'pointer', ['pointer', 'pointer', 'pointer'], [position._address, size._address, color._address])

  // Draw a color-filled rectangle: DrawRectangleRec(Rectangle, Color) => void
  raylib.DrawRectangleRec = (rec, color) => mod.ccall('DrawRectangleRec', 'pointer', ['pointer', 'pointer'], [rec._address, color._address])

  // Draw a color-filled rectangle with pro parameters: DrawRectanglePro(Rectangle, Vector2, float, Color) => void
  raylib.DrawRectanglePro = (rec, origin, rotation, color) => mod.ccall('DrawRectanglePro', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [rec._address, origin._address, rotation, color._address])

  // Draw a vertical-gradient-filled rectangle: DrawRectangleGradientV(int, int, int, int, Color, Color) => void
  raylib.DrawRectangleGradientV = (posX, posY, width, height, color1, color2) => mod.ccall('DrawRectangleGradientV', 'pointer', ['number', 'number', 'number', 'number', 'pointer', 'pointer'], [posX, posY, width, height, color1._address, color2._address])

  // Draw a horizontal-gradient-filled rectangle: DrawRectangleGradientH(int, int, int, int, Color, Color) => void
  raylib.DrawRectangleGradientH = (posX, posY, width, height, color1, color2) => mod.ccall('DrawRectangleGradientH', 'pointer', ['number', 'number', 'number', 'number', 'pointer', 'pointer'], [posX, posY, width, height, color1._address, color2._address])

  // Draw a gradient-filled rectangle with custom vertex colors: DrawRectangleGradientEx(Rectangle, Color, Color, Color, Color) => void
  raylib.DrawRectangleGradientEx = (rec, col1, col2, col3, col4) => mod.ccall('DrawRectangleGradientEx', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'], [rec._address, col1._address, col2._address, col3._address, col4._address])

  // Draw rectangle outline: DrawRectangleLines(int, int, int, int, Color) => void
  raylib.DrawRectangleLines = (posX, posY, width, height, color) => mod.ccall('DrawRectangleLines', 'pointer', ['number', 'number', 'number', 'number', 'pointer'], [posX, posY, width, height, color._address])

  // Draw rectangle outline with extended parameters: DrawRectangleLinesEx(Rectangle, float, Color) => void
  raylib.DrawRectangleLinesEx = (rec, lineThick, color) => mod.ccall('DrawRectangleLinesEx', 'pointer', ['pointer', 'number', 'pointer'], [rec._address, lineThick, color._address])

  // Draw rectangle with rounded edges: DrawRectangleRounded(Rectangle, float, int, Color) => void
  raylib.DrawRectangleRounded = (rec, roundness, segments, color) => mod.ccall('DrawRectangleRounded', 'pointer', ['pointer', 'number', 'number', 'pointer'], [rec._address, roundness, segments, color._address])

  // Draw rectangle with rounded edges outline: DrawRectangleRoundedLines(Rectangle, float, int, float, Color) => void
  raylib.DrawRectangleRoundedLines = (rec, roundness, segments, lineThick, color) => mod.ccall('DrawRectangleRoundedLines', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [rec._address, roundness, segments, lineThick, color._address])

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle(Vector2, Vector2, Vector2, Color) => void
  raylib.DrawTriangle = (v1, v2, v3, color) => mod.ccall('DrawTriangle', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'], [v1._address, v2._address, v3._address, color._address])

  // Draw triangle outline (vertex in counter-clockwise order!): DrawTriangleLines(Vector2, Vector2, Vector2, Color) => void
  raylib.DrawTriangleLines = (v1, v2, v3, color) => mod.ccall('DrawTriangleLines', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'], [v1._address, v2._address, v3._address, color._address])

  // Draw a triangle fan defined by points (first vertex is the center): DrawTriangleFan(Vector2 *, int, Color) => void
  raylib.DrawTriangleFan = (points, pointCount, color) => mod.ccall('DrawTriangleFan', 'pointer', ['pointer', 'number', 'pointer'], [points._address, pointCount, color._address])

  // Draw a triangle strip defined by points: DrawTriangleStrip(Vector2 *, int, Color) => void
  raylib.DrawTriangleStrip = (points, pointCount, color) => mod.ccall('DrawTriangleStrip', 'pointer', ['pointer', 'number', 'pointer'], [points._address, pointCount, color._address])

  // Draw a regular polygon (Vector version): DrawPoly(Vector2, int, float, float, Color) => void
  raylib.DrawPoly = (center, sides, radius, rotation, color) => mod.ccall('DrawPoly', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [center._address, sides, radius, rotation, color._address])

  // Draw a polygon outline of n sides: DrawPolyLines(Vector2, int, float, float, Color) => void
  raylib.DrawPolyLines = (center, sides, radius, rotation, color) => mod.ccall('DrawPolyLines', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [center._address, sides, radius, rotation, color._address])

  // Draw a polygon outline of n sides with extended parameters: DrawPolyLinesEx(Vector2, int, float, float, float, Color) => void
  raylib.DrawPolyLinesEx = (center, sides, radius, rotation, lineThick, color) => mod.ccall('DrawPolyLinesEx', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [center._address, sides, radius, rotation, lineThick, color._address])

  // Check collision between two rectangles: CheckCollisionRecs(Rectangle, Rectangle) => bool
  raylib.CheckCollisionRecs = (rec1, rec2) => mod.ccall('CheckCollisionRecs', 'boolean', ['pointer', 'pointer'], [rec1._address, rec2._address])

  // Check collision between two circles: CheckCollisionCircles(Vector2, float, Vector2, float) => bool
  raylib.CheckCollisionCircles = (center1, radius1, center2, radius2) => mod.ccall('CheckCollisionCircles', 'boolean', ['pointer', 'number', 'pointer', 'number'], [center1._address, radius1, center2._address, radius2])

  // Check collision between circle and rectangle: CheckCollisionCircleRec(Vector2, float, Rectangle) => bool
  raylib.CheckCollisionCircleRec = (center, radius, rec) => mod.ccall('CheckCollisionCircleRec', 'boolean', ['pointer', 'number', 'pointer'], [center._address, radius, rec._address])

  // Check if point is inside rectangle: CheckCollisionPointRec(Vector2, Rectangle) => bool
  raylib.CheckCollisionPointRec = (point, rec) => mod.ccall('CheckCollisionPointRec', 'boolean', ['pointer', 'pointer'], [point._address, rec._address])

  // Check if point is inside circle: CheckCollisionPointCircle(Vector2, Vector2, float) => bool
  raylib.CheckCollisionPointCircle = (point, center, radius) => mod.ccall('CheckCollisionPointCircle', 'boolean', ['pointer', 'pointer', 'number'], [point._address, center._address, radius])

  // Check if point is inside a triangle: CheckCollisionPointTriangle(Vector2, Vector2, Vector2, Vector2) => bool
  raylib.CheckCollisionPointTriangle = (point, p1, p2, p3) => mod.ccall('CheckCollisionPointTriangle', 'boolean', ['pointer', 'pointer', 'pointer', 'pointer'], [point._address, p1._address, p2._address, p3._address])

  // Check if point is within a polygon described by array of vertices: CheckCollisionPointPoly(Vector2, Vector2 *, int) => bool
  raylib.CheckCollisionPointPoly = (point, points, pointCount) => mod.ccall('CheckCollisionPointPoly', 'boolean', ['pointer', 'pointer', 'number'], [point._address, points._address, pointCount])

  // Check the collision between two lines defined by two points each, returns collision point by reference: CheckCollisionLines(Vector2, Vector2, Vector2, Vector2, Vector2 *) => bool
  raylib.CheckCollisionLines = (startPos1, endPos1, startPos2, endPos2, collisionPoint) => mod.ccall('CheckCollisionLines', 'boolean', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'], [startPos1._address, endPos1._address, startPos2._address, endPos2._address, collisionPoint._address])

  // Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]: CheckCollisionPointLine(Vector2, Vector2, Vector2, int) => bool
  raylib.CheckCollisionPointLine = (point, p1, p2, threshold) => mod.ccall('CheckCollisionPointLine', 'boolean', ['pointer', 'pointer', 'pointer', 'number'], [point._address, p1._address, p2._address, threshold])

  // Get collision rectangle for two rectangles collision: GetCollisionRec(Rectangle, Rectangle) => Rectangle
  raylib.GetCollisionRec = (rec1, rec2) => {
    const _ret = new raylib.Rectangle()
    mod.ccall('GetCollisionRec', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, rec1._address, rec2._address])
    return _ret
  }

  // Load image from file into CPU memory (RAM): LoadImage(const char *) => Image
  raylib.LoadImage = (fileName) => {
    const _ret = new raylib.Image()
    mod.ccall('LoadImage', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load image from RAW file data: LoadImageRaw(const char *, int, int, int, int) => Image
  raylib.LoadImageRaw = (fileName, width, height, format, headerSize) => {
    const _ret = new raylib.Image()
    mod.ccall('LoadImageRaw', 'void', ['pointer', 'string', 'number', 'number', 'number', 'number'], [_ret._address, fileName, width, height, format, headerSize])
    return _ret
  }

  // Load image sequence from file (frames appended to image.data): LoadImageAnim(const char *, int *) => Image
  raylib.LoadImageAnim = (fileName, frames) => {
    const _ret = new raylib.Image()
    mod.ccall('LoadImageAnim', 'void', ['pointer', 'string', 'pointer'], [_ret._address, fileName, frames._address])
    return _ret
  }

  // Load image from memory buffer, fileType refers to extension: i.e. '.png': LoadImageFromMemory(const char *, const unsigned char *, int) => Image
  raylib.LoadImageFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Image()
    mod.ccall('LoadImageFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'], [_ret._address, fileType, fileData._address, dataSize])
    return _ret
  }

  // Load image from GPU texture data: LoadImageFromTexture(Texture2D) => Image
  raylib.LoadImageFromTexture = (texture) => {
    const _ret = new raylib.Image()
    mod.ccall('LoadImageFromTexture', 'void', ['pointer', 'pointer'], [_ret._address, texture._address])
    return _ret
  }

  // Load image from screen buffer and (screenshot): LoadImageFromScreen() => Image
  raylib.LoadImageFromScreen = () => {
    const _ret = new raylib.Image()
    mod.ccall('LoadImageFromScreen', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Check if an image is ready: IsImageReady(Image) => bool
  raylib.IsImageReady = (image) => mod.ccall('IsImageReady', 'boolean', ['pointer'], [image._address])

  // Unload image from CPU memory (RAM): UnloadImage(Image) => void
  raylib.UnloadImage = (image) => mod.ccall('UnloadImage', 'pointer', ['pointer'], [image._address])

  // Export image data to file, returns true on success: ExportImage(Image, const char *) => bool
  raylib.ExportImage = (image, fileName) => mod.ccall('ExportImage', 'boolean', ['pointer', 'string'], [image._address, fileName])

  // Export image as code file defining an array of bytes, returns true on success: ExportImageAsCode(Image, const char *) => bool
  raylib.ExportImageAsCode = (image, fileName) => mod.ccall('ExportImageAsCode', 'boolean', ['pointer', 'string'], [image._address, fileName])

  // Generate image: plain color: GenImageColor(int, int, Color) => Image
  raylib.GenImageColor = (width, height, color) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageColor', 'void', ['pointer', 'number', 'number', 'pointer'], [_ret._address, width, height, color._address])
    return _ret
  }

  // Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient: GenImageGradientLinear(int, int, int, Color, Color) => Image
  raylib.GenImageGradientLinear = (width, height, direction, start, end) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageGradientLinear', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'], [_ret._address, width, height, direction, start._address, end._address])
    return _ret
  }

  // Generate image: radial gradient: GenImageGradientRadial(int, int, float, Color, Color) => Image
  raylib.GenImageGradientRadial = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageGradientRadial', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'], [_ret._address, width, height, density, inner._address, outer._address])
    return _ret
  }

  // Generate image: square gradient: GenImageGradientSquare(int, int, float, Color, Color) => Image
  raylib.GenImageGradientSquare = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageGradientSquare', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'], [_ret._address, width, height, density, inner._address, outer._address])
    return _ret
  }

  // Generate image: checked: GenImageChecked(int, int, int, int, Color, Color) => Image
  raylib.GenImageChecked = (width, height, checksX, checksY, col1, col2) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageChecked', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer', 'pointer'], [_ret._address, width, height, checksX, checksY, col1._address, col2._address])
    return _ret
  }

  // Generate image: white noise: GenImageWhiteNoise(int, int, float) => Image
  raylib.GenImageWhiteNoise = (width, height, factor) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageWhiteNoise', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, width, height, factor])
    return _ret
  }

  // Generate image: perlin noise: GenImagePerlinNoise(int, int, int, int, float) => Image
  raylib.GenImagePerlinNoise = (width, height, offsetX, offsetY, scale) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImagePerlinNoise', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number'], [_ret._address, width, height, offsetX, offsetY, scale])
    return _ret
  }

  // Generate image: cellular algorithm, bigger tileSize means bigger cells: GenImageCellular(int, int, int) => Image
  raylib.GenImageCellular = (width, height, tileSize) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageCellular', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, width, height, tileSize])
    return _ret
  }

  // Generate image: grayscale image from text data: GenImageText(int, int, const char *) => Image
  raylib.GenImageText = (width, height, text) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageText', 'void', ['pointer', 'number', 'number', 'string'], [_ret._address, width, height, text])
    return _ret
  }

  // Create an image duplicate (useful for transformations): ImageCopy(Image) => Image
  raylib.ImageCopy = (image) => {
    const _ret = new raylib.Image()
    mod.ccall('ImageCopy', 'void', ['pointer', 'pointer'], [_ret._address, image._address])
    return _ret
  }

  // Create an image from another image piece: ImageFromImage(Image, Rectangle) => Image
  raylib.ImageFromImage = (image, rec) => {
    const _ret = new raylib.Image()
    mod.ccall('ImageFromImage', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, image._address, rec._address])
    return _ret
  }

  // Create an image from text (default font): ImageText(const char *, int, Color) => Image
  raylib.ImageText = (text, fontSize, color) => {
    const _ret = new raylib.Image()
    mod.ccall('ImageText', 'void', ['pointer', 'string', 'number', 'pointer'], [_ret._address, text, fontSize, color._address])
    return _ret
  }

  // Create an image from text (custom sprite font): ImageTextEx(Font, const char *, float, float, Color) => Image
  raylib.ImageTextEx = (font, text, fontSize, spacing, tint) => {
    const _ret = new raylib.Image()
    mod.ccall('ImageTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number', 'pointer'], [_ret._address, font._address, text, fontSize, spacing, tint._address])
    return _ret
  }

  // Convert image data to desired format: ImageFormat(Image *, int) => void
  raylib.ImageFormat = (image, newFormat) => mod.ccall('ImageFormat', 'pointer', ['pointer', 'number'], [image._address, newFormat])

  // Convert image to POT (power-of-two): ImageToPOT(Image *, Color) => void
  raylib.ImageToPOT = (image, fill) => mod.ccall('ImageToPOT', 'pointer', ['pointer', 'pointer'], [image._address, fill._address])

  // Crop an image to a defined rectangle: ImageCrop(Image *, Rectangle) => void
  raylib.ImageCrop = (image, crop) => mod.ccall('ImageCrop', 'pointer', ['pointer', 'pointer'], [image._address, crop._address])

  // Crop image depending on alpha value: ImageAlphaCrop(Image *, float) => void
  raylib.ImageAlphaCrop = (image, threshold) => mod.ccall('ImageAlphaCrop', 'pointer', ['pointer', 'number'], [image._address, threshold])

  // Clear alpha channel to desired color: ImageAlphaClear(Image *, Color, float) => void
  raylib.ImageAlphaClear = (image, color, threshold) => mod.ccall('ImageAlphaClear', 'pointer', ['pointer', 'pointer', 'number'], [image._address, color._address, threshold])

  // Apply alpha mask to image: ImageAlphaMask(Image *, Image) => void
  raylib.ImageAlphaMask = (image, alphaMask) => mod.ccall('ImageAlphaMask', 'pointer', ['pointer', 'pointer'], [image._address, alphaMask._address])

  // Premultiply alpha channel: ImageAlphaPremultiply(Image *) => void
  raylib.ImageAlphaPremultiply = (image) => mod.ccall('ImageAlphaPremultiply', 'pointer', ['pointer'], [image._address])

  // Apply Gaussian blur using a box blur approximation: ImageBlurGaussian(Image *, int) => void
  raylib.ImageBlurGaussian = (image, blurSize) => mod.ccall('ImageBlurGaussian', 'pointer', ['pointer', 'number'], [image._address, blurSize])

  // Resize image (Bicubic scaling algorithm): ImageResize(Image *, int, int) => void
  raylib.ImageResize = (image, newWidth, newHeight) => mod.ccall('ImageResize', 'pointer', ['pointer', 'number', 'number'], [image._address, newWidth, newHeight])

  // Resize image (Nearest-Neighbor scaling algorithm): ImageResizeNN(Image *, int, int) => void
  raylib.ImageResizeNN = (image, newWidth, newHeight) => mod.ccall('ImageResizeNN', 'pointer', ['pointer', 'number', 'number'], [image._address, newWidth, newHeight])

  // Resize canvas and fill with color: ImageResizeCanvas(Image *, int, int, int, int, Color) => void
  raylib.ImageResizeCanvas = (image, newWidth, newHeight, offsetX, offsetY, fill) => mod.ccall('ImageResizeCanvas', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [image._address, newWidth, newHeight, offsetX, offsetY, fill._address])

  // Compute all mipmap levels for a provided image: ImageMipmaps(Image *) => void
  raylib.ImageMipmaps = (image) => mod.ccall('ImageMipmaps', 'pointer', ['pointer'], [image._address])

  // Dither image data to 16bpp or lower (Floyd-Steinberg dithering): ImageDither(Image *, int, int, int, int) => void
  raylib.ImageDither = (image, rBpp, gBpp, bBpp, aBpp) => mod.ccall('ImageDither', 'pointer', ['pointer', 'number', 'number', 'number', 'number'], [image._address, rBpp, gBpp, bBpp, aBpp])

  // Flip image vertically: ImageFlipVertical(Image *) => void
  raylib.ImageFlipVertical = (image) => mod.ccall('ImageFlipVertical', 'pointer', ['pointer'], [image._address])

  // Flip image horizontally: ImageFlipHorizontal(Image *) => void
  raylib.ImageFlipHorizontal = (image) => mod.ccall('ImageFlipHorizontal', 'pointer', ['pointer'], [image._address])

  // Rotate image by input angle in degrees (-359 to 359) : ImageRotate(Image *, int) => void
  raylib.ImageRotate = (image, degrees) => mod.ccall('ImageRotate', 'pointer', ['pointer', 'number'], [image._address, degrees])

  // Rotate image clockwise 90deg: ImageRotateCW(Image *) => void
  raylib.ImageRotateCW = (image) => mod.ccall('ImageRotateCW', 'pointer', ['pointer'], [image._address])

  // Rotate image counter-clockwise 90deg: ImageRotateCCW(Image *) => void
  raylib.ImageRotateCCW = (image) => mod.ccall('ImageRotateCCW', 'pointer', ['pointer'], [image._address])

  // Modify image color: tint: ImageColorTint(Image *, Color) => void
  raylib.ImageColorTint = (image, color) => mod.ccall('ImageColorTint', 'pointer', ['pointer', 'pointer'], [image._address, color._address])

  // Modify image color: invert: ImageColorInvert(Image *) => void
  raylib.ImageColorInvert = (image) => mod.ccall('ImageColorInvert', 'pointer', ['pointer'], [image._address])

  // Modify image color: grayscale: ImageColorGrayscale(Image *) => void
  raylib.ImageColorGrayscale = (image) => mod.ccall('ImageColorGrayscale', 'pointer', ['pointer'], [image._address])

  // Modify image color: contrast (-100 to 100): ImageColorContrast(Image *, float) => void
  raylib.ImageColorContrast = (image, contrast) => mod.ccall('ImageColorContrast', 'pointer', ['pointer', 'number'], [image._address, contrast])

  // Modify image color: brightness (-255 to 255): ImageColorBrightness(Image *, int) => void
  raylib.ImageColorBrightness = (image, brightness) => mod.ccall('ImageColorBrightness', 'pointer', ['pointer', 'number'], [image._address, brightness])

  // Modify image color: replace color: ImageColorReplace(Image *, Color, Color) => void
  raylib.ImageColorReplace = (image, color, replace) => mod.ccall('ImageColorReplace', 'pointer', ['pointer', 'pointer', 'pointer'], [image._address, color._address, replace._address])

  // Load color data from image as a Color array (RGBA - 32bit): LoadImageColors(Image) => Color *
  raylib.LoadImageColors = (image) => {
    const _ret = new raylib.Color()
    mod.ccall('LoadImageColors', 'void', ['pointer', 'pointer'], [_ret._address, image._address])
    return _ret
  }

  // Load colors palette from image as a Color array (RGBA - 32bit): LoadImagePalette(Image, int, int *) => Color *
  raylib.LoadImagePalette = (image, maxPaletteSize, colorCount) => {
    const _ret = new raylib.Color()
    mod.ccall('LoadImagePalette', 'void', ['pointer', 'pointer', 'number', 'pointer'], [_ret._address, image._address, maxPaletteSize, colorCount._address])
    return _ret
  }

  // Unload color data loaded with LoadImageColors(): UnloadImageColors(Color *) => void
  raylib.UnloadImageColors = (colors) => mod.ccall('UnloadImageColors', 'pointer', ['pointer'], [colors._address])

  // Unload colors palette loaded with LoadImagePalette(): UnloadImagePalette(Color *) => void
  raylib.UnloadImagePalette = (colors) => mod.ccall('UnloadImagePalette', 'pointer', ['pointer'], [colors._address])

  // Get image alpha border rectangle: GetImageAlphaBorder(Image, float) => Rectangle
  raylib.GetImageAlphaBorder = (image, threshold) => {
    const _ret = new raylib.Rectangle()
    mod.ccall('GetImageAlphaBorder', 'void', ['pointer', 'pointer', 'number'], [_ret._address, image._address, threshold])
    return _ret
  }

  // Get image pixel color at (x, y) position: GetImageColor(Image, int, int) => Color
  raylib.GetImageColor = (image, x, y) => {
    const _ret = new raylib.Color()
    mod.ccall('GetImageColor', 'void', ['pointer', 'pointer', 'number', 'number'], [_ret._address, image._address, x, y])
    return _ret
  }

  // Clear image background with given color: ImageClearBackground(Image *, Color) => void
  raylib.ImageClearBackground = (dst, color) => mod.ccall('ImageClearBackground', 'pointer', ['pointer', 'pointer'], [dst._address, color._address])

  // Draw pixel within an image: ImageDrawPixel(Image *, int, int, Color) => void
  raylib.ImageDrawPixel = (dst, posX, posY, color) => mod.ccall('ImageDrawPixel', 'pointer', ['pointer', 'number', 'number', 'pointer'], [dst._address, posX, posY, color._address])

  // Draw pixel within an image (Vector version): ImageDrawPixelV(Image *, Vector2, Color) => void
  raylib.ImageDrawPixelV = (dst, position, color) => mod.ccall('ImageDrawPixelV', 'pointer', ['pointer', 'pointer', 'pointer'], [dst._address, position._address, color._address])

  // Draw line within an image: ImageDrawLine(Image *, int, int, int, int, Color) => void
  raylib.ImageDrawLine = (dst, startPosX, startPosY, endPosX, endPosY, color) => mod.ccall('ImageDrawLine', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [dst._address, startPosX, startPosY, endPosX, endPosY, color._address])

  // Draw line within an image (Vector version): ImageDrawLineV(Image *, Vector2, Vector2, Color) => void
  raylib.ImageDrawLineV = (dst, start, end, color) => mod.ccall('ImageDrawLineV', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'], [dst._address, start._address, end._address, color._address])

  // Draw a filled circle within an image: ImageDrawCircle(Image *, int, int, int, Color) => void
  raylib.ImageDrawCircle = (dst, centerX, centerY, radius, color) => mod.ccall('ImageDrawCircle', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [dst._address, centerX, centerY, radius, color._address])

  // Draw a filled circle within an image (Vector version): ImageDrawCircleV(Image *, Vector2, int, Color) => void
  raylib.ImageDrawCircleV = (dst, center, radius, color) => mod.ccall('ImageDrawCircleV', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [dst._address, center._address, radius, color._address])

  // Draw circle outline within an image: ImageDrawCircleLines(Image *, int, int, int, Color) => void
  raylib.ImageDrawCircleLines = (dst, centerX, centerY, radius, color) => mod.ccall('ImageDrawCircleLines', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [dst._address, centerX, centerY, radius, color._address])

  // Draw circle outline within an image (Vector version): ImageDrawCircleLinesV(Image *, Vector2, int, Color) => void
  raylib.ImageDrawCircleLinesV = (dst, center, radius, color) => mod.ccall('ImageDrawCircleLinesV', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [dst._address, center._address, radius, color._address])

  // Draw rectangle within an image: ImageDrawRectangle(Image *, int, int, int, int, Color) => void
  raylib.ImageDrawRectangle = (dst, posX, posY, width, height, color) => mod.ccall('ImageDrawRectangle', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [dst._address, posX, posY, width, height, color._address])

  // Draw rectangle within an image (Vector version): ImageDrawRectangleV(Image *, Vector2, Vector2, Color) => void
  raylib.ImageDrawRectangleV = (dst, position, size, color) => mod.ccall('ImageDrawRectangleV', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'], [dst._address, position._address, size._address, color._address])

  // Draw rectangle within an image: ImageDrawRectangleRec(Image *, Rectangle, Color) => void
  raylib.ImageDrawRectangleRec = (dst, rec, color) => mod.ccall('ImageDrawRectangleRec', 'pointer', ['pointer', 'pointer', 'pointer'], [dst._address, rec._address, color._address])

  // Draw rectangle lines within an image: ImageDrawRectangleLines(Image *, Rectangle, int, Color) => void
  raylib.ImageDrawRectangleLines = (dst, rec, thick, color) => mod.ccall('ImageDrawRectangleLines', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [dst._address, rec._address, thick, color._address])

  // Draw a source image within a destination image (tint applied to source): ImageDraw(Image *, Image, Rectangle, Rectangle, Color) => void
  raylib.ImageDraw = (dst, src, srcRec, dstRec, tint) => mod.ccall('ImageDraw', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'], [dst._address, src._address, srcRec._address, dstRec._address, tint._address])

  // Draw text (using default font) within an image (destination): ImageDrawText(Image *, const char *, int, int, int, Color) => void
  raylib.ImageDrawText = (dst, text, posX, posY, fontSize, color) => mod.ccall('ImageDrawText', 'pointer', ['pointer', 'string', 'number', 'number', 'number', 'pointer'], [dst._address, text, posX, posY, fontSize, color._address])

  // Draw text (custom sprite font) within an image (destination): ImageDrawTextEx(Image *, Font, const char *, Vector2, float, float, Color) => void
  raylib.ImageDrawTextEx = (dst, font, text, position, fontSize, spacing, tint) => mod.ccall('ImageDrawTextEx', 'pointer', ['pointer', 'pointer', 'string', 'pointer', 'number', 'number', 'pointer'], [dst._address, font._address, text, position._address, fontSize, spacing, tint._address])

  // Load texture from file into GPU memory (VRAM): LoadTexture(const char *) => Texture2D
  raylib.LoadTexture = (fileName) => {
    const _ret = new raylib.Texture2D()
    mod.ccall('LoadTexture', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load texture from image data: LoadTextureFromImage(Image) => Texture2D
  raylib.LoadTextureFromImage = (image) => {
    const _ret = new raylib.Texture2D()
    mod.ccall('LoadTextureFromImage', 'void', ['pointer', 'pointer'], [_ret._address, image._address])
    return _ret
  }

  // Load cubemap from image, multiple image cubemap layouts supported: LoadTextureCubemap(Image, int) => TextureCubemap
  raylib.LoadTextureCubemap = (image, layout) => {
    const _ret = new raylib.TextureCubemap()
    mod.ccall('LoadTextureCubemap', 'void', ['pointer', 'pointer', 'number'], [_ret._address, image._address, layout])
    return _ret
  }

  // Load texture for rendering (framebuffer): LoadRenderTexture(int, int) => RenderTexture2D
  raylib.LoadRenderTexture = (width, height) => {
    const _ret = new raylib.RenderTexture2D()
    mod.ccall('LoadRenderTexture', 'void', ['pointer', 'number', 'number'], [_ret._address, width, height])
    return _ret
  }

  // Check if a texture is ready: IsTextureReady(Texture2D) => bool
  raylib.IsTextureReady = (texture) => mod.ccall('IsTextureReady', 'boolean', ['pointer'], [texture._address])

  // Unload texture from GPU memory (VRAM): UnloadTexture(Texture2D) => void
  raylib.UnloadTexture = (texture) => mod.ccall('UnloadTexture', 'pointer', ['pointer'], [texture._address])

  // Check if a render texture is ready: IsRenderTextureReady(RenderTexture2D) => bool
  raylib.IsRenderTextureReady = (target) => mod.ccall('IsRenderTextureReady', 'boolean', ['pointer'], [target._address])

  // Unload render texture from GPU memory (VRAM): UnloadRenderTexture(RenderTexture2D) => void
  raylib.UnloadRenderTexture = (target) => mod.ccall('UnloadRenderTexture', 'pointer', ['pointer'], [target._address])

  // Update GPU texture with new data: UpdateTexture(Texture2D, const void *) => void
  raylib.UpdateTexture = (texture, pixels) => mod.ccall('UpdateTexture', 'pointer', ['pointer', 'pointer'], [texture._address, pixels._address])

  // Update GPU texture rectangle with new data: UpdateTextureRec(Texture2D, Rectangle, const void *) => void
  raylib.UpdateTextureRec = (texture, rec, pixels) => mod.ccall('UpdateTextureRec', 'pointer', ['pointer', 'pointer', 'pointer'], [texture._address, rec._address, pixels._address])

  // Generate GPU mipmaps for a texture: GenTextureMipmaps(Texture2D *) => void
  raylib.GenTextureMipmaps = (texture) => mod.ccall('GenTextureMipmaps', 'pointer', ['pointer'], [texture._address])

  // Set texture scaling filter mode: SetTextureFilter(Texture2D, int) => void
  raylib.SetTextureFilter = (texture, filter) => mod.ccall('SetTextureFilter', 'pointer', ['pointer', 'number'], [texture._address, filter])

  // Set texture wrapping mode: SetTextureWrap(Texture2D, int) => void
  raylib.SetTextureWrap = (texture, wrap) => mod.ccall('SetTextureWrap', 'pointer', ['pointer', 'number'], [texture._address, wrap])

  // Draw a Texture2D: DrawTexture(Texture2D, int, int, Color) => void
  raylib.DrawTexture = (texture, posX, posY, tint) => mod.ccall('DrawTexture', 'pointer', ['pointer', 'number', 'number', 'pointer'], [texture._address, posX, posY, tint._address])

  // Draw a Texture2D with position defined as Vector2: DrawTextureV(Texture2D, Vector2, Color) => void
  raylib.DrawTextureV = (texture, position, tint) => mod.ccall('DrawTextureV', 'pointer', ['pointer', 'pointer', 'pointer'], [texture._address, position._address, tint._address])

  // Draw a Texture2D with extended parameters: DrawTextureEx(Texture2D, Vector2, float, float, Color) => void
  raylib.DrawTextureEx = (texture, position, rotation, scale, tint) => mod.ccall('DrawTextureEx', 'pointer', ['pointer', 'pointer', 'number', 'number', 'pointer'], [texture._address, position._address, rotation, scale, tint._address])

  // Draw a part of a texture defined by a rectangle: DrawTextureRec(Texture2D, Rectangle, Vector2, Color) => void
  raylib.DrawTextureRec = (texture, source, position, tint) => mod.ccall('DrawTextureRec', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'], [texture._address, source._address, position._address, tint._address])

  // Draw a part of a texture defined by a rectangle with 'pro' parameters: DrawTexturePro(Texture2D, Rectangle, Rectangle, Vector2, float, Color) => void
  raylib.DrawTexturePro = (texture, source, dest, origin, rotation, tint) => mod.ccall('DrawTexturePro', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'], [texture._address, source._address, dest._address, origin._address, rotation, tint._address])

  // Draws a texture (or part of it) that stretches or shrinks nicely: DrawTextureNPatch(Texture2D, NPatchInfo, Rectangle, Vector2, float, Color) => void
  raylib.DrawTextureNPatch = (texture, nPatchInfo, dest, origin, rotation, tint) => mod.ccall('DrawTextureNPatch', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'], [texture._address, nPatchInfo._address, dest._address, origin._address, rotation, tint._address])

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: Fade(Color, float) => Color
  raylib.Fade = (color, alpha) => {
    const _ret = new raylib.Color()
    mod.ccall('Fade', 'void', ['pointer', 'pointer', 'number'], [_ret._address, color._address, alpha])
    return _ret
  }

  // Get hexadecimal value for a Color: ColorToInt(Color) => int
  raylib.ColorToInt = (color) => mod.ccall('ColorToInt', 'number', ['pointer'], [color._address])

  // Get Color normalized as float [0..1]: ColorNormalize(Color) => Vector4
  raylib.ColorNormalize = (color) => {
    const _ret = new raylib.Vector4()
    mod.ccall('ColorNormalize', 'void', ['pointer', 'pointer'], [_ret._address, color._address])
    return _ret
  }

  // Get Color from normalized values [0..1]: ColorFromNormalized(Vector4) => Color
  raylib.ColorFromNormalized = (normalized) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorFromNormalized', 'void', ['pointer', 'pointer'], [_ret._address, normalized._address])
    return _ret
  }

  // Get HSV values for a Color, hue [0..360], saturation/value [0..1]: ColorToHSV(Color) => Vector3
  raylib.ColorToHSV = (color) => {
    const _ret = new raylib.Vector3()
    mod.ccall('ColorToHSV', 'void', ['pointer', 'pointer'], [_ret._address, color._address])
    return _ret
  }

  // Get a Color from HSV values, hue [0..360], saturation/value [0..1]: ColorFromHSV(float, float, float) => Color
  raylib.ColorFromHSV = (hue, saturation, value) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorFromHSV', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, hue, saturation, value])
    return _ret
  }

  // Get color multiplied with another color: ColorTint(Color, Color) => Color
  raylib.ColorTint = (color, tint) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorTint', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, color._address, tint._address])
    return _ret
  }

  // Get color with brightness correction, brightness factor goes from -1.0f to 1.0f: ColorBrightness(Color, float) => Color
  raylib.ColorBrightness = (color, factor) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorBrightness', 'void', ['pointer', 'pointer', 'number'], [_ret._address, color._address, factor])
    return _ret
  }

  // Get color with contrast correction, contrast values between -1.0f and 1.0f: ColorContrast(Color, float) => Color
  raylib.ColorContrast = (color, contrast) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorContrast', 'void', ['pointer', 'pointer', 'number'], [_ret._address, color._address, contrast])
    return _ret
  }

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: ColorAlpha(Color, float) => Color
  raylib.ColorAlpha = (color, alpha) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorAlpha', 'void', ['pointer', 'pointer', 'number'], [_ret._address, color._address, alpha])
    return _ret
  }

  // Get src alpha-blended into dst color with tint: ColorAlphaBlend(Color, Color, Color) => Color
  raylib.ColorAlphaBlend = (dst, src, tint) => {
    const _ret = new raylib.Color()
    mod.ccall('ColorAlphaBlend', 'void', ['pointer', 'pointer', 'pointer', 'pointer'], [_ret._address, dst._address, src._address, tint._address])
    return _ret
  }

  // Get Color structure from hexadecimal value: GetColor(unsigned int) => Color
  raylib.GetColor = (hexValue) => {
    const _ret = new raylib.Color()
    mod.ccall('GetColor', 'void', ['pointer', 'number'], [_ret._address, hexValue])
    return _ret
  }

  // Get Color from a source pixel pointer of certain format: GetPixelColor(void *, int) => Color
  raylib.GetPixelColor = (srcPtr, format) => {
    const _ret = new raylib.Color()
    mod.ccall('GetPixelColor', 'void', ['pointer', 'pointer', 'number'], [_ret._address, srcPtr._address, format])
    return _ret
  }

  // Set color formatted into destination pixel pointer: SetPixelColor(void *, Color, int) => void
  raylib.SetPixelColor = (dstPtr, color, format) => mod.ccall('SetPixelColor', 'pointer', ['pointer', 'pointer', 'number'], [dstPtr._address, color._address, format])

  // Get pixel data size in bytes for certain format: GetPixelDataSize(int, int, int) => int
  raylib.GetPixelDataSize = (width, height, format) => mod.ccall('GetPixelDataSize', 'number', ['number', 'number', 'number'], [width, height, format])

  // Get the default Font: GetFontDefault() => Font
  raylib.GetFontDefault = () => {
    const _ret = new raylib.Font()
    mod.ccall('GetFontDefault', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Load font from file into GPU memory (VRAM): LoadFont(const char *) => Font
  raylib.LoadFont = (fileName) => {
    const _ret = new raylib.Font()
    mod.ccall('LoadFont', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set: LoadFontEx(const char *, int, int *, int) => Font
  raylib.LoadFontEx = (fileName, fontSize, fontChars, glyphCount) => {
    const _ret = new raylib.Font()
    mod.ccall('LoadFontEx', 'void', ['pointer', 'string', 'number', 'pointer', 'number'], [_ret._address, fileName, fontSize, fontChars._address, glyphCount])
    return _ret
  }

  // Load font from Image (XNA style): LoadFontFromImage(Image, Color, int) => Font
  raylib.LoadFontFromImage = (image, key, firstChar) => {
    const _ret = new raylib.Font()
    mod.ccall('LoadFontFromImage', 'void', ['pointer', 'pointer', 'pointer', 'number'], [_ret._address, image._address, key._address, firstChar])
    return _ret
  }

  // Load font from memory buffer, fileType refers to extension: i.e. '.ttf': LoadFontFromMemory(const char *, const unsigned char *, int, int, int *, int) => Font
  raylib.LoadFontFromMemory = (fileType, fileData, dataSize, fontSize, fontChars, glyphCount) => {
    const _ret = new raylib.Font()
    mod.ccall('LoadFontFromMemory', 'void', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer', 'number'], [_ret._address, fileType, fileData._address, dataSize, fontSize, fontChars._address, glyphCount])
    return _ret
  }

  // Check if a font is ready: IsFontReady(Font) => bool
  raylib.IsFontReady = (font) => mod.ccall('IsFontReady', 'boolean', ['pointer'], [font._address])

  // Load font data for further use: LoadFontData(const unsigned char *, int, int, int *, int, int) => GlyphInfo *
  raylib.LoadFontData = (fileData, dataSize, fontSize, fontChars, glyphCount, type) => {
    const _ret = new raylib.GlyphInfo()
    mod.ccall('LoadFontData', 'void', ['pointer', 'pointer', 'number', 'number', 'pointer', 'number', 'number'], [_ret._address, fileData._address, dataSize, fontSize, fontChars._address, glyphCount, type])
    return _ret
  }

  // Generate image font atlas using chars info: GenImageFontAtlas(const GlyphInfo *, Rectangle **, int, int, int, int) => Image
  raylib.GenImageFontAtlas = (chars, recs, glyphCount, fontSize, padding, packMethod) => {
    const _ret = new raylib.Image()
    mod.ccall('GenImageFontAtlas', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number', 'number', 'number'], [_ret._address, chars._address, recs._address, glyphCount, fontSize, padding, packMethod])
    return _ret
  }

  // Unload font chars info data (RAM): UnloadFontData(GlyphInfo *, int) => void
  raylib.UnloadFontData = (chars, glyphCount) => mod.ccall('UnloadFontData', 'pointer', ['pointer', 'number'], [chars._address, glyphCount])

  // Unload font from GPU memory (VRAM): UnloadFont(Font) => void
  raylib.UnloadFont = (font) => mod.ccall('UnloadFont', 'pointer', ['pointer'], [font._address])

  // Export font as code file, returns true on success: ExportFontAsCode(Font, const char *) => bool
  raylib.ExportFontAsCode = (font, fileName) => mod.ccall('ExportFontAsCode', 'boolean', ['pointer', 'string'], [font._address, fileName])

  // Draw current FPS: DrawFPS(int, int) => void
  raylib.DrawFPS = (posX, posY) => mod.ccall('DrawFPS', 'pointer', ['number', 'number'], [posX, posY])

  // Draw text (using default font): DrawText(const char *, int, int, int, Color) => void
  raylib.DrawText = (text, posX, posY, fontSize, color) => mod.ccall('DrawText', 'pointer', ['string', 'number', 'number', 'number', 'pointer'], [text, posX, posY, fontSize, color._address])

  // Draw text using font and additional parameters: DrawTextEx(Font, const char *, Vector2, float, float, Color) => void
  raylib.DrawTextEx = (font, text, position, fontSize, spacing, tint) => mod.ccall('DrawTextEx', 'pointer', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer'], [font._address, text, position._address, fontSize, spacing, tint._address])

  // Draw text using Font and pro parameters (rotation): DrawTextPro(Font, const char *, Vector2, Vector2, float, float, float, Color) => void
  raylib.DrawTextPro = (font, text, position, origin, rotation, fontSize, spacing, tint) => mod.ccall('DrawTextPro', 'pointer', ['pointer', 'string', 'pointer', 'pointer', 'number', 'number', 'number', 'pointer'], [font._address, text, position._address, origin._address, rotation, fontSize, spacing, tint._address])

  // Draw one character (codepoint): DrawTextCodepoint(Font, int, Vector2, float, Color) => void
  raylib.DrawTextCodepoint = (font, codepoint, position, fontSize, tint) => mod.ccall('DrawTextCodepoint', 'pointer', ['pointer', 'number', 'pointer', 'number', 'pointer'], [font._address, codepoint, position._address, fontSize, tint._address])

  // Draw multiple character (codepoint): DrawTextCodepoints(Font, const int *, int, Vector2, float, float, Color) => void
  raylib.DrawTextCodepoints = (font, codepoints, count, position, fontSize, spacing, tint) => mod.ccall('DrawTextCodepoints', 'pointer', ['pointer', 'pointer', 'number', 'pointer', 'number', 'number', 'pointer'], [font._address, codepoints._address, count, position._address, fontSize, spacing, tint._address])

  // Measure string width for default font: MeasureText(const char *, int) => int
  raylib.MeasureText = (text, fontSize) => mod.ccall('MeasureText', 'number', ['string', 'number'], [text, fontSize])

  // Measure string size for Font: MeasureTextEx(Font, const char *, float, float) => Vector2
  raylib.MeasureTextEx = (font, text, fontSize, spacing) => {
    const _ret = new raylib.Vector2()
    mod.ccall('MeasureTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number'], [_ret._address, font._address, text, fontSize, spacing])
    return _ret
  }

  // Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found: GetGlyphIndex(Font, int) => int
  raylib.GetGlyphIndex = (font, codepoint) => mod.ccall('GetGlyphIndex', 'number', ['pointer', 'number'], [font._address, codepoint])

  // Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found: GetGlyphInfo(Font, int) => GlyphInfo
  raylib.GetGlyphInfo = (font, codepoint) => {
    const _ret = new raylib.GlyphInfo()
    mod.ccall('GetGlyphInfo', 'void', ['pointer', 'pointer', 'number'], [_ret._address, font._address, codepoint])
    return _ret
  }

  // Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found: GetGlyphAtlasRec(Font, int) => Rectangle
  raylib.GetGlyphAtlasRec = (font, codepoint) => {
    const _ret = new raylib.Rectangle()
    mod.ccall('GetGlyphAtlasRec', 'void', ['pointer', 'pointer', 'number'], [_ret._address, font._address, codepoint])
    return _ret
  }

  // Load UTF-8 text encoded from codepoints array: LoadUTF8(const int *, int) => char *
  raylib.LoadUTF8 = (codepoints, length) => mod.ccall('LoadUTF8', 'pointer', ['pointer', 'number'], [codepoints._address, length])

  // Unload UTF-8 text encoded from codepoints array: UnloadUTF8(char *) => void
  raylib.UnloadUTF8 = (text) => mod.ccall('UnloadUTF8', 'pointer', ['pointer'], [text._address])

  // Load all codepoints from a UTF-8 text string, codepoints count returned by parameter: LoadCodepoints(const char *, int *) => int *
  raylib.LoadCodepoints = (text, count) => mod.ccall('LoadCodepoints', 'pointer', ['string', 'pointer'], [text, count._address])

  // Unload codepoints data from memory: UnloadCodepoints(int *) => void
  raylib.UnloadCodepoints = (codepoints) => mod.ccall('UnloadCodepoints', 'pointer', ['pointer'], [codepoints._address])

  // Get total number of codepoints in a UTF-8 encoded string: GetCodepointCount(const char *) => int
  raylib.GetCodepointCount = (text) => mod.ccall('GetCodepointCount', 'number', ['string'], [text])

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepoint(const char *, int *) => int
  raylib.GetCodepoint = (text, codepointSize) => mod.ccall('GetCodepoint', 'number', ['string', 'pointer'], [text, codepointSize._address])

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointNext(const char *, int *) => int
  raylib.GetCodepointNext = (text, codepointSize) => mod.ccall('GetCodepointNext', 'number', ['string', 'pointer'], [text, codepointSize._address])

  // Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointPrevious(const char *, int *) => int
  raylib.GetCodepointPrevious = (text, codepointSize) => mod.ccall('GetCodepointPrevious', 'number', ['string', 'pointer'], [text, codepointSize._address])

  // Encode one codepoint into UTF-8 byte array (array length returned as parameter): CodepointToUTF8(int, int *) => const char *
  raylib.CodepointToUTF8 = (codepoint, utf8Size) => mod.ccall('CodepointToUTF8', 'string', ['number', 'pointer'], [codepoint, utf8Size._address])

  // Copy one string to another, returns bytes copied: TextCopy(char *, const char *) => int
  raylib.TextCopy = (dst, src) => mod.ccall('TextCopy', 'number', ['pointer', 'string'], [dst._address, src])

  // Check if two text string are equal: TextIsEqual(const char *, const char *) => bool
  raylib.TextIsEqual = (text1, text2) => mod.ccall('TextIsEqual', 'boolean', ['string', 'string'], [text1, text2])

  // Get text length, checks for '\0' ending: TextLength(const char *) => unsigned int
  raylib.TextLength = (text) => mod.ccall('TextLength', 'number', ['string'], [text])

  // Text formatting with variables (sprintf() style): TextFormat(const char *, ...) => const char *
  raylib.TextFormat = (text, args) => mod.ccall('TextFormat', 'string', ['string', 'pointer'], [text, args._address])

  // Get a piece of a text string: TextSubtext(const char *, int, int) => const char *
  raylib.TextSubtext = (text, position, length) => mod.ccall('TextSubtext', 'string', ['string', 'number', 'number'], [text, position, length])

  // Replace text string (WARNING: memory must be freed!): TextReplace(char *, const char *, const char *) => char *
  raylib.TextReplace = (text, replace, by) => mod.ccall('TextReplace', 'pointer', ['pointer', 'string', 'string'], [text._address, replace, by])

  // Insert text in a position (WARNING: memory must be freed!): TextInsert(const char *, const char *, int) => char *
  raylib.TextInsert = (text, insert, position) => mod.ccall('TextInsert', 'pointer', ['string', 'string', 'number'], [text, insert, position])

  // Join text strings with delimiter: TextJoin(const char **, int, const char *) => const char *
  raylib.TextJoin = (textList, count, delimiter) => mod.ccall('TextJoin', 'string', ['pointer', 'number', 'string'], [textList._address, count, delimiter])

  // Split text into multiple strings: TextSplit(const char *, char, int *) => const char **
  raylib.TextSplit = (text, delimiter, count) => mod.ccall('TextSplit', 'pointer', ['string', 'number', 'pointer'], [text, delimiter, count._address])

  // Append text at specific position and move cursor!: TextAppend(char *, const char *, int *) => void
  raylib.TextAppend = (text, append, position) => mod.ccall('TextAppend', 'pointer', ['pointer', 'string', 'pointer'], [text._address, append, position._address])

  // Find first text occurrence within a string: TextFindIndex(const char *, const char *) => int
  raylib.TextFindIndex = (text, find) => mod.ccall('TextFindIndex', 'number', ['string', 'string'], [text, find])

  // Get upper case version of provided string: TextToUpper(const char *) => const char *
  raylib.TextToUpper = (text) => mod.ccall('TextToUpper', 'string', ['string'], [text])

  // Get lower case version of provided string: TextToLower(const char *) => const char *
  raylib.TextToLower = (text) => mod.ccall('TextToLower', 'string', ['string'], [text])

  // Get Pascal case notation version of provided string: TextToPascal(const char *) => const char *
  raylib.TextToPascal = (text) => mod.ccall('TextToPascal', 'string', ['string'], [text])

  // Get integer value from text (negative values not supported): TextToInteger(const char *) => int
  raylib.TextToInteger = (text) => mod.ccall('TextToInteger', 'number', ['string'], [text])

  // Draw a line in 3D world space: DrawLine3D(Vector3, Vector3, Color) => void
  raylib.DrawLine3D = (startPos, endPos, color) => mod.ccall('DrawLine3D', 'pointer', ['pointer', 'pointer', 'pointer'], [startPos._address, endPos._address, color._address])

  // Draw a point in 3D space, actually a small line: DrawPoint3D(Vector3, Color) => void
  raylib.DrawPoint3D = (position, color) => mod.ccall('DrawPoint3D', 'pointer', ['pointer', 'pointer'], [position._address, color._address])

  // Draw a circle in 3D world space: DrawCircle3D(Vector3, float, Vector3, float, Color) => void
  raylib.DrawCircle3D = (center, radius, rotationAxis, rotationAngle, color) => mod.ccall('DrawCircle3D', 'pointer', ['pointer', 'number', 'pointer', 'number', 'pointer'], [center._address, radius, rotationAxis._address, rotationAngle, color._address])

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle3D(Vector3, Vector3, Vector3, Color) => void
  raylib.DrawTriangle3D = (v1, v2, v3, color) => mod.ccall('DrawTriangle3D', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer'], [v1._address, v2._address, v3._address, color._address])

  // Draw a triangle strip defined by points: DrawTriangleStrip3D(Vector3 *, int, Color) => void
  raylib.DrawTriangleStrip3D = (points, pointCount, color) => mod.ccall('DrawTriangleStrip3D', 'pointer', ['pointer', 'number', 'pointer'], [points._address, pointCount, color._address])

  // Draw cube: DrawCube(Vector3, float, float, float, Color) => void
  raylib.DrawCube = (position, width, height, length, color) => mod.ccall('DrawCube', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [position._address, width, height, length, color._address])

  // Draw cube (Vector version): DrawCubeV(Vector3, Vector3, Color) => void
  raylib.DrawCubeV = (position, size, color) => mod.ccall('DrawCubeV', 'pointer', ['pointer', 'pointer', 'pointer'], [position._address, size._address, color._address])

  // Draw cube wires: DrawCubeWires(Vector3, float, float, float, Color) => void
  raylib.DrawCubeWires = (position, width, height, length, color) => mod.ccall('DrawCubeWires', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [position._address, width, height, length, color._address])

  // Draw cube wires (Vector version): DrawCubeWiresV(Vector3, Vector3, Color) => void
  raylib.DrawCubeWiresV = (position, size, color) => mod.ccall('DrawCubeWiresV', 'pointer', ['pointer', 'pointer', 'pointer'], [position._address, size._address, color._address])

  // Draw sphere: DrawSphere(Vector3, float, Color) => void
  raylib.DrawSphere = (centerPos, radius, color) => mod.ccall('DrawSphere', 'pointer', ['pointer', 'number', 'pointer'], [centerPos._address, radius, color._address])

  // Draw sphere with extended parameters: DrawSphereEx(Vector3, float, int, int, Color) => void
  raylib.DrawSphereEx = (centerPos, radius, rings, slices, color) => mod.ccall('DrawSphereEx', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [centerPos._address, radius, rings, slices, color._address])

  // Draw sphere wires: DrawSphereWires(Vector3, float, int, int, Color) => void
  raylib.DrawSphereWires = (centerPos, radius, rings, slices, color) => mod.ccall('DrawSphereWires', 'pointer', ['pointer', 'number', 'number', 'number', 'pointer'], [centerPos._address, radius, rings, slices, color._address])

  // Draw a cylinder/cone: DrawCylinder(Vector3, float, float, float, int, Color) => void
  raylib.DrawCylinder = (position, radiusTop, radiusBottom, height, slices, color) => mod.ccall('DrawCylinder', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [position._address, radiusTop, radiusBottom, height, slices, color._address])

  // Draw a cylinder with base at startPos and top at endPos: DrawCylinderEx(Vector3, Vector3, float, float, int, Color) => void
  raylib.DrawCylinderEx = (startPos, endPos, startRadius, endRadius, sides, color) => mod.ccall('DrawCylinderEx', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'], [startPos._address, endPos._address, startRadius, endRadius, sides, color._address])

  // Draw a cylinder/cone wires: DrawCylinderWires(Vector3, float, float, float, int, Color) => void
  raylib.DrawCylinderWires = (position, radiusTop, radiusBottom, height, slices, color) => mod.ccall('DrawCylinderWires', 'pointer', ['pointer', 'number', 'number', 'number', 'number', 'pointer'], [position._address, radiusTop, radiusBottom, height, slices, color._address])

  // Draw a cylinder wires with base at startPos and top at endPos: DrawCylinderWiresEx(Vector3, Vector3, float, float, int, Color) => void
  raylib.DrawCylinderWiresEx = (startPos, endPos, startRadius, endRadius, sides, color) => mod.ccall('DrawCylinderWiresEx', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'], [startPos._address, endPos._address, startRadius, endRadius, sides, color._address])

  // Draw a capsule with the center of its sphere caps at startPos and endPos: DrawCapsule(Vector3, Vector3, float, int, int, Color) => void
  raylib.DrawCapsule = (startPos, endPos, radius, slices, rings, color) => mod.ccall('DrawCapsule', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'], [startPos._address, endPos._address, radius, slices, rings, color._address])

  // Draw capsule wireframe with the center of its sphere caps at startPos and endPos: DrawCapsuleWires(Vector3, Vector3, float, int, int, Color) => void
  raylib.DrawCapsuleWires = (startPos, endPos, radius, slices, rings, color) => mod.ccall('DrawCapsuleWires', 'pointer', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'], [startPos._address, endPos._address, radius, slices, rings, color._address])

  // Draw a plane XZ: DrawPlane(Vector3, Vector2, Color) => void
  raylib.DrawPlane = (centerPos, size, color) => mod.ccall('DrawPlane', 'pointer', ['pointer', 'pointer', 'pointer'], [centerPos._address, size._address, color._address])

  // Draw a ray line: DrawRay(Ray, Color) => void
  raylib.DrawRay = (ray, color) => mod.ccall('DrawRay', 'pointer', ['pointer', 'pointer'], [ray._address, color._address])

  // Draw a grid (centered at (0, 0, 0)): DrawGrid(int, float) => void
  raylib.DrawGrid = (slices, spacing) => mod.ccall('DrawGrid', 'pointer', ['number', 'number'], [slices, spacing])

  // Load model from files (meshes and materials): LoadModel(const char *) => Model
  raylib.LoadModel = (fileName) => {
    const _ret = new raylib.Model()
    mod.ccall('LoadModel', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load model from generated mesh (default material): LoadModelFromMesh(Mesh) => Model
  raylib.LoadModelFromMesh = (mesh) => {
    const _ret = new raylib.Model()
    mod.ccall('LoadModelFromMesh', 'void', ['pointer', 'pointer'], [_ret._address, mesh._address])
    return _ret
  }

  // Check if a model is ready: IsModelReady(Model) => bool
  raylib.IsModelReady = (model) => mod.ccall('IsModelReady', 'boolean', ['pointer'], [model._address])

  // Unload model (including meshes) from memory (RAM and/or VRAM): UnloadModel(Model) => void
  raylib.UnloadModel = (model) => mod.ccall('UnloadModel', 'pointer', ['pointer'], [model._address])

  // Compute model bounding box limits (considers all meshes): GetModelBoundingBox(Model) => BoundingBox
  raylib.GetModelBoundingBox = (model) => {
    const _ret = new raylib.BoundingBox()
    mod.ccall('GetModelBoundingBox', 'void', ['pointer', 'pointer'], [_ret._address, model._address])
    return _ret
  }

  // Draw a model (with texture if set): DrawModel(Model, Vector3, float, Color) => void
  raylib.DrawModel = (model, position, scale, tint) => mod.ccall('DrawModel', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [model._address, position._address, scale, tint._address])

  // Draw a model with extended parameters: DrawModelEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  raylib.DrawModelEx = (model, position, rotationAxis, rotationAngle, scale, tint) => mod.ccall('DrawModelEx', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'], [model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address])

  // Draw a model wires (with texture if set): DrawModelWires(Model, Vector3, float, Color) => void
  raylib.DrawModelWires = (model, position, scale, tint) => mod.ccall('DrawModelWires', 'pointer', ['pointer', 'pointer', 'number', 'pointer'], [model._address, position._address, scale, tint._address])

  // Draw a model wires (with texture if set) with extended parameters: DrawModelWiresEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  raylib.DrawModelWiresEx = (model, position, rotationAxis, rotationAngle, scale, tint) => mod.ccall('DrawModelWiresEx', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'], [model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address])

  // Draw bounding box (wires): DrawBoundingBox(BoundingBox, Color) => void
  raylib.DrawBoundingBox = (box, color) => mod.ccall('DrawBoundingBox', 'pointer', ['pointer', 'pointer'], [box._address, color._address])

  // Draw a billboard texture: DrawBillboard(Camera, Texture2D, Vector3, float, Color) => void
  raylib.DrawBillboard = (camera, texture, position, size, tint) => mod.ccall('DrawBillboard', 'pointer', ['pointer', 'pointer', 'pointer', 'number', 'pointer'], [camera._address, texture._address, position._address, size, tint._address])

  // Draw a billboard texture defined by source: DrawBillboardRec(Camera, Texture2D, Rectangle, Vector3, Vector2, Color) => void
  raylib.DrawBillboardRec = (camera, texture, source, position, size, tint) => mod.ccall('DrawBillboardRec', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'], [camera._address, texture._address, source._address, position._address, size._address, tint._address])

  // Draw a billboard texture defined by source and rotation: DrawBillboardPro(Camera, Texture2D, Rectangle, Vector3, Vector3, Vector2, Vector2, float, Color) => void
  raylib.DrawBillboardPro = (camera, texture, source, position, up, size, origin, rotation, tint) => mod.ccall('DrawBillboardPro', 'pointer', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'], [camera._address, texture._address, source._address, position._address, up._address, size._address, origin._address, rotation, tint._address])

  // Upload mesh vertex data in GPU and provide VAO/VBO ids: UploadMesh(Mesh *, bool) => void
  raylib.UploadMesh = (mesh, dynamic) => mod.ccall('UploadMesh', 'pointer', ['pointer', 'boolean'], [mesh._address, dynamic])

  // Update mesh vertex data in GPU for a specific buffer index: UpdateMeshBuffer(Mesh, int, const void *, int, int) => void
  raylib.UpdateMeshBuffer = (mesh, index, data, dataSize, offset) => mod.ccall('UpdateMeshBuffer', 'pointer', ['pointer', 'number', 'pointer', 'number', 'number'], [mesh._address, index, data._address, dataSize, offset])

  // Unload mesh data from CPU and GPU: UnloadMesh(Mesh) => void
  raylib.UnloadMesh = (mesh) => mod.ccall('UnloadMesh', 'pointer', ['pointer'], [mesh._address])

  // Draw a 3d mesh with material and transform: DrawMesh(Mesh, Material, Matrix) => void
  raylib.DrawMesh = (mesh, material, transform) => mod.ccall('DrawMesh', 'pointer', ['pointer', 'pointer', 'pointer'], [mesh._address, material._address, transform._address])

  // Draw multiple mesh instances with material and different transforms: DrawMeshInstanced(Mesh, Material, const Matrix *, int) => void
  raylib.DrawMeshInstanced = (mesh, material, transforms, instances) => mod.ccall('DrawMeshInstanced', 'pointer', ['pointer', 'pointer', 'pointer', 'number'], [mesh._address, material._address, transforms._address, instances])

  // Export mesh data to file, returns true on success: ExportMesh(Mesh, const char *) => bool
  raylib.ExportMesh = (mesh, fileName) => mod.ccall('ExportMesh', 'boolean', ['pointer', 'string'], [mesh._address, fileName])

  // Compute mesh bounding box limits: GetMeshBoundingBox(Mesh) => BoundingBox
  raylib.GetMeshBoundingBox = (mesh) => {
    const _ret = new raylib.BoundingBox()
    mod.ccall('GetMeshBoundingBox', 'void', ['pointer', 'pointer'], [_ret._address, mesh._address])
    return _ret
  }

  // Compute mesh tangents: GenMeshTangents(Mesh *) => void
  raylib.GenMeshTangents = (mesh) => mod.ccall('GenMeshTangents', 'pointer', ['pointer'], [mesh._address])

  // Generate polygonal mesh: GenMeshPoly(int, float) => Mesh
  raylib.GenMeshPoly = (sides, radius) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshPoly', 'void', ['pointer', 'number', 'number'], [_ret._address, sides, radius])
    return _ret
  }

  // Generate plane mesh (with subdivisions): GenMeshPlane(float, float, int, int) => Mesh
  raylib.GenMeshPlane = (width, length, resX, resZ) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshPlane', 'void', ['pointer', 'number', 'number', 'number', 'number'], [_ret._address, width, length, resX, resZ])
    return _ret
  }

  // Generate cuboid mesh: GenMeshCube(float, float, float) => Mesh
  raylib.GenMeshCube = (width, height, length) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshCube', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, width, height, length])
    return _ret
  }

  // Generate sphere mesh (standard sphere): GenMeshSphere(float, int, int) => Mesh
  raylib.GenMeshSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshSphere', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, radius, rings, slices])
    return _ret
  }

  // Generate half-sphere mesh (no bottom cap): GenMeshHemiSphere(float, int, int) => Mesh
  raylib.GenMeshHemiSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshHemiSphere', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, radius, rings, slices])
    return _ret
  }

  // Generate cylinder mesh: GenMeshCylinder(float, float, int) => Mesh
  raylib.GenMeshCylinder = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshCylinder', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, radius, height, slices])
    return _ret
  }

  // Generate cone/pyramid mesh: GenMeshCone(float, float, int) => Mesh
  raylib.GenMeshCone = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshCone', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, radius, height, slices])
    return _ret
  }

  // Generate torus mesh: GenMeshTorus(float, float, int, int) => Mesh
  raylib.GenMeshTorus = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshTorus', 'void', ['pointer', 'number', 'number', 'number', 'number'], [_ret._address, radius, size, radSeg, sides])
    return _ret
  }

  // Generate trefoil knot mesh: GenMeshKnot(float, float, int, int) => Mesh
  raylib.GenMeshKnot = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshKnot', 'void', ['pointer', 'number', 'number', 'number', 'number'], [_ret._address, radius, size, radSeg, sides])
    return _ret
  }

  // Generate heightmap mesh from image data: GenMeshHeightmap(Image, Vector3) => Mesh
  raylib.GenMeshHeightmap = (heightmap, size) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshHeightmap', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, heightmap._address, size._address])
    return _ret
  }

  // Generate cubes-based map mesh from image data: GenMeshCubicmap(Image, Vector3) => Mesh
  raylib.GenMeshCubicmap = (cubicmap, cubeSize) => {
    const _ret = new raylib.Mesh()
    mod.ccall('GenMeshCubicmap', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, cubicmap._address, cubeSize._address])
    return _ret
  }

  // Load materials from model file: LoadMaterials(const char *, int *) => Material *
  raylib.LoadMaterials = (fileName, materialCount) => {
    const _ret = new raylib.Material()
    mod.ccall('LoadMaterials', 'void', ['pointer', 'string', 'pointer'], [_ret._address, fileName, materialCount._address])
    return _ret
  }

  // Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps): LoadMaterialDefault() => Material
  raylib.LoadMaterialDefault = () => {
    const _ret = new raylib.Material()
    mod.ccall('LoadMaterialDefault', 'void', ['pointer'], [_ret._address])
    return _ret
  }

  // Check if a material is ready: IsMaterialReady(Material) => bool
  raylib.IsMaterialReady = (material) => mod.ccall('IsMaterialReady', 'boolean', ['pointer'], [material._address])

  // Unload material from GPU memory (VRAM): UnloadMaterial(Material) => void
  raylib.UnloadMaterial = (material) => mod.ccall('UnloadMaterial', 'pointer', ['pointer'], [material._address])

  // Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...): SetMaterialTexture(Material *, int, Texture2D) => void
  raylib.SetMaterialTexture = (material, mapType, texture) => mod.ccall('SetMaterialTexture', 'pointer', ['pointer', 'number', 'pointer'], [material._address, mapType, texture._address])

  // Set material for a mesh: SetModelMeshMaterial(Model *, int, int) => void
  raylib.SetModelMeshMaterial = (model, meshId, materialId) => mod.ccall('SetModelMeshMaterial', 'pointer', ['pointer', 'number', 'number'], [model._address, meshId, materialId])

  // Load model animations from file: LoadModelAnimations(const char *, unsigned int *) => ModelAnimation *
  raylib.LoadModelAnimations = (fileName, animCount) => {
    const _ret = new raylib.ModelAnimation()
    mod.ccall('LoadModelAnimations', 'void', ['pointer', 'string', 'pointer'], [_ret._address, fileName, animCount._address])
    return _ret
  }

  // Update model animation pose: UpdateModelAnimation(Model, ModelAnimation, int) => void
  raylib.UpdateModelAnimation = (model, anim, frame) => mod.ccall('UpdateModelAnimation', 'pointer', ['pointer', 'pointer', 'number'], [model._address, anim._address, frame])

  // Unload animation data: UnloadModelAnimation(ModelAnimation) => void
  raylib.UnloadModelAnimation = (anim) => mod.ccall('UnloadModelAnimation', 'pointer', ['pointer'], [anim._address])

  // Unload animation array data: UnloadModelAnimations(ModelAnimation *, unsigned int) => void
  raylib.UnloadModelAnimations = (animations, count) => mod.ccall('UnloadModelAnimations', 'pointer', ['pointer', 'number'], [animations._address, count])

  // Check model animation skeleton match: IsModelAnimationValid(Model, ModelAnimation) => bool
  raylib.IsModelAnimationValid = (model, anim) => mod.ccall('IsModelAnimationValid', 'boolean', ['pointer', 'pointer'], [model._address, anim._address])

  // Check collision between two spheres: CheckCollisionSpheres(Vector3, float, Vector3, float) => bool
  raylib.CheckCollisionSpheres = (center1, radius1, center2, radius2) => mod.ccall('CheckCollisionSpheres', 'boolean', ['pointer', 'number', 'pointer', 'number'], [center1._address, radius1, center2._address, radius2])

  // Check collision between two bounding boxes: CheckCollisionBoxes(BoundingBox, BoundingBox) => bool
  raylib.CheckCollisionBoxes = (box1, box2) => mod.ccall('CheckCollisionBoxes', 'boolean', ['pointer', 'pointer'], [box1._address, box2._address])

  // Check collision between box and sphere: CheckCollisionBoxSphere(BoundingBox, Vector3, float) => bool
  raylib.CheckCollisionBoxSphere = (box, center, radius) => mod.ccall('CheckCollisionBoxSphere', 'boolean', ['pointer', 'pointer', 'number'], [box._address, center._address, radius])

  // Get collision info between ray and sphere: GetRayCollisionSphere(Ray, Vector3, float) => RayCollision
  raylib.GetRayCollisionSphere = (ray, center, radius) => {
    const _ret = new raylib.RayCollision()
    mod.ccall('GetRayCollisionSphere', 'void', ['pointer', 'pointer', 'pointer', 'number'], [_ret._address, ray._address, center._address, radius])
    return _ret
  }

  // Get collision info between ray and box: GetRayCollisionBox(Ray, BoundingBox) => RayCollision
  raylib.GetRayCollisionBox = (ray, box) => {
    const _ret = new raylib.RayCollision()
    mod.ccall('GetRayCollisionBox', 'void', ['pointer', 'pointer', 'pointer'], [_ret._address, ray._address, box._address])
    return _ret
  }

  // Get collision info between ray and mesh: GetRayCollisionMesh(Ray, Mesh, Matrix) => RayCollision
  raylib.GetRayCollisionMesh = (ray, mesh, transform) => {
    const _ret = new raylib.RayCollision()
    mod.ccall('GetRayCollisionMesh', 'void', ['pointer', 'pointer', 'pointer', 'pointer'], [_ret._address, ray._address, mesh._address, transform._address])
    return _ret
  }

  // Get collision info between ray and triangle: GetRayCollisionTriangle(Ray, Vector3, Vector3, Vector3) => RayCollision
  raylib.GetRayCollisionTriangle = (ray, p1, p2, p3) => {
    const _ret = new raylib.RayCollision()
    mod.ccall('GetRayCollisionTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'], [_ret._address, ray._address, p1._address, p2._address, p3._address])
    return _ret
  }

  // Get collision info between ray and quad: GetRayCollisionQuad(Ray, Vector3, Vector3, Vector3, Vector3) => RayCollision
  raylib.GetRayCollisionQuad = (ray, p1, p2, p3, p4) => {
    const _ret = new raylib.RayCollision()
    mod.ccall('GetRayCollisionQuad', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'], [_ret._address, ray._address, p1._address, p2._address, p3._address, p4._address])
    return _ret
  }

  // Initialize audio device and context: InitAudioDevice() => void
  raylib.InitAudioDevice = () => mod.ccall('InitAudioDevice', 'pointer', [], [])

  // Close the audio device and context: CloseAudioDevice() => void
  raylib.CloseAudioDevice = () => mod.ccall('CloseAudioDevice', 'pointer', [], [])

  // Check if audio device has been initialized successfully: IsAudioDeviceReady() => bool
  raylib.IsAudioDeviceReady = () => mod.ccall('IsAudioDeviceReady', 'boolean', [], [])

  // Set master volume (listener): SetMasterVolume(float) => void
  raylib.SetMasterVolume = (volume) => mod.ccall('SetMasterVolume', 'pointer', ['number'], [volume])

  // Load wave data from file: LoadWave(const char *) => Wave
  raylib.LoadWave = (fileName) => {
    const _ret = new raylib.Wave()
    mod.ccall('LoadWave', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load wave from memory buffer, fileType refers to extension: i.e. '.wav': LoadWaveFromMemory(const char *, const unsigned char *, int) => Wave
  raylib.LoadWaveFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Wave()
    mod.ccall('LoadWaveFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'], [_ret._address, fileType, fileData._address, dataSize])
    return _ret
  }

  // Checks if wave data is ready: IsWaveReady(Wave) => bool
  raylib.IsWaveReady = (wave) => mod.ccall('IsWaveReady', 'boolean', ['pointer'], [wave._address])

  // Load sound from file: LoadSound(const char *) => Sound
  raylib.LoadSound = (fileName) => {
    const _ret = new raylib.Sound()
    mod.ccall('LoadSound', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load sound from wave data: LoadSoundFromWave(Wave) => Sound
  raylib.LoadSoundFromWave = (wave) => {
    const _ret = new raylib.Sound()
    mod.ccall('LoadSoundFromWave', 'void', ['pointer', 'pointer'], [_ret._address, wave._address])
    return _ret
  }

  // Checks if a sound is ready: IsSoundReady(Sound) => bool
  raylib.IsSoundReady = (sound) => mod.ccall('IsSoundReady', 'boolean', ['pointer'], [sound._address])

  // Update sound buffer with new data: UpdateSound(Sound, const void *, int) => void
  raylib.UpdateSound = (sound, data, sampleCount) => mod.ccall('UpdateSound', 'pointer', ['pointer', 'pointer', 'number'], [sound._address, data._address, sampleCount])

  // Unload wave data: UnloadWave(Wave) => void
  raylib.UnloadWave = (wave) => mod.ccall('UnloadWave', 'pointer', ['pointer'], [wave._address])

  // Unload sound: UnloadSound(Sound) => void
  raylib.UnloadSound = (sound) => mod.ccall('UnloadSound', 'pointer', ['pointer'], [sound._address])

  // Export wave data to file, returns true on success: ExportWave(Wave, const char *) => bool
  raylib.ExportWave = (wave, fileName) => mod.ccall('ExportWave', 'boolean', ['pointer', 'string'], [wave._address, fileName])

  // Export wave sample data to code (.h), returns true on success: ExportWaveAsCode(Wave, const char *) => bool
  raylib.ExportWaveAsCode = (wave, fileName) => mod.ccall('ExportWaveAsCode', 'boolean', ['pointer', 'string'], [wave._address, fileName])

  // Play a sound: PlaySound(Sound) => void
  raylib.PlaySound = (sound) => mod.ccall('PlaySound', 'pointer', ['pointer'], [sound._address])

  // Stop playing a sound: StopSound(Sound) => void
  raylib.StopSound = (sound) => mod.ccall('StopSound', 'pointer', ['pointer'], [sound._address])

  // Pause a sound: PauseSound(Sound) => void
  raylib.PauseSound = (sound) => mod.ccall('PauseSound', 'pointer', ['pointer'], [sound._address])

  // Resume a paused sound: ResumeSound(Sound) => void
  raylib.ResumeSound = (sound) => mod.ccall('ResumeSound', 'pointer', ['pointer'], [sound._address])

  // Check if a sound is currently playing: IsSoundPlaying(Sound) => bool
  raylib.IsSoundPlaying = (sound) => mod.ccall('IsSoundPlaying', 'boolean', ['pointer'], [sound._address])

  // Set volume for a sound (1.0 is max level): SetSoundVolume(Sound, float) => void
  raylib.SetSoundVolume = (sound, volume) => mod.ccall('SetSoundVolume', 'pointer', ['pointer', 'number'], [sound._address, volume])

  // Set pitch for a sound (1.0 is base level): SetSoundPitch(Sound, float) => void
  raylib.SetSoundPitch = (sound, pitch) => mod.ccall('SetSoundPitch', 'pointer', ['pointer', 'number'], [sound._address, pitch])

  // Set pan for a sound (0.5 is center): SetSoundPan(Sound, float) => void
  raylib.SetSoundPan = (sound, pan) => mod.ccall('SetSoundPan', 'pointer', ['pointer', 'number'], [sound._address, pan])

  // Copy a wave to a new wave: WaveCopy(Wave) => Wave
  raylib.WaveCopy = (wave) => {
    const _ret = new raylib.Wave()
    mod.ccall('WaveCopy', 'void', ['pointer', 'pointer'], [_ret._address, wave._address])
    return _ret
  }

  // Crop a wave to defined samples range: WaveCrop(Wave *, int, int) => void
  raylib.WaveCrop = (wave, initSample, finalSample) => mod.ccall('WaveCrop', 'pointer', ['pointer', 'number', 'number'], [wave._address, initSample, finalSample])

  // Convert wave data to desired format: WaveFormat(Wave *, int, int, int) => void
  raylib.WaveFormat = (wave, sampleRate, sampleSize, channels) => mod.ccall('WaveFormat', 'pointer', ['pointer', 'number', 'number', 'number'], [wave._address, sampleRate, sampleSize, channels])

  // Load samples data from wave as a 32bit float data array: LoadWaveSamples(Wave) => float *
  raylib.LoadWaveSamples = (wave) => mod.ccall('LoadWaveSamples', 'pointer', ['pointer'], [wave._address])

  // Unload samples data loaded with LoadWaveSamples(): UnloadWaveSamples(float *) => void
  raylib.UnloadWaveSamples = (samples) => mod.ccall('UnloadWaveSamples', 'pointer', ['pointer'], [samples._address])

  // Load music stream from file: LoadMusicStream(const char *) => Music
  raylib.LoadMusicStream = (fileName) => {
    const _ret = new raylib.Music()
    mod.ccall('LoadMusicStream', 'void', ['pointer', 'string'], [_ret._address, fileName])
    return _ret
  }

  // Load music stream from data: LoadMusicStreamFromMemory(const char *, const unsigned char *, int) => Music
  raylib.LoadMusicStreamFromMemory = (fileType, data, dataSize) => {
    const _ret = new raylib.Music()
    mod.ccall('LoadMusicStreamFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'], [_ret._address, fileType, data._address, dataSize])
    return _ret
  }

  // Checks if a music stream is ready: IsMusicReady(Music) => bool
  raylib.IsMusicReady = (music) => mod.ccall('IsMusicReady', 'boolean', ['pointer'], [music._address])

  // Unload music stream: UnloadMusicStream(Music) => void
  raylib.UnloadMusicStream = (music) => mod.ccall('UnloadMusicStream', 'pointer', ['pointer'], [music._address])

  // Start music playing: PlayMusicStream(Music) => void
  raylib.PlayMusicStream = (music) => mod.ccall('PlayMusicStream', 'pointer', ['pointer'], [music._address])

  // Check if music is playing: IsMusicStreamPlaying(Music) => bool
  raylib.IsMusicStreamPlaying = (music) => mod.ccall('IsMusicStreamPlaying', 'boolean', ['pointer'], [music._address])

  // Updates buffers for music streaming: UpdateMusicStream(Music) => void
  raylib.UpdateMusicStream = (music) => mod.ccall('UpdateMusicStream', 'pointer', ['pointer'], [music._address])

  // Stop music playing: StopMusicStream(Music) => void
  raylib.StopMusicStream = (music) => mod.ccall('StopMusicStream', 'pointer', ['pointer'], [music._address])

  // Pause music playing: PauseMusicStream(Music) => void
  raylib.PauseMusicStream = (music) => mod.ccall('PauseMusicStream', 'pointer', ['pointer'], [music._address])

  // Resume playing paused music: ResumeMusicStream(Music) => void
  raylib.ResumeMusicStream = (music) => mod.ccall('ResumeMusicStream', 'pointer', ['pointer'], [music._address])

  // Seek music to a position (in seconds): SeekMusicStream(Music, float) => void
  raylib.SeekMusicStream = (music, position) => mod.ccall('SeekMusicStream', 'pointer', ['pointer', 'number'], [music._address, position])

  // Set volume for music (1.0 is max level): SetMusicVolume(Music, float) => void
  raylib.SetMusicVolume = (music, volume) => mod.ccall('SetMusicVolume', 'pointer', ['pointer', 'number'], [music._address, volume])

  // Set pitch for a music (1.0 is base level): SetMusicPitch(Music, float) => void
  raylib.SetMusicPitch = (music, pitch) => mod.ccall('SetMusicPitch', 'pointer', ['pointer', 'number'], [music._address, pitch])

  // Set pan for a music (0.5 is center): SetMusicPan(Music, float) => void
  raylib.SetMusicPan = (music, pan) => mod.ccall('SetMusicPan', 'pointer', ['pointer', 'number'], [music._address, pan])

  // Get music time length (in seconds): GetMusicTimeLength(Music) => float
  raylib.GetMusicTimeLength = (music) => mod.ccall('GetMusicTimeLength', 'number', ['pointer'], [music._address])

  // Get current music time played (in seconds): GetMusicTimePlayed(Music) => float
  raylib.GetMusicTimePlayed = (music) => mod.ccall('GetMusicTimePlayed', 'number', ['pointer'], [music._address])

  // Load audio stream (to stream raw audio pcm data): LoadAudioStream(unsigned int, unsigned int, unsigned int) => AudioStream
  raylib.LoadAudioStream = (sampleRate, sampleSize, channels) => {
    const _ret = new raylib.AudioStream()
    mod.ccall('LoadAudioStream', 'void', ['pointer', 'number', 'number', 'number'], [_ret._address, sampleRate, sampleSize, channels])
    return _ret
  }

  // Checks if an audio stream is ready: IsAudioStreamReady(AudioStream) => bool
  raylib.IsAudioStreamReady = (stream) => mod.ccall('IsAudioStreamReady', 'boolean', ['pointer'], [stream._address])

  // Unload audio stream and free memory: UnloadAudioStream(AudioStream) => void
  raylib.UnloadAudioStream = (stream) => mod.ccall('UnloadAudioStream', 'pointer', ['pointer'], [stream._address])

  // Update audio stream buffers with data: UpdateAudioStream(AudioStream, const void *, int) => void
  raylib.UpdateAudioStream = (stream, data, frameCount) => mod.ccall('UpdateAudioStream', 'pointer', ['pointer', 'pointer', 'number'], [stream._address, data._address, frameCount])

  // Check if any audio stream buffers requires refill: IsAudioStreamProcessed(AudioStream) => bool
  raylib.IsAudioStreamProcessed = (stream) => mod.ccall('IsAudioStreamProcessed', 'boolean', ['pointer'], [stream._address])

  // Play audio stream: PlayAudioStream(AudioStream) => void
  raylib.PlayAudioStream = (stream) => mod.ccall('PlayAudioStream', 'pointer', ['pointer'], [stream._address])

  // Pause audio stream: PauseAudioStream(AudioStream) => void
  raylib.PauseAudioStream = (stream) => mod.ccall('PauseAudioStream', 'pointer', ['pointer'], [stream._address])

  // Resume audio stream: ResumeAudioStream(AudioStream) => void
  raylib.ResumeAudioStream = (stream) => mod.ccall('ResumeAudioStream', 'pointer', ['pointer'], [stream._address])

  // Check if audio stream is playing: IsAudioStreamPlaying(AudioStream) => bool
  raylib.IsAudioStreamPlaying = (stream) => mod.ccall('IsAudioStreamPlaying', 'boolean', ['pointer'], [stream._address])

  // Stop audio stream: StopAudioStream(AudioStream) => void
  raylib.StopAudioStream = (stream) => mod.ccall('StopAudioStream', 'pointer', ['pointer'], [stream._address])

  // Set volume for audio stream (1.0 is max level): SetAudioStreamVolume(AudioStream, float) => void
  raylib.SetAudioStreamVolume = (stream, volume) => mod.ccall('SetAudioStreamVolume', 'pointer', ['pointer', 'number'], [stream._address, volume])

  // Set pitch for audio stream (1.0 is base level): SetAudioStreamPitch(AudioStream, float) => void
  raylib.SetAudioStreamPitch = (stream, pitch) => mod.ccall('SetAudioStreamPitch', 'pointer', ['pointer', 'number'], [stream._address, pitch])

  // Set pan for audio stream (0.5 is centered): SetAudioStreamPan(AudioStream, float) => void
  raylib.SetAudioStreamPan = (stream, pan) => mod.ccall('SetAudioStreamPan', 'pointer', ['pointer', 'number'], [stream._address, pan])

  // Default size for new audio streams: SetAudioStreamBufferSizeDefault(int) => void
  raylib.SetAudioStreamBufferSizeDefault = (size) => mod.ccall('SetAudioStreamBufferSizeDefault', 'pointer', ['number'], [size])

  // Audio thread callback to request new data: SetAudioStreamCallback(AudioStream, AudioCallback) => void
  raylib.SetAudioStreamCallback = (stream, callback) => mod.ccall('SetAudioStreamCallback', 'pointer', ['pointer', 'pointer'], [stream._address, callback._address])

  // Attach audio stream processor to stream: AttachAudioStreamProcessor(AudioStream, AudioCallback) => void
  raylib.AttachAudioStreamProcessor = (stream, processor) => mod.ccall('AttachAudioStreamProcessor', 'pointer', ['pointer', 'pointer'], [stream._address, processor._address])

  // Detach audio stream processor from stream: DetachAudioStreamProcessor(AudioStream, AudioCallback) => void
  raylib.DetachAudioStreamProcessor = (stream, processor) => mod.ccall('DetachAudioStreamProcessor', 'pointer', ['pointer', 'pointer'], [stream._address, processor._address])

  // Attach audio stream processor to the entire audio pipeline: AttachAudioMixedProcessor(AudioCallback) => void
  raylib.AttachAudioMixedProcessor = (processor) => mod.ccall('AttachAudioMixedProcessor', 'pointer', ['pointer'], [processor._address])

  // Detach audio stream processor from the entire audio pipeline: DetachAudioMixedProcessor(AudioCallback) => void
  raylib.DetachAudioMixedProcessor = (processor) => mod.ccall('DetachAudioMixedProcessor', 'pointer', ['pointer'], [processor._address])


  // insert remote file in WASM filesystem
  raylib.addFile = async filename => {
    mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // more convenient free() for structs
  raylib.free = ptr => ptr._address ? mod._free(ptr._address) : mod._free(ptr)

  // process user-functions
  if (userInit) {
    await userInit(raylib)
  }
  const updateLoop = (timeStamp) => {
    if (userUpdate) {
      userUpdate(raylib, timeStamp)
    }
    requestAnimationFrame(updateLoop)
  }
  updateLoop()
  return raylib
}

export default setup

