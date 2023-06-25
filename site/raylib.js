
// TODO: inline this?
import Module from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas, userInit, userUpdate) {
  const raylib = {}
  // Vector2, 2 components
  raylib.Vector2 = class Vector2 {
    constructor(x = 0, y = 0) {
      this._size = 8
      this._address = mod._malloc(this._size)
      this.x = x
      this.y = y
    }
    
    get x () {
      return valGetter(this._address + 0, 'float')
    }
    set x (x) {
      valSetter(this._address + 0, 'float', x)
    }

  
    get y () {
      return valGetter(this._address + 4, 'float')
    }
    set y (y) {
      valSetter(this._address + 4, 'float', y)
    }

  }

  // Vector3, 3 components
  raylib.Vector3 = class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      this._size = 12
      this._address = mod._malloc(this._size)
      this.x = x
      this.y = y
      this.z = z
    }
    
    get x () {
      return valGetter(this._address + 0, 'float')
    }
    set x (x) {
      valSetter(this._address + 0, 'float', x)
    }

  
    get y () {
      return valGetter(this._address + 4, 'float')
    }
    set y (y) {
      valSetter(this._address + 4, 'float', y)
    }

  
    get z () {
      return valGetter(this._address + 8, 'float')
    }
    set z (z) {
      valSetter(this._address + 8, 'float', z)
    }

  }

  // Vector4, 4 components
  raylib.Vector4 = class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 0) {
      this._size = 16
      this._address = mod._malloc(this._size)
      this.x = x
      this.y = y
      this.z = z
      this.w = w
    }
    
    get x () {
      return valGetter(this._address + 0, 'float')
    }
    set x (x) {
      valSetter(this._address + 0, 'float', x)
    }

  
    get y () {
      return valGetter(this._address + 4, 'float')
    }
    set y (y) {
      valSetter(this._address + 4, 'float', y)
    }

  
    get z () {
      return valGetter(this._address + 8, 'float')
    }
    set z (z) {
      valSetter(this._address + 8, 'float', z)
    }

  
    get w () {
      return valGetter(this._address + 12, 'float')
    }
    set w (w) {
      valSetter(this._address + 12, 'float', w)
    }

  }

  // Matrix, 4x4 components, column major, OpenGL style, right-handed
  raylib.Matrix = class Matrix {
    constructor(m0 = 0, m4 = 0, m8 = 0, m12 = 0, m1 = 0, m5 = 0, m9 = 0, m13 = 0, m2 = 0, m6 = 0, m10 = 0, m14 = 0, m3 = 0, m7 = 0, m11 = 0, m15 = 0) {
      this._size = 64
      this._address = mod._malloc(this._size)
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
      return valGetter(this._address + 0, 'float')
    }
    set m0 (m0) {
      valSetter(this._address + 0, 'float', m0)
    }

  
    get m4 () {
      return valGetter(this._address + 4, 'float')
    }
    set m4 (m4) {
      valSetter(this._address + 4, 'float', m4)
    }

  
    get m8 () {
      return valGetter(this._address + 8, 'float')
    }
    set m8 (m8) {
      valSetter(this._address + 8, 'float', m8)
    }

  
    get m12 () {
      return valGetter(this._address + 12, 'float')
    }
    set m12 (m12) {
      valSetter(this._address + 12, 'float', m12)
    }

  
    get m1 () {
      return valGetter(this._address + 16, 'float')
    }
    set m1 (m1) {
      valSetter(this._address + 16, 'float', m1)
    }

  
    get m5 () {
      return valGetter(this._address + 20, 'float')
    }
    set m5 (m5) {
      valSetter(this._address + 20, 'float', m5)
    }

  
    get m9 () {
      return valGetter(this._address + 24, 'float')
    }
    set m9 (m9) {
      valSetter(this._address + 24, 'float', m9)
    }

  
    get m13 () {
      return valGetter(this._address + 28, 'float')
    }
    set m13 (m13) {
      valSetter(this._address + 28, 'float', m13)
    }

  
    get m2 () {
      return valGetter(this._address + 32, 'float')
    }
    set m2 (m2) {
      valSetter(this._address + 32, 'float', m2)
    }

  
    get m6 () {
      return valGetter(this._address + 36, 'float')
    }
    set m6 (m6) {
      valSetter(this._address + 36, 'float', m6)
    }

  
    get m10 () {
      return valGetter(this._address + 40, 'float')
    }
    set m10 (m10) {
      valSetter(this._address + 40, 'float', m10)
    }

  
    get m14 () {
      return valGetter(this._address + 44, 'float')
    }
    set m14 (m14) {
      valSetter(this._address + 44, 'float', m14)
    }

  
    get m3 () {
      return valGetter(this._address + 48, 'float')
    }
    set m3 (m3) {
      valSetter(this._address + 48, 'float', m3)
    }

  
    get m7 () {
      return valGetter(this._address + 52, 'float')
    }
    set m7 (m7) {
      valSetter(this._address + 52, 'float', m7)
    }

  
    get m11 () {
      return valGetter(this._address + 56, 'float')
    }
    set m11 (m11) {
      valSetter(this._address + 56, 'float', m11)
    }

  
    get m15 () {
      return valGetter(this._address + 60, 'float')
    }
    set m15 (m15) {
      valSetter(this._address + 60, 'float', m15)
    }

  }

  // Color, 4 components, R8G8B8A8 (32bit)
  raylib.Color = class Color {
    constructor(r = 0, g = 0, b = 0, a = 0) {
      this._size = 4
      this._address = mod._malloc(this._size)
      this.r = r
      this.g = g
      this.b = b
      this.a = a
    }
    
    get r () {
      return valGetter(this._address + 0, 'unsigned char')
    }
    set r (r) {
      valSetter(this._address + 0, 'unsigned char', r)
    }

  
    get g () {
      return valGetter(this._address + 1, 'unsigned char')
    }
    set g (g) {
      valSetter(this._address + 1, 'unsigned char', g)
    }

  
    get b () {
      return valGetter(this._address + 2, 'unsigned char')
    }
    set b (b) {
      valSetter(this._address + 2, 'unsigned char', b)
    }

  
    get a () {
      return valGetter(this._address + 3, 'unsigned char')
    }
    set a (a) {
      valSetter(this._address + 3, 'unsigned char', a)
    }

  }

  // Rectangle, 4 components
  raylib.Rectangle = class Rectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      this._size = 16
      this._address = mod._malloc(this._size)
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
    
    get x () {
      return valGetter(this._address + 0, 'float')
    }
    set x (x) {
      valSetter(this._address + 0, 'float', x)
    }

  
    get y () {
      return valGetter(this._address + 4, 'float')
    }
    set y (y) {
      valSetter(this._address + 4, 'float', y)
    }

  
    get width () {
      return valGetter(this._address + 8, 'float')
    }
    set width (width) {
      valSetter(this._address + 8, 'float', width)
    }

  
    get height () {
      return valGetter(this._address + 12, 'float')
    }
    set height (height) {
      valSetter(this._address + 12, 'float', height)
    }

  }

  // Image, pixel data stored in CPU memory (RAM)
  raylib.Image = class Image {
    constructor(data = 0, width = 0, height = 0, mipmaps = 0, format = 0) {
      this._size = 20
      this._address = mod._malloc(this._size)
      this.data = data
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get data () {
      return valGetter(this._address + 0, 'void *')
    }
    set data (data) {
      valSetter(this._address + 0, 'void *', data)
    }

  
    get width () {
      return valGetter(this._address + 4, 'int')
    }
    set width (width) {
      valSetter(this._address + 4, 'int', width)
    }

  
    get height () {
      return valGetter(this._address + 8, 'int')
    }
    set height (height) {
      valSetter(this._address + 8, 'int', height)
    }

  
    get mipmaps () {
      return valGetter(this._address + 12, 'int')
    }
    set mipmaps (mipmaps) {
      valSetter(this._address + 12, 'int', mipmaps)
    }

  
    get format () {
      return valGetter(this._address + 16, 'int')
    }
    set format (format) {
      valSetter(this._address + 16, 'int', format)
    }

  }

  // Texture, tex data stored in GPU memory (VRAM)
  raylib.Texture = class Texture {
    constructor(id = 0, width = 0, height = 0, mipmaps = 0, format = 0) {
      this._size = 20
      this._address = mod._malloc(this._size)
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get id () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set id (id) {
      valSetter(this._address + 0, 'unsigned int', id)
    }

  
    get width () {
      return valGetter(this._address + 4, 'int')
    }
    set width (width) {
      valSetter(this._address + 4, 'int', width)
    }

  
    get height () {
      return valGetter(this._address + 8, 'int')
    }
    set height (height) {
      valSetter(this._address + 8, 'int', height)
    }

  
    get mipmaps () {
      return valGetter(this._address + 12, 'int')
    }
    set mipmaps (mipmaps) {
      valSetter(this._address + 12, 'int', mipmaps)
    }

  
    get format () {
      return valGetter(this._address + 16, 'int')
    }
    set format (format) {
      valSetter(this._address + 16, 'int', format)
    }

  }

  // RenderTexture, fbo for texture rendering
  raylib.RenderTexture = class RenderTexture {
    constructor(id = 0, texture = new Texture(), depth = new Texture()) {
      this._size = 44
      this._address = mod._malloc(this._size)
      this.id = id
      this.texture = texture
      this.depth = depth
    }
    
    get id () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set id (id) {
      valSetter(this._address + 0, 'unsigned int', id)
    }

  
    get texture () {
      return valGetter(this._address + 4, 'Texture')
    }
    set texture (texture) {
      valSetter(this._address + 4, 'Texture', texture)
    }

  
    get depth () {
      return valGetter(this._address + 24, 'Texture')
    }
    set depth (depth) {
      valSetter(this._address + 24, 'Texture', depth)
    }

  }

  // NPatchInfo, n-patch layout info
  raylib.NPatchInfo = class NPatchInfo {
    constructor(source = new Rectangle(), left = 0, top = 0, right = 0, bottom = 0, layout = 0) {
      this._size = 36
      this._address = mod._malloc(this._size)
      this.source = source
      this.left = left
      this.top = top
      this.right = right
      this.bottom = bottom
      this.layout = layout
    }
    
    get source () {
      return valGetter(this._address + 0, 'Rectangle')
    }
    set source (source) {
      valSetter(this._address + 0, 'Rectangle', source)
    }

  
    get left () {
      return valGetter(this._address + 16, 'int')
    }
    set left (left) {
      valSetter(this._address + 16, 'int', left)
    }

  
    get top () {
      return valGetter(this._address + 20, 'int')
    }
    set top (top) {
      valSetter(this._address + 20, 'int', top)
    }

  
    get right () {
      return valGetter(this._address + 24, 'int')
    }
    set right (right) {
      valSetter(this._address + 24, 'int', right)
    }

  
    get bottom () {
      return valGetter(this._address + 28, 'int')
    }
    set bottom (bottom) {
      valSetter(this._address + 28, 'int', bottom)
    }

  
    get layout () {
      return valGetter(this._address + 32, 'int')
    }
    set layout (layout) {
      valSetter(this._address + 32, 'int', layout)
    }

  }

  // GlyphInfo, font characters glyphs info
  raylib.GlyphInfo = class GlyphInfo {
    constructor(value = 0, offsetX = 0, offsetY = 0, advanceX = 0, image = new Image()) {
      this._size = 36
      this._address = mod._malloc(this._size)
      this.value = value
      this.offsetX = offsetX
      this.offsetY = offsetY
      this.advanceX = advanceX
      this.image = image
    }
    
    get value () {
      return valGetter(this._address + 0, 'int')
    }
    set value (value) {
      valSetter(this._address + 0, 'int', value)
    }

  
    get offsetX () {
      return valGetter(this._address + 4, 'int')
    }
    set offsetX (offsetX) {
      valSetter(this._address + 4, 'int', offsetX)
    }

  
    get offsetY () {
      return valGetter(this._address + 8, 'int')
    }
    set offsetY (offsetY) {
      valSetter(this._address + 8, 'int', offsetY)
    }

  
    get advanceX () {
      return valGetter(this._address + 12, 'int')
    }
    set advanceX (advanceX) {
      valSetter(this._address + 12, 'int', advanceX)
    }

  
    get image () {
      return valGetter(this._address + 16, 'Image')
    }
    set image (image) {
      valSetter(this._address + 16, 'Image', image)
    }

  }

  // Font, font texture and GlyphInfo array data
  raylib.Font = class Font {
    constructor(baseSize = 0, glyphCount = 0, glyphPadding = 0, texture = new Texture2D(), recs = new Rectangle(), glyphs = new GlyphInfo()) {
      this._size = 40
      this._address = mod._malloc(this._size)
      this.baseSize = baseSize
      this.glyphCount = glyphCount
      this.glyphPadding = glyphPadding
      this.texture = texture
      this.recs = recs
      this.glyphs = glyphs
    }
    
    get baseSize () {
      return valGetter(this._address + 0, 'int')
    }
    set baseSize (baseSize) {
      valSetter(this._address + 0, 'int', baseSize)
    }

  
    get glyphCount () {
      return valGetter(this._address + 4, 'int')
    }
    set glyphCount (glyphCount) {
      valSetter(this._address + 4, 'int', glyphCount)
    }

  
    get glyphPadding () {
      return valGetter(this._address + 8, 'int')
    }
    set glyphPadding (glyphPadding) {
      valSetter(this._address + 8, 'int', glyphPadding)
    }

  
    get texture () {
      return valGetter(this._address + 12, 'Texture2D')
    }
    set texture (texture) {
      valSetter(this._address + 12, 'Texture2D', texture)
    }

  
    get recs () {
      return valGetter(this._address + 32, 'Rectangle *')
    }
    set recs (recs) {
      valSetter(this._address + 32, 'Rectangle *', recs)
    }

  
    get glyphs () {
      return valGetter(this._address + 36, 'GlyphInfo *')
    }
    set glyphs (glyphs) {
      valSetter(this._address + 36, 'GlyphInfo *', glyphs)
    }

  }

  // Camera, defines position/orientation in 3d space
  raylib.Camera3D = class Camera3D {
    constructor(position = new Vector3(), target = new Vector3(), up = new Vector3(), fovy = 0, projection = 0) {
      this._size = 44
      this._address = mod._malloc(this._size)
      this.position = position
      this.target = target
      this.up = up
      this.fovy = fovy
      this.projection = projection
    }
    
    get position () {
      return valGetter(this._address + 0, 'Vector3')
    }
    set position (position) {
      valSetter(this._address + 0, 'Vector3', position)
    }

  
    get target () {
      return valGetter(this._address + 12, 'Vector3')
    }
    set target (target) {
      valSetter(this._address + 12, 'Vector3', target)
    }

  
    get up () {
      return valGetter(this._address + 24, 'Vector3')
    }
    set up (up) {
      valSetter(this._address + 24, 'Vector3', up)
    }

  
    get fovy () {
      return valGetter(this._address + 36, 'float')
    }
    set fovy (fovy) {
      valSetter(this._address + 36, 'float', fovy)
    }

  
    get projection () {
      return valGetter(this._address + 40, 'int')
    }
    set projection (projection) {
      valSetter(this._address + 40, 'int', projection)
    }

  }

  // Camera2D, defines position/orientation in 2d space
  raylib.Camera2D = class Camera2D {
    constructor(offset = new Vector2(), target = new Vector2(), rotation = 0, zoom = 0) {
      this._size = 24
      this._address = mod._malloc(this._size)
      this.offset = offset
      this.target = target
      this.rotation = rotation
      this.zoom = zoom
    }
    
    get offset () {
      return valGetter(this._address + 0, 'Vector2')
    }
    set offset (offset) {
      valSetter(this._address + 0, 'Vector2', offset)
    }

  
    get target () {
      return valGetter(this._address + 8, 'Vector2')
    }
    set target (target) {
      valSetter(this._address + 8, 'Vector2', target)
    }

  
    get rotation () {
      return valGetter(this._address + 16, 'float')
    }
    set rotation (rotation) {
      valSetter(this._address + 16, 'float', rotation)
    }

  
    get zoom () {
      return valGetter(this._address + 20, 'float')
    }
    set zoom (zoom) {
      valSetter(this._address + 20, 'float', zoom)
    }

  }

  // Mesh, vertex data and vao/vbo
  raylib.Mesh = class Mesh {
    constructor(vertexCount = 0, triangleCount = 0, vertices = 0, texcoords = 0, texcoords2 = 0, normals = 0, tangents = 0, colors = 0, indices = 0, animVertices = 0, animNormals = 0, boneIds = 0, boneWeights = 0, vaoId = 0, vboId = 0) {
      this._size = 60
      this._address = mod._malloc(this._size)
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
      return valGetter(this._address + 0, 'int')
    }
    set vertexCount (vertexCount) {
      valSetter(this._address + 0, 'int', vertexCount)
    }

  
    get triangleCount () {
      return valGetter(this._address + 4, 'int')
    }
    set triangleCount (triangleCount) {
      valSetter(this._address + 4, 'int', triangleCount)
    }

  
    get vertices () {
      return valGetter(this._address + 8, 'float *')
    }
    set vertices (vertices) {
      valSetter(this._address + 8, 'float *', vertices)
    }

  
    get texcoords () {
      return valGetter(this._address + 12, 'float *')
    }
    set texcoords (texcoords) {
      valSetter(this._address + 12, 'float *', texcoords)
    }

  
    get texcoords2 () {
      return valGetter(this._address + 16, 'float *')
    }
    set texcoords2 (texcoords2) {
      valSetter(this._address + 16, 'float *', texcoords2)
    }

  
    get normals () {
      return valGetter(this._address + 20, 'float *')
    }
    set normals (normals) {
      valSetter(this._address + 20, 'float *', normals)
    }

  
    get tangents () {
      return valGetter(this._address + 24, 'float *')
    }
    set tangents (tangents) {
      valSetter(this._address + 24, 'float *', tangents)
    }

  
    get colors () {
      return valGetter(this._address + 28, 'unsigned char *')
    }
    set colors (colors) {
      valSetter(this._address + 28, 'unsigned char *', colors)
    }

  
    get indices () {
      return valGetter(this._address + 32, 'unsigned short *')
    }
    set indices (indices) {
      valSetter(this._address + 32, 'unsigned short *', indices)
    }

  
    get animVertices () {
      return valGetter(this._address + 36, 'float *')
    }
    set animVertices (animVertices) {
      valSetter(this._address + 36, 'float *', animVertices)
    }

  
    get animNormals () {
      return valGetter(this._address + 40, 'float *')
    }
    set animNormals (animNormals) {
      valSetter(this._address + 40, 'float *', animNormals)
    }

  
    get boneIds () {
      return valGetter(this._address + 44, 'unsigned char *')
    }
    set boneIds (boneIds) {
      valSetter(this._address + 44, 'unsigned char *', boneIds)
    }

  
    get boneWeights () {
      return valGetter(this._address + 48, 'float *')
    }
    set boneWeights (boneWeights) {
      valSetter(this._address + 48, 'float *', boneWeights)
    }

  
    get vaoId () {
      return valGetter(this._address + 52, 'unsigned int')
    }
    set vaoId (vaoId) {
      valSetter(this._address + 52, 'unsigned int', vaoId)
    }

  
    get vboId () {
      return valGetter(this._address + 56, 'unsigned int *')
    }
    set vboId (vboId) {
      valSetter(this._address + 56, 'unsigned int *', vboId)
    }

  }

  // Shader
  raylib.Shader = class Shader {
    constructor(id = 0, locs = 0) {
      this._size = 8
      this._address = mod._malloc(this._size)
      this.id = id
      this.locs = locs
    }
    
    get id () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set id (id) {
      valSetter(this._address + 0, 'unsigned int', id)
    }

  
    get locs () {
      return valGetter(this._address + 4, 'int *')
    }
    set locs (locs) {
      valSetter(this._address + 4, 'int *', locs)
    }

  }

  // MaterialMap
  raylib.MaterialMap = class MaterialMap {
    constructor(texture = new Texture2D(), color = new Color(), value = 0) {
      this._size = 28
      this._address = mod._malloc(this._size)
      this.texture = texture
      this.color = color
      this.value = value
    }
    
    get texture () {
      return valGetter(this._address + 0, 'Texture2D')
    }
    set texture (texture) {
      valSetter(this._address + 0, 'Texture2D', texture)
    }

  
    get color () {
      return valGetter(this._address + 20, 'Color')
    }
    set color (color) {
      valSetter(this._address + 20, 'Color', color)
    }

  
    get value () {
      return valGetter(this._address + 24, 'float')
    }
    set value (value) {
      valSetter(this._address + 24, 'float', value)
    }

  }

  // Material, includes shader and maps
  raylib.Material = class Material {
    constructor(shader = new Shader(), maps = new MaterialMap(), params = [0, 0, 0, 0]) {
      this._size = 28
      this._address = mod._malloc(this._size)
      this.shader = shader
      this.maps = maps
      this.params = params
    }
    
    get shader () {
      return valGetter(this._address + 0, 'Shader')
    }
    set shader (shader) {
      valSetter(this._address + 0, 'Shader', shader)
    }

  
    get maps () {
      return valGetter(this._address + 8, 'MaterialMap *')
    }
    set maps (maps) {
      valSetter(this._address + 8, 'MaterialMap *', maps)
    }

  
    get params () {
      return valGetter(this._address + 12, 'float[4]')
    }
    set params (params) {
      valSetter(this._address + 12, 'float[4]', params)
    }

  }

  // Transform, vertex transformation data
  raylib.Transform = class Transform {
    constructor(translation = new Vector3(), rotation = new Quaternion(), scale = new Vector3()) {
      this._size = 40
      this._address = mod._malloc(this._size)
      this.translation = translation
      this.rotation = rotation
      this.scale = scale
    }
    
    get translation () {
      return valGetter(this._address + 0, 'Vector3')
    }
    set translation (translation) {
      valSetter(this._address + 0, 'Vector3', translation)
    }

  
    get rotation () {
      return valGetter(this._address + 12, 'Quaternion')
    }
    set rotation (rotation) {
      valSetter(this._address + 12, 'Quaternion', rotation)
    }

  
    get scale () {
      return valGetter(this._address + 28, 'Vector3')
    }
    set scale (scale) {
      valSetter(this._address + 28, 'Vector3', scale)
    }

  }

  // Bone, skeletal animation bone
  raylib.BoneInfo = class BoneInfo {
    constructor(name = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], parent = 0) {
      this._size = 36
      this._address = mod._malloc(this._size)
      this.name = name
      this.parent = parent
    }
    
    get name () {
      return valGetter(this._address + 0, 'char[32]')
    }
    set name (name) {
      valSetter(this._address + 0, 'char[32]', name)
    }

  
    get parent () {
      return valGetter(this._address + 32, 'int')
    }
    set parent (parent) {
      valSetter(this._address + 32, 'int', parent)
    }

  }

  // Model, meshes, materials and animation data
  raylib.Model = class Model {
    constructor(transform = new Matrix(), meshCount = 0, materialCount = 0, meshes = new Mesh(), materials = new Material(), meshMaterial = 0, boneCount = 0, bones = new BoneInfo(), bindPose = new Transform()) {
      this._size = 96
      this._address = mod._malloc(this._size)
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
      return valGetter(this._address + 0, 'Matrix')
    }
    set transform (transform) {
      valSetter(this._address + 0, 'Matrix', transform)
    }

  
    get meshCount () {
      return valGetter(this._address + 64, 'int')
    }
    set meshCount (meshCount) {
      valSetter(this._address + 64, 'int', meshCount)
    }

  
    get materialCount () {
      return valGetter(this._address + 68, 'int')
    }
    set materialCount (materialCount) {
      valSetter(this._address + 68, 'int', materialCount)
    }

  
    get meshes () {
      return valGetter(this._address + 72, 'Mesh *')
    }
    set meshes (meshes) {
      valSetter(this._address + 72, 'Mesh *', meshes)
    }

  
    get materials () {
      return valGetter(this._address + 76, 'Material *')
    }
    set materials (materials) {
      valSetter(this._address + 76, 'Material *', materials)
    }

  
    get meshMaterial () {
      return valGetter(this._address + 80, 'int *')
    }
    set meshMaterial (meshMaterial) {
      valSetter(this._address + 80, 'int *', meshMaterial)
    }

  
    get boneCount () {
      return valGetter(this._address + 84, 'int')
    }
    set boneCount (boneCount) {
      valSetter(this._address + 84, 'int', boneCount)
    }

  
    get bones () {
      return valGetter(this._address + 88, 'BoneInfo *')
    }
    set bones (bones) {
      valSetter(this._address + 88, 'BoneInfo *', bones)
    }

  
    get bindPose () {
      return valGetter(this._address + 92, 'Transform *')
    }
    set bindPose (bindPose) {
      valSetter(this._address + 92, 'Transform *', bindPose)
    }

  }

  // ModelAnimation
  raylib.ModelAnimation = class ModelAnimation {
    constructor(boneCount = 0, frameCount = 0, bones = new BoneInfo(), framePoses = new Transform(), name = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
      this._size = 48
      this._address = mod._malloc(this._size)
      this.boneCount = boneCount
      this.frameCount = frameCount
      this.bones = bones
      this.framePoses = framePoses
      this.name = name
    }
    
    get boneCount () {
      return valGetter(this._address + 0, 'int')
    }
    set boneCount (boneCount) {
      valSetter(this._address + 0, 'int', boneCount)
    }

  
    get frameCount () {
      return valGetter(this._address + 4, 'int')
    }
    set frameCount (frameCount) {
      valSetter(this._address + 4, 'int', frameCount)
    }

  
    get bones () {
      return valGetter(this._address + 8, 'BoneInfo *')
    }
    set bones (bones) {
      valSetter(this._address + 8, 'BoneInfo *', bones)
    }

  
    get framePoses () {
      return valGetter(this._address + 12, 'Transform **')
    }
    set framePoses (framePoses) {
      valSetter(this._address + 12, 'Transform **', framePoses)
    }

  
    get name () {
      return valGetter(this._address + 16, 'char[32]')
    }
    set name (name) {
      valSetter(this._address + 16, 'char[32]', name)
    }

  }

  // Ray, ray for raycasting
  raylib.Ray = class Ray {
    constructor(position = new Vector3(), direction = new Vector3()) {
      this._size = 24
      this._address = mod._malloc(this._size)
      this.position = position
      this.direction = direction
    }
    
    get position () {
      return valGetter(this._address + 0, 'Vector3')
    }
    set position (position) {
      valSetter(this._address + 0, 'Vector3', position)
    }

  
    get direction () {
      return valGetter(this._address + 12, 'Vector3')
    }
    set direction (direction) {
      valSetter(this._address + 12, 'Vector3', direction)
    }

  }

  // RayCollision, ray hit information
  raylib.RayCollision = class RayCollision {
    constructor(hit = 0, distance = 0, point = new Vector3(), normal = new Vector3()) {
      this._size = 29
      this._address = mod._malloc(this._size)
      this.hit = hit
      this.distance = distance
      this.point = point
      this.normal = normal
    }
    
    get hit () {
      return valGetter(this._address + 0, 'bool')
    }
    set hit (hit) {
      valSetter(this._address + 0, 'bool', hit)
    }

  
    get distance () {
      return valGetter(this._address + 1, 'float')
    }
    set distance (distance) {
      valSetter(this._address + 1, 'float', distance)
    }

  
    get point () {
      return valGetter(this._address + 5, 'Vector3')
    }
    set point (point) {
      valSetter(this._address + 5, 'Vector3', point)
    }

  
    get normal () {
      return valGetter(this._address + 17, 'Vector3')
    }
    set normal (normal) {
      valSetter(this._address + 17, 'Vector3', normal)
    }

  }

  // BoundingBox
  raylib.BoundingBox = class BoundingBox {
    constructor(min = new Vector3(), max = new Vector3()) {
      this._size = 24
      this._address = mod._malloc(this._size)
      this.min = min
      this.max = max
    }
    
    get min () {
      return valGetter(this._address + 0, 'Vector3')
    }
    set min (min) {
      valSetter(this._address + 0, 'Vector3', min)
    }

  
    get max () {
      return valGetter(this._address + 12, 'Vector3')
    }
    set max (max) {
      valSetter(this._address + 12, 'Vector3', max)
    }

  }

  // Wave, audio wave data
  raylib.Wave = class Wave {
    constructor(frameCount = 0, sampleRate = 0, sampleSize = 0, channels = 0, data = 0) {
      this._size = 20
      this._address = mod._malloc(this._size)
      this.frameCount = frameCount
      this.sampleRate = sampleRate
      this.sampleSize = sampleSize
      this.channels = channels
      this.data = data
    }
    
    get frameCount () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set frameCount (frameCount) {
      valSetter(this._address + 0, 'unsigned int', frameCount)
    }

  
    get sampleRate () {
      return valGetter(this._address + 4, 'unsigned int')
    }
    set sampleRate (sampleRate) {
      valSetter(this._address + 4, 'unsigned int', sampleRate)
    }

  
    get sampleSize () {
      return valGetter(this._address + 8, 'unsigned int')
    }
    set sampleSize (sampleSize) {
      valSetter(this._address + 8, 'unsigned int', sampleSize)
    }

  
    get channels () {
      return valGetter(this._address + 12, 'unsigned int')
    }
    set channels (channels) {
      valSetter(this._address + 12, 'unsigned int', channels)
    }

  
    get data () {
      return valGetter(this._address + 16, 'void *')
    }
    set data (data) {
      valSetter(this._address + 16, 'void *', data)
    }

  }

  // AudioStream, custom audio stream
  raylib.AudioStream = class AudioStream {
    constructor(buffer = 0, processor = 0, sampleRate = 0, sampleSize = 0, channels = 0) {
      this._size = 20
      this._address = mod._malloc(this._size)
      this.buffer = buffer
      this.processor = processor
      this.sampleRate = sampleRate
      this.sampleSize = sampleSize
      this.channels = channels
    }
    
    get buffer () {
      return valGetter(this._address + 0, 'rAudioBuffer *')
    }
    set buffer (buffer) {
      valSetter(this._address + 0, 'rAudioBuffer *', buffer)
    }

  
    get processor () {
      return valGetter(this._address + 4, 'rAudioProcessor *')
    }
    set processor (processor) {
      valSetter(this._address + 4, 'rAudioProcessor *', processor)
    }

  
    get sampleRate () {
      return valGetter(this._address + 8, 'unsigned int')
    }
    set sampleRate (sampleRate) {
      valSetter(this._address + 8, 'unsigned int', sampleRate)
    }

  
    get sampleSize () {
      return valGetter(this._address + 12, 'unsigned int')
    }
    set sampleSize (sampleSize) {
      valSetter(this._address + 12, 'unsigned int', sampleSize)
    }

  
    get channels () {
      return valGetter(this._address + 16, 'unsigned int')
    }
    set channels (channels) {
      valSetter(this._address + 16, 'unsigned int', channels)
    }

  }

  // Sound
  raylib.Sound = class Sound {
    constructor(stream = new AudioStream(), frameCount = 0) {
      this._size = 24
      this._address = mod._malloc(this._size)
      this.stream = stream
      this.frameCount = frameCount
    }
    
    get stream () {
      return valGetter(this._address + 0, 'AudioStream')
    }
    set stream (stream) {
      valSetter(this._address + 0, 'AudioStream', stream)
    }

  
    get frameCount () {
      return valGetter(this._address + 20, 'unsigned int')
    }
    set frameCount (frameCount) {
      valSetter(this._address + 20, 'unsigned int', frameCount)
    }

  }

  // Music, audio stream, anything longer than ~10 seconds should be streamed
  raylib.Music = class Music {
    constructor(stream = new AudioStream(), frameCount = 0, looping = 0, ctxType = 0, ctxData = 0) {
      this._size = 33
      this._address = mod._malloc(this._size)
      this.stream = stream
      this.frameCount = frameCount
      this.looping = looping
      this.ctxType = ctxType
      this.ctxData = ctxData
    }
    
    get stream () {
      return valGetter(this._address + 0, 'AudioStream')
    }
    set stream (stream) {
      valSetter(this._address + 0, 'AudioStream', stream)
    }

  
    get frameCount () {
      return valGetter(this._address + 20, 'unsigned int')
    }
    set frameCount (frameCount) {
      valSetter(this._address + 20, 'unsigned int', frameCount)
    }

  
    get looping () {
      return valGetter(this._address + 24, 'bool')
    }
    set looping (looping) {
      valSetter(this._address + 24, 'bool', looping)
    }

  
    get ctxType () {
      return valGetter(this._address + 25, 'int')
    }
    set ctxType (ctxType) {
      valSetter(this._address + 25, 'int', ctxType)
    }

  
    get ctxData () {
      return valGetter(this._address + 29, 'void *')
    }
    set ctxData (ctxData) {
      valSetter(this._address + 29, 'void *', ctxData)
    }

  }

  // VrDeviceInfo, Head-Mounted-Display device parameters
  raylib.VrDeviceInfo = class VrDeviceInfo {
    constructor(hResolution = 0, vResolution = 0, hScreenSize = 0, vScreenSize = 0, vScreenCenter = 0, eyeToScreenDistance = 0, lensSeparationDistance = 0, interpupillaryDistance = 0, lensDistortionValues = [0, 0, 0, 0], chromaAbCorrection = [0, 0, 0, 0]) {
      this._size = 64
      this._address = mod._malloc(this._size)
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
      return valGetter(this._address + 0, 'int')
    }
    set hResolution (hResolution) {
      valSetter(this._address + 0, 'int', hResolution)
    }

  
    get vResolution () {
      return valGetter(this._address + 4, 'int')
    }
    set vResolution (vResolution) {
      valSetter(this._address + 4, 'int', vResolution)
    }

  
    get hScreenSize () {
      return valGetter(this._address + 8, 'float')
    }
    set hScreenSize (hScreenSize) {
      valSetter(this._address + 8, 'float', hScreenSize)
    }

  
    get vScreenSize () {
      return valGetter(this._address + 12, 'float')
    }
    set vScreenSize (vScreenSize) {
      valSetter(this._address + 12, 'float', vScreenSize)
    }

  
    get vScreenCenter () {
      return valGetter(this._address + 16, 'float')
    }
    set vScreenCenter (vScreenCenter) {
      valSetter(this._address + 16, 'float', vScreenCenter)
    }

  
    get eyeToScreenDistance () {
      return valGetter(this._address + 20, 'float')
    }
    set eyeToScreenDistance (eyeToScreenDistance) {
      valSetter(this._address + 20, 'float', eyeToScreenDistance)
    }

  
    get lensSeparationDistance () {
      return valGetter(this._address + 24, 'float')
    }
    set lensSeparationDistance (lensSeparationDistance) {
      valSetter(this._address + 24, 'float', lensSeparationDistance)
    }

  
    get interpupillaryDistance () {
      return valGetter(this._address + 28, 'float')
    }
    set interpupillaryDistance (interpupillaryDistance) {
      valSetter(this._address + 28, 'float', interpupillaryDistance)
    }

  
    get lensDistortionValues () {
      return valGetter(this._address + 32, 'float[4]')
    }
    set lensDistortionValues (lensDistortionValues) {
      valSetter(this._address + 32, 'float[4]', lensDistortionValues)
    }

  
    get chromaAbCorrection () {
      return valGetter(this._address + 48, 'float[4]')
    }
    set chromaAbCorrection (chromaAbCorrection) {
      valSetter(this._address + 48, 'float[4]', chromaAbCorrection)
    }

  }

  // VrStereoConfig, VR stereo rendering configuration for simulator
  raylib.VrStereoConfig = class VrStereoConfig {
    constructor(projection = [new Matrix(), new Matrix()], viewOffset = [new Matrix(), new Matrix()], leftLensCenter = [0, 0], rightLensCenter = [0, 0], leftScreenCenter = [0, 0], rightScreenCenter = [0, 0], scale = [0, 0], scaleIn = [0, 0]) {
      this._size = 304
      this._address = mod._malloc(this._size)
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
      return valGetter(this._address + 0, 'Matrix[2]')
    }
    set projection (projection) {
      valSetter(this._address + 0, 'Matrix[2]', projection)
    }

  
    get viewOffset () {
      return valGetter(this._address + 128, 'Matrix[2]')
    }
    set viewOffset (viewOffset) {
      valSetter(this._address + 128, 'Matrix[2]', viewOffset)
    }

  
    get leftLensCenter () {
      return valGetter(this._address + 256, 'float[2]')
    }
    set leftLensCenter (leftLensCenter) {
      valSetter(this._address + 256, 'float[2]', leftLensCenter)
    }

  
    get rightLensCenter () {
      return valGetter(this._address + 264, 'float[2]')
    }
    set rightLensCenter (rightLensCenter) {
      valSetter(this._address + 264, 'float[2]', rightLensCenter)
    }

  
    get leftScreenCenter () {
      return valGetter(this._address + 272, 'float[2]')
    }
    set leftScreenCenter (leftScreenCenter) {
      valSetter(this._address + 272, 'float[2]', leftScreenCenter)
    }

  
    get rightScreenCenter () {
      return valGetter(this._address + 280, 'float[2]')
    }
    set rightScreenCenter (rightScreenCenter) {
      valSetter(this._address + 280, 'float[2]', rightScreenCenter)
    }

  
    get scale () {
      return valGetter(this._address + 288, 'float[2]')
    }
    set scale (scale) {
      valSetter(this._address + 288, 'float[2]', scale)
    }

  
    get scaleIn () {
      return valGetter(this._address + 296, 'float[2]')
    }
    set scaleIn (scaleIn) {
      valSetter(this._address + 296, 'float[2]', scaleIn)
    }

  }

  // File path list
  raylib.FilePathList = class FilePathList {
    constructor(capacity = 0, count = 0, paths = 0) {
      this._size = 12
      this._address = mod._malloc(this._size)
      this.capacity = capacity
      this.count = count
      this.paths = paths
    }
    
    get capacity () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set capacity (capacity) {
      valSetter(this._address + 0, 'unsigned int', capacity)
    }

  
    get count () {
      return valGetter(this._address + 4, 'unsigned int')
    }
    set count (count) {
      valSetter(this._address + 4, 'unsigned int', count)
    }

  
    get paths () {
      return valGetter(this._address + 8, 'char **')
    }
    set paths (paths) {
      valSetter(this._address + 8, 'char **', paths)
    }

  }

  // Quaternion, 4 components (Vector4 alias)
  raylib.Quaternion = class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 0) {
      this._size = 16
      this._address = mod._malloc(this._size)
      this.x = x
      this.y = y
      this.z = z
      this.w = w
    }
    
    get x () {
      return valGetter(this._address + 0, 'float')
    }
    set x (x) {
      valSetter(this._address + 0, 'float', x)
    }

  
    get y () {
      return valGetter(this._address + 4, 'float')
    }
    set y (y) {
      valSetter(this._address + 4, 'float', y)
    }

  
    get z () {
      return valGetter(this._address + 8, 'float')
    }
    set z (z) {
      valSetter(this._address + 8, 'float', z)
    }

  
    get w () {
      return valGetter(this._address + 12, 'float')
    }
    set w (w) {
      valSetter(this._address + 12, 'float', w)
    }

  }

  // Texture2D, same as Texture
  raylib.Texture2D = class Texture2D {
    constructor(id = 0, width = 0, height = 0, mipmaps = 0, format = 0) {
      this._size = 20
      this._address = mod._malloc(this._size)
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get id () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set id (id) {
      valSetter(this._address + 0, 'unsigned int', id)
    }

  
    get width () {
      return valGetter(this._address + 4, 'int')
    }
    set width (width) {
      valSetter(this._address + 4, 'int', width)
    }

  
    get height () {
      return valGetter(this._address + 8, 'int')
    }
    set height (height) {
      valSetter(this._address + 8, 'int', height)
    }

  
    get mipmaps () {
      return valGetter(this._address + 12, 'int')
    }
    set mipmaps (mipmaps) {
      valSetter(this._address + 12, 'int', mipmaps)
    }

  
    get format () {
      return valGetter(this._address + 16, 'int')
    }
    set format (format) {
      valSetter(this._address + 16, 'int', format)
    }

  }

  // TextureCubemap, same as Texture
  raylib.TextureCubemap = class TextureCubemap {
    constructor(id = 0, width = 0, height = 0, mipmaps = 0, format = 0) {
      this._size = 20
      this._address = mod._malloc(this._size)
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get id () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set id (id) {
      valSetter(this._address + 0, 'unsigned int', id)
    }

  
    get width () {
      return valGetter(this._address + 4, 'int')
    }
    set width (width) {
      valSetter(this._address + 4, 'int', width)
    }

  
    get height () {
      return valGetter(this._address + 8, 'int')
    }
    set height (height) {
      valSetter(this._address + 8, 'int', height)
    }

  
    get mipmaps () {
      return valGetter(this._address + 12, 'int')
    }
    set mipmaps (mipmaps) {
      valSetter(this._address + 12, 'int', mipmaps)
    }

  
    get format () {
      return valGetter(this._address + 16, 'int')
    }
    set format (format) {
      valSetter(this._address + 16, 'int', format)
    }

  }

  // RenderTexture2D, same as RenderTexture
  raylib.RenderTexture2D = class RenderTexture2D {
    constructor(id = 0, texture = new Texture(), depth = new Texture()) {
      this._size = 44
      this._address = mod._malloc(this._size)
      this.id = id
      this.texture = texture
      this.depth = depth
    }
    
    get id () {
      return valGetter(this._address + 0, 'unsigned int')
    }
    set id (id) {
      valSetter(this._address + 0, 'unsigned int', id)
    }

  
    get texture () {
      return valGetter(this._address + 4, 'Texture')
    }
    set texture (texture) {
      valSetter(this._address + 4, 'Texture', texture)
    }

  
    get depth () {
      return valGetter(this._address + 24, 'Texture')
    }
    set depth (depth) {
      valSetter(this._address + 24, 'Texture', depth)
    }

  }

  // Camera type fallback, defaults to Camera3D
  raylib.Camera = class Camera {
    constructor(position = new Vector3(), target = new Vector3(), up = new Vector3(), fovy = 0, projection = 0) {
      this._size = 44
      this._address = mod._malloc(this._size)
      this.position = position
      this.target = target
      this.up = up
      this.fovy = fovy
      this.projection = projection
    }
    
    get position () {
      return valGetter(this._address + 0, 'Vector3')
    }
    set position (position) {
      valSetter(this._address + 0, 'Vector3', position)
    }

  
    get target () {
      return valGetter(this._address + 12, 'Vector3')
    }
    set target (target) {
      valSetter(this._address + 12, 'Vector3', target)
    }

  
    get up () {
      return valGetter(this._address + 24, 'Vector3')
    }
    set up (up) {
      valSetter(this._address + 24, 'Vector3', up)
    }

  
    get fovy () {
      return valGetter(this._address + 36, 'float')
    }
    set fovy (fovy) {
      valSetter(this._address + 36, 'float', fovy)
    }

  
    get projection () {
      return valGetter(this._address + 40, 'int')
    }
    set projection (projection) {
      valSetter(this._address + 40, 'int', projection)
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

  raylib.LIGHTGRAY = new raylib.Color(200, 200, 200, 255) // Light Gray
  raylib.GRAY = new raylib.Color(130, 130, 130, 255) // Gray
  raylib.DARKGRAY = new raylib.Color(80, 80, 80, 255) // Dark Gray
  raylib.YELLOW = new raylib.Color(253, 249, 0, 255) // Yellow
  raylib.GOLD = new raylib.Color(255, 203, 0, 255) // Gold
  raylib.ORANGE = new raylib.Color(255, 161, 0, 255) // Orange
  raylib.PINK = new raylib.Color(255, 109, 194, 255) // Pink
  raylib.RED = new raylib.Color(230, 41, 55, 255) // Red
  raylib.MAROON = new raylib.Color(190, 33, 55, 255) // Maroon
  raylib.GREEN = new raylib.Color(0, 228, 48, 255) // Green
  raylib.LIME = new raylib.Color(0, 158, 47, 255) // Lime
  raylib.DARKGREEN = new raylib.Color(0, 117, 44, 255) // Dark Green
  raylib.SKYBLUE = new raylib.Color(102, 191, 255, 255) // Sky Blue
  raylib.BLUE = new raylib.Color(0, 121, 241, 255) // Blue
  raylib.DARKBLUE = new raylib.Color(0, 82, 172, 255) // Dark Blue
  raylib.PURPLE = new raylib.Color(200, 122, 255, 255) // Purple
  raylib.VIOLET = new raylib.Color(135, 60, 190, 255) // Violet
  raylib.DARKPURPLE = new raylib.Color(112, 31, 126, 255) // Dark Purple
  raylib.BEIGE = new raylib.Color(211, 176, 131, 255) // Beige
  raylib.BROWN = new raylib.Color(127, 106, 79, 255) // Brown
  raylib.DARKBROWN = new raylib.Color(76, 63, 47, 255) // Dark Brown
  raylib.WHITE = new raylib.Color(255, 255, 255, 255) // White
  raylib.BLACK = new raylib.Color(0, 0, 0, 255) // Black
  raylib.BLANK = new raylib.Color(0, 0, 0, 0) // Blank (Transparent)
  raylib.MAGENTA = new raylib.Color(255, 0, 255, 255) // Magenta
  raylib.RAYWHITE = new raylib.Color(245, 245, 245, 255) // My own White (raylib logo)  /* global raylib */
  
  raylib.WasmArray = class WasmArray {
    constructor(size, typeSize, typeSetter, typeGetter, vals = []) {
      this._typeSize = typeSize
      this._arraySize = size
      this._typeSetter = typeSetter
      this._typeGetter = typeGetter
      this._size = size * typeSize
      this._address = mod._malloc(this._size)
      for (const i in vals) {
        this[i] = vals[i]
      }
    }
  
    get (i) {
      if (i < 0 || i > (this._arraySize - 1)) {
        throw new Error(`${i} is out of bounds for [${this._arraySize}]`)
      }
      return this._typeGetter(this._address + (i * this._typeSize))
    }
  
    set (i, v) {
      if (i < 0 || i > (this._arraySize - 1)) {
        throw new Error(`${i} is out of bounds for [${this._arraySize}]`)
      }
      return this._typeSetter(this._address + (i * this._typeSize), v)
    }
  }
  
  raylib.ArrayFloat = class ArrayFloat extends raylib.WasmArray {
    constructor(vals) {
      if (!vals || vals.length === 0) {
        throw new Error('Initial value is required.')
      }
      super(vals.length, 32, f32Setter, f32Getter, vals)
    }
  }
  
  // emscripten type-converters are a bit incomplete. This makes values easier to use
  // TODO: these were added by hand, 1 at atime, should be replaced with 1-off converter utils like f32Setter/f32Getter
  function valGetter(address, type) {
    switch(type) {
      case 'unsigned char': return mod.HEAPU8[address]
      case 'int': return mod.HEAP32[address]
      case 'float': return mod.getValue(address, 'float')
      default:
        console.log('get: Unkown type', type)
        return address
    }
  }
  
  function valSetter(address, type, value) {
    switch(type) {
      case 'unsigned char': return mod.setValue(address, value, 'i8')
      case 'float': return mod.setValue(address, value, 'float')
      default:
        console.log('set: Unkown type', type)
        return address
    }
  }
  
  // insert remote file in WASM filesystem
  raylib.addFile = async filename => {
    mod.FS.writeFile(filename, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }
  
  // TODO: just manually building a few functions here, until I get better codegen setup
  raylib.BeginDrawing = mod._BeginDrawing
  raylib.EndDrawing = mod._EndDrawing
  raylib.DrawFPS = mod._DrawFPS
  raylib.GetRandomValue = mod._GetRandomValue
  raylib.GetScreenWidth = mod._GetScreenWidth
  raylib.GetScreenHeight = mod._GetScreenHeight
  raylib.IsMouseButtonDown = () => !!mod._IsMouseButtonDown()
  raylib.ClearBackground = color => mod._ClearBackground(color._address)
    raylib.GetMousePosition = () => {
    const _ret = new raylib.Vector2(0, 0)
    mod._GetMousePosition(_ret._address)
    return _ret
  }
  raylib.DrawTexture = (texture, x, y, color) => mod._DrawTexture(texture._address, x, y, color._address)
  raylib.DrawRectangle = (x, y, width, height, color) => mod._DrawRectangle(x, y, width, height, color._address)
  raylib.DrawText = (text, x, y, fontSize, color) => {
    let ptr_test = mod.allocateUTF8(text)
    mod._DrawText(ptr_test, x, y, fontSize, color._address)
    mod._free(ptr_test)
  }
  
  // NOTE: these ones actually modify how it works (not just convert/raise/lower types)
  
  // title doesn't really do anyhting, so make it optional
  raylib.InitWindow = (height, width) => mod._InitWindow(height, width, "")
  
  // LoadTexture, but (async) insert the file into fake FS first
  raylib.LoadTexture = async filename => {
    await raylib.addFile(filename)
    let ptr_filename = mod.allocateUTF8(filename)
    const texture = new raylib.Texture()
    mod._LoadTexture(texture._address, ptr_filename)
    mod._free(ptr_filename)
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

