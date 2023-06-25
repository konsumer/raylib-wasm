
// TODO: inline this?
import Module from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas, userInit, userUpdate) {
  const raylib = {}

  // Vector2, 2 components
  raylib.Vector2 = class Vector2 {
    constructor(init = {}, _address) {
      const {x = 0, y = 0} = init
      this._size = 8
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.x = x
      this.y = y
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
      const {x = 0, y = 0, z = 0} = init
      this._size = 12
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.x = x
      this.y = y
      this.z = z
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
      const {x = 0, y = 0, z = 0, w = 0} = init
      this._size = 16
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.x = x
      this.y = y
      this.z = z
      this.w = w
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
      const {m0 = 0, m4 = 0, m8 = 0, m12 = 0, m1 = 0, m5 = 0, m9 = 0, m13 = 0, m2 = 0, m6 = 0, m10 = 0, m14 = 0, m3 = 0, m7 = 0, m11 = 0, m15 = 0} = init
      this._size = 64
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.m0 = m0
      this.m4 = m4
      this.m8 = m8
      this.m12 = m12
      this.m1 = m1
      this.m5 = m5
      this.m9 = m9
      this.m13 = m13
      this.m2 = m2
      this.m6 = m6
      this.m10 = m10
      this.m14 = m14
      this.m3 = m3
      this.m7 = m7
      this.m11 = m11
      this.m15 = m15
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
      const {r = 0, g = 0, b = 0, a = 0} = init
      this._size = 4
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.r = r
      this.g = g
      this.b = b
      this.a = a
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
      const {x = 0, y = 0, width = 0, height = 0} = init
      this._size = 16
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.x = x
      this.y = y
      this.width = width
      this.height = height
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
      const {data = 0, width = 0, height = 0, mipmaps = 0, format = 0} = init
      this._size = 20
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.data = data
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
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
      const {id = 0, width = 0, height = 0, mipmaps = 0, format = 0} = init
      this._size = 20
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
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
      const {id = 0, texture = new Texture(), depth = new Texture()} = init
      this._size = 44
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.id = id
      this.texture = texture
      this.depth = depth
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
      const {source = new Rectangle(), left = 0, top = 0, right = 0, bottom = 0, layout = 0} = init
      this._size = 36
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.source = source
      this.left = left
      this.top = top
      this.right = right
      this.bottom = bottom
      this.layout = layout
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
      const {value = 0, offsetX = 0, offsetY = 0, advanceX = 0, image = new Image()} = init
      this._size = 36
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.value = value
      this.offsetX = offsetX
      this.offsetY = offsetY
      this.advanceX = advanceX
      this.image = image
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
      const {baseSize = 0, glyphCount = 0, glyphPadding = 0, texture = new Texture2D(), recs = new Rectangle(), glyphs = new GlyphInfo()} = init
      this._size = 40
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.baseSize = baseSize
      this.glyphCount = glyphCount
      this.glyphPadding = glyphPadding
      this.texture = texture
      this.recs = recs
      this.glyphs = glyphs
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
      const {position = new Vector3(), target = new Vector3(), up = new Vector3(), fovy = 0, projection = 0} = init
      this._size = 44
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.position = position
      this.target = target
      this.up = up
      this.fovy = fovy
      this.projection = projection
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
      const {offset = new Vector2(), target = new Vector2(), rotation = 0, zoom = 0} = init
      this._size = 24
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.offset = offset
      this.target = target
      this.rotation = rotation
      this.zoom = zoom
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
      const {vertexCount = 0, triangleCount = 0, vertices = 0, texcoords = 0, texcoords2 = 0, normals = 0, tangents = 0, colors = 0, indices = 0, animVertices = 0, animNormals = 0, boneIds = 0, boneWeights = 0, vaoId = 0, vboId = 0} = init
      this._size = 60
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.vertexCount = vertexCount
      this.triangleCount = triangleCount
      this.vertices = vertices
      this.texcoords = texcoords
      this.texcoords2 = texcoords2
      this.normals = normals
      this.tangents = tangents
      this.colors = colors
      this.indices = indices
      this.animVertices = animVertices
      this.animNormals = animNormals
      this.boneIds = boneIds
      this.boneWeights = boneWeights
      this.vaoId = vaoId
      this.vboId = vboId
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
      const {id = 0, locs = 0} = init
      this._size = 8
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.id = id
      this.locs = locs
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
      const {texture = new Texture2D(), color = new Color(), value = 0} = init
      this._size = 28
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.texture = texture
      this.color = color
      this.value = value
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
      const {shader = new Shader(), maps = new MaterialMap(), params = [0, 0, 0, 0]} = init
      this._size = 28
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.shader = shader
      this.maps = maps
      this.params = params
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
      const {translation = new Vector3(), rotation = new Quaternion(), scale = new Vector3()} = init
      this._size = 40
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.translation = translation
      this.rotation = rotation
      this.scale = scale
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
      const {name = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], parent = 0} = init
      this._size = 36
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.name = name
      this.parent = parent
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
      const {transform = new Matrix(), meshCount = 0, materialCount = 0, meshes = new Mesh(), materials = new Material(), meshMaterial = 0, boneCount = 0, bones = new BoneInfo(), bindPose = new Transform()} = init
      this._size = 96
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.transform = transform
      this.meshCount = meshCount
      this.materialCount = materialCount
      this.meshes = meshes
      this.materials = materials
      this.meshMaterial = meshMaterial
      this.boneCount = boneCount
      this.bones = bones
      this.bindPose = bindPose
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
      const {boneCount = 0, frameCount = 0, bones = new BoneInfo(), framePoses = new Transform(), name = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} = init
      this._size = 48
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.boneCount = boneCount
      this.frameCount = frameCount
      this.bones = bones
      this.framePoses = framePoses
      this.name = name
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
      const {position = new Vector3(), direction = new Vector3()} = init
      this._size = 24
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.position = position
      this.direction = direction
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
      const {hit = 0, distance = 0, point = new Vector3(), normal = new Vector3()} = init
      this._size = 29
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.hit = hit
      this.distance = distance
      this.point = point
      this.normal = normal
    }
    
    get hit () {
      return mod.getValue(this._address + 0, '*')
    }
    set hit (hit) {
      mod.setValue(this._address + 0, hit, '*')
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
      const {min = new Vector3(), max = new Vector3()} = init
      this._size = 24
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.min = min
      this.max = max
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
      const {frameCount = 0, sampleRate = 0, sampleSize = 0, channels = 0, data = 0} = init
      this._size = 20
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.frameCount = frameCount
      this.sampleRate = sampleRate
      this.sampleSize = sampleSize
      this.channels = channels
      this.data = data
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
      const {buffer = 0, processor = 0, sampleRate = 0, sampleSize = 0, channels = 0} = init
      this._size = 20
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.buffer = buffer
      this.processor = processor
      this.sampleRate = sampleRate
      this.sampleSize = sampleSize
      this.channels = channels
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
      const {stream = new AudioStream(), frameCount = 0} = init
      this._size = 24
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.stream = stream
      this.frameCount = frameCount
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
      const {stream = new AudioStream(), frameCount = 0, looping = 0, ctxType = 0, ctxData = 0} = init
      this._size = 33
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.stream = stream
      this.frameCount = frameCount
      this.looping = looping
      this.ctxType = ctxType
      this.ctxData = ctxData
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
      return mod.getValue(this._address + 24, '*')
    }
    set looping (looping) {
      mod.setValue(this._address + 24, looping, '*')
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
      const {hResolution = 0, vResolution = 0, hScreenSize = 0, vScreenSize = 0, vScreenCenter = 0, eyeToScreenDistance = 0, lensSeparationDistance = 0, interpupillaryDistance = 0, lensDistortionValues = [0, 0, 0, 0], chromaAbCorrection = [0, 0, 0, 0]} = init
      this._size = 64
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.hResolution = hResolution
      this.vResolution = vResolution
      this.hScreenSize = hScreenSize
      this.vScreenSize = vScreenSize
      this.vScreenCenter = vScreenCenter
      this.eyeToScreenDistance = eyeToScreenDistance
      this.lensSeparationDistance = lensSeparationDistance
      this.interpupillaryDistance = interpupillaryDistance
      this.lensDistortionValues = lensDistortionValues
      this.chromaAbCorrection = chromaAbCorrection
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
      const {projection = [new Matrix(), new Matrix()], viewOffset = [new Matrix(), new Matrix()], leftLensCenter = [0, 0], rightLensCenter = [0, 0], leftScreenCenter = [0, 0], rightScreenCenter = [0, 0], scale = [0, 0], scaleIn = [0, 0]} = init
      this._size = 304
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.projection = projection
      this.viewOffset = viewOffset
      this.leftLensCenter = leftLensCenter
      this.rightLensCenter = rightLensCenter
      this.leftScreenCenter = leftScreenCenter
      this.rightScreenCenter = rightScreenCenter
      this.scale = scale
      this.scaleIn = scaleIn
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
      const {capacity = 0, count = 0, paths = 0} = init
      this._size = 12
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.capacity = capacity
      this.count = count
      this.paths = paths
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
      const {x = 0, y = 0, z = 0, w = 0} = init
      this._size = 16
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.x = x
      this.y = y
      this.z = z
      this.w = w
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
      const {id = 0, width = 0, height = 0, mipmaps = 0, format = 0} = init
      this._size = 20
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
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
      const {id = 0, width = 0, height = 0, mipmaps = 0, format = 0} = init
      this._size = 20
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
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
      const {id = 0, texture = new Texture(), depth = new Texture()} = init
      this._size = 44
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.id = id
      this.texture = texture
      this.depth = depth
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
      const {position = new Vector3(), target = new Vector3(), up = new Vector3(), fovy = 0, projection = 0} = init
      this._size = 44
      if (_address) {
        this._address = _address
      } else {
        this._address = mod._malloc(this._size)
      }
      this.position = position
      this.target = target
      this.up = up
      this.fovy = fovy
      this.projection = projection
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
  raylib.RAYWHITE = new raylib.Color({r: 245, g: 245, b: 245, a: 255}) // My own White (raylib logo)  /* global raylib, mod */
  
  // insert remote file in WASM filesystem
  raylib.addFile = async filename => {
    mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }
  
  // TODO: just manually building a few functions here, until I get better codegen setup
  // think of this as the target we are trying to generate
  raylib.InitWindow = mod.cwrap('InitWindow', 'void', ['number', 'number', 'string'])
  raylib.BeginDrawing = mod.cwrap('BeginDrawing', 'void', [])
  raylib.EndDrawing = mod.cwrap('EndDrawing', 'void', [])
  raylib.DrawFPS = mod.cwrap('DrawFPS', 'void', [])
  raylib.GetRandomValue = mod.cwrap('GetRandomValue', 'number', ['number', 'number'])
  raylib.GetScreenWidth = mod.cwrap('GetScreenWidth', 'number', [])
  raylib.GetScreenHeight = mod.cwrap('GetScreenHeight', 'number', [])
  raylib.IsMouseButtonDown = mod.cwrap('IsMouseButtonDown', 'boolean', ['number'])
  
  // these have struct params/return, so need wrap (to get struct._address)
  raylib.ClearBackground = color => mod.ccall('ClearBackground', 'void', ['pointer'], [color._address])
  raylib.DrawText = (text, x, y, fontSize, color) => mod.ccall('DrawText', 'void', ['string', 'number', 'number', 'number', 'pointer'], [text, x, y, fontSize, color._address])
  raylib.DrawTexture = (texture, x, y, color) => mod.ccall('DrawTexture', 'void', ['pointer', 'number', 'number', 'pointer'], [texture._address, x, y, color._address])
  raylib.DrawRectangle = (x, y, width, height, color) => mod.ccall('DrawRectangle', 'void', ['number', 'number', 'number', 'number', 'pointer'], [x, y, width, height, color._address])
  raylib.GetMousePosition = () => {
    const ret = new raylib.Vector2()
    mod.ccall('GetMousePosition', 'void', ['pointer'], [ret._address])
    return ret
  }
  
  // LoadTexture, but (async) insert the file into fake FS first
  raylib.LoadTexture = async filename => {
    await raylib.addFile(filename)
    const texture = new raylib.Texture()
    mod.ccall('LoadTexture', 'void', ['pointer', 'string'], [texture._address, filename])
    return texture
  }
  
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

