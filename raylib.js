
// TODO: not sure how this looks, but this will be from emscripten and should have the wasm bytes & emscripten-host-stuff inlined
import wasm from './raylib_wasm.js'

// run this function before calling anything
export async function setup(canvas) {
  // TODO: helpers passing values in/out of wasm
  const getStructVal = (address, size, type) => {}
  const setStructVal = (address, size, value) => {}
  const processFunctionInput = (val, type) => {
    switch(type) {
      case 'bool': return val ? 1 : 0
      case 'const char *': return mod.allocateUTF8(val)
      // TODO: lots more
    }
  }
  const processFunctionReturn = (val, type) => {
    switch(type) {
      case 'bool': return !!val
      // TODO: lots more
    }
  }

  // Vector2, 2 components
  iface.Vector2 = class Vector2 {
    constructor(x, y) {
      this.size = 8
      this._address = mod._malloc(this.size)
      this.x = x
      this.y = y
    }
    
    get x () {
      return getStructVal(this._address + 0, 4, 'float')
    }
    set x (x) {
      setStructVal(this._address + 0, 4, x)
    }

  
    get y () {
      return getStructVal(this._address + 4, 4, 'float')
    }
    set y (y) {
      setStructVal(this._address + 4, 4, y)
    }

  }

  // Vector3, 3 components
  iface.Vector3 = class Vector3 {
    constructor(x, y, z) {
      this.size = 12
      this._address = mod._malloc(this.size)
      this.x = x
      this.y = y
      this.z = z
    }
    
    get x () {
      return getStructVal(this._address + 0, 4, 'float')
    }
    set x (x) {
      setStructVal(this._address + 0, 4, x)
    }

  
    get y () {
      return getStructVal(this._address + 4, 4, 'float')
    }
    set y (y) {
      setStructVal(this._address + 4, 4, y)
    }

  
    get z () {
      return getStructVal(this._address + 8, 4, 'float')
    }
    set z (z) {
      setStructVal(this._address + 8, 4, z)
    }

  }

  // Vector4, 4 components
  iface.Vector4 = class Vector4 {
    constructor(x, y, z, w) {
      this.size = 16
      this._address = mod._malloc(this.size)
      this.x = x
      this.y = y
      this.z = z
      this.w = w
    }
    
    get x () {
      return getStructVal(this._address + 0, 4, 'float')
    }
    set x (x) {
      setStructVal(this._address + 0, 4, x)
    }

  
    get y () {
      return getStructVal(this._address + 4, 4, 'float')
    }
    set y (y) {
      setStructVal(this._address + 4, 4, y)
    }

  
    get z () {
      return getStructVal(this._address + 8, 4, 'float')
    }
    set z (z) {
      setStructVal(this._address + 8, 4, z)
    }

  
    get w () {
      return getStructVal(this._address + 12, 4, 'float')
    }
    set w (w) {
      setStructVal(this._address + 12, 4, w)
    }

  }

  // Matrix, 4x4 components, column major, OpenGL style, right-handed
  iface.Matrix = class Matrix {
    constructor(m0, m4, m8, m12, m1, m5, m9, m13, m2, m6, m10, m14, m3, m7, m11, m15) {
      this.size = 64
      this._address = mod._malloc(this.size)
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
      return getStructVal(this._address + 0, 4, 'float')
    }
    set m0 (m0) {
      setStructVal(this._address + 0, 4, m0)
    }

  
    get m4 () {
      return getStructVal(this._address + 4, 4, 'float')
    }
    set m4 (m4) {
      setStructVal(this._address + 4, 4, m4)
    }

  
    get m8 () {
      return getStructVal(this._address + 8, 4, 'float')
    }
    set m8 (m8) {
      setStructVal(this._address + 8, 4, m8)
    }

  
    get m12 () {
      return getStructVal(this._address + 12, 4, 'float')
    }
    set m12 (m12) {
      setStructVal(this._address + 12, 4, m12)
    }

  
    get m1 () {
      return getStructVal(this._address + 16, 4, 'float')
    }
    set m1 (m1) {
      setStructVal(this._address + 16, 4, m1)
    }

  
    get m5 () {
      return getStructVal(this._address + 20, 4, 'float')
    }
    set m5 (m5) {
      setStructVal(this._address + 20, 4, m5)
    }

  
    get m9 () {
      return getStructVal(this._address + 24, 4, 'float')
    }
    set m9 (m9) {
      setStructVal(this._address + 24, 4, m9)
    }

  
    get m13 () {
      return getStructVal(this._address + 28, 4, 'float')
    }
    set m13 (m13) {
      setStructVal(this._address + 28, 4, m13)
    }

  
    get m2 () {
      return getStructVal(this._address + 32, 4, 'float')
    }
    set m2 (m2) {
      setStructVal(this._address + 32, 4, m2)
    }

  
    get m6 () {
      return getStructVal(this._address + 36, 4, 'float')
    }
    set m6 (m6) {
      setStructVal(this._address + 36, 4, m6)
    }

  
    get m10 () {
      return getStructVal(this._address + 40, 4, 'float')
    }
    set m10 (m10) {
      setStructVal(this._address + 40, 4, m10)
    }

  
    get m14 () {
      return getStructVal(this._address + 44, 4, 'float')
    }
    set m14 (m14) {
      setStructVal(this._address + 44, 4, m14)
    }

  
    get m3 () {
      return getStructVal(this._address + 48, 4, 'float')
    }
    set m3 (m3) {
      setStructVal(this._address + 48, 4, m3)
    }

  
    get m7 () {
      return getStructVal(this._address + 52, 4, 'float')
    }
    set m7 (m7) {
      setStructVal(this._address + 52, 4, m7)
    }

  
    get m11 () {
      return getStructVal(this._address + 56, 4, 'float')
    }
    set m11 (m11) {
      setStructVal(this._address + 56, 4, m11)
    }

  
    get m15 () {
      return getStructVal(this._address + 60, 4, 'float')
    }
    set m15 (m15) {
      setStructVal(this._address + 60, 4, m15)
    }

  }

  // Color, 4 components, R8G8B8A8 (32bit)
  iface.Color = class Color {
    constructor(r, g, b, a) {
      this.size = 4
      this._address = mod._malloc(this.size)
      this.r = r
      this.g = g
      this.b = b
      this.a = a
    }
    
    get r () {
      return getStructVal(this._address + 0, 1, 'unsigned char')
    }
    set r (r) {
      setStructVal(this._address + 0, 1, r)
    }

  
    get g () {
      return getStructVal(this._address + 1, 1, 'unsigned char')
    }
    set g (g) {
      setStructVal(this._address + 1, 1, g)
    }

  
    get b () {
      return getStructVal(this._address + 2, 1, 'unsigned char')
    }
    set b (b) {
      setStructVal(this._address + 2, 1, b)
    }

  
    get a () {
      return getStructVal(this._address + 3, 1, 'unsigned char')
    }
    set a (a) {
      setStructVal(this._address + 3, 1, a)
    }

  }

  // Rectangle, 4 components
  iface.Rectangle = class Rectangle {
    constructor(x, y, width, height) {
      this.size = 16
      this._address = mod._malloc(this.size)
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
    
    get x () {
      return getStructVal(this._address + 0, 4, 'float')
    }
    set x (x) {
      setStructVal(this._address + 0, 4, x)
    }

  
    get y () {
      return getStructVal(this._address + 4, 4, 'float')
    }
    set y (y) {
      setStructVal(this._address + 4, 4, y)
    }

  
    get width () {
      return getStructVal(this._address + 8, 4, 'float')
    }
    set width (width) {
      setStructVal(this._address + 8, 4, width)
    }

  
    get height () {
      return getStructVal(this._address + 12, 4, 'float')
    }
    set height (height) {
      setStructVal(this._address + 12, 4, height)
    }

  }

  // Image, pixel data stored in CPU memory (RAM)
  iface.Image = class Image {
    constructor(data, width, height, mipmaps, format) {
      this.size = 20
      this._address = mod._malloc(this.size)
      this.data = data
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get data () {
      return getStructVal(this._address + 0, 4, 'void *')
    }
    set data (data) {
      setStructVal(this._address + 0, 4, data)
    }

  
    get width () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set width (width) {
      setStructVal(this._address + 4, 4, width)
    }

  
    get height () {
      return getStructVal(this._address + 8, 4, 'int')
    }
    set height (height) {
      setStructVal(this._address + 8, 4, height)
    }

  
    get mipmaps () {
      return getStructVal(this._address + 12, 4, 'int')
    }
    set mipmaps (mipmaps) {
      setStructVal(this._address + 12, 4, mipmaps)
    }

  
    get format () {
      return getStructVal(this._address + 16, 4, 'int')
    }
    set format (format) {
      setStructVal(this._address + 16, 4, format)
    }

  }

  // Texture, tex data stored in GPU memory (VRAM)
  iface.Texture = class Texture {
    constructor(id, width, height, mipmaps, format) {
      this.size = 20
      this._address = mod._malloc(this.size)
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get id () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set id (id) {
      setStructVal(this._address + 0, 4, id)
    }

  
    get width () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set width (width) {
      setStructVal(this._address + 4, 4, width)
    }

  
    get height () {
      return getStructVal(this._address + 8, 4, 'int')
    }
    set height (height) {
      setStructVal(this._address + 8, 4, height)
    }

  
    get mipmaps () {
      return getStructVal(this._address + 12, 4, 'int')
    }
    set mipmaps (mipmaps) {
      setStructVal(this._address + 12, 4, mipmaps)
    }

  
    get format () {
      return getStructVal(this._address + 16, 4, 'int')
    }
    set format (format) {
      setStructVal(this._address + 16, 4, format)
    }

  }

  // RenderTexture, fbo for texture rendering
  iface.RenderTexture = class RenderTexture {
    constructor(id, texture, depth) {
      this.size = 44
      this._address = mod._malloc(this.size)
      this.id = id
      this.texture = texture
      this.depth = depth
    }
    
    get id () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set id (id) {
      setStructVal(this._address + 0, 4, id)
    }

  
    get texture () {
      return getStructVal(this._address + 4, 20, 'Texture')
    }
    set texture (texture) {
      setStructVal(this._address + 4, 20, texture)
    }

  
    get depth () {
      return getStructVal(this._address + 24, 20, 'Texture')
    }
    set depth (depth) {
      setStructVal(this._address + 24, 20, depth)
    }

  }

  // NPatchInfo, n-patch layout info
  iface.NPatchInfo = class NPatchInfo {
    constructor(source, left, top, right, bottom, layout) {
      this.size = 36
      this._address = mod._malloc(this.size)
      this.source = source
      this.left = left
      this.top = top
      this.right = right
      this.bottom = bottom
      this.layout = layout
    }
    
    get source () {
      return getStructVal(this._address + 0, 16, 'Rectangle')
    }
    set source (source) {
      setStructVal(this._address + 0, 16, source)
    }

  
    get left () {
      return getStructVal(this._address + 16, 4, 'int')
    }
    set left (left) {
      setStructVal(this._address + 16, 4, left)
    }

  
    get top () {
      return getStructVal(this._address + 20, 4, 'int')
    }
    set top (top) {
      setStructVal(this._address + 20, 4, top)
    }

  
    get right () {
      return getStructVal(this._address + 24, 4, 'int')
    }
    set right (right) {
      setStructVal(this._address + 24, 4, right)
    }

  
    get bottom () {
      return getStructVal(this._address + 28, 4, 'int')
    }
    set bottom (bottom) {
      setStructVal(this._address + 28, 4, bottom)
    }

  
    get layout () {
      return getStructVal(this._address + 32, 4, 'int')
    }
    set layout (layout) {
      setStructVal(this._address + 32, 4, layout)
    }

  }

  // GlyphInfo, font characters glyphs info
  iface.GlyphInfo = class GlyphInfo {
    constructor(value, offsetX, offsetY, advanceX, image) {
      this.size = 36
      this._address = mod._malloc(this.size)
      this.value = value
      this.offsetX = offsetX
      this.offsetY = offsetY
      this.advanceX = advanceX
      this.image = image
    }
    
    get value () {
      return getStructVal(this._address + 0, 4, 'int')
    }
    set value (value) {
      setStructVal(this._address + 0, 4, value)
    }

  
    get offsetX () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set offsetX (offsetX) {
      setStructVal(this._address + 4, 4, offsetX)
    }

  
    get offsetY () {
      return getStructVal(this._address + 8, 4, 'int')
    }
    set offsetY (offsetY) {
      setStructVal(this._address + 8, 4, offsetY)
    }

  
    get advanceX () {
      return getStructVal(this._address + 12, 4, 'int')
    }
    set advanceX (advanceX) {
      setStructVal(this._address + 12, 4, advanceX)
    }

  
    get image () {
      return getStructVal(this._address + 16, 20, 'Image')
    }
    set image (image) {
      setStructVal(this._address + 16, 20, image)
    }

  }

  // Font, font texture and GlyphInfo array data
  iface.Font = class Font {
    constructor(baseSize, glyphCount, glyphPadding, texture, recs, glyphs) {
      this.size = 40
      this._address = mod._malloc(this.size)
      this.baseSize = baseSize
      this.glyphCount = glyphCount
      this.glyphPadding = glyphPadding
      this.texture = texture
      this.recs = recs
      this.glyphs = glyphs
    }
    
    get baseSize () {
      return getStructVal(this._address + 0, 4, 'int')
    }
    set baseSize (baseSize) {
      setStructVal(this._address + 0, 4, baseSize)
    }

  
    get glyphCount () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set glyphCount (glyphCount) {
      setStructVal(this._address + 4, 4, glyphCount)
    }

  
    get glyphPadding () {
      return getStructVal(this._address + 8, 4, 'int')
    }
    set glyphPadding (glyphPadding) {
      setStructVal(this._address + 8, 4, glyphPadding)
    }

  
    get texture () {
      return getStructVal(this._address + 12, 20, 'Texture2D')
    }
    set texture (texture) {
      setStructVal(this._address + 12, 20, texture)
    }

  
    get recs () {
      return getStructVal(this._address + 32, 4, 'Rectangle *')
    }
    set recs (recs) {
      setStructVal(this._address + 32, 4, recs)
    }

  
    get glyphs () {
      return getStructVal(this._address + 36, 4, 'GlyphInfo *')
    }
    set glyphs (glyphs) {
      setStructVal(this._address + 36, 4, glyphs)
    }

  }

  // Camera, defines position/orientation in 3d space
  iface.Camera3D = class Camera3D {
    constructor(position, target, up, fovy, projection) {
      this.size = 44
      this._address = mod._malloc(this.size)
      this.position = position
      this.target = target
      this.up = up
      this.fovy = fovy
      this.projection = projection
    }
    
    get position () {
      return getStructVal(this._address + 0, 12, 'Vector3')
    }
    set position (position) {
      setStructVal(this._address + 0, 12, position)
    }

  
    get target () {
      return getStructVal(this._address + 12, 12, 'Vector3')
    }
    set target (target) {
      setStructVal(this._address + 12, 12, target)
    }

  
    get up () {
      return getStructVal(this._address + 24, 12, 'Vector3')
    }
    set up (up) {
      setStructVal(this._address + 24, 12, up)
    }

  
    get fovy () {
      return getStructVal(this._address + 36, 4, 'float')
    }
    set fovy (fovy) {
      setStructVal(this._address + 36, 4, fovy)
    }

  
    get projection () {
      return getStructVal(this._address + 40, 4, 'int')
    }
    set projection (projection) {
      setStructVal(this._address + 40, 4, projection)
    }

  }

  // Camera2D, defines position/orientation in 2d space
  iface.Camera2D = class Camera2D {
    constructor(offset, target, rotation, zoom) {
      this.size = 24
      this._address = mod._malloc(this.size)
      this.offset = offset
      this.target = target
      this.rotation = rotation
      this.zoom = zoom
    }
    
    get offset () {
      return getStructVal(this._address + 0, 8, 'Vector2')
    }
    set offset (offset) {
      setStructVal(this._address + 0, 8, offset)
    }

  
    get target () {
      return getStructVal(this._address + 8, 8, 'Vector2')
    }
    set target (target) {
      setStructVal(this._address + 8, 8, target)
    }

  
    get rotation () {
      return getStructVal(this._address + 16, 4, 'float')
    }
    set rotation (rotation) {
      setStructVal(this._address + 16, 4, rotation)
    }

  
    get zoom () {
      return getStructVal(this._address + 20, 4, 'float')
    }
    set zoom (zoom) {
      setStructVal(this._address + 20, 4, zoom)
    }

  }

  // Mesh, vertex data and vao/vbo
  iface.Mesh = class Mesh {
    constructor(vertexCount, triangleCount, vertices, texcoords, texcoords2, normals, tangents, colors, indices, animVertices, animNormals, boneIds, boneWeights, vaoId, vboId) {
      this.size = 60
      this._address = mod._malloc(this.size)
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
      return getStructVal(this._address + 0, 4, 'int')
    }
    set vertexCount (vertexCount) {
      setStructVal(this._address + 0, 4, vertexCount)
    }

  
    get triangleCount () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set triangleCount (triangleCount) {
      setStructVal(this._address + 4, 4, triangleCount)
    }

  
    get vertices () {
      return getStructVal(this._address + 8, 4, 'float *')
    }
    set vertices (vertices) {
      setStructVal(this._address + 8, 4, vertices)
    }

  
    get texcoords () {
      return getStructVal(this._address + 12, 4, 'float *')
    }
    set texcoords (texcoords) {
      setStructVal(this._address + 12, 4, texcoords)
    }

  
    get texcoords2 () {
      return getStructVal(this._address + 16, 4, 'float *')
    }
    set texcoords2 (texcoords2) {
      setStructVal(this._address + 16, 4, texcoords2)
    }

  
    get normals () {
      return getStructVal(this._address + 20, 4, 'float *')
    }
    set normals (normals) {
      setStructVal(this._address + 20, 4, normals)
    }

  
    get tangents () {
      return getStructVal(this._address + 24, 4, 'float *')
    }
    set tangents (tangents) {
      setStructVal(this._address + 24, 4, tangents)
    }

  
    get colors () {
      return getStructVal(this._address + 28, 4, 'unsigned char *')
    }
    set colors (colors) {
      setStructVal(this._address + 28, 4, colors)
    }

  
    get indices () {
      return getStructVal(this._address + 32, 4, 'unsigned short *')
    }
    set indices (indices) {
      setStructVal(this._address + 32, 4, indices)
    }

  
    get animVertices () {
      return getStructVal(this._address + 36, 4, 'float *')
    }
    set animVertices (animVertices) {
      setStructVal(this._address + 36, 4, animVertices)
    }

  
    get animNormals () {
      return getStructVal(this._address + 40, 4, 'float *')
    }
    set animNormals (animNormals) {
      setStructVal(this._address + 40, 4, animNormals)
    }

  
    get boneIds () {
      return getStructVal(this._address + 44, 4, 'unsigned char *')
    }
    set boneIds (boneIds) {
      setStructVal(this._address + 44, 4, boneIds)
    }

  
    get boneWeights () {
      return getStructVal(this._address + 48, 4, 'float *')
    }
    set boneWeights (boneWeights) {
      setStructVal(this._address + 48, 4, boneWeights)
    }

  
    get vaoId () {
      return getStructVal(this._address + 52, 4, 'unsigned int')
    }
    set vaoId (vaoId) {
      setStructVal(this._address + 52, 4, vaoId)
    }

  
    get vboId () {
      return getStructVal(this._address + 56, 4, 'unsigned int *')
    }
    set vboId (vboId) {
      setStructVal(this._address + 56, 4, vboId)
    }

  }

  // Shader
  iface.Shader = class Shader {
    constructor(id, locs) {
      this.size = 8
      this._address = mod._malloc(this.size)
      this.id = id
      this.locs = locs
    }
    
    get id () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set id (id) {
      setStructVal(this._address + 0, 4, id)
    }

  
    get locs () {
      return getStructVal(this._address + 4, 4, 'int *')
    }
    set locs (locs) {
      setStructVal(this._address + 4, 4, locs)
    }

  }

  // MaterialMap
  iface.MaterialMap = class MaterialMap {
    constructor(texture, color, value) {
      this.size = 28
      this._address = mod._malloc(this.size)
      this.texture = texture
      this.color = color
      this.value = value
    }
    
    get texture () {
      return getStructVal(this._address + 0, 20, 'Texture2D')
    }
    set texture (texture) {
      setStructVal(this._address + 0, 20, texture)
    }

  
    get color () {
      return getStructVal(this._address + 20, 4, 'Color')
    }
    set color (color) {
      setStructVal(this._address + 20, 4, color)
    }

  
    get value () {
      return getStructVal(this._address + 24, 4, 'float')
    }
    set value (value) {
      setStructVal(this._address + 24, 4, value)
    }

  }

  // Material, includes shader and maps
  iface.Material = class Material {
    constructor(shader, maps, params) {
      this.size = 28
      this._address = mod._malloc(this.size)
      this.shader = shader
      this.maps = maps
      this.params = params
    }
    
    get shader () {
      return getStructVal(this._address + 0, 8, 'Shader')
    }
    set shader (shader) {
      setStructVal(this._address + 0, 8, shader)
    }

  
    get maps () {
      return getStructVal(this._address + 8, 4, 'MaterialMap *')
    }
    set maps (maps) {
      setStructVal(this._address + 8, 4, maps)
    }

  
    get params () {
      return getStructVal(this._address + 12, 16, 'float[4]')
    }
    set params (params) {
      setStructVal(this._address + 12, 16, params)
    }

  }

  // Transform, vertex transformation data
  iface.Transform = class Transform {
    constructor(translation, rotation, scale) {
      this.size = 40
      this._address = mod._malloc(this.size)
      this.translation = translation
      this.rotation = rotation
      this.scale = scale
    }
    
    get translation () {
      return getStructVal(this._address + 0, 12, 'Vector3')
    }
    set translation (translation) {
      setStructVal(this._address + 0, 12, translation)
    }

  
    get rotation () {
      return getStructVal(this._address + 12, 16, 'Quaternion')
    }
    set rotation (rotation) {
      setStructVal(this._address + 12, 16, rotation)
    }

  
    get scale () {
      return getStructVal(this._address + 28, 12, 'Vector3')
    }
    set scale (scale) {
      setStructVal(this._address + 28, 12, scale)
    }

  }

  // Bone, skeletal animation bone
  iface.BoneInfo = class BoneInfo {
    constructor(name, parent) {
      this.size = 36
      this._address = mod._malloc(this.size)
      this.name = name
      this.parent = parent
    }
    
    get name () {
      return getStructVal(this._address + 0, 32, 'char[32]')
    }
    set name (name) {
      setStructVal(this._address + 0, 32, name)
    }

  
    get parent () {
      return getStructVal(this._address + 32, 4, 'int')
    }
    set parent (parent) {
      setStructVal(this._address + 32, 4, parent)
    }

  }

  // Model, meshes, materials and animation data
  iface.Model = class Model {
    constructor(transform, meshCount, materialCount, meshes, materials, meshMaterial, boneCount, bones, bindPose) {
      this.size = 96
      this._address = mod._malloc(this.size)
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
      return getStructVal(this._address + 0, 64, 'Matrix')
    }
    set transform (transform) {
      setStructVal(this._address + 0, 64, transform)
    }

  
    get meshCount () {
      return getStructVal(this._address + 64, 4, 'int')
    }
    set meshCount (meshCount) {
      setStructVal(this._address + 64, 4, meshCount)
    }

  
    get materialCount () {
      return getStructVal(this._address + 68, 4, 'int')
    }
    set materialCount (materialCount) {
      setStructVal(this._address + 68, 4, materialCount)
    }

  
    get meshes () {
      return getStructVal(this._address + 72, 4, 'Mesh *')
    }
    set meshes (meshes) {
      setStructVal(this._address + 72, 4, meshes)
    }

  
    get materials () {
      return getStructVal(this._address + 76, 4, 'Material *')
    }
    set materials (materials) {
      setStructVal(this._address + 76, 4, materials)
    }

  
    get meshMaterial () {
      return getStructVal(this._address + 80, 4, 'int *')
    }
    set meshMaterial (meshMaterial) {
      setStructVal(this._address + 80, 4, meshMaterial)
    }

  
    get boneCount () {
      return getStructVal(this._address + 84, 4, 'int')
    }
    set boneCount (boneCount) {
      setStructVal(this._address + 84, 4, boneCount)
    }

  
    get bones () {
      return getStructVal(this._address + 88, 4, 'BoneInfo *')
    }
    set bones (bones) {
      setStructVal(this._address + 88, 4, bones)
    }

  
    get bindPose () {
      return getStructVal(this._address + 92, 4, 'Transform *')
    }
    set bindPose (bindPose) {
      setStructVal(this._address + 92, 4, bindPose)
    }

  }

  // ModelAnimation
  iface.ModelAnimation = class ModelAnimation {
    constructor(boneCount, frameCount, bones, framePoses, name) {
      this.size = 48
      this._address = mod._malloc(this.size)
      this.boneCount = boneCount
      this.frameCount = frameCount
      this.bones = bones
      this.framePoses = framePoses
      this.name = name
    }
    
    get boneCount () {
      return getStructVal(this._address + 0, 4, 'int')
    }
    set boneCount (boneCount) {
      setStructVal(this._address + 0, 4, boneCount)
    }

  
    get frameCount () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set frameCount (frameCount) {
      setStructVal(this._address + 4, 4, frameCount)
    }

  
    get bones () {
      return getStructVal(this._address + 8, 4, 'BoneInfo *')
    }
    set bones (bones) {
      setStructVal(this._address + 8, 4, bones)
    }

  
    get framePoses () {
      return getStructVal(this._address + 12, 4, 'Transform **')
    }
    set framePoses (framePoses) {
      setStructVal(this._address + 12, 4, framePoses)
    }

  
    get name () {
      return getStructVal(this._address + 16, 32, 'char[32]')
    }
    set name (name) {
      setStructVal(this._address + 16, 32, name)
    }

  }

  // Ray, ray for raycasting
  iface.Ray = class Ray {
    constructor(position, direction) {
      this.size = 24
      this._address = mod._malloc(this.size)
      this.position = position
      this.direction = direction
    }
    
    get position () {
      return getStructVal(this._address + 0, 12, 'Vector3')
    }
    set position (position) {
      setStructVal(this._address + 0, 12, position)
    }

  
    get direction () {
      return getStructVal(this._address + 12, 12, 'Vector3')
    }
    set direction (direction) {
      setStructVal(this._address + 12, 12, direction)
    }

  }

  // RayCollision, ray hit information
  iface.RayCollision = class RayCollision {
    constructor(hit, distance, point, normal) {
      this.size = 29
      this._address = mod._malloc(this.size)
      this.hit = hit
      this.distance = distance
      this.point = point
      this.normal = normal
    }
    
    get hit () {
      return getStructVal(this._address + 0, 1, 'bool')
    }
    set hit (hit) {
      setStructVal(this._address + 0, 1, hit)
    }

  
    get distance () {
      return getStructVal(this._address + 1, 4, 'float')
    }
    set distance (distance) {
      setStructVal(this._address + 1, 4, distance)
    }

  
    get point () {
      return getStructVal(this._address + 5, 12, 'Vector3')
    }
    set point (point) {
      setStructVal(this._address + 5, 12, point)
    }

  
    get normal () {
      return getStructVal(this._address + 17, 12, 'Vector3')
    }
    set normal (normal) {
      setStructVal(this._address + 17, 12, normal)
    }

  }

  // BoundingBox
  iface.BoundingBox = class BoundingBox {
    constructor(min, max) {
      this.size = 24
      this._address = mod._malloc(this.size)
      this.min = min
      this.max = max
    }
    
    get min () {
      return getStructVal(this._address + 0, 12, 'Vector3')
    }
    set min (min) {
      setStructVal(this._address + 0, 12, min)
    }

  
    get max () {
      return getStructVal(this._address + 12, 12, 'Vector3')
    }
    set max (max) {
      setStructVal(this._address + 12, 12, max)
    }

  }

  // Wave, audio wave data
  iface.Wave = class Wave {
    constructor(frameCount, sampleRate, sampleSize, channels, data) {
      this.size = 20
      this._address = mod._malloc(this.size)
      this.frameCount = frameCount
      this.sampleRate = sampleRate
      this.sampleSize = sampleSize
      this.channels = channels
      this.data = data
    }
    
    get frameCount () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set frameCount (frameCount) {
      setStructVal(this._address + 0, 4, frameCount)
    }

  
    get sampleRate () {
      return getStructVal(this._address + 4, 4, 'unsigned int')
    }
    set sampleRate (sampleRate) {
      setStructVal(this._address + 4, 4, sampleRate)
    }

  
    get sampleSize () {
      return getStructVal(this._address + 8, 4, 'unsigned int')
    }
    set sampleSize (sampleSize) {
      setStructVal(this._address + 8, 4, sampleSize)
    }

  
    get channels () {
      return getStructVal(this._address + 12, 4, 'unsigned int')
    }
    set channels (channels) {
      setStructVal(this._address + 12, 4, channels)
    }

  
    get data () {
      return getStructVal(this._address + 16, 4, 'void *')
    }
    set data (data) {
      setStructVal(this._address + 16, 4, data)
    }

  }

  // AudioStream, custom audio stream
  iface.AudioStream = class AudioStream {
    constructor(buffer, processor, sampleRate, sampleSize, channels) {
      this.size = 20
      this._address = mod._malloc(this.size)
      this.buffer = buffer
      this.processor = processor
      this.sampleRate = sampleRate
      this.sampleSize = sampleSize
      this.channels = channels
    }
    
    get buffer () {
      return getStructVal(this._address + 0, 4, 'rAudioBuffer *')
    }
    set buffer (buffer) {
      setStructVal(this._address + 0, 4, buffer)
    }

  
    get processor () {
      return getStructVal(this._address + 4, 4, 'rAudioProcessor *')
    }
    set processor (processor) {
      setStructVal(this._address + 4, 4, processor)
    }

  
    get sampleRate () {
      return getStructVal(this._address + 8, 4, 'unsigned int')
    }
    set sampleRate (sampleRate) {
      setStructVal(this._address + 8, 4, sampleRate)
    }

  
    get sampleSize () {
      return getStructVal(this._address + 12, 4, 'unsigned int')
    }
    set sampleSize (sampleSize) {
      setStructVal(this._address + 12, 4, sampleSize)
    }

  
    get channels () {
      return getStructVal(this._address + 16, 4, 'unsigned int')
    }
    set channels (channels) {
      setStructVal(this._address + 16, 4, channels)
    }

  }

  // Sound
  iface.Sound = class Sound {
    constructor(stream, frameCount) {
      this.size = 24
      this._address = mod._malloc(this.size)
      this.stream = stream
      this.frameCount = frameCount
    }
    
    get stream () {
      return getStructVal(this._address + 0, 20, 'AudioStream')
    }
    set stream (stream) {
      setStructVal(this._address + 0, 20, stream)
    }

  
    get frameCount () {
      return getStructVal(this._address + 20, 4, 'unsigned int')
    }
    set frameCount (frameCount) {
      setStructVal(this._address + 20, 4, frameCount)
    }

  }

  // Music, audio stream, anything longer than ~10 seconds should be streamed
  iface.Music = class Music {
    constructor(stream, frameCount, looping, ctxType, ctxData) {
      this.size = 33
      this._address = mod._malloc(this.size)
      this.stream = stream
      this.frameCount = frameCount
      this.looping = looping
      this.ctxType = ctxType
      this.ctxData = ctxData
    }
    
    get stream () {
      return getStructVal(this._address + 0, 20, 'AudioStream')
    }
    set stream (stream) {
      setStructVal(this._address + 0, 20, stream)
    }

  
    get frameCount () {
      return getStructVal(this._address + 20, 4, 'unsigned int')
    }
    set frameCount (frameCount) {
      setStructVal(this._address + 20, 4, frameCount)
    }

  
    get looping () {
      return getStructVal(this._address + 24, 1, 'bool')
    }
    set looping (looping) {
      setStructVal(this._address + 24, 1, looping)
    }

  
    get ctxType () {
      return getStructVal(this._address + 25, 4, 'int')
    }
    set ctxType (ctxType) {
      setStructVal(this._address + 25, 4, ctxType)
    }

  
    get ctxData () {
      return getStructVal(this._address + 29, 4, 'void *')
    }
    set ctxData (ctxData) {
      setStructVal(this._address + 29, 4, ctxData)
    }

  }

  // VrDeviceInfo, Head-Mounted-Display device parameters
  iface.VrDeviceInfo = class VrDeviceInfo {
    constructor(hResolution, vResolution, hScreenSize, vScreenSize, vScreenCenter, eyeToScreenDistance, lensSeparationDistance, interpupillaryDistance, lensDistortionValues, chromaAbCorrection) {
      this.size = 64
      this._address = mod._malloc(this.size)
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
      return getStructVal(this._address + 0, 4, 'int')
    }
    set hResolution (hResolution) {
      setStructVal(this._address + 0, 4, hResolution)
    }

  
    get vResolution () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set vResolution (vResolution) {
      setStructVal(this._address + 4, 4, vResolution)
    }

  
    get hScreenSize () {
      return getStructVal(this._address + 8, 4, 'float')
    }
    set hScreenSize (hScreenSize) {
      setStructVal(this._address + 8, 4, hScreenSize)
    }

  
    get vScreenSize () {
      return getStructVal(this._address + 12, 4, 'float')
    }
    set vScreenSize (vScreenSize) {
      setStructVal(this._address + 12, 4, vScreenSize)
    }

  
    get vScreenCenter () {
      return getStructVal(this._address + 16, 4, 'float')
    }
    set vScreenCenter (vScreenCenter) {
      setStructVal(this._address + 16, 4, vScreenCenter)
    }

  
    get eyeToScreenDistance () {
      return getStructVal(this._address + 20, 4, 'float')
    }
    set eyeToScreenDistance (eyeToScreenDistance) {
      setStructVal(this._address + 20, 4, eyeToScreenDistance)
    }

  
    get lensSeparationDistance () {
      return getStructVal(this._address + 24, 4, 'float')
    }
    set lensSeparationDistance (lensSeparationDistance) {
      setStructVal(this._address + 24, 4, lensSeparationDistance)
    }

  
    get interpupillaryDistance () {
      return getStructVal(this._address + 28, 4, 'float')
    }
    set interpupillaryDistance (interpupillaryDistance) {
      setStructVal(this._address + 28, 4, interpupillaryDistance)
    }

  
    get lensDistortionValues () {
      return getStructVal(this._address + 32, 16, 'float[4]')
    }
    set lensDistortionValues (lensDistortionValues) {
      setStructVal(this._address + 32, 16, lensDistortionValues)
    }

  
    get chromaAbCorrection () {
      return getStructVal(this._address + 48, 16, 'float[4]')
    }
    set chromaAbCorrection (chromaAbCorrection) {
      setStructVal(this._address + 48, 16, chromaAbCorrection)
    }

  }

  // VrStereoConfig, VR stereo rendering configuration for simulator
  iface.VrStereoConfig = class VrStereoConfig {
    constructor(projection, viewOffset, leftLensCenter, rightLensCenter, leftScreenCenter, rightScreenCenter, scale, scaleIn) {
      this.size = 304
      this._address = mod._malloc(this.size)
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
      return getStructVal(this._address + 0, 128, 'Matrix[2]')
    }
    set projection (projection) {
      setStructVal(this._address + 0, 128, projection)
    }

  
    get viewOffset () {
      return getStructVal(this._address + 128, 128, 'Matrix[2]')
    }
    set viewOffset (viewOffset) {
      setStructVal(this._address + 128, 128, viewOffset)
    }

  
    get leftLensCenter () {
      return getStructVal(this._address + 256, 8, 'float[2]')
    }
    set leftLensCenter (leftLensCenter) {
      setStructVal(this._address + 256, 8, leftLensCenter)
    }

  
    get rightLensCenter () {
      return getStructVal(this._address + 264, 8, 'float[2]')
    }
    set rightLensCenter (rightLensCenter) {
      setStructVal(this._address + 264, 8, rightLensCenter)
    }

  
    get leftScreenCenter () {
      return getStructVal(this._address + 272, 8, 'float[2]')
    }
    set leftScreenCenter (leftScreenCenter) {
      setStructVal(this._address + 272, 8, leftScreenCenter)
    }

  
    get rightScreenCenter () {
      return getStructVal(this._address + 280, 8, 'float[2]')
    }
    set rightScreenCenter (rightScreenCenter) {
      setStructVal(this._address + 280, 8, rightScreenCenter)
    }

  
    get scale () {
      return getStructVal(this._address + 288, 8, 'float[2]')
    }
    set scale (scale) {
      setStructVal(this._address + 288, 8, scale)
    }

  
    get scaleIn () {
      return getStructVal(this._address + 296, 8, 'float[2]')
    }
    set scaleIn (scaleIn) {
      setStructVal(this._address + 296, 8, scaleIn)
    }

  }

  // File path list
  iface.FilePathList = class FilePathList {
    constructor(capacity, count, paths) {
      this.size = 12
      this._address = mod._malloc(this.size)
      this.capacity = capacity
      this.count = count
      this.paths = paths
    }
    
    get capacity () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set capacity (capacity) {
      setStructVal(this._address + 0, 4, capacity)
    }

  
    get count () {
      return getStructVal(this._address + 4, 4, 'unsigned int')
    }
    set count (count) {
      setStructVal(this._address + 4, 4, count)
    }

  
    get paths () {
      return getStructVal(this._address + 8, 4, 'char **')
    }
    set paths (paths) {
      setStructVal(this._address + 8, 4, paths)
    }

  }

  // Quaternion, 4 components (Vector4 alias)
  iface.Quaternion = class Quaternion {
    constructor(x, y, z, w) {
      this.size = 16
      this._address = mod._malloc(this.size)
      this.x = x
      this.y = y
      this.z = z
      this.w = w
    }
    
    get x () {
      return getStructVal(this._address + 0, 4, 'float')
    }
    set x (x) {
      setStructVal(this._address + 0, 4, x)
    }

  
    get y () {
      return getStructVal(this._address + 4, 4, 'float')
    }
    set y (y) {
      setStructVal(this._address + 4, 4, y)
    }

  
    get z () {
      return getStructVal(this._address + 8, 4, 'float')
    }
    set z (z) {
      setStructVal(this._address + 8, 4, z)
    }

  
    get w () {
      return getStructVal(this._address + 12, 4, 'float')
    }
    set w (w) {
      setStructVal(this._address + 12, 4, w)
    }

  }

  // Texture2D, same as Texture
  iface.Texture2D = class Texture2D {
    constructor(id, width, height, mipmaps, format) {
      this.size = 20
      this._address = mod._malloc(this.size)
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get id () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set id (id) {
      setStructVal(this._address + 0, 4, id)
    }

  
    get width () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set width (width) {
      setStructVal(this._address + 4, 4, width)
    }

  
    get height () {
      return getStructVal(this._address + 8, 4, 'int')
    }
    set height (height) {
      setStructVal(this._address + 8, 4, height)
    }

  
    get mipmaps () {
      return getStructVal(this._address + 12, 4, 'int')
    }
    set mipmaps (mipmaps) {
      setStructVal(this._address + 12, 4, mipmaps)
    }

  
    get format () {
      return getStructVal(this._address + 16, 4, 'int')
    }
    set format (format) {
      setStructVal(this._address + 16, 4, format)
    }

  }

  // TextureCubemap, same as Texture
  iface.TextureCubemap = class TextureCubemap {
    constructor(id, width, height, mipmaps, format) {
      this.size = 20
      this._address = mod._malloc(this.size)
      this.id = id
      this.width = width
      this.height = height
      this.mipmaps = mipmaps
      this.format = format
    }
    
    get id () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set id (id) {
      setStructVal(this._address + 0, 4, id)
    }

  
    get width () {
      return getStructVal(this._address + 4, 4, 'int')
    }
    set width (width) {
      setStructVal(this._address + 4, 4, width)
    }

  
    get height () {
      return getStructVal(this._address + 8, 4, 'int')
    }
    set height (height) {
      setStructVal(this._address + 8, 4, height)
    }

  
    get mipmaps () {
      return getStructVal(this._address + 12, 4, 'int')
    }
    set mipmaps (mipmaps) {
      setStructVal(this._address + 12, 4, mipmaps)
    }

  
    get format () {
      return getStructVal(this._address + 16, 4, 'int')
    }
    set format (format) {
      setStructVal(this._address + 16, 4, format)
    }

  }

  // RenderTexture2D, same as RenderTexture
  iface.RenderTexture2D = class RenderTexture2D {
    constructor(id, texture, depth) {
      this.size = 44
      this._address = mod._malloc(this.size)
      this.id = id
      this.texture = texture
      this.depth = depth
    }
    
    get id () {
      return getStructVal(this._address + 0, 4, 'unsigned int')
    }
    set id (id) {
      setStructVal(this._address + 0, 4, id)
    }

  
    get texture () {
      return getStructVal(this._address + 4, 20, 'Texture')
    }
    set texture (texture) {
      setStructVal(this._address + 4, 20, texture)
    }

  
    get depth () {
      return getStructVal(this._address + 24, 20, 'Texture')
    }
    set depth (depth) {
      setStructVal(this._address + 24, 20, depth)
    }

  }

  // Camera type fallback, defaults to Camera3D
  iface.Camera = class Camera {
    constructor(position, target, up, fovy, projection) {
      this.size = 44
      this._address = mod._malloc(this.size)
      this.position = position
      this.target = target
      this.up = up
      this.fovy = fovy
      this.projection = projection
    }
    
    get position () {
      return getStructVal(this._address + 0, 12, 'Vector3')
    }
    set position (position) {
      setStructVal(this._address + 0, 12, position)
    }

  
    get target () {
      return getStructVal(this._address + 12, 12, 'Vector3')
    }
    set target (target) {
      setStructVal(this._address + 12, 12, target)
    }

  
    get up () {
      return getStructVal(this._address + 24, 12, 'Vector3')
    }
    set up (up) {
      setStructVal(this._address + 24, 12, up)
    }

  
    get fovy () {
      return getStructVal(this._address + 36, 4, 'float')
    }
    set fovy (fovy) {
      setStructVal(this._address + 36, 4, fovy)
    }

  
    get projection () {
      return getStructVal(this._address + 40, 4, 'int')
    }
    set projection (projection) {
      setStructVal(this._address + 40, 4, projection)
    }

  }

  // ENUM ConfigFlags
  // System/Window config flags
  iface.FLAG_VSYNC_HINT = 64 // Set to try enabling V-Sync on GPU
  iface.FLAG_FULLSCREEN_MODE = 2 // Set to run program in fullscreen
  iface.FLAG_WINDOW_RESIZABLE = 4 // Set to allow resizable window
  iface.FLAG_WINDOW_UNDECORATED = 8 // Set to disable window decoration (frame and buttons)
  iface.FLAG_WINDOW_HIDDEN = 128 // Set to hide window
  iface.FLAG_WINDOW_MINIMIZED = 512 // Set to minimize window (iconify)
  iface.FLAG_WINDOW_MAXIMIZED = 1024 // Set to maximize window (expanded to monitor)
  iface.FLAG_WINDOW_UNFOCUSED = 2048 // Set to window non focused
  iface.FLAG_WINDOW_TOPMOST = 4096 // Set to window always on top
  iface.FLAG_WINDOW_ALWAYS_RUN = 256 // Set to allow windows running while minimized
  iface.FLAG_WINDOW_TRANSPARENT = 16 // Set to allow transparent framebuffer
  iface.FLAG_WINDOW_HIGHDPI = 8192 // Set to support HighDPI
  iface.FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384 // Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED
  iface.FLAG_MSAA_4X_HINT = 32 // Set to try enabling MSAA 4X
  iface.FLAG_INTERLACED_HINT = 65536 // Set to try enabling interlaced video format (for V3D)

  // ENUM TraceLogLevel
  // Trace log level
  iface.LOG_ALL = 0 // Display all logs
  iface.LOG_TRACE = 1 // Trace logging, intended for internal use only
  iface.LOG_DEBUG = 2 // Debug logging, used for internal debugging, it should be disabled on release builds
  iface.LOG_INFO = 3 // Info logging, used for program execution info
  iface.LOG_WARNING = 4 // Warning logging, used on recoverable failures
  iface.LOG_ERROR = 5 // Error logging, used on unrecoverable failures
  iface.LOG_FATAL = 6 // Fatal logging, used to abort program: exit(EXIT_FAILURE)
  iface.LOG_NONE = 7 // Disable logging

  // ENUM KeyboardKey
  // Keyboard keys (US keyboard layout)
  iface.KEY_NULL = 0 // Key: NULL, used for no key pressed
  iface.KEY_APOSTROPHE = 39 // Key: '
  iface.KEY_COMMA = 44 // Key: ,
  iface.KEY_MINUS = 45 // Key: -
  iface.KEY_PERIOD = 46 // Key: .
  iface.KEY_SLASH = 47 // Key: /
  iface.KEY_ZERO = 48 // Key: 0
  iface.KEY_ONE = 49 // Key: 1
  iface.KEY_TWO = 50 // Key: 2
  iface.KEY_THREE = 51 // Key: 3
  iface.KEY_FOUR = 52 // Key: 4
  iface.KEY_FIVE = 53 // Key: 5
  iface.KEY_SIX = 54 // Key: 6
  iface.KEY_SEVEN = 55 // Key: 7
  iface.KEY_EIGHT = 56 // Key: 8
  iface.KEY_NINE = 57 // Key: 9
  iface.KEY_SEMICOLON = 59 // Key: ;
  iface.KEY_EQUAL = 61 // Key: =
  iface.KEY_A = 65 // Key: A | a
  iface.KEY_B = 66 // Key: B | b
  iface.KEY_C = 67 // Key: C | c
  iface.KEY_D = 68 // Key: D | d
  iface.KEY_E = 69 // Key: E | e
  iface.KEY_F = 70 // Key: F | f
  iface.KEY_G = 71 // Key: G | g
  iface.KEY_H = 72 // Key: H | h
  iface.KEY_I = 73 // Key: I | i
  iface.KEY_J = 74 // Key: J | j
  iface.KEY_K = 75 // Key: K | k
  iface.KEY_L = 76 // Key: L | l
  iface.KEY_M = 77 // Key: M | m
  iface.KEY_N = 78 // Key: N | n
  iface.KEY_O = 79 // Key: O | o
  iface.KEY_P = 80 // Key: P | p
  iface.KEY_Q = 81 // Key: Q | q
  iface.KEY_R = 82 // Key: R | r
  iface.KEY_S = 83 // Key: S | s
  iface.KEY_T = 84 // Key: T | t
  iface.KEY_U = 85 // Key: U | u
  iface.KEY_V = 86 // Key: V | v
  iface.KEY_W = 87 // Key: W | w
  iface.KEY_X = 88 // Key: X | x
  iface.KEY_Y = 89 // Key: Y | y
  iface.KEY_Z = 90 // Key: Z | z
  iface.KEY_LEFT_BRACKET = 91 // Key: [
  iface.KEY_BACKSLASH = 92 // Key: '\'
  iface.KEY_RIGHT_BRACKET = 93 // Key: ]
  iface.KEY_GRAVE = 96 // Key: `
  iface.KEY_SPACE = 32 // Key: Space
  iface.KEY_ESCAPE = 256 // Key: Esc
  iface.KEY_ENTER = 257 // Key: Enter
  iface.KEY_TAB = 258 // Key: Tab
  iface.KEY_BACKSPACE = 259 // Key: Backspace
  iface.KEY_INSERT = 260 // Key: Ins
  iface.KEY_DELETE = 261 // Key: Del
  iface.KEY_RIGHT = 262 // Key: Cursor right
  iface.KEY_LEFT = 263 // Key: Cursor left
  iface.KEY_DOWN = 264 // Key: Cursor down
  iface.KEY_UP = 265 // Key: Cursor up
  iface.KEY_PAGE_UP = 266 // Key: Page up
  iface.KEY_PAGE_DOWN = 267 // Key: Page down
  iface.KEY_HOME = 268 // Key: Home
  iface.KEY_END = 269 // Key: End
  iface.KEY_CAPS_LOCK = 280 // Key: Caps lock
  iface.KEY_SCROLL_LOCK = 281 // Key: Scroll down
  iface.KEY_NUM_LOCK = 282 // Key: Num lock
  iface.KEY_PRINT_SCREEN = 283 // Key: Print screen
  iface.KEY_PAUSE = 284 // Key: Pause
  iface.KEY_F1 = 290 // Key: F1
  iface.KEY_F2 = 291 // Key: F2
  iface.KEY_F3 = 292 // Key: F3
  iface.KEY_F4 = 293 // Key: F4
  iface.KEY_F5 = 294 // Key: F5
  iface.KEY_F6 = 295 // Key: F6
  iface.KEY_F7 = 296 // Key: F7
  iface.KEY_F8 = 297 // Key: F8
  iface.KEY_F9 = 298 // Key: F9
  iface.KEY_F10 = 299 // Key: F10
  iface.KEY_F11 = 300 // Key: F11
  iface.KEY_F12 = 301 // Key: F12
  iface.KEY_LEFT_SHIFT = 340 // Key: Shift left
  iface.KEY_LEFT_CONTROL = 341 // Key: Control left
  iface.KEY_LEFT_ALT = 342 // Key: Alt left
  iface.KEY_LEFT_SUPER = 343 // Key: Super left
  iface.KEY_RIGHT_SHIFT = 344 // Key: Shift right
  iface.KEY_RIGHT_CONTROL = 345 // Key: Control right
  iface.KEY_RIGHT_ALT = 346 // Key: Alt right
  iface.KEY_RIGHT_SUPER = 347 // Key: Super right
  iface.KEY_KB_MENU = 348 // Key: KB menu
  iface.KEY_KP_0 = 320 // Key: Keypad 0
  iface.KEY_KP_1 = 321 // Key: Keypad 1
  iface.KEY_KP_2 = 322 // Key: Keypad 2
  iface.KEY_KP_3 = 323 // Key: Keypad 3
  iface.KEY_KP_4 = 324 // Key: Keypad 4
  iface.KEY_KP_5 = 325 // Key: Keypad 5
  iface.KEY_KP_6 = 326 // Key: Keypad 6
  iface.KEY_KP_7 = 327 // Key: Keypad 7
  iface.KEY_KP_8 = 328 // Key: Keypad 8
  iface.KEY_KP_9 = 329 // Key: Keypad 9
  iface.KEY_KP_DECIMAL = 330 // Key: Keypad .
  iface.KEY_KP_DIVIDE = 331 // Key: Keypad /
  iface.KEY_KP_MULTIPLY = 332 // Key: Keypad *
  iface.KEY_KP_SUBTRACT = 333 // Key: Keypad -
  iface.KEY_KP_ADD = 334 // Key: Keypad +
  iface.KEY_KP_ENTER = 335 // Key: Keypad Enter
  iface.KEY_KP_EQUAL = 336 // Key: Keypad =
  iface.KEY_BACK = 4 // Key: Android back button
  iface.KEY_MENU = 82 // Key: Android menu button
  iface.KEY_VOLUME_UP = 24 // Key: Android volume up button
  iface.KEY_VOLUME_DOWN = 25 // Key: Android volume down button

  // ENUM MouseButton
  // Mouse buttons
  iface.MOUSE_BUTTON_LEFT = 0 // Mouse button left
  iface.MOUSE_BUTTON_RIGHT = 1 // Mouse button right
  iface.MOUSE_BUTTON_MIDDLE = 2 // Mouse button middle (pressed wheel)
  iface.MOUSE_BUTTON_SIDE = 3 // Mouse button side (advanced mouse device)
  iface.MOUSE_BUTTON_EXTRA = 4 // Mouse button extra (advanced mouse device)
  iface.MOUSE_BUTTON_FORWARD = 5 // Mouse button forward (advanced mouse device)
  iface.MOUSE_BUTTON_BACK = 6 // Mouse button back (advanced mouse device)

  // ENUM MouseCursor
  // Mouse cursor
  iface.MOUSE_CURSOR_DEFAULT = 0 // Default pointer shape
  iface.MOUSE_CURSOR_ARROW = 1 // Arrow shape
  iface.MOUSE_CURSOR_IBEAM = 2 // Text writing cursor shape
  iface.MOUSE_CURSOR_CROSSHAIR = 3 // Cross shape
  iface.MOUSE_CURSOR_POINTING_HAND = 4 // Pointing hand cursor
  iface.MOUSE_CURSOR_RESIZE_EW = 5 // Horizontal resize/move arrow shape
  iface.MOUSE_CURSOR_RESIZE_NS = 6 // Vertical resize/move arrow shape
  iface.MOUSE_CURSOR_RESIZE_NWSE = 7 // Top-left to bottom-right diagonal resize/move arrow shape
  iface.MOUSE_CURSOR_RESIZE_NESW = 8 // The top-right to bottom-left diagonal resize/move arrow shape
  iface.MOUSE_CURSOR_RESIZE_ALL = 9 // The omnidirectional resize/move cursor shape
  iface.MOUSE_CURSOR_NOT_ALLOWED = 10 // The operation-not-allowed shape

  // ENUM GamepadButton
  // Gamepad buttons
  iface.GAMEPAD_BUTTON_UNKNOWN = 0 // Unknown button, just for error checking
  iface.GAMEPAD_BUTTON_LEFT_FACE_UP = 1 // Gamepad left DPAD up button
  iface.GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2 // Gamepad left DPAD right button
  iface.GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3 // Gamepad left DPAD down button
  iface.GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4 // Gamepad left DPAD left button
  iface.GAMEPAD_BUTTON_RIGHT_FACE_UP = 5 // Gamepad right button up (i.e. PS3: Triangle, Xbox: Y)
  iface.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6 // Gamepad right button right (i.e. PS3: Square, Xbox: X)
  iface.GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7 // Gamepad right button down (i.e. PS3: Cross, Xbox: A)
  iface.GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8 // Gamepad right button left (i.e. PS3: Circle, Xbox: B)
  iface.GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9 // Gamepad top/back trigger left (first), it could be a trailing button
  iface.GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10 // Gamepad top/back trigger left (second), it could be a trailing button
  iface.GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11 // Gamepad top/back trigger right (one), it could be a trailing button
  iface.GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12 // Gamepad top/back trigger right (second), it could be a trailing button
  iface.GAMEPAD_BUTTON_MIDDLE_LEFT = 13 // Gamepad center buttons, left one (i.e. PS3: Select)
  iface.GAMEPAD_BUTTON_MIDDLE = 14 // Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX)
  iface.GAMEPAD_BUTTON_MIDDLE_RIGHT = 15 // Gamepad center buttons, right one (i.e. PS3: Start)
  iface.GAMEPAD_BUTTON_LEFT_THUMB = 16 // Gamepad joystick pressed button left
  iface.GAMEPAD_BUTTON_RIGHT_THUMB = 17 // Gamepad joystick pressed button right

  // ENUM GamepadAxis
  // Gamepad axis
  iface.GAMEPAD_AXIS_LEFT_X = 0 // Gamepad left stick X axis
  iface.GAMEPAD_AXIS_LEFT_Y = 1 // Gamepad left stick Y axis
  iface.GAMEPAD_AXIS_RIGHT_X = 2 // Gamepad right stick X axis
  iface.GAMEPAD_AXIS_RIGHT_Y = 3 // Gamepad right stick Y axis
  iface.GAMEPAD_AXIS_LEFT_TRIGGER = 4 // Gamepad back trigger left, pressure level: [1..-1]
  iface.GAMEPAD_AXIS_RIGHT_TRIGGER = 5 // Gamepad back trigger right, pressure level: [1..-1]

  // ENUM MaterialMapIndex
  // Material map index
  iface.MATERIAL_MAP_ALBEDO = 0 // Albedo material (same as: MATERIAL_MAP_DIFFUSE)
  iface.MATERIAL_MAP_METALNESS = 1 // Metalness material (same as: MATERIAL_MAP_SPECULAR)
  iface.MATERIAL_MAP_NORMAL = 2 // Normal material
  iface.MATERIAL_MAP_ROUGHNESS = 3 // Roughness material
  iface.MATERIAL_MAP_OCCLUSION = 4 // Ambient occlusion material
  iface.MATERIAL_MAP_EMISSION = 5 // Emission material
  iface.MATERIAL_MAP_HEIGHT = 6 // Heightmap material
  iface.MATERIAL_MAP_CUBEMAP = 7 // Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  iface.MATERIAL_MAP_IRRADIANCE = 8 // Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  iface.MATERIAL_MAP_PREFILTER = 9 // Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  iface.MATERIAL_MAP_BRDF = 10 // Brdf material

  // ENUM ShaderLocationIndex
  // Shader location index
  iface.SHADER_LOC_VERTEX_POSITION = 0 // Shader location: vertex attribute: position
  iface.SHADER_LOC_VERTEX_TEXCOORD01 = 1 // Shader location: vertex attribute: texcoord01
  iface.SHADER_LOC_VERTEX_TEXCOORD02 = 2 // Shader location: vertex attribute: texcoord02
  iface.SHADER_LOC_VERTEX_NORMAL = 3 // Shader location: vertex attribute: normal
  iface.SHADER_LOC_VERTEX_TANGENT = 4 // Shader location: vertex attribute: tangent
  iface.SHADER_LOC_VERTEX_COLOR = 5 // Shader location: vertex attribute: color
  iface.SHADER_LOC_MATRIX_MVP = 6 // Shader location: matrix uniform: model-view-projection
  iface.SHADER_LOC_MATRIX_VIEW = 7 // Shader location: matrix uniform: view (camera transform)
  iface.SHADER_LOC_MATRIX_PROJECTION = 8 // Shader location: matrix uniform: projection
  iface.SHADER_LOC_MATRIX_MODEL = 9 // Shader location: matrix uniform: model (transform)
  iface.SHADER_LOC_MATRIX_NORMAL = 10 // Shader location: matrix uniform: normal
  iface.SHADER_LOC_VECTOR_VIEW = 11 // Shader location: vector uniform: view
  iface.SHADER_LOC_COLOR_DIFFUSE = 12 // Shader location: vector uniform: diffuse color
  iface.SHADER_LOC_COLOR_SPECULAR = 13 // Shader location: vector uniform: specular color
  iface.SHADER_LOC_COLOR_AMBIENT = 14 // Shader location: vector uniform: ambient color
  iface.SHADER_LOC_MAP_ALBEDO = 15 // Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE)
  iface.SHADER_LOC_MAP_METALNESS = 16 // Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR)
  iface.SHADER_LOC_MAP_NORMAL = 17 // Shader location: sampler2d texture: normal
  iface.SHADER_LOC_MAP_ROUGHNESS = 18 // Shader location: sampler2d texture: roughness
  iface.SHADER_LOC_MAP_OCCLUSION = 19 // Shader location: sampler2d texture: occlusion
  iface.SHADER_LOC_MAP_EMISSION = 20 // Shader location: sampler2d texture: emission
  iface.SHADER_LOC_MAP_HEIGHT = 21 // Shader location: sampler2d texture: height
  iface.SHADER_LOC_MAP_CUBEMAP = 22 // Shader location: samplerCube texture: cubemap
  iface.SHADER_LOC_MAP_IRRADIANCE = 23 // Shader location: samplerCube texture: irradiance
  iface.SHADER_LOC_MAP_PREFILTER = 24 // Shader location: samplerCube texture: prefilter
  iface.SHADER_LOC_MAP_BRDF = 25 // Shader location: sampler2d texture: brdf

  // ENUM ShaderUniformDataType
  // Shader uniform data type
  iface.SHADER_UNIFORM_FLOAT = 0 // Shader uniform type: float
  iface.SHADER_UNIFORM_VEC2 = 1 // Shader uniform type: vec2 (2 float)
  iface.SHADER_UNIFORM_VEC3 = 2 // Shader uniform type: vec3 (3 float)
  iface.SHADER_UNIFORM_VEC4 = 3 // Shader uniform type: vec4 (4 float)
  iface.SHADER_UNIFORM_INT = 4 // Shader uniform type: int
  iface.SHADER_UNIFORM_IVEC2 = 5 // Shader uniform type: ivec2 (2 int)
  iface.SHADER_UNIFORM_IVEC3 = 6 // Shader uniform type: ivec3 (3 int)
  iface.SHADER_UNIFORM_IVEC4 = 7 // Shader uniform type: ivec4 (4 int)
  iface.SHADER_UNIFORM_SAMPLER2D = 8 // Shader uniform type: sampler2d

  // ENUM ShaderAttributeDataType
  // Shader attribute data types
  iface.SHADER_ATTRIB_FLOAT = 0 // Shader attribute type: float
  iface.SHADER_ATTRIB_VEC2 = 1 // Shader attribute type: vec2 (2 float)
  iface.SHADER_ATTRIB_VEC3 = 2 // Shader attribute type: vec3 (3 float)
  iface.SHADER_ATTRIB_VEC4 = 3 // Shader attribute type: vec4 (4 float)

  // ENUM PixelFormat
  // Pixel formats
  iface.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1 // 8 bit per pixel (no alpha)
  iface.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2 // 8*2 bpp (2 channels)
  iface.PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3 // 16 bpp
  iface.PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4 // 24 bpp
  iface.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5 // 16 bpp (1 bit alpha)
  iface.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6 // 16 bpp (4 bit alpha)
  iface.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7 // 32 bpp
  iface.PIXELFORMAT_UNCOMPRESSED_R32 = 8 // 32 bpp (1 channel - float)
  iface.PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9 // 32*3 bpp (3 channels - float)
  iface.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10 // 32*4 bpp (4 channels - float)
  iface.PIXELFORMAT_COMPRESSED_DXT1_RGB = 11 // 4 bpp (no alpha)
  iface.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12 // 4 bpp (1 bit alpha)
  iface.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13 // 8 bpp
  iface.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14 // 8 bpp
  iface.PIXELFORMAT_COMPRESSED_ETC1_RGB = 15 // 4 bpp
  iface.PIXELFORMAT_COMPRESSED_ETC2_RGB = 16 // 4 bpp
  iface.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17 // 8 bpp
  iface.PIXELFORMAT_COMPRESSED_PVRT_RGB = 18 // 4 bpp
  iface.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19 // 4 bpp
  iface.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20 // 8 bpp
  iface.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21 // 2 bpp

  // ENUM TextureFilter
  // Texture parameters: filter mode
  iface.TEXTURE_FILTER_POINT = 0 // No filter, just pixel approximation
  iface.TEXTURE_FILTER_BILINEAR = 1 // Linear filtering
  iface.TEXTURE_FILTER_TRILINEAR = 2 // Trilinear filtering (linear with mipmaps)
  iface.TEXTURE_FILTER_ANISOTROPIC_4X = 3 // Anisotropic filtering 4x
  iface.TEXTURE_FILTER_ANISOTROPIC_8X = 4 // Anisotropic filtering 8x
  iface.TEXTURE_FILTER_ANISOTROPIC_16X = 5 // Anisotropic filtering 16x

  // ENUM TextureWrap
  // Texture parameters: wrap mode
  iface.TEXTURE_WRAP_REPEAT = 0 // Repeats texture in tiled mode
  iface.TEXTURE_WRAP_CLAMP = 1 // Clamps texture to edge pixel in tiled mode
  iface.TEXTURE_WRAP_MIRROR_REPEAT = 2 // Mirrors and repeats the texture in tiled mode
  iface.TEXTURE_WRAP_MIRROR_CLAMP = 3 // Mirrors and clamps to border the texture in tiled mode

  // ENUM CubemapLayout
  // Cubemap layouts
  iface.CUBEMAP_LAYOUT_AUTO_DETECT = 0 // Automatically detect layout type
  iface.CUBEMAP_LAYOUT_LINE_VERTICAL = 1 // Layout is defined by a vertical line with faces
  iface.CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2 // Layout is defined by a horizontal line with faces
  iface.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3 // Layout is defined by a 3x4 cross with cubemap faces
  iface.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4 // Layout is defined by a 4x3 cross with cubemap faces
  iface.CUBEMAP_LAYOUT_PANORAMA = 5 // Layout is defined by a panorama image (equirrectangular map)

  // ENUM FontType
  // Font type, defines generation method
  iface.FONT_DEFAULT = 0 // Default font generation, anti-aliased
  iface.FONT_BITMAP = 1 // Bitmap font generation, no anti-aliasing
  iface.FONT_SDF = 2 // SDF font generation, requires external shader

  // ENUM BlendMode
  // Color blending modes (pre-defined)
  iface.BLEND_ALPHA = 0 // Blend textures considering alpha (default)
  iface.BLEND_ADDITIVE = 1 // Blend textures adding colors
  iface.BLEND_MULTIPLIED = 2 // Blend textures multiplying colors
  iface.BLEND_ADD_COLORS = 3 // Blend textures adding colors (alternative)
  iface.BLEND_SUBTRACT_COLORS = 4 // Blend textures subtracting colors (alternative)
  iface.BLEND_ALPHA_PREMULTIPLY = 5 // Blend premultiplied textures considering alpha
  iface.BLEND_CUSTOM = 6 // Blend textures using custom src/dst factors (use rlSetBlendFactors())
  iface.BLEND_CUSTOM_SEPARATE = 7 // Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate())

  // ENUM Gesture
  // Gesture
  iface.GESTURE_NONE = 0 // No gesture
  iface.GESTURE_TAP = 1 // Tap gesture
  iface.GESTURE_DOUBLETAP = 2 // Double tap gesture
  iface.GESTURE_HOLD = 4 // Hold gesture
  iface.GESTURE_DRAG = 8 // Drag gesture
  iface.GESTURE_SWIPE_RIGHT = 16 // Swipe right gesture
  iface.GESTURE_SWIPE_LEFT = 32 // Swipe left gesture
  iface.GESTURE_SWIPE_UP = 64 // Swipe up gesture
  iface.GESTURE_SWIPE_DOWN = 128 // Swipe down gesture
  iface.GESTURE_PINCH_IN = 256 // Pinch in gesture
  iface.GESTURE_PINCH_OUT = 512 // Pinch out gesture

  // ENUM CameraMode
  // Camera system modes
  iface.CAMERA_CUSTOM = 0 // Custom camera
  iface.CAMERA_FREE = 1 // Free camera
  iface.CAMERA_ORBITAL = 2 // Orbital camera
  iface.CAMERA_FIRST_PERSON = 3 // First person camera
  iface.CAMERA_THIRD_PERSON = 4 // Third person camera

  // ENUM CameraProjection
  // Camera projection
  iface.CAMERA_PERSPECTIVE = 0 // Perspective projection
  iface.CAMERA_ORTHOGRAPHIC = 1 // Orthographic projection

  // ENUM NPatchLayout
  // N-patch layout
  iface.NPATCH_NINE_PATCH = 0 // Npatch layout: 3x3 tiles
  iface.NPATCH_THREE_PATCH_VERTICAL = 1 // Npatch layout: 1x3 tiles
  iface.NPATCH_THREE_PATCH_HORIZONTAL = 2 // Npatch layout: 3x1 tiles


  const mod = await wasm({canvas})

  // Initialize window and OpenGL context: (int, int, const char *) => void
  iface.InitWindow = function InitWindow(width, height, title) {
    mod._InitWindow(processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(title, 'const char *'))
  }

  // Check if KEY_ESCAPE pressed or Close icon pressed: () => bool
  iface.WindowShouldClose = function WindowShouldClose() {
    return processFunctionReturn(mod._WindowShouldClose(), 'bool')
  }

  // Close window and unload OpenGL context: () => void
  iface.CloseWindow = function CloseWindow() {
    mod._CloseWindow()
  }

  // Check if window has been initialized successfully: () => bool
  iface.IsWindowReady = function IsWindowReady() {
    return processFunctionReturn(mod._IsWindowReady(), 'bool')
  }

  // Check if window is currently fullscreen: () => bool
  iface.IsWindowFullscreen = function IsWindowFullscreen() {
    return processFunctionReturn(mod._IsWindowFullscreen(), 'bool')
  }

  // Check if window is currently hidden (only PLATFORM_DESKTOP): () => bool
  iface.IsWindowHidden = function IsWindowHidden() {
    return processFunctionReturn(mod._IsWindowHidden(), 'bool')
  }

  // Check if window is currently minimized (only PLATFORM_DESKTOP): () => bool
  iface.IsWindowMinimized = function IsWindowMinimized() {
    return processFunctionReturn(mod._IsWindowMinimized(), 'bool')
  }

  // Check if window is currently maximized (only PLATFORM_DESKTOP): () => bool
  iface.IsWindowMaximized = function IsWindowMaximized() {
    return processFunctionReturn(mod._IsWindowMaximized(), 'bool')
  }

  // Check if window is currently focused (only PLATFORM_DESKTOP): () => bool
  iface.IsWindowFocused = function IsWindowFocused() {
    return processFunctionReturn(mod._IsWindowFocused(), 'bool')
  }

  // Check if window has been resized last frame: () => bool
  iface.IsWindowResized = function IsWindowResized() {
    return processFunctionReturn(mod._IsWindowResized(), 'bool')
  }

  // Check if one specific window flag is enabled: (unsigned int) => bool
  iface.IsWindowState = function IsWindowState(flag) {
    return processFunctionReturn(mod._IsWindowState(processFunctionInput(flag, 'unsigned int')), 'bool')
  }

  // Set window configuration state using flags (only PLATFORM_DESKTOP): (unsigned int) => void
  iface.SetWindowState = function SetWindowState(flags) {
    mod._SetWindowState(processFunctionInput(flags, 'unsigned int'))
  }

  // Clear window configuration state flags: (unsigned int) => void
  iface.ClearWindowState = function ClearWindowState(flags) {
    mod._ClearWindowState(processFunctionInput(flags, 'unsigned int'))
  }

  // Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP): () => void
  iface.ToggleFullscreen = function ToggleFullscreen() {
    mod._ToggleFullscreen()
  }

  // Set window state: maximized, if resizable (only PLATFORM_DESKTOP): () => void
  iface.MaximizeWindow = function MaximizeWindow() {
    mod._MaximizeWindow()
  }

  // Set window state: minimized, if resizable (only PLATFORM_DESKTOP): () => void
  iface.MinimizeWindow = function MinimizeWindow() {
    mod._MinimizeWindow()
  }

  // Set window state: not minimized/maximized (only PLATFORM_DESKTOP): () => void
  iface.RestoreWindow = function RestoreWindow() {
    mod._RestoreWindow()
  }

  // Set icon for window (single image, RGBA 32bit, only PLATFORM_DESKTOP): (Image) => void
  iface.SetWindowIcon = function SetWindowIcon(image) {
    mod._SetWindowIcon(processFunctionInput(image, 'Image'))
  }

  // Set icon for window (multiple images, RGBA 32bit, only PLATFORM_DESKTOP): (Image *, int) => void
  iface.SetWindowIcons = function SetWindowIcons(images, count) {
    mod._SetWindowIcons(processFunctionInput(images, 'Image *'), processFunctionInput(count, 'int'))
  }

  // Set title for window (only PLATFORM_DESKTOP): (const char *) => void
  iface.SetWindowTitle = function SetWindowTitle(title) {
    mod._SetWindowTitle(processFunctionInput(title, 'const char *'))
  }

  // Set window position on screen (only PLATFORM_DESKTOP): (int, int) => void
  iface.SetWindowPosition = function SetWindowPosition(x, y) {
    mod._SetWindowPosition(processFunctionInput(x, 'int'), processFunctionInput(y, 'int'))
  }

  // Set monitor for the current window (fullscreen mode): (int) => void
  iface.SetWindowMonitor = function SetWindowMonitor(monitor) {
    mod._SetWindowMonitor(processFunctionInput(monitor, 'int'))
  }

  // Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE): (int, int) => void
  iface.SetWindowMinSize = function SetWindowMinSize(width, height) {
    mod._SetWindowMinSize(processFunctionInput(width, 'int'), processFunctionInput(height, 'int'))
  }

  // Set window dimensions: (int, int) => void
  iface.SetWindowSize = function SetWindowSize(width, height) {
    mod._SetWindowSize(processFunctionInput(width, 'int'), processFunctionInput(height, 'int'))
  }

  // Set window opacity [0.0f..1.0f] (only PLATFORM_DESKTOP): (float) => void
  iface.SetWindowOpacity = function SetWindowOpacity(opacity) {
    mod._SetWindowOpacity(processFunctionInput(opacity, 'float'))
  }

  // Get native window handle: () => void *
  iface.GetWindowHandle = function GetWindowHandle() {
    return processFunctionReturn(mod._GetWindowHandle(), 'void *')
  }

  // Get current screen width: () => int
  iface.GetScreenWidth = function GetScreenWidth() {
    return processFunctionReturn(mod._GetScreenWidth(), 'int')
  }

  // Get current screen height: () => int
  iface.GetScreenHeight = function GetScreenHeight() {
    return processFunctionReturn(mod._GetScreenHeight(), 'int')
  }

  // Get current render width (it considers HiDPI): () => int
  iface.GetRenderWidth = function GetRenderWidth() {
    return processFunctionReturn(mod._GetRenderWidth(), 'int')
  }

  // Get current render height (it considers HiDPI): () => int
  iface.GetRenderHeight = function GetRenderHeight() {
    return processFunctionReturn(mod._GetRenderHeight(), 'int')
  }

  // Get number of connected monitors: () => int
  iface.GetMonitorCount = function GetMonitorCount() {
    return processFunctionReturn(mod._GetMonitorCount(), 'int')
  }

  // Get current connected monitor: () => int
  iface.GetCurrentMonitor = function GetCurrentMonitor() {
    return processFunctionReturn(mod._GetCurrentMonitor(), 'int')
  }

  // Get specified monitor position: (int) => Vector2
  iface.GetMonitorPosition = function GetMonitorPosition(monitor) {
    const _ret = new iface.Vector2()
    mod._GetMonitorPosition(_ret._address, processFunctionInput(monitor, 'int'))
    return _ret
  }

  // Get specified monitor width (current video mode used by monitor): (int) => int
  iface.GetMonitorWidth = function GetMonitorWidth(monitor) {
    return processFunctionReturn(mod._GetMonitorWidth(processFunctionInput(monitor, 'int')), 'int')
  }

  // Get specified monitor height (current video mode used by monitor): (int) => int
  iface.GetMonitorHeight = function GetMonitorHeight(monitor) {
    return processFunctionReturn(mod._GetMonitorHeight(processFunctionInput(monitor, 'int')), 'int')
  }

  // Get specified monitor physical width in millimetres: (int) => int
  iface.GetMonitorPhysicalWidth = function GetMonitorPhysicalWidth(monitor) {
    return processFunctionReturn(mod._GetMonitorPhysicalWidth(processFunctionInput(monitor, 'int')), 'int')
  }

  // Get specified monitor physical height in millimetres: (int) => int
  iface.GetMonitorPhysicalHeight = function GetMonitorPhysicalHeight(monitor) {
    return processFunctionReturn(mod._GetMonitorPhysicalHeight(processFunctionInput(monitor, 'int')), 'int')
  }

  // Get specified monitor refresh rate: (int) => int
  iface.GetMonitorRefreshRate = function GetMonitorRefreshRate(monitor) {
    return processFunctionReturn(mod._GetMonitorRefreshRate(processFunctionInput(monitor, 'int')), 'int')
  }

  // Get window position XY on monitor: () => Vector2
  iface.GetWindowPosition = function GetWindowPosition() {
    const _ret = new iface.Vector2()
    mod._GetWindowPosition(_ret._address, )
    return _ret
  }

  // Get window scale DPI factor: () => Vector2
  iface.GetWindowScaleDPI = function GetWindowScaleDPI() {
    const _ret = new iface.Vector2()
    mod._GetWindowScaleDPI(_ret._address, )
    return _ret
  }

  // Get the human-readable, UTF-8 encoded name of the primary monitor: (int) => const char *
  iface.GetMonitorName = function GetMonitorName(monitor) {
    return processFunctionReturn(mod._GetMonitorName(processFunctionInput(monitor, 'int')), 'const char *')
  }

  // Set clipboard text content: (const char *) => void
  iface.SetClipboardText = function SetClipboardText(text) {
    mod._SetClipboardText(processFunctionInput(text, 'const char *'))
  }

  // Get clipboard text content: () => const char *
  iface.GetClipboardText = function GetClipboardText() {
    return processFunctionReturn(mod._GetClipboardText(), 'const char *')
  }

  // Enable waiting for events on EndDrawing(), no automatic event polling: () => void
  iface.EnableEventWaiting = function EnableEventWaiting() {
    mod._EnableEventWaiting()
  }

  // Disable waiting for events on EndDrawing(), automatic events polling: () => void
  iface.DisableEventWaiting = function DisableEventWaiting() {
    mod._DisableEventWaiting()
  }

  // Swap back buffer with front buffer (screen drawing): () => void
  iface.SwapScreenBuffer = function SwapScreenBuffer() {
    mod._SwapScreenBuffer()
  }

  // Register all input events: () => void
  iface.PollInputEvents = function PollInputEvents() {
    mod._PollInputEvents()
  }

  // Wait for some time (halt program execution): (double) => void
  iface.WaitTime = function WaitTime(seconds) {
    mod._WaitTime(processFunctionInput(seconds, 'double'))
  }

  // Shows cursor: () => void
  iface.ShowCursor = function ShowCursor() {
    mod._ShowCursor()
  }

  // Hides cursor: () => void
  iface.HideCursor = function HideCursor() {
    mod._HideCursor()
  }

  // Check if cursor is not visible: () => bool
  iface.IsCursorHidden = function IsCursorHidden() {
    return processFunctionReturn(mod._IsCursorHidden(), 'bool')
  }

  // Enables cursor (unlock cursor): () => void
  iface.EnableCursor = function EnableCursor() {
    mod._EnableCursor()
  }

  // Disables cursor (lock cursor): () => void
  iface.DisableCursor = function DisableCursor() {
    mod._DisableCursor()
  }

  // Check if cursor is on the screen: () => bool
  iface.IsCursorOnScreen = function IsCursorOnScreen() {
    return processFunctionReturn(mod._IsCursorOnScreen(), 'bool')
  }

  // Set background color (framebuffer clear color): (Color) => void
  iface.ClearBackground = function ClearBackground(color) {
    mod._ClearBackground(processFunctionInput(color, 'Color'))
  }

  // Setup canvas (framebuffer) to start drawing: () => void
  iface.BeginDrawing = function BeginDrawing() {
    mod._BeginDrawing()
  }

  // End canvas drawing and swap buffers (double buffering): () => void
  iface.EndDrawing = function EndDrawing() {
    mod._EndDrawing()
  }

  // Begin 2D mode with custom camera (2D): (Camera2D) => void
  iface.BeginMode2D = function BeginMode2D(camera) {
    mod._BeginMode2D(processFunctionInput(camera, 'Camera2D'))
  }

  // Ends 2D mode with custom camera: () => void
  iface.EndMode2D = function EndMode2D() {
    mod._EndMode2D()
  }

  // Begin 3D mode with custom camera (3D): (Camera3D) => void
  iface.BeginMode3D = function BeginMode3D(camera) {
    mod._BeginMode3D(processFunctionInput(camera, 'Camera3D'))
  }

  // Ends 3D mode and returns to default 2D orthographic mode: () => void
  iface.EndMode3D = function EndMode3D() {
    mod._EndMode3D()
  }

  // Begin drawing to render texture: (RenderTexture2D) => void
  iface.BeginTextureMode = function BeginTextureMode(target) {
    mod._BeginTextureMode(processFunctionInput(target, 'RenderTexture2D'))
  }

  // Ends drawing to render texture: () => void
  iface.EndTextureMode = function EndTextureMode() {
    mod._EndTextureMode()
  }

  // Begin custom shader drawing: (Shader) => void
  iface.BeginShaderMode = function BeginShaderMode(shader) {
    mod._BeginShaderMode(processFunctionInput(shader, 'Shader'))
  }

  // End custom shader drawing (use default shader): () => void
  iface.EndShaderMode = function EndShaderMode() {
    mod._EndShaderMode()
  }

  // Begin blending mode (alpha, additive, multiplied, subtract, custom): (int) => void
  iface.BeginBlendMode = function BeginBlendMode(mode) {
    mod._BeginBlendMode(processFunctionInput(mode, 'int'))
  }

  // End blending mode (reset to default: alpha blending): () => void
  iface.EndBlendMode = function EndBlendMode() {
    mod._EndBlendMode()
  }

  // Begin scissor mode (define screen area for following drawing): (int, int, int, int) => void
  iface.BeginScissorMode = function BeginScissorMode(x, y, width, height) {
    mod._BeginScissorMode(processFunctionInput(x, 'int'), processFunctionInput(y, 'int'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'))
  }

  // End scissor mode: () => void
  iface.EndScissorMode = function EndScissorMode() {
    mod._EndScissorMode()
  }

  // Begin stereo rendering (requires VR simulator): (VrStereoConfig) => void
  iface.BeginVrStereoMode = function BeginVrStereoMode(config) {
    mod._BeginVrStereoMode(processFunctionInput(config, 'VrStereoConfig'))
  }

  // End stereo rendering (requires VR simulator): () => void
  iface.EndVrStereoMode = function EndVrStereoMode() {
    mod._EndVrStereoMode()
  }

  // Load VR stereo config for VR simulator device parameters: (VrDeviceInfo) => VrStereoConfig
  iface.LoadVrStereoConfig = function LoadVrStereoConfig(device) {
    const _ret = new iface.VrStereoConfig()
    mod._LoadVrStereoConfig(_ret._address, processFunctionInput(device, 'VrDeviceInfo'))
    return _ret
  }

  // Unload VR stereo config: (VrStereoConfig) => void
  iface.UnloadVrStereoConfig = function UnloadVrStereoConfig(config) {
    mod._UnloadVrStereoConfig(processFunctionInput(config, 'VrStereoConfig'))
  }

  // Load shader from files and bind default locations: (const char *, const char *) => Shader
  iface.LoadShader = function LoadShader(vsFileName, fsFileName) {
    const _ret = new iface.Shader()
    mod._LoadShader(_ret._address, processFunctionInput(vsFileName, 'const char *'), processFunctionInput(fsFileName, 'const char *'))
    return _ret
  }

  // Load shader from code strings and bind default locations: (const char *, const char *) => Shader
  iface.LoadShaderFromMemory = function LoadShaderFromMemory(vsCode, fsCode) {
    const _ret = new iface.Shader()
    mod._LoadShaderFromMemory(_ret._address, processFunctionInput(vsCode, 'const char *'), processFunctionInput(fsCode, 'const char *'))
    return _ret
  }

  // Check if a shader is ready: (Shader) => bool
  iface.IsShaderReady = function IsShaderReady(shader) {
    return processFunctionReturn(mod._IsShaderReady(processFunctionInput(shader, 'Shader')), 'bool')
  }

  // Get shader uniform location: (Shader, const char *) => int
  iface.GetShaderLocation = function GetShaderLocation(shader, uniformName) {
    return processFunctionReturn(mod._GetShaderLocation(processFunctionInput(shader, 'Shader'), processFunctionInput(uniformName, 'const char *')), 'int')
  }

  // Get shader attribute location: (Shader, const char *) => int
  iface.GetShaderLocationAttrib = function GetShaderLocationAttrib(shader, attribName) {
    return processFunctionReturn(mod._GetShaderLocationAttrib(processFunctionInput(shader, 'Shader'), processFunctionInput(attribName, 'const char *')), 'int')
  }

  // Set shader uniform value: (Shader, int, const void *, int) => void
  iface.SetShaderValue = function SetShaderValue(shader, locIndex, value, uniformType) {
    mod._SetShaderValue(processFunctionInput(shader, 'Shader'), processFunctionInput(locIndex, 'int'), processFunctionInput(value, 'const void *'), processFunctionInput(uniformType, 'int'))
  }

  // Set shader uniform value vector: (Shader, int, const void *, int, int) => void
  iface.SetShaderValueV = function SetShaderValueV(shader, locIndex, value, uniformType, count) {
    mod._SetShaderValueV(processFunctionInput(shader, 'Shader'), processFunctionInput(locIndex, 'int'), processFunctionInput(value, 'const void *'), processFunctionInput(uniformType, 'int'), processFunctionInput(count, 'int'))
  }

  // Set shader uniform value (matrix 4x4): (Shader, int, Matrix) => void
  iface.SetShaderValueMatrix = function SetShaderValueMatrix(shader, locIndex, mat) {
    mod._SetShaderValueMatrix(processFunctionInput(shader, 'Shader'), processFunctionInput(locIndex, 'int'), processFunctionInput(mat, 'Matrix'))
  }

  // Set shader uniform value for texture (sampler2d): (Shader, int, Texture2D) => void
  iface.SetShaderValueTexture = function SetShaderValueTexture(shader, locIndex, texture) {
    mod._SetShaderValueTexture(processFunctionInput(shader, 'Shader'), processFunctionInput(locIndex, 'int'), processFunctionInput(texture, 'Texture2D'))
  }

  // Unload shader from GPU memory (VRAM): (Shader) => void
  iface.UnloadShader = function UnloadShader(shader) {
    mod._UnloadShader(processFunctionInput(shader, 'Shader'))
  }

  // Get a ray trace from mouse position: (Vector2, Camera) => Ray
  iface.GetMouseRay = function GetMouseRay(mousePosition, camera) {
    const _ret = new iface.Ray()
    mod._GetMouseRay(_ret._address, processFunctionInput(mousePosition, 'Vector2'), processFunctionInput(camera, 'Camera'))
    return _ret
  }

  // Get camera transform matrix (view matrix): (Camera) => Matrix
  iface.GetCameraMatrix = function GetCameraMatrix(camera) {
    const _ret = new iface.Matrix()
    mod._GetCameraMatrix(_ret._address, processFunctionInput(camera, 'Camera'))
    return _ret
  }

  // Get camera 2d transform matrix: (Camera2D) => Matrix
  iface.GetCameraMatrix2D = function GetCameraMatrix2D(camera) {
    const _ret = new iface.Matrix()
    mod._GetCameraMatrix2D(_ret._address, processFunctionInput(camera, 'Camera2D'))
    return _ret
  }

  // Get the screen space position for a 3d world space position: (Vector3, Camera) => Vector2
  iface.GetWorldToScreen = function GetWorldToScreen(position, camera) {
    const _ret = new iface.Vector2()
    mod._GetWorldToScreen(_ret._address, processFunctionInput(position, 'Vector3'), processFunctionInput(camera, 'Camera'))
    return _ret
  }

  // Get the world space position for a 2d camera screen space position: (Vector2, Camera2D) => Vector2
  iface.GetScreenToWorld2D = function GetScreenToWorld2D(position, camera) {
    const _ret = new iface.Vector2()
    mod._GetScreenToWorld2D(_ret._address, processFunctionInput(position, 'Vector2'), processFunctionInput(camera, 'Camera2D'))
    return _ret
  }

  // Get size position for a 3d world space position: (Vector3, Camera, int, int) => Vector2
  iface.GetWorldToScreenEx = function GetWorldToScreenEx(position, camera, width, height) {
    const _ret = new iface.Vector2()
    mod._GetWorldToScreenEx(_ret._address, processFunctionInput(position, 'Vector3'), processFunctionInput(camera, 'Camera'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'))
    return _ret
  }

  // Get the screen space position for a 2d camera world space position: (Vector2, Camera2D) => Vector2
  iface.GetWorldToScreen2D = function GetWorldToScreen2D(position, camera) {
    const _ret = new iface.Vector2()
    mod._GetWorldToScreen2D(_ret._address, processFunctionInput(position, 'Vector2'), processFunctionInput(camera, 'Camera2D'))
    return _ret
  }

  // Set target FPS (maximum): (int) => void
  iface.SetTargetFPS = function SetTargetFPS(fps) {
    mod._SetTargetFPS(processFunctionInput(fps, 'int'))
  }

  // Get current FPS: () => int
  iface.GetFPS = function GetFPS() {
    return processFunctionReturn(mod._GetFPS(), 'int')
  }

  // Get time in seconds for last frame drawn (delta time): () => float
  iface.GetFrameTime = function GetFrameTime() {
    return processFunctionReturn(mod._GetFrameTime(), 'float')
  }

  // Get elapsed time in seconds since InitWindow(): () => double
  iface.GetTime = function GetTime() {
    return processFunctionReturn(mod._GetTime(), 'double')
  }

  // Get a random value between min and max (both included): (int, int) => int
  iface.GetRandomValue = function GetRandomValue(min, max) {
    return processFunctionReturn(mod._GetRandomValue(processFunctionInput(min, 'int'), processFunctionInput(max, 'int')), 'int')
  }

  // Set the seed for the random number generator: (unsigned int) => void
  iface.SetRandomSeed = function SetRandomSeed(seed) {
    mod._SetRandomSeed(processFunctionInput(seed, 'unsigned int'))
  }

  // Takes a screenshot of current screen (filename extension defines format): (const char *) => void
  iface.TakeScreenshot = function TakeScreenshot(fileName) {
    mod._TakeScreenshot(processFunctionInput(fileName, 'const char *'))
  }

  // Setup init configuration flags (view FLAGS): (unsigned int) => void
  iface.SetConfigFlags = function SetConfigFlags(flags) {
    mod._SetConfigFlags(processFunctionInput(flags, 'unsigned int'))
  }

  // Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...): (int, const char *, ...) => void
  iface.TraceLog = function TraceLog(logLevel, text, args) {
    mod._TraceLog(processFunctionInput(logLevel, 'int'), processFunctionInput(text, 'const char *'), processFunctionInput(args, '...'))
  }

  // Set the current threshold (minimum) log level: (int) => void
  iface.SetTraceLogLevel = function SetTraceLogLevel(logLevel) {
    mod._SetTraceLogLevel(processFunctionInput(logLevel, 'int'))
  }

  // Internal memory allocator: (unsigned int) => void *
  iface.MemAlloc = function MemAlloc(size) {
    return processFunctionReturn(mod._MemAlloc(processFunctionInput(size, 'unsigned int')), 'void *')
  }

  // Internal memory reallocator: (void *, unsigned int) => void *
  iface.MemRealloc = function MemRealloc(ptr, size) {
    return processFunctionReturn(mod._MemRealloc(processFunctionInput(ptr, 'void *'), processFunctionInput(size, 'unsigned int')), 'void *')
  }

  // Internal memory free: (void *) => void
  iface.MemFree = function MemFree(ptr) {
    mod._MemFree(processFunctionInput(ptr, 'void *'))
  }

  // Open URL with default system browser (if available): (const char *) => void
  iface.OpenURL = function OpenURL(url) {
    mod._OpenURL(processFunctionInput(url, 'const char *'))
  }

  // Set custom trace log: (TraceLogCallback) => void
  iface.SetTraceLogCallback = function SetTraceLogCallback(callback) {
    mod._SetTraceLogCallback(processFunctionInput(callback, 'TraceLogCallback'))
  }

  // Set custom file binary data loader: (LoadFileDataCallback) => void
  iface.SetLoadFileDataCallback = function SetLoadFileDataCallback(callback) {
    mod._SetLoadFileDataCallback(processFunctionInput(callback, 'LoadFileDataCallback'))
  }

  // Set custom file binary data saver: (SaveFileDataCallback) => void
  iface.SetSaveFileDataCallback = function SetSaveFileDataCallback(callback) {
    mod._SetSaveFileDataCallback(processFunctionInput(callback, 'SaveFileDataCallback'))
  }

  // Set custom file text data loader: (LoadFileTextCallback) => void
  iface.SetLoadFileTextCallback = function SetLoadFileTextCallback(callback) {
    mod._SetLoadFileTextCallback(processFunctionInput(callback, 'LoadFileTextCallback'))
  }

  // Set custom file text data saver: (SaveFileTextCallback) => void
  iface.SetSaveFileTextCallback = function SetSaveFileTextCallback(callback) {
    mod._SetSaveFileTextCallback(processFunctionInput(callback, 'SaveFileTextCallback'))
  }

  // Load file data as byte array (read): (const char *, unsigned int *) => unsigned char *
  iface.LoadFileData = function LoadFileData(fileName, bytesRead) {
    return processFunctionReturn(mod._LoadFileData(processFunctionInput(fileName, 'const char *'), processFunctionInput(bytesRead, 'unsigned int *')), 'unsigned char *')
  }

  // Unload file data allocated by LoadFileData(): (unsigned char *) => void
  iface.UnloadFileData = function UnloadFileData(data) {
    mod._UnloadFileData(processFunctionInput(data, 'unsigned char *'))
  }

  // Save data to file from byte array (write), returns true on success: (const char *, void *, unsigned int) => bool
  iface.SaveFileData = function SaveFileData(fileName, data, bytesToWrite) {
    return processFunctionReturn(mod._SaveFileData(processFunctionInput(fileName, 'const char *'), processFunctionInput(data, 'void *'), processFunctionInput(bytesToWrite, 'unsigned int')), 'bool')
  }

  // Export data to code (.h), returns true on success: (const unsigned char *, unsigned int, const char *) => bool
  iface.ExportDataAsCode = function ExportDataAsCode(data, size, fileName) {
    return processFunctionReturn(mod._ExportDataAsCode(processFunctionInput(data, 'const unsigned char *'), processFunctionInput(size, 'unsigned int'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Load text data from file (read), returns a '\0' terminated string: (const char *) => char *
  iface.LoadFileText = function LoadFileText(fileName) {
    return processFunctionReturn(mod._LoadFileText(processFunctionInput(fileName, 'const char *')), 'char *')
  }

  // Unload file text data allocated by LoadFileText(): (char *) => void
  iface.UnloadFileText = function UnloadFileText(text) {
    mod._UnloadFileText(processFunctionInput(text, 'char *'))
  }

  // Save text data to file (write), string must be '\0' terminated, returns true on success: (const char *, char *) => bool
  iface.SaveFileText = function SaveFileText(fileName, text) {
    return processFunctionReturn(mod._SaveFileText(processFunctionInput(fileName, 'const char *'), processFunctionInput(text, 'char *')), 'bool')
  }

  // Check if file exists: (const char *) => bool
  iface.FileExists = function FileExists(fileName) {
    return processFunctionReturn(mod._FileExists(processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Check if a directory path exists: (const char *) => bool
  iface.DirectoryExists = function DirectoryExists(dirPath) {
    return processFunctionReturn(mod._DirectoryExists(processFunctionInput(dirPath, 'const char *')), 'bool')
  }

  // Check file extension (including point: .png, .wav): (const char *, const char *) => bool
  iface.IsFileExtension = function IsFileExtension(fileName, ext) {
    return processFunctionReturn(mod._IsFileExtension(processFunctionInput(fileName, 'const char *'), processFunctionInput(ext, 'const char *')), 'bool')
  }

  // Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h): (const char *) => int
  iface.GetFileLength = function GetFileLength(fileName) {
    return processFunctionReturn(mod._GetFileLength(processFunctionInput(fileName, 'const char *')), 'int')
  }

  // Get pointer to extension for a filename string (includes dot: '.png'): (const char *) => const char *
  iface.GetFileExtension = function GetFileExtension(fileName) {
    return processFunctionReturn(mod._GetFileExtension(processFunctionInput(fileName, 'const char *')), 'const char *')
  }

  // Get pointer to filename for a path string: (const char *) => const char *
  iface.GetFileName = function GetFileName(filePath) {
    return processFunctionReturn(mod._GetFileName(processFunctionInput(filePath, 'const char *')), 'const char *')
  }

  // Get filename string without extension (uses static string): (const char *) => const char *
  iface.GetFileNameWithoutExt = function GetFileNameWithoutExt(filePath) {
    return processFunctionReturn(mod._GetFileNameWithoutExt(processFunctionInput(filePath, 'const char *')), 'const char *')
  }

  // Get full path for a given fileName with path (uses static string): (const char *) => const char *
  iface.GetDirectoryPath = function GetDirectoryPath(filePath) {
    return processFunctionReturn(mod._GetDirectoryPath(processFunctionInput(filePath, 'const char *')), 'const char *')
  }

  // Get previous directory path for a given path (uses static string): (const char *) => const char *
  iface.GetPrevDirectoryPath = function GetPrevDirectoryPath(dirPath) {
    return processFunctionReturn(mod._GetPrevDirectoryPath(processFunctionInput(dirPath, 'const char *')), 'const char *')
  }

  // Get current working directory (uses static string): () => const char *
  iface.GetWorkingDirectory = function GetWorkingDirectory() {
    return processFunctionReturn(mod._GetWorkingDirectory(), 'const char *')
  }

  // Get the directory if the running application (uses static string): () => const char *
  iface.GetApplicationDirectory = function GetApplicationDirectory() {
    return processFunctionReturn(mod._GetApplicationDirectory(), 'const char *')
  }

  // Change working directory, return true on success: (const char *) => bool
  iface.ChangeDirectory = function ChangeDirectory(dir) {
    return processFunctionReturn(mod._ChangeDirectory(processFunctionInput(dir, 'const char *')), 'bool')
  }

  // Check if a given path is a file or a directory: (const char *) => bool
  iface.IsPathFile = function IsPathFile(path) {
    return processFunctionReturn(mod._IsPathFile(processFunctionInput(path, 'const char *')), 'bool')
  }

  // Load directory filepaths: (const char *) => FilePathList
  iface.LoadDirectoryFiles = function LoadDirectoryFiles(dirPath) {
    const _ret = new iface.FilePathList()
    mod._LoadDirectoryFiles(_ret._address, processFunctionInput(dirPath, 'const char *'))
    return _ret
  }

  // Load directory filepaths with extension filtering and recursive directory scan: (const char *, const char *, bool) => FilePathList
  iface.LoadDirectoryFilesEx = function LoadDirectoryFilesEx(basePath, filter, scanSubdirs) {
    const _ret = new iface.FilePathList()
    mod._LoadDirectoryFilesEx(_ret._address, processFunctionInput(basePath, 'const char *'), processFunctionInput(filter, 'const char *'), processFunctionInput(scanSubdirs, 'bool'))
    return _ret
  }

  // Unload filepaths: (FilePathList) => void
  iface.UnloadDirectoryFiles = function UnloadDirectoryFiles(files) {
    mod._UnloadDirectoryFiles(processFunctionInput(files, 'FilePathList'))
  }

  // Check if a file has been dropped into window: () => bool
  iface.IsFileDropped = function IsFileDropped() {
    return processFunctionReturn(mod._IsFileDropped(), 'bool')
  }

  // Load dropped filepaths: () => FilePathList
  iface.LoadDroppedFiles = function LoadDroppedFiles() {
    const _ret = new iface.FilePathList()
    mod._LoadDroppedFiles(_ret._address, )
    return _ret
  }

  // Unload dropped filepaths: (FilePathList) => void
  iface.UnloadDroppedFiles = function UnloadDroppedFiles(files) {
    mod._UnloadDroppedFiles(processFunctionInput(files, 'FilePathList'))
  }

  // Get file modification time (last write time): (const char *) => long
  iface.GetFileModTime = function GetFileModTime(fileName) {
    return processFunctionReturn(mod._GetFileModTime(processFunctionInput(fileName, 'const char *')), 'long')
  }

  // Compress data (DEFLATE algorithm), memory must be MemFree(): (const unsigned char *, int, int *) => unsigned char *
  iface.CompressData = function CompressData(data, dataSize, compDataSize) {
    return processFunctionReturn(mod._CompressData(processFunctionInput(data, 'const unsigned char *'), processFunctionInput(dataSize, 'int'), processFunctionInput(compDataSize, 'int *')), 'unsigned char *')
  }

  // Decompress data (DEFLATE algorithm), memory must be MemFree(): (const unsigned char *, int, int *) => unsigned char *
  iface.DecompressData = function DecompressData(compData, compDataSize, dataSize) {
    return processFunctionReturn(mod._DecompressData(processFunctionInput(compData, 'const unsigned char *'), processFunctionInput(compDataSize, 'int'), processFunctionInput(dataSize, 'int *')), 'unsigned char *')
  }

  // Encode data to Base64 string, memory must be MemFree(): (const unsigned char *, int, int *) => char *
  iface.EncodeDataBase64 = function EncodeDataBase64(data, dataSize, outputSize) {
    return processFunctionReturn(mod._EncodeDataBase64(processFunctionInput(data, 'const unsigned char *'), processFunctionInput(dataSize, 'int'), processFunctionInput(outputSize, 'int *')), 'char *')
  }

  // Decode Base64 string data, memory must be MemFree(): (const unsigned char *, int *) => unsigned char *
  iface.DecodeDataBase64 = function DecodeDataBase64(data, outputSize) {
    return processFunctionReturn(mod._DecodeDataBase64(processFunctionInput(data, 'const unsigned char *'), processFunctionInput(outputSize, 'int *')), 'unsigned char *')
  }

  // Check if a key has been pressed once: (int) => bool
  iface.IsKeyPressed = function IsKeyPressed(key) {
    return processFunctionReturn(mod._IsKeyPressed(processFunctionInput(key, 'int')), 'bool')
  }

  // Check if a key is being pressed: (int) => bool
  iface.IsKeyDown = function IsKeyDown(key) {
    return processFunctionReturn(mod._IsKeyDown(processFunctionInput(key, 'int')), 'bool')
  }

  // Check if a key has been released once: (int) => bool
  iface.IsKeyReleased = function IsKeyReleased(key) {
    return processFunctionReturn(mod._IsKeyReleased(processFunctionInput(key, 'int')), 'bool')
  }

  // Check if a key is NOT being pressed: (int) => bool
  iface.IsKeyUp = function IsKeyUp(key) {
    return processFunctionReturn(mod._IsKeyUp(processFunctionInput(key, 'int')), 'bool')
  }

  // Set a custom key to exit program (default is ESC): (int) => void
  iface.SetExitKey = function SetExitKey(key) {
    mod._SetExitKey(processFunctionInput(key, 'int'))
  }

  // Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty: () => int
  iface.GetKeyPressed = function GetKeyPressed() {
    return processFunctionReturn(mod._GetKeyPressed(), 'int')
  }

  // Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty: () => int
  iface.GetCharPressed = function GetCharPressed() {
    return processFunctionReturn(mod._GetCharPressed(), 'int')
  }

  // Check if a gamepad is available: (int) => bool
  iface.IsGamepadAvailable = function IsGamepadAvailable(gamepad) {
    return processFunctionReturn(mod._IsGamepadAvailable(processFunctionInput(gamepad, 'int')), 'bool')
  }

  // Get gamepad internal name id: (int) => const char *
  iface.GetGamepadName = function GetGamepadName(gamepad) {
    return processFunctionReturn(mod._GetGamepadName(processFunctionInput(gamepad, 'int')), 'const char *')
  }

  // Check if a gamepad button has been pressed once: (int, int) => bool
  iface.IsGamepadButtonPressed = function IsGamepadButtonPressed(gamepad, button) {
    return processFunctionReturn(mod._IsGamepadButtonPressed(processFunctionInput(gamepad, 'int'), processFunctionInput(button, 'int')), 'bool')
  }

  // Check if a gamepad button is being pressed: (int, int) => bool
  iface.IsGamepadButtonDown = function IsGamepadButtonDown(gamepad, button) {
    return processFunctionReturn(mod._IsGamepadButtonDown(processFunctionInput(gamepad, 'int'), processFunctionInput(button, 'int')), 'bool')
  }

  // Check if a gamepad button has been released once: (int, int) => bool
  iface.IsGamepadButtonReleased = function IsGamepadButtonReleased(gamepad, button) {
    return processFunctionReturn(mod._IsGamepadButtonReleased(processFunctionInput(gamepad, 'int'), processFunctionInput(button, 'int')), 'bool')
  }

  // Check if a gamepad button is NOT being pressed: (int, int) => bool
  iface.IsGamepadButtonUp = function IsGamepadButtonUp(gamepad, button) {
    return processFunctionReturn(mod._IsGamepadButtonUp(processFunctionInput(gamepad, 'int'), processFunctionInput(button, 'int')), 'bool')
  }

  // Get the last gamepad button pressed: () => int
  iface.GetGamepadButtonPressed = function GetGamepadButtonPressed() {
    return processFunctionReturn(mod._GetGamepadButtonPressed(), 'int')
  }

  // Get gamepad axis count for a gamepad: (int) => int
  iface.GetGamepadAxisCount = function GetGamepadAxisCount(gamepad) {
    return processFunctionReturn(mod._GetGamepadAxisCount(processFunctionInput(gamepad, 'int')), 'int')
  }

  // Get axis movement value for a gamepad axis: (int, int) => float
  iface.GetGamepadAxisMovement = function GetGamepadAxisMovement(gamepad, axis) {
    return processFunctionReturn(mod._GetGamepadAxisMovement(processFunctionInput(gamepad, 'int'), processFunctionInput(axis, 'int')), 'float')
  }

  // Set internal gamepad mappings (SDL_GameControllerDB): (const char *) => int
  iface.SetGamepadMappings = function SetGamepadMappings(mappings) {
    return processFunctionReturn(mod._SetGamepadMappings(processFunctionInput(mappings, 'const char *')), 'int')
  }

  // Check if a mouse button has been pressed once: (int) => bool
  iface.IsMouseButtonPressed = function IsMouseButtonPressed(button) {
    return processFunctionReturn(mod._IsMouseButtonPressed(processFunctionInput(button, 'int')), 'bool')
  }

  // Check if a mouse button is being pressed: (int) => bool
  iface.IsMouseButtonDown = function IsMouseButtonDown(button) {
    return processFunctionReturn(mod._IsMouseButtonDown(processFunctionInput(button, 'int')), 'bool')
  }

  // Check if a mouse button has been released once: (int) => bool
  iface.IsMouseButtonReleased = function IsMouseButtonReleased(button) {
    return processFunctionReturn(mod._IsMouseButtonReleased(processFunctionInput(button, 'int')), 'bool')
  }

  // Check if a mouse button is NOT being pressed: (int) => bool
  iface.IsMouseButtonUp = function IsMouseButtonUp(button) {
    return processFunctionReturn(mod._IsMouseButtonUp(processFunctionInput(button, 'int')), 'bool')
  }

  // Get mouse position X: () => int
  iface.GetMouseX = function GetMouseX() {
    return processFunctionReturn(mod._GetMouseX(), 'int')
  }

  // Get mouse position Y: () => int
  iface.GetMouseY = function GetMouseY() {
    return processFunctionReturn(mod._GetMouseY(), 'int')
  }

  // Get mouse position XY: () => Vector2
  iface.GetMousePosition = function GetMousePosition() {
    const _ret = new iface.Vector2()
    mod._GetMousePosition(_ret._address, )
    return _ret
  }

  // Get mouse delta between frames: () => Vector2
  iface.GetMouseDelta = function GetMouseDelta() {
    const _ret = new iface.Vector2()
    mod._GetMouseDelta(_ret._address, )
    return _ret
  }

  // Set mouse position XY: (int, int) => void
  iface.SetMousePosition = function SetMousePosition(x, y) {
    mod._SetMousePosition(processFunctionInput(x, 'int'), processFunctionInput(y, 'int'))
  }

  // Set mouse offset: (int, int) => void
  iface.SetMouseOffset = function SetMouseOffset(offsetX, offsetY) {
    mod._SetMouseOffset(processFunctionInput(offsetX, 'int'), processFunctionInput(offsetY, 'int'))
  }

  // Set mouse scaling: (float, float) => void
  iface.SetMouseScale = function SetMouseScale(scaleX, scaleY) {
    mod._SetMouseScale(processFunctionInput(scaleX, 'float'), processFunctionInput(scaleY, 'float'))
  }

  // Get mouse wheel movement for X or Y, whichever is larger: () => float
  iface.GetMouseWheelMove = function GetMouseWheelMove() {
    return processFunctionReturn(mod._GetMouseWheelMove(), 'float')
  }

  // Get mouse wheel movement for both X and Y: () => Vector2
  iface.GetMouseWheelMoveV = function GetMouseWheelMoveV() {
    const _ret = new iface.Vector2()
    mod._GetMouseWheelMoveV(_ret._address, )
    return _ret
  }

  // Set mouse cursor: (int) => void
  iface.SetMouseCursor = function SetMouseCursor(cursor) {
    mod._SetMouseCursor(processFunctionInput(cursor, 'int'))
  }

  // Get touch position X for touch point 0 (relative to screen size): () => int
  iface.GetTouchX = function GetTouchX() {
    return processFunctionReturn(mod._GetTouchX(), 'int')
  }

  // Get touch position Y for touch point 0 (relative to screen size): () => int
  iface.GetTouchY = function GetTouchY() {
    return processFunctionReturn(mod._GetTouchY(), 'int')
  }

  // Get touch position XY for a touch point index (relative to screen size): (int) => Vector2
  iface.GetTouchPosition = function GetTouchPosition(index) {
    const _ret = new iface.Vector2()
    mod._GetTouchPosition(_ret._address, processFunctionInput(index, 'int'))
    return _ret
  }

  // Get touch point identifier for given index: (int) => int
  iface.GetTouchPointId = function GetTouchPointId(index) {
    return processFunctionReturn(mod._GetTouchPointId(processFunctionInput(index, 'int')), 'int')
  }

  // Get number of touch points: () => int
  iface.GetTouchPointCount = function GetTouchPointCount() {
    return processFunctionReturn(mod._GetTouchPointCount(), 'int')
  }

  // Enable a set of gestures using flags: (unsigned int) => void
  iface.SetGesturesEnabled = function SetGesturesEnabled(flags) {
    mod._SetGesturesEnabled(processFunctionInput(flags, 'unsigned int'))
  }

  // Check if a gesture have been detected: (int) => bool
  iface.IsGestureDetected = function IsGestureDetected(gesture) {
    return processFunctionReturn(mod._IsGestureDetected(processFunctionInput(gesture, 'int')), 'bool')
  }

  // Get latest detected gesture: () => int
  iface.GetGestureDetected = function GetGestureDetected() {
    return processFunctionReturn(mod._GetGestureDetected(), 'int')
  }

  // Get gesture hold time in milliseconds: () => float
  iface.GetGestureHoldDuration = function GetGestureHoldDuration() {
    return processFunctionReturn(mod._GetGestureHoldDuration(), 'float')
  }

  // Get gesture drag vector: () => Vector2
  iface.GetGestureDragVector = function GetGestureDragVector() {
    const _ret = new iface.Vector2()
    mod._GetGestureDragVector(_ret._address, )
    return _ret
  }

  // Get gesture drag angle: () => float
  iface.GetGestureDragAngle = function GetGestureDragAngle() {
    return processFunctionReturn(mod._GetGestureDragAngle(), 'float')
  }

  // Get gesture pinch delta: () => Vector2
  iface.GetGesturePinchVector = function GetGesturePinchVector() {
    const _ret = new iface.Vector2()
    mod._GetGesturePinchVector(_ret._address, )
    return _ret
  }

  // Get gesture pinch angle: () => float
  iface.GetGesturePinchAngle = function GetGesturePinchAngle() {
    return processFunctionReturn(mod._GetGesturePinchAngle(), 'float')
  }

  // Update camera position for selected mode: (Camera *, int) => void
  iface.UpdateCamera = function UpdateCamera(camera, mode) {
    mod._UpdateCamera(processFunctionInput(camera, 'Camera *'), processFunctionInput(mode, 'int'))
  }

  // Update camera movement/rotation: (Camera *, Vector3, Vector3, float) => void
  iface.UpdateCameraPro = function UpdateCameraPro(camera, movement, rotation, zoom) {
    mod._UpdateCameraPro(processFunctionInput(camera, 'Camera *'), processFunctionInput(movement, 'Vector3'), processFunctionInput(rotation, 'Vector3'), processFunctionInput(zoom, 'float'))
  }

  // Set texture and rectangle to be used on shapes drawing: (Texture2D, Rectangle) => void
  iface.SetShapesTexture = function SetShapesTexture(texture, source) {
    mod._SetShapesTexture(processFunctionInput(texture, 'Texture2D'), processFunctionInput(source, 'Rectangle'))
  }

  // Draw a pixel: (int, int, Color) => void
  iface.DrawPixel = function DrawPixel(posX, posY, color) {
    mod._DrawPixel(processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a pixel (Vector version): (Vector2, Color) => void
  iface.DrawPixelV = function DrawPixelV(position, color) {
    mod._DrawPixelV(processFunctionInput(position, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw a line: (int, int, int, int, Color) => void
  iface.DrawLine = function DrawLine(startPosX, startPosY, endPosX, endPosY, color) {
    mod._DrawLine(processFunctionInput(startPosX, 'int'), processFunctionInput(startPosY, 'int'), processFunctionInput(endPosX, 'int'), processFunctionInput(endPosY, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a line (Vector version): (Vector2, Vector2, Color) => void
  iface.DrawLineV = function DrawLineV(startPos, endPos, color) {
    mod._DrawLineV(processFunctionInput(startPos, 'Vector2'), processFunctionInput(endPos, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw a line defining thickness: (Vector2, Vector2, float, Color) => void
  iface.DrawLineEx = function DrawLineEx(startPos, endPos, thick, color) {
    mod._DrawLineEx(processFunctionInput(startPos, 'Vector2'), processFunctionInput(endPos, 'Vector2'), processFunctionInput(thick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a line using cubic-bezier curves in-out: (Vector2, Vector2, float, Color) => void
  iface.DrawLineBezier = function DrawLineBezier(startPos, endPos, thick, color) {
    mod._DrawLineBezier(processFunctionInput(startPos, 'Vector2'), processFunctionInput(endPos, 'Vector2'), processFunctionInput(thick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw line using quadratic bezier curves with a control point: (Vector2, Vector2, Vector2, float, Color) => void
  iface.DrawLineBezierQuad = function DrawLineBezierQuad(startPos, endPos, controlPos, thick, color) {
    mod._DrawLineBezierQuad(processFunctionInput(startPos, 'Vector2'), processFunctionInput(endPos, 'Vector2'), processFunctionInput(controlPos, 'Vector2'), processFunctionInput(thick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw line using cubic bezier curves with 2 control points: (Vector2, Vector2, Vector2, Vector2, float, Color) => void
  iface.DrawLineBezierCubic = function DrawLineBezierCubic(startPos, endPos, startControlPos, endControlPos, thick, color) {
    mod._DrawLineBezierCubic(processFunctionInput(startPos, 'Vector2'), processFunctionInput(endPos, 'Vector2'), processFunctionInput(startControlPos, 'Vector2'), processFunctionInput(endControlPos, 'Vector2'), processFunctionInput(thick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw lines sequence: (Vector2 *, int, Color) => void
  iface.DrawLineStrip = function DrawLineStrip(points, pointCount, color) {
    mod._DrawLineStrip(processFunctionInput(points, 'Vector2 *'), processFunctionInput(pointCount, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled circle: (int, int, float, Color) => void
  iface.DrawCircle = function DrawCircle(centerX, centerY, radius, color) {
    mod._DrawCircle(processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radius, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a piece of a circle: (Vector2, float, float, float, int, Color) => void
  iface.DrawCircleSector = function DrawCircleSector(center, radius, startAngle, endAngle, segments, color) {
    mod._DrawCircleSector(processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'float'), processFunctionInput(startAngle, 'float'), processFunctionInput(endAngle, 'float'), processFunctionInput(segments, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw circle sector outline: (Vector2, float, float, float, int, Color) => void
  iface.DrawCircleSectorLines = function DrawCircleSectorLines(center, radius, startAngle, endAngle, segments, color) {
    mod._DrawCircleSectorLines(processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'float'), processFunctionInput(startAngle, 'float'), processFunctionInput(endAngle, 'float'), processFunctionInput(segments, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a gradient-filled circle: (int, int, float, Color, Color) => void
  iface.DrawCircleGradient = function DrawCircleGradient(centerX, centerY, radius, color1, color2) {
    mod._DrawCircleGradient(processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radius, 'float'), processFunctionInput(color1, 'Color'), processFunctionInput(color2, 'Color'))
  }

  // Draw a color-filled circle (Vector version): (Vector2, float, Color) => void
  iface.DrawCircleV = function DrawCircleV(center, radius, color) {
    mod._DrawCircleV(processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw circle outline: (int, int, float, Color) => void
  iface.DrawCircleLines = function DrawCircleLines(centerX, centerY, radius, color) {
    mod._DrawCircleLines(processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radius, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw ellipse: (int, int, float, float, Color) => void
  iface.DrawEllipse = function DrawEllipse(centerX, centerY, radiusH, radiusV, color) {
    mod._DrawEllipse(processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radiusH, 'float'), processFunctionInput(radiusV, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw ellipse outline: (int, int, float, float, Color) => void
  iface.DrawEllipseLines = function DrawEllipseLines(centerX, centerY, radiusH, radiusV, color) {
    mod._DrawEllipseLines(processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radiusH, 'float'), processFunctionInput(radiusV, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw ring: (Vector2, float, float, float, float, int, Color) => void
  iface.DrawRing = function DrawRing(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
    mod._DrawRing(processFunctionInput(center, 'Vector2'), processFunctionInput(innerRadius, 'float'), processFunctionInput(outerRadius, 'float'), processFunctionInput(startAngle, 'float'), processFunctionInput(endAngle, 'float'), processFunctionInput(segments, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw ring outline: (Vector2, float, float, float, float, int, Color) => void
  iface.DrawRingLines = function DrawRingLines(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
    mod._DrawRingLines(processFunctionInput(center, 'Vector2'), processFunctionInput(innerRadius, 'float'), processFunctionInput(outerRadius, 'float'), processFunctionInput(startAngle, 'float'), processFunctionInput(endAngle, 'float'), processFunctionInput(segments, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled rectangle: (int, int, int, int, Color) => void
  iface.DrawRectangle = function DrawRectangle(posX, posY, width, height, color) {
    mod._DrawRectangle(processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled rectangle (Vector version): (Vector2, Vector2, Color) => void
  iface.DrawRectangleV = function DrawRectangleV(position, size, color) {
    mod._DrawRectangleV(processFunctionInput(position, 'Vector2'), processFunctionInput(size, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled rectangle: (Rectangle, Color) => void
  iface.DrawRectangleRec = function DrawRectangleRec(rec, color) {
    mod._DrawRectangleRec(processFunctionInput(rec, 'Rectangle'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled rectangle with pro parameters: (Rectangle, Vector2, float, Color) => void
  iface.DrawRectanglePro = function DrawRectanglePro(rec, origin, rotation, color) {
    mod._DrawRectanglePro(processFunctionInput(rec, 'Rectangle'), processFunctionInput(origin, 'Vector2'), processFunctionInput(rotation, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a vertical-gradient-filled rectangle: (int, int, int, int, Color, Color) => void
  iface.DrawRectangleGradientV = function DrawRectangleGradientV(posX, posY, width, height, color1, color2) {
    mod._DrawRectangleGradientV(processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(color1, 'Color'), processFunctionInput(color2, 'Color'))
  }

  // Draw a horizontal-gradient-filled rectangle: (int, int, int, int, Color, Color) => void
  iface.DrawRectangleGradientH = function DrawRectangleGradientH(posX, posY, width, height, color1, color2) {
    mod._DrawRectangleGradientH(processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(color1, 'Color'), processFunctionInput(color2, 'Color'))
  }

  // Draw a gradient-filled rectangle with custom vertex colors: (Rectangle, Color, Color, Color, Color) => void
  iface.DrawRectangleGradientEx = function DrawRectangleGradientEx(rec, col1, col2, col3, col4) {
    mod._DrawRectangleGradientEx(processFunctionInput(rec, 'Rectangle'), processFunctionInput(col1, 'Color'), processFunctionInput(col2, 'Color'), processFunctionInput(col3, 'Color'), processFunctionInput(col4, 'Color'))
  }

  // Draw rectangle outline: (int, int, int, int, Color) => void
  iface.DrawRectangleLines = function DrawRectangleLines(posX, posY, width, height, color) {
    mod._DrawRectangleLines(processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle outline with extended parameters: (Rectangle, float, Color) => void
  iface.DrawRectangleLinesEx = function DrawRectangleLinesEx(rec, lineThick, color) {
    mod._DrawRectangleLinesEx(processFunctionInput(rec, 'Rectangle'), processFunctionInput(lineThick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle with rounded edges: (Rectangle, float, int, Color) => void
  iface.DrawRectangleRounded = function DrawRectangleRounded(rec, roundness, segments, color) {
    mod._DrawRectangleRounded(processFunctionInput(rec, 'Rectangle'), processFunctionInput(roundness, 'float'), processFunctionInput(segments, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle with rounded edges outline: (Rectangle, float, int, float, Color) => void
  iface.DrawRectangleRoundedLines = function DrawRectangleRoundedLines(rec, roundness, segments, lineThick, color) {
    mod._DrawRectangleRoundedLines(processFunctionInput(rec, 'Rectangle'), processFunctionInput(roundness, 'float'), processFunctionInput(segments, 'int'), processFunctionInput(lineThick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled triangle (vertex in counter-clockwise order!): (Vector2, Vector2, Vector2, Color) => void
  iface.DrawTriangle = function DrawTriangle(v1, v2, v3, color) {
    mod._DrawTriangle(processFunctionInput(v1, 'Vector2'), processFunctionInput(v2, 'Vector2'), processFunctionInput(v3, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw triangle outline (vertex in counter-clockwise order!): (Vector2, Vector2, Vector2, Color) => void
  iface.DrawTriangleLines = function DrawTriangleLines(v1, v2, v3, color) {
    mod._DrawTriangleLines(processFunctionInput(v1, 'Vector2'), processFunctionInput(v2, 'Vector2'), processFunctionInput(v3, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw a triangle fan defined by points (first vertex is the center): (Vector2 *, int, Color) => void
  iface.DrawTriangleFan = function DrawTriangleFan(points, pointCount, color) {
    mod._DrawTriangleFan(processFunctionInput(points, 'Vector2 *'), processFunctionInput(pointCount, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a triangle strip defined by points: (Vector2 *, int, Color) => void
  iface.DrawTriangleStrip = function DrawTriangleStrip(points, pointCount, color) {
    mod._DrawTriangleStrip(processFunctionInput(points, 'Vector2 *'), processFunctionInput(pointCount, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a regular polygon (Vector version): (Vector2, int, float, float, Color) => void
  iface.DrawPoly = function DrawPoly(center, sides, radius, rotation, color) {
    mod._DrawPoly(processFunctionInput(center, 'Vector2'), processFunctionInput(sides, 'int'), processFunctionInput(radius, 'float'), processFunctionInput(rotation, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a polygon outline of n sides: (Vector2, int, float, float, Color) => void
  iface.DrawPolyLines = function DrawPolyLines(center, sides, radius, rotation, color) {
    mod._DrawPolyLines(processFunctionInput(center, 'Vector2'), processFunctionInput(sides, 'int'), processFunctionInput(radius, 'float'), processFunctionInput(rotation, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a polygon outline of n sides with extended parameters: (Vector2, int, float, float, float, Color) => void
  iface.DrawPolyLinesEx = function DrawPolyLinesEx(center, sides, radius, rotation, lineThick, color) {
    mod._DrawPolyLinesEx(processFunctionInput(center, 'Vector2'), processFunctionInput(sides, 'int'), processFunctionInput(radius, 'float'), processFunctionInput(rotation, 'float'), processFunctionInput(lineThick, 'float'), processFunctionInput(color, 'Color'))
  }

  // Check collision between two rectangles: (Rectangle, Rectangle) => bool
  iface.CheckCollisionRecs = function CheckCollisionRecs(rec1, rec2) {
    return processFunctionReturn(mod._CheckCollisionRecs(processFunctionInput(rec1, 'Rectangle'), processFunctionInput(rec2, 'Rectangle')), 'bool')
  }

  // Check collision between two circles: (Vector2, float, Vector2, float) => bool
  iface.CheckCollisionCircles = function CheckCollisionCircles(center1, radius1, center2, radius2) {
    return processFunctionReturn(mod._CheckCollisionCircles(processFunctionInput(center1, 'Vector2'), processFunctionInput(radius1, 'float'), processFunctionInput(center2, 'Vector2'), processFunctionInput(radius2, 'float')), 'bool')
  }

  // Check collision between circle and rectangle: (Vector2, float, Rectangle) => bool
  iface.CheckCollisionCircleRec = function CheckCollisionCircleRec(center, radius, rec) {
    return processFunctionReturn(mod._CheckCollisionCircleRec(processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'float'), processFunctionInput(rec, 'Rectangle')), 'bool')
  }

  // Check if point is inside rectangle: (Vector2, Rectangle) => bool
  iface.CheckCollisionPointRec = function CheckCollisionPointRec(point, rec) {
    return processFunctionReturn(mod._CheckCollisionPointRec(processFunctionInput(point, 'Vector2'), processFunctionInput(rec, 'Rectangle')), 'bool')
  }

  // Check if point is inside circle: (Vector2, Vector2, float) => bool
  iface.CheckCollisionPointCircle = function CheckCollisionPointCircle(point, center, radius) {
    return processFunctionReturn(mod._CheckCollisionPointCircle(processFunctionInput(point, 'Vector2'), processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'float')), 'bool')
  }

  // Check if point is inside a triangle: (Vector2, Vector2, Vector2, Vector2) => bool
  iface.CheckCollisionPointTriangle = function CheckCollisionPointTriangle(point, p1, p2, p3) {
    return processFunctionReturn(mod._CheckCollisionPointTriangle(processFunctionInput(point, 'Vector2'), processFunctionInput(p1, 'Vector2'), processFunctionInput(p2, 'Vector2'), processFunctionInput(p3, 'Vector2')), 'bool')
  }

  // Check if point is within a polygon described by array of vertices: (Vector2, Vector2 *, int) => bool
  iface.CheckCollisionPointPoly = function CheckCollisionPointPoly(point, points, pointCount) {
    return processFunctionReturn(mod._CheckCollisionPointPoly(processFunctionInput(point, 'Vector2'), processFunctionInput(points, 'Vector2 *'), processFunctionInput(pointCount, 'int')), 'bool')
  }

  // Check the collision between two lines defined by two points each, returns collision point by reference: (Vector2, Vector2, Vector2, Vector2, Vector2 *) => bool
  iface.CheckCollisionLines = function CheckCollisionLines(startPos1, endPos1, startPos2, endPos2, collisionPoint) {
    return processFunctionReturn(mod._CheckCollisionLines(processFunctionInput(startPos1, 'Vector2'), processFunctionInput(endPos1, 'Vector2'), processFunctionInput(startPos2, 'Vector2'), processFunctionInput(endPos2, 'Vector2'), processFunctionInput(collisionPoint, 'Vector2 *')), 'bool')
  }

  // Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]: (Vector2, Vector2, Vector2, int) => bool
  iface.CheckCollisionPointLine = function CheckCollisionPointLine(point, p1, p2, threshold) {
    return processFunctionReturn(mod._CheckCollisionPointLine(processFunctionInput(point, 'Vector2'), processFunctionInput(p1, 'Vector2'), processFunctionInput(p2, 'Vector2'), processFunctionInput(threshold, 'int')), 'bool')
  }

  // Get collision rectangle for two rectangles collision: (Rectangle, Rectangle) => Rectangle
  iface.GetCollisionRec = function GetCollisionRec(rec1, rec2) {
    const _ret = new iface.Rectangle()
    mod._GetCollisionRec(_ret._address, processFunctionInput(rec1, 'Rectangle'), processFunctionInput(rec2, 'Rectangle'))
    return _ret
  }

  // Load image from file into CPU memory (RAM): (const char *) => Image
  iface.LoadImage = function LoadImage(fileName) {
    const _ret = new iface.Image()
    mod._LoadImage(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load image from RAW file data: (const char *, int, int, int, int) => Image
  iface.LoadImageRaw = function LoadImageRaw(fileName, width, height, format, headerSize) {
    const _ret = new iface.Image()
    mod._LoadImageRaw(_ret._address, processFunctionInput(fileName, 'const char *'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(format, 'int'), processFunctionInput(headerSize, 'int'))
    return _ret
  }

  // Load image sequence from file (frames appended to image.data): (const char *, int *) => Image
  iface.LoadImageAnim = function LoadImageAnim(fileName, frames) {
    const _ret = new iface.Image()
    mod._LoadImageAnim(_ret._address, processFunctionInput(fileName, 'const char *'), processFunctionInput(frames, 'int *'))
    return _ret
  }

  // Load image from memory buffer, fileType refers to extension: i.e. '.png': (const char *, const unsigned char *, int) => Image
  iface.LoadImageFromMemory = function LoadImageFromMemory(fileType, fileData, dataSize) {
    const _ret = new iface.Image()
    mod._LoadImageFromMemory(_ret._address, processFunctionInput(fileType, 'const char *'), processFunctionInput(fileData, 'const unsigned char *'), processFunctionInput(dataSize, 'int'))
    return _ret
  }

  // Load image from GPU texture data: (Texture2D) => Image
  iface.LoadImageFromTexture = function LoadImageFromTexture(texture) {
    const _ret = new iface.Image()
    mod._LoadImageFromTexture(_ret._address, processFunctionInput(texture, 'Texture2D'))
    return _ret
  }

  // Load image from screen buffer and (screenshot): () => Image
  iface.LoadImageFromScreen = function LoadImageFromScreen() {
    const _ret = new iface.Image()
    mod._LoadImageFromScreen(_ret._address, )
    return _ret
  }

  // Check if an image is ready: (Image) => bool
  iface.IsImageReady = function IsImageReady(image) {
    return processFunctionReturn(mod._IsImageReady(processFunctionInput(image, 'Image')), 'bool')
  }

  // Unload image from CPU memory (RAM): (Image) => void
  iface.UnloadImage = function UnloadImage(image) {
    mod._UnloadImage(processFunctionInput(image, 'Image'))
  }

  // Export image data to file, returns true on success: (Image, const char *) => bool
  iface.ExportImage = function ExportImage(image, fileName) {
    return processFunctionReturn(mod._ExportImage(processFunctionInput(image, 'Image'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Export image as code file defining an array of bytes, returns true on success: (Image, const char *) => bool
  iface.ExportImageAsCode = function ExportImageAsCode(image, fileName) {
    return processFunctionReturn(mod._ExportImageAsCode(processFunctionInput(image, 'Image'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Generate image: plain color: (int, int, Color) => Image
  iface.GenImageColor = function GenImageColor(width, height, color) {
    const _ret = new iface.Image()
    mod._GenImageColor(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(color, 'Color'))
    return _ret
  }

  // Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient: (int, int, int, Color, Color) => Image
  iface.GenImageGradientLinear = function GenImageGradientLinear(width, height, direction, start, end) {
    const _ret = new iface.Image()
    mod._GenImageGradientLinear(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(direction, 'int'), processFunctionInput(start, 'Color'), processFunctionInput(end, 'Color'))
    return _ret
  }

  // Generate image: radial gradient: (int, int, float, Color, Color) => Image
  iface.GenImageGradientRadial = function GenImageGradientRadial(width, height, density, inner, outer) {
    const _ret = new iface.Image()
    mod._GenImageGradientRadial(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(density, 'float'), processFunctionInput(inner, 'Color'), processFunctionInput(outer, 'Color'))
    return _ret
  }

  // Generate image: square gradient: (int, int, float, Color, Color) => Image
  iface.GenImageGradientSquare = function GenImageGradientSquare(width, height, density, inner, outer) {
    const _ret = new iface.Image()
    mod._GenImageGradientSquare(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(density, 'float'), processFunctionInput(inner, 'Color'), processFunctionInput(outer, 'Color'))
    return _ret
  }

  // Generate image: checked: (int, int, int, int, Color, Color) => Image
  iface.GenImageChecked = function GenImageChecked(width, height, checksX, checksY, col1, col2) {
    const _ret = new iface.Image()
    mod._GenImageChecked(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(checksX, 'int'), processFunctionInput(checksY, 'int'), processFunctionInput(col1, 'Color'), processFunctionInput(col2, 'Color'))
    return _ret
  }

  // Generate image: white noise: (int, int, float) => Image
  iface.GenImageWhiteNoise = function GenImageWhiteNoise(width, height, factor) {
    const _ret = new iface.Image()
    mod._GenImageWhiteNoise(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(factor, 'float'))
    return _ret
  }

  // Generate image: perlin noise: (int, int, int, int, float) => Image
  iface.GenImagePerlinNoise = function GenImagePerlinNoise(width, height, offsetX, offsetY, scale) {
    const _ret = new iface.Image()
    mod._GenImagePerlinNoise(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(offsetX, 'int'), processFunctionInput(offsetY, 'int'), processFunctionInput(scale, 'float'))
    return _ret
  }

  // Generate image: cellular algorithm, bigger tileSize means bigger cells: (int, int, int) => Image
  iface.GenImageCellular = function GenImageCellular(width, height, tileSize) {
    const _ret = new iface.Image()
    mod._GenImageCellular(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(tileSize, 'int'))
    return _ret
  }

  // Generate image: grayscale image from text data: (int, int, const char *) => Image
  iface.GenImageText = function GenImageText(width, height, text) {
    const _ret = new iface.Image()
    mod._GenImageText(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(text, 'const char *'))
    return _ret
  }

  // Create an image duplicate (useful for transformations): (Image) => Image
  iface.ImageCopy = function ImageCopy(image) {
    const _ret = new iface.Image()
    mod._ImageCopy(_ret._address, processFunctionInput(image, 'Image'))
    return _ret
  }

  // Create an image from another image piece: (Image, Rectangle) => Image
  iface.ImageFromImage = function ImageFromImage(image, rec) {
    const _ret = new iface.Image()
    mod._ImageFromImage(_ret._address, processFunctionInput(image, 'Image'), processFunctionInput(rec, 'Rectangle'))
    return _ret
  }

  // Create an image from text (default font): (const char *, int, Color) => Image
  iface.ImageText = function ImageText(text, fontSize, color) {
    const _ret = new iface.Image()
    mod._ImageText(_ret._address, processFunctionInput(text, 'const char *'), processFunctionInput(fontSize, 'int'), processFunctionInput(color, 'Color'))
    return _ret
  }

  // Create an image from text (custom sprite font): (Font, const char *, float, float, Color) => Image
  iface.ImageTextEx = function ImageTextEx(font, text, fontSize, spacing, tint) {
    const _ret = new iface.Image()
    mod._ImageTextEx(_ret._address, processFunctionInput(font, 'Font'), processFunctionInput(text, 'const char *'), processFunctionInput(fontSize, 'float'), processFunctionInput(spacing, 'float'), processFunctionInput(tint, 'Color'))
    return _ret
  }

  // Convert image data to desired format: (Image *, int) => void
  iface.ImageFormat = function ImageFormat(image, newFormat) {
    mod._ImageFormat(processFunctionInput(image, 'Image *'), processFunctionInput(newFormat, 'int'))
  }

  // Convert image to POT (power-of-two): (Image *, Color) => void
  iface.ImageToPOT = function ImageToPOT(image, fill) {
    mod._ImageToPOT(processFunctionInput(image, 'Image *'), processFunctionInput(fill, 'Color'))
  }

  // Crop an image to a defined rectangle: (Image *, Rectangle) => void
  iface.ImageCrop = function ImageCrop(image, crop) {
    mod._ImageCrop(processFunctionInput(image, 'Image *'), processFunctionInput(crop, 'Rectangle'))
  }

  // Crop image depending on alpha value: (Image *, float) => void
  iface.ImageAlphaCrop = function ImageAlphaCrop(image, threshold) {
    mod._ImageAlphaCrop(processFunctionInput(image, 'Image *'), processFunctionInput(threshold, 'float'))
  }

  // Clear alpha channel to desired color: (Image *, Color, float) => void
  iface.ImageAlphaClear = function ImageAlphaClear(image, color, threshold) {
    mod._ImageAlphaClear(processFunctionInput(image, 'Image *'), processFunctionInput(color, 'Color'), processFunctionInput(threshold, 'float'))
  }

  // Apply alpha mask to image: (Image *, Image) => void
  iface.ImageAlphaMask = function ImageAlphaMask(image, alphaMask) {
    mod._ImageAlphaMask(processFunctionInput(image, 'Image *'), processFunctionInput(alphaMask, 'Image'))
  }

  // Premultiply alpha channel: (Image *) => void
  iface.ImageAlphaPremultiply = function ImageAlphaPremultiply(image) {
    mod._ImageAlphaPremultiply(processFunctionInput(image, 'Image *'))
  }

  // Apply Gaussian blur using a box blur approximation: (Image *, int) => void
  iface.ImageBlurGaussian = function ImageBlurGaussian(image, blurSize) {
    mod._ImageBlurGaussian(processFunctionInput(image, 'Image *'), processFunctionInput(blurSize, 'int'))
  }

  // Resize image (Bicubic scaling algorithm): (Image *, int, int) => void
  iface.ImageResize = function ImageResize(image, newWidth, newHeight) {
    mod._ImageResize(processFunctionInput(image, 'Image *'), processFunctionInput(newWidth, 'int'), processFunctionInput(newHeight, 'int'))
  }

  // Resize image (Nearest-Neighbor scaling algorithm): (Image *, int, int) => void
  iface.ImageResizeNN = function ImageResizeNN(image, newWidth, newHeight) {
    mod._ImageResizeNN(processFunctionInput(image, 'Image *'), processFunctionInput(newWidth, 'int'), processFunctionInput(newHeight, 'int'))
  }

  // Resize canvas and fill with color: (Image *, int, int, int, int, Color) => void
  iface.ImageResizeCanvas = function ImageResizeCanvas(image, newWidth, newHeight, offsetX, offsetY, fill) {
    mod._ImageResizeCanvas(processFunctionInput(image, 'Image *'), processFunctionInput(newWidth, 'int'), processFunctionInput(newHeight, 'int'), processFunctionInput(offsetX, 'int'), processFunctionInput(offsetY, 'int'), processFunctionInput(fill, 'Color'))
  }

  // Compute all mipmap levels for a provided image: (Image *) => void
  iface.ImageMipmaps = function ImageMipmaps(image) {
    mod._ImageMipmaps(processFunctionInput(image, 'Image *'))
  }

  // Dither image data to 16bpp or lower (Floyd-Steinberg dithering): (Image *, int, int, int, int) => void
  iface.ImageDither = function ImageDither(image, rBpp, gBpp, bBpp, aBpp) {
    mod._ImageDither(processFunctionInput(image, 'Image *'), processFunctionInput(rBpp, 'int'), processFunctionInput(gBpp, 'int'), processFunctionInput(bBpp, 'int'), processFunctionInput(aBpp, 'int'))
  }

  // Flip image vertically: (Image *) => void
  iface.ImageFlipVertical = function ImageFlipVertical(image) {
    mod._ImageFlipVertical(processFunctionInput(image, 'Image *'))
  }

  // Flip image horizontally: (Image *) => void
  iface.ImageFlipHorizontal = function ImageFlipHorizontal(image) {
    mod._ImageFlipHorizontal(processFunctionInput(image, 'Image *'))
  }

  // Rotate image by input angle in degrees (-359 to 359) : (Image *, int) => void
  iface.ImageRotate = function ImageRotate(image, degrees) {
    mod._ImageRotate(processFunctionInput(image, 'Image *'), processFunctionInput(degrees, 'int'))
  }

  // Rotate image clockwise 90deg: (Image *) => void
  iface.ImageRotateCW = function ImageRotateCW(image) {
    mod._ImageRotateCW(processFunctionInput(image, 'Image *'))
  }

  // Rotate image counter-clockwise 90deg: (Image *) => void
  iface.ImageRotateCCW = function ImageRotateCCW(image) {
    mod._ImageRotateCCW(processFunctionInput(image, 'Image *'))
  }

  // Modify image color: tint: (Image *, Color) => void
  iface.ImageColorTint = function ImageColorTint(image, color) {
    mod._ImageColorTint(processFunctionInput(image, 'Image *'), processFunctionInput(color, 'Color'))
  }

  // Modify image color: invert: (Image *) => void
  iface.ImageColorInvert = function ImageColorInvert(image) {
    mod._ImageColorInvert(processFunctionInput(image, 'Image *'))
  }

  // Modify image color: grayscale: (Image *) => void
  iface.ImageColorGrayscale = function ImageColorGrayscale(image) {
    mod._ImageColorGrayscale(processFunctionInput(image, 'Image *'))
  }

  // Modify image color: contrast (-100 to 100): (Image *, float) => void
  iface.ImageColorContrast = function ImageColorContrast(image, contrast) {
    mod._ImageColorContrast(processFunctionInput(image, 'Image *'), processFunctionInput(contrast, 'float'))
  }

  // Modify image color: brightness (-255 to 255): (Image *, int) => void
  iface.ImageColorBrightness = function ImageColorBrightness(image, brightness) {
    mod._ImageColorBrightness(processFunctionInput(image, 'Image *'), processFunctionInput(brightness, 'int'))
  }

  // Modify image color: replace color: (Image *, Color, Color) => void
  iface.ImageColorReplace = function ImageColorReplace(image, color, replace) {
    mod._ImageColorReplace(processFunctionInput(image, 'Image *'), processFunctionInput(color, 'Color'), processFunctionInput(replace, 'Color'))
  }

  // Load color data from image as a Color array (RGBA - 32bit): (Image) => Color *
  iface.LoadImageColors = function LoadImageColors(image) {
    return processFunctionReturn(mod._LoadImageColors(processFunctionInput(image, 'Image')), 'Color *')
  }

  // Load colors palette from image as a Color array (RGBA - 32bit): (Image, int, int *) => Color *
  iface.LoadImagePalette = function LoadImagePalette(image, maxPaletteSize, colorCount) {
    return processFunctionReturn(mod._LoadImagePalette(processFunctionInput(image, 'Image'), processFunctionInput(maxPaletteSize, 'int'), processFunctionInput(colorCount, 'int *')), 'Color *')
  }

  // Unload color data loaded with LoadImageColors(): (Color *) => void
  iface.UnloadImageColors = function UnloadImageColors(colors) {
    mod._UnloadImageColors(processFunctionInput(colors, 'Color *'))
  }

  // Unload colors palette loaded with LoadImagePalette(): (Color *) => void
  iface.UnloadImagePalette = function UnloadImagePalette(colors) {
    mod._UnloadImagePalette(processFunctionInput(colors, 'Color *'))
  }

  // Get image alpha border rectangle: (Image, float) => Rectangle
  iface.GetImageAlphaBorder = function GetImageAlphaBorder(image, threshold) {
    const _ret = new iface.Rectangle()
    mod._GetImageAlphaBorder(_ret._address, processFunctionInput(image, 'Image'), processFunctionInput(threshold, 'float'))
    return _ret
  }

  // Get image pixel color at (x, y) position: (Image, int, int) => Color
  iface.GetImageColor = function GetImageColor(image, x, y) {
    const _ret = new iface.Color()
    mod._GetImageColor(_ret._address, processFunctionInput(image, 'Image'), processFunctionInput(x, 'int'), processFunctionInput(y, 'int'))
    return _ret
  }

  // Clear image background with given color: (Image *, Color) => void
  iface.ImageClearBackground = function ImageClearBackground(dst, color) {
    mod._ImageClearBackground(processFunctionInput(dst, 'Image *'), processFunctionInput(color, 'Color'))
  }

  // Draw pixel within an image: (Image *, int, int, Color) => void
  iface.ImageDrawPixel = function ImageDrawPixel(dst, posX, posY, color) {
    mod._ImageDrawPixel(processFunctionInput(dst, 'Image *'), processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw pixel within an image (Vector version): (Image *, Vector2, Color) => void
  iface.ImageDrawPixelV = function ImageDrawPixelV(dst, position, color) {
    mod._ImageDrawPixelV(processFunctionInput(dst, 'Image *'), processFunctionInput(position, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw line within an image: (Image *, int, int, int, int, Color) => void
  iface.ImageDrawLine = function ImageDrawLine(dst, startPosX, startPosY, endPosX, endPosY, color) {
    mod._ImageDrawLine(processFunctionInput(dst, 'Image *'), processFunctionInput(startPosX, 'int'), processFunctionInput(startPosY, 'int'), processFunctionInput(endPosX, 'int'), processFunctionInput(endPosY, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw line within an image (Vector version): (Image *, Vector2, Vector2, Color) => void
  iface.ImageDrawLineV = function ImageDrawLineV(dst, start, end, color) {
    mod._ImageDrawLineV(processFunctionInput(dst, 'Image *'), processFunctionInput(start, 'Vector2'), processFunctionInput(end, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw a filled circle within an image: (Image *, int, int, int, Color) => void
  iface.ImageDrawCircle = function ImageDrawCircle(dst, centerX, centerY, radius, color) {
    mod._ImageDrawCircle(processFunctionInput(dst, 'Image *'), processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radius, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a filled circle within an image (Vector version): (Image *, Vector2, int, Color) => void
  iface.ImageDrawCircleV = function ImageDrawCircleV(dst, center, radius, color) {
    mod._ImageDrawCircleV(processFunctionInput(dst, 'Image *'), processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw circle outline within an image: (Image *, int, int, int, Color) => void
  iface.ImageDrawCircleLines = function ImageDrawCircleLines(dst, centerX, centerY, radius, color) {
    mod._ImageDrawCircleLines(processFunctionInput(dst, 'Image *'), processFunctionInput(centerX, 'int'), processFunctionInput(centerY, 'int'), processFunctionInput(radius, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw circle outline within an image (Vector version): (Image *, Vector2, int, Color) => void
  iface.ImageDrawCircleLinesV = function ImageDrawCircleLinesV(dst, center, radius, color) {
    mod._ImageDrawCircleLinesV(processFunctionInput(dst, 'Image *'), processFunctionInput(center, 'Vector2'), processFunctionInput(radius, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle within an image: (Image *, int, int, int, int, Color) => void
  iface.ImageDrawRectangle = function ImageDrawRectangle(dst, posX, posY, width, height, color) {
    mod._ImageDrawRectangle(processFunctionInput(dst, 'Image *'), processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle within an image (Vector version): (Image *, Vector2, Vector2, Color) => void
  iface.ImageDrawRectangleV = function ImageDrawRectangleV(dst, position, size, color) {
    mod._ImageDrawRectangleV(processFunctionInput(dst, 'Image *'), processFunctionInput(position, 'Vector2'), processFunctionInput(size, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle within an image: (Image *, Rectangle, Color) => void
  iface.ImageDrawRectangleRec = function ImageDrawRectangleRec(dst, rec, color) {
    mod._ImageDrawRectangleRec(processFunctionInput(dst, 'Image *'), processFunctionInput(rec, 'Rectangle'), processFunctionInput(color, 'Color'))
  }

  // Draw rectangle lines within an image: (Image *, Rectangle, int, Color) => void
  iface.ImageDrawRectangleLines = function ImageDrawRectangleLines(dst, rec, thick, color) {
    mod._ImageDrawRectangleLines(processFunctionInput(dst, 'Image *'), processFunctionInput(rec, 'Rectangle'), processFunctionInput(thick, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a source image within a destination image (tint applied to source): (Image *, Image, Rectangle, Rectangle, Color) => void
  iface.ImageDraw = function ImageDraw(dst, src, srcRec, dstRec, tint) {
    mod._ImageDraw(processFunctionInput(dst, 'Image *'), processFunctionInput(src, 'Image'), processFunctionInput(srcRec, 'Rectangle'), processFunctionInput(dstRec, 'Rectangle'), processFunctionInput(tint, 'Color'))
  }

  // Draw text (using default font) within an image (destination): (Image *, const char *, int, int, int, Color) => void
  iface.ImageDrawText = function ImageDrawText(dst, text, posX, posY, fontSize, color) {
    mod._ImageDrawText(processFunctionInput(dst, 'Image *'), processFunctionInput(text, 'const char *'), processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(fontSize, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw text (custom sprite font) within an image (destination): (Image *, Font, const char *, Vector2, float, float, Color) => void
  iface.ImageDrawTextEx = function ImageDrawTextEx(dst, font, text, position, fontSize, spacing, tint) {
    mod._ImageDrawTextEx(processFunctionInput(dst, 'Image *'), processFunctionInput(font, 'Font'), processFunctionInput(text, 'const char *'), processFunctionInput(position, 'Vector2'), processFunctionInput(fontSize, 'float'), processFunctionInput(spacing, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Load texture from file into GPU memory (VRAM): (const char *) => Texture2D
  iface.LoadTexture = function LoadTexture(fileName) {
    const _ret = new iface.Texture2D()
    mod._LoadTexture(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load texture from image data: (Image) => Texture2D
  iface.LoadTextureFromImage = function LoadTextureFromImage(image) {
    const _ret = new iface.Texture2D()
    mod._LoadTextureFromImage(_ret._address, processFunctionInput(image, 'Image'))
    return _ret
  }

  // Load cubemap from image, multiple image cubemap layouts supported: (Image, int) => TextureCubemap
  iface.LoadTextureCubemap = function LoadTextureCubemap(image, layout) {
    const _ret = new iface.TextureCubemap()
    mod._LoadTextureCubemap(_ret._address, processFunctionInput(image, 'Image'), processFunctionInput(layout, 'int'))
    return _ret
  }

  // Load texture for rendering (framebuffer): (int, int) => RenderTexture2D
  iface.LoadRenderTexture = function LoadRenderTexture(width, height) {
    const _ret = new iface.RenderTexture2D()
    mod._LoadRenderTexture(_ret._address, processFunctionInput(width, 'int'), processFunctionInput(height, 'int'))
    return _ret
  }

  // Check if a texture is ready: (Texture2D) => bool
  iface.IsTextureReady = function IsTextureReady(texture) {
    return processFunctionReturn(mod._IsTextureReady(processFunctionInput(texture, 'Texture2D')), 'bool')
  }

  // Unload texture from GPU memory (VRAM): (Texture2D) => void
  iface.UnloadTexture = function UnloadTexture(texture) {
    mod._UnloadTexture(processFunctionInput(texture, 'Texture2D'))
  }

  // Check if a render texture is ready: (RenderTexture2D) => bool
  iface.IsRenderTextureReady = function IsRenderTextureReady(target) {
    return processFunctionReturn(mod._IsRenderTextureReady(processFunctionInput(target, 'RenderTexture2D')), 'bool')
  }

  // Unload render texture from GPU memory (VRAM): (RenderTexture2D) => void
  iface.UnloadRenderTexture = function UnloadRenderTexture(target) {
    mod._UnloadRenderTexture(processFunctionInput(target, 'RenderTexture2D'))
  }

  // Update GPU texture with new data: (Texture2D, const void *) => void
  iface.UpdateTexture = function UpdateTexture(texture, pixels) {
    mod._UpdateTexture(processFunctionInput(texture, 'Texture2D'), processFunctionInput(pixels, 'const void *'))
  }

  // Update GPU texture rectangle with new data: (Texture2D, Rectangle, const void *) => void
  iface.UpdateTextureRec = function UpdateTextureRec(texture, rec, pixels) {
    mod._UpdateTextureRec(processFunctionInput(texture, 'Texture2D'), processFunctionInput(rec, 'Rectangle'), processFunctionInput(pixels, 'const void *'))
  }

  // Generate GPU mipmaps for a texture: (Texture2D *) => void
  iface.GenTextureMipmaps = function GenTextureMipmaps(texture) {
    mod._GenTextureMipmaps(processFunctionInput(texture, 'Texture2D *'))
  }

  // Set texture scaling filter mode: (Texture2D, int) => void
  iface.SetTextureFilter = function SetTextureFilter(texture, filter) {
    mod._SetTextureFilter(processFunctionInput(texture, 'Texture2D'), processFunctionInput(filter, 'int'))
  }

  // Set texture wrapping mode: (Texture2D, int) => void
  iface.SetTextureWrap = function SetTextureWrap(texture, wrap) {
    mod._SetTextureWrap(processFunctionInput(texture, 'Texture2D'), processFunctionInput(wrap, 'int'))
  }

  // Draw a Texture2D: (Texture2D, int, int, Color) => void
  iface.DrawTexture = function DrawTexture(texture, posX, posY, tint) {
    mod._DrawTexture(processFunctionInput(texture, 'Texture2D'), processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(tint, 'Color'))
  }

  // Draw a Texture2D with position defined as Vector2: (Texture2D, Vector2, Color) => void
  iface.DrawTextureV = function DrawTextureV(texture, position, tint) {
    mod._DrawTextureV(processFunctionInput(texture, 'Texture2D'), processFunctionInput(position, 'Vector2'), processFunctionInput(tint, 'Color'))
  }

  // Draw a Texture2D with extended parameters: (Texture2D, Vector2, float, float, Color) => void
  iface.DrawTextureEx = function DrawTextureEx(texture, position, rotation, scale, tint) {
    mod._DrawTextureEx(processFunctionInput(texture, 'Texture2D'), processFunctionInput(position, 'Vector2'), processFunctionInput(rotation, 'float'), processFunctionInput(scale, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw a part of a texture defined by a rectangle: (Texture2D, Rectangle, Vector2, Color) => void
  iface.DrawTextureRec = function DrawTextureRec(texture, source, position, tint) {
    mod._DrawTextureRec(processFunctionInput(texture, 'Texture2D'), processFunctionInput(source, 'Rectangle'), processFunctionInput(position, 'Vector2'), processFunctionInput(tint, 'Color'))
  }

  // Draw a part of a texture defined by a rectangle with 'pro' parameters: (Texture2D, Rectangle, Rectangle, Vector2, float, Color) => void
  iface.DrawTexturePro = function DrawTexturePro(texture, source, dest, origin, rotation, tint) {
    mod._DrawTexturePro(processFunctionInput(texture, 'Texture2D'), processFunctionInput(source, 'Rectangle'), processFunctionInput(dest, 'Rectangle'), processFunctionInput(origin, 'Vector2'), processFunctionInput(rotation, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draws a texture (or part of it) that stretches or shrinks nicely: (Texture2D, NPatchInfo, Rectangle, Vector2, float, Color) => void
  iface.DrawTextureNPatch = function DrawTextureNPatch(texture, nPatchInfo, dest, origin, rotation, tint) {
    mod._DrawTextureNPatch(processFunctionInput(texture, 'Texture2D'), processFunctionInput(nPatchInfo, 'NPatchInfo'), processFunctionInput(dest, 'Rectangle'), processFunctionInput(origin, 'Vector2'), processFunctionInput(rotation, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: (Color, float) => Color
  iface.Fade = function Fade(color, alpha) {
    const _ret = new iface.Color()
    mod._Fade(_ret._address, processFunctionInput(color, 'Color'), processFunctionInput(alpha, 'float'))
    return _ret
  }

  // Get hexadecimal value for a Color: (Color) => int
  iface.ColorToInt = function ColorToInt(color) {
    return processFunctionReturn(mod._ColorToInt(processFunctionInput(color, 'Color')), 'int')
  }

  // Get Color normalized as float [0..1]: (Color) => Vector4
  iface.ColorNormalize = function ColorNormalize(color) {
    const _ret = new iface.Vector4()
    mod._ColorNormalize(_ret._address, processFunctionInput(color, 'Color'))
    return _ret
  }

  // Get Color from normalized values [0..1]: (Vector4) => Color
  iface.ColorFromNormalized = function ColorFromNormalized(normalized) {
    const _ret = new iface.Color()
    mod._ColorFromNormalized(_ret._address, processFunctionInput(normalized, 'Vector4'))
    return _ret
  }

  // Get HSV values for a Color, hue [0..360], saturation/value [0..1]: (Color) => Vector3
  iface.ColorToHSV = function ColorToHSV(color) {
    const _ret = new iface.Vector3()
    mod._ColorToHSV(_ret._address, processFunctionInput(color, 'Color'))
    return _ret
  }

  // Get a Color from HSV values, hue [0..360], saturation/value [0..1]: (float, float, float) => Color
  iface.ColorFromHSV = function ColorFromHSV(hue, saturation, value) {
    const _ret = new iface.Color()
    mod._ColorFromHSV(_ret._address, processFunctionInput(hue, 'float'), processFunctionInput(saturation, 'float'), processFunctionInput(value, 'float'))
    return _ret
  }

  // Get color multiplied with another color: (Color, Color) => Color
  iface.ColorTint = function ColorTint(color, tint) {
    const _ret = new iface.Color()
    mod._ColorTint(_ret._address, processFunctionInput(color, 'Color'), processFunctionInput(tint, 'Color'))
    return _ret
  }

  // Get color with brightness correction, brightness factor goes from -1.0f to 1.0f: (Color, float) => Color
  iface.ColorBrightness = function ColorBrightness(color, factor) {
    const _ret = new iface.Color()
    mod._ColorBrightness(_ret._address, processFunctionInput(color, 'Color'), processFunctionInput(factor, 'float'))
    return _ret
  }

  // Get color with contrast correction, contrast values between -1.0f and 1.0f: (Color, float) => Color
  iface.ColorContrast = function ColorContrast(color, contrast) {
    const _ret = new iface.Color()
    mod._ColorContrast(_ret._address, processFunctionInput(color, 'Color'), processFunctionInput(contrast, 'float'))
    return _ret
  }

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: (Color, float) => Color
  iface.ColorAlpha = function ColorAlpha(color, alpha) {
    const _ret = new iface.Color()
    mod._ColorAlpha(_ret._address, processFunctionInput(color, 'Color'), processFunctionInput(alpha, 'float'))
    return _ret
  }

  // Get src alpha-blended into dst color with tint: (Color, Color, Color) => Color
  iface.ColorAlphaBlend = function ColorAlphaBlend(dst, src, tint) {
    const _ret = new iface.Color()
    mod._ColorAlphaBlend(_ret._address, processFunctionInput(dst, 'Color'), processFunctionInput(src, 'Color'), processFunctionInput(tint, 'Color'))
    return _ret
  }

  // Get Color structure from hexadecimal value: (unsigned int) => Color
  iface.GetColor = function GetColor(hexValue) {
    const _ret = new iface.Color()
    mod._GetColor(_ret._address, processFunctionInput(hexValue, 'unsigned int'))
    return _ret
  }

  // Get Color from a source pixel pointer of certain format: (void *, int) => Color
  iface.GetPixelColor = function GetPixelColor(srcPtr, format) {
    const _ret = new iface.Color()
    mod._GetPixelColor(_ret._address, processFunctionInput(srcPtr, 'void *'), processFunctionInput(format, 'int'))
    return _ret
  }

  // Set color formatted into destination pixel pointer: (void *, Color, int) => void
  iface.SetPixelColor = function SetPixelColor(dstPtr, color, format) {
    mod._SetPixelColor(processFunctionInput(dstPtr, 'void *'), processFunctionInput(color, 'Color'), processFunctionInput(format, 'int'))
  }

  // Get pixel data size in bytes for certain format: (int, int, int) => int
  iface.GetPixelDataSize = function GetPixelDataSize(width, height, format) {
    return processFunctionReturn(mod._GetPixelDataSize(processFunctionInput(width, 'int'), processFunctionInput(height, 'int'), processFunctionInput(format, 'int')), 'int')
  }

  // Get the default Font: () => Font
  iface.GetFontDefault = function GetFontDefault() {
    const _ret = new iface.Font()
    mod._GetFontDefault(_ret._address, )
    return _ret
  }

  // Load font from file into GPU memory (VRAM): (const char *) => Font
  iface.LoadFont = function LoadFont(fileName) {
    const _ret = new iface.Font()
    mod._LoadFont(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set: (const char *, int, int *, int) => Font
  iface.LoadFontEx = function LoadFontEx(fileName, fontSize, fontChars, glyphCount) {
    const _ret = new iface.Font()
    mod._LoadFontEx(_ret._address, processFunctionInput(fileName, 'const char *'), processFunctionInput(fontSize, 'int'), processFunctionInput(fontChars, 'int *'), processFunctionInput(glyphCount, 'int'))
    return _ret
  }

  // Load font from Image (XNA style): (Image, Color, int) => Font
  iface.LoadFontFromImage = function LoadFontFromImage(image, key, firstChar) {
    const _ret = new iface.Font()
    mod._LoadFontFromImage(_ret._address, processFunctionInput(image, 'Image'), processFunctionInput(key, 'Color'), processFunctionInput(firstChar, 'int'))
    return _ret
  }

  // Load font from memory buffer, fileType refers to extension: i.e. '.ttf': (const char *, const unsigned char *, int, int, int *, int) => Font
  iface.LoadFontFromMemory = function LoadFontFromMemory(fileType, fileData, dataSize, fontSize, fontChars, glyphCount) {
    const _ret = new iface.Font()
    mod._LoadFontFromMemory(_ret._address, processFunctionInput(fileType, 'const char *'), processFunctionInput(fileData, 'const unsigned char *'), processFunctionInput(dataSize, 'int'), processFunctionInput(fontSize, 'int'), processFunctionInput(fontChars, 'int *'), processFunctionInput(glyphCount, 'int'))
    return _ret
  }

  // Check if a font is ready: (Font) => bool
  iface.IsFontReady = function IsFontReady(font) {
    return processFunctionReturn(mod._IsFontReady(processFunctionInput(font, 'Font')), 'bool')
  }

  // Load font data for further use: (const unsigned char *, int, int, int *, int, int) => GlyphInfo *
  iface.LoadFontData = function LoadFontData(fileData, dataSize, fontSize, fontChars, glyphCount, type) {
    return processFunctionReturn(mod._LoadFontData(processFunctionInput(fileData, 'const unsigned char *'), processFunctionInput(dataSize, 'int'), processFunctionInput(fontSize, 'int'), processFunctionInput(fontChars, 'int *'), processFunctionInput(glyphCount, 'int'), processFunctionInput(type, 'int')), 'GlyphInfo *')
  }

  // Generate image font atlas using chars info: (const GlyphInfo *, Rectangle **, int, int, int, int) => Image
  iface.GenImageFontAtlas = function GenImageFontAtlas(chars, recs, glyphCount, fontSize, padding, packMethod) {
    const _ret = new iface.Image()
    mod._GenImageFontAtlas(_ret._address, processFunctionInput(chars, 'const GlyphInfo *'), processFunctionInput(recs, 'Rectangle **'), processFunctionInput(glyphCount, 'int'), processFunctionInput(fontSize, 'int'), processFunctionInput(padding, 'int'), processFunctionInput(packMethod, 'int'))
    return _ret
  }

  // Unload font chars info data (RAM): (GlyphInfo *, int) => void
  iface.UnloadFontData = function UnloadFontData(chars, glyphCount) {
    mod._UnloadFontData(processFunctionInput(chars, 'GlyphInfo *'), processFunctionInput(glyphCount, 'int'))
  }

  // Unload font from GPU memory (VRAM): (Font) => void
  iface.UnloadFont = function UnloadFont(font) {
    mod._UnloadFont(processFunctionInput(font, 'Font'))
  }

  // Export font as code file, returns true on success: (Font, const char *) => bool
  iface.ExportFontAsCode = function ExportFontAsCode(font, fileName) {
    return processFunctionReturn(mod._ExportFontAsCode(processFunctionInput(font, 'Font'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Draw current FPS: (int, int) => void
  iface.DrawFPS = function DrawFPS(posX, posY) {
    mod._DrawFPS(processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'))
  }

  // Draw text (using default font): (const char *, int, int, int, Color) => void
  iface.DrawText = function DrawText(text, posX, posY, fontSize, color) {
    mod._DrawText(processFunctionInput(text, 'const char *'), processFunctionInput(posX, 'int'), processFunctionInput(posY, 'int'), processFunctionInput(fontSize, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw text using font and additional parameters: (Font, const char *, Vector2, float, float, Color) => void
  iface.DrawTextEx = function DrawTextEx(font, text, position, fontSize, spacing, tint) {
    mod._DrawTextEx(processFunctionInput(font, 'Font'), processFunctionInput(text, 'const char *'), processFunctionInput(position, 'Vector2'), processFunctionInput(fontSize, 'float'), processFunctionInput(spacing, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw text using Font and pro parameters (rotation): (Font, const char *, Vector2, Vector2, float, float, float, Color) => void
  iface.DrawTextPro = function DrawTextPro(font, text, position, origin, rotation, fontSize, spacing, tint) {
    mod._DrawTextPro(processFunctionInput(font, 'Font'), processFunctionInput(text, 'const char *'), processFunctionInput(position, 'Vector2'), processFunctionInput(origin, 'Vector2'), processFunctionInput(rotation, 'float'), processFunctionInput(fontSize, 'float'), processFunctionInput(spacing, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw one character (codepoint): (Font, int, Vector2, float, Color) => void
  iface.DrawTextCodepoint = function DrawTextCodepoint(font, codepoint, position, fontSize, tint) {
    mod._DrawTextCodepoint(processFunctionInput(font, 'Font'), processFunctionInput(codepoint, 'int'), processFunctionInput(position, 'Vector2'), processFunctionInput(fontSize, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw multiple character (codepoint): (Font, const int *, int, Vector2, float, float, Color) => void
  iface.DrawTextCodepoints = function DrawTextCodepoints(font, codepoints, count, position, fontSize, spacing, tint) {
    mod._DrawTextCodepoints(processFunctionInput(font, 'Font'), processFunctionInput(codepoints, 'const int *'), processFunctionInput(count, 'int'), processFunctionInput(position, 'Vector2'), processFunctionInput(fontSize, 'float'), processFunctionInput(spacing, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Measure string width for default font: (const char *, int) => int
  iface.MeasureText = function MeasureText(text, fontSize) {
    return processFunctionReturn(mod._MeasureText(processFunctionInput(text, 'const char *'), processFunctionInput(fontSize, 'int')), 'int')
  }

  // Measure string size for Font: (Font, const char *, float, float) => Vector2
  iface.MeasureTextEx = function MeasureTextEx(font, text, fontSize, spacing) {
    const _ret = new iface.Vector2()
    mod._MeasureTextEx(_ret._address, processFunctionInput(font, 'Font'), processFunctionInput(text, 'const char *'), processFunctionInput(fontSize, 'float'), processFunctionInput(spacing, 'float'))
    return _ret
  }

  // Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found: (Font, int) => int
  iface.GetGlyphIndex = function GetGlyphIndex(font, codepoint) {
    return processFunctionReturn(mod._GetGlyphIndex(processFunctionInput(font, 'Font'), processFunctionInput(codepoint, 'int')), 'int')
  }

  // Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found: (Font, int) => GlyphInfo
  iface.GetGlyphInfo = function GetGlyphInfo(font, codepoint) {
    const _ret = new iface.GlyphInfo()
    mod._GetGlyphInfo(_ret._address, processFunctionInput(font, 'Font'), processFunctionInput(codepoint, 'int'))
    return _ret
  }

  // Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found: (Font, int) => Rectangle
  iface.GetGlyphAtlasRec = function GetGlyphAtlasRec(font, codepoint) {
    const _ret = new iface.Rectangle()
    mod._GetGlyphAtlasRec(_ret._address, processFunctionInput(font, 'Font'), processFunctionInput(codepoint, 'int'))
    return _ret
  }

  // Load UTF-8 text encoded from codepoints array: (const int *, int) => char *
  iface.LoadUTF8 = function LoadUTF8(codepoints, length) {
    return processFunctionReturn(mod._LoadUTF8(processFunctionInput(codepoints, 'const int *'), processFunctionInput(length, 'int')), 'char *')
  }

  // Unload UTF-8 text encoded from codepoints array: (char *) => void
  iface.UnloadUTF8 = function UnloadUTF8(text) {
    mod._UnloadUTF8(processFunctionInput(text, 'char *'))
  }

  // Load all codepoints from a UTF-8 text string, codepoints count returned by parameter: (const char *, int *) => int *
  iface.LoadCodepoints = function LoadCodepoints(text, count) {
    return processFunctionReturn(mod._LoadCodepoints(processFunctionInput(text, 'const char *'), processFunctionInput(count, 'int *')), 'int *')
  }

  // Unload codepoints data from memory: (int *) => void
  iface.UnloadCodepoints = function UnloadCodepoints(codepoints) {
    mod._UnloadCodepoints(processFunctionInput(codepoints, 'int *'))
  }

  // Get total number of codepoints in a UTF-8 encoded string: (const char *) => int
  iface.GetCodepointCount = function GetCodepointCount(text) {
    return processFunctionReturn(mod._GetCodepointCount(processFunctionInput(text, 'const char *')), 'int')
  }

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: (const char *, int *) => int
  iface.GetCodepoint = function GetCodepoint(text, codepointSize) {
    return processFunctionReturn(mod._GetCodepoint(processFunctionInput(text, 'const char *'), processFunctionInput(codepointSize, 'int *')), 'int')
  }

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: (const char *, int *) => int
  iface.GetCodepointNext = function GetCodepointNext(text, codepointSize) {
    return processFunctionReturn(mod._GetCodepointNext(processFunctionInput(text, 'const char *'), processFunctionInput(codepointSize, 'int *')), 'int')
  }

  // Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: (const char *, int *) => int
  iface.GetCodepointPrevious = function GetCodepointPrevious(text, codepointSize) {
    return processFunctionReturn(mod._GetCodepointPrevious(processFunctionInput(text, 'const char *'), processFunctionInput(codepointSize, 'int *')), 'int')
  }

  // Encode one codepoint into UTF-8 byte array (array length returned as parameter): (int, int *) => const char *
  iface.CodepointToUTF8 = function CodepointToUTF8(codepoint, utf8Size) {
    return processFunctionReturn(mod._CodepointToUTF8(processFunctionInput(codepoint, 'int'), processFunctionInput(utf8Size, 'int *')), 'const char *')
  }

  // Copy one string to another, returns bytes copied: (char *, const char *) => int
  iface.TextCopy = function TextCopy(dst, src) {
    return processFunctionReturn(mod._TextCopy(processFunctionInput(dst, 'char *'), processFunctionInput(src, 'const char *')), 'int')
  }

  // Check if two text string are equal: (const char *, const char *) => bool
  iface.TextIsEqual = function TextIsEqual(text1, text2) {
    return processFunctionReturn(mod._TextIsEqual(processFunctionInput(text1, 'const char *'), processFunctionInput(text2, 'const char *')), 'bool')
  }

  // Get text length, checks for '\0' ending: (const char *) => unsigned int
  iface.TextLength = function TextLength(text) {
    return processFunctionReturn(mod._TextLength(processFunctionInput(text, 'const char *')), 'unsigned int')
  }

  // Text formatting with variables (sprintf() style): (const char *, ...) => const char *
  iface.TextFormat = function TextFormat(text, args) {
    return processFunctionReturn(mod._TextFormat(processFunctionInput(text, 'const char *'), processFunctionInput(args, '...')), 'const char *')
  }

  // Get a piece of a text string: (const char *, int, int) => const char *
  iface.TextSubtext = function TextSubtext(text, position, length) {
    return processFunctionReturn(mod._TextSubtext(processFunctionInput(text, 'const char *'), processFunctionInput(position, 'int'), processFunctionInput(length, 'int')), 'const char *')
  }

  // Replace text string (WARNING: memory must be freed!): (char *, const char *, const char *) => char *
  iface.TextReplace = function TextReplace(text, replace, by) {
    return processFunctionReturn(mod._TextReplace(processFunctionInput(text, 'char *'), processFunctionInput(replace, 'const char *'), processFunctionInput(by, 'const char *')), 'char *')
  }

  // Insert text in a position (WARNING: memory must be freed!): (const char *, const char *, int) => char *
  iface.TextInsert = function TextInsert(text, insert, position) {
    return processFunctionReturn(mod._TextInsert(processFunctionInput(text, 'const char *'), processFunctionInput(insert, 'const char *'), processFunctionInput(position, 'int')), 'char *')
  }

  // Join text strings with delimiter: (const char **, int, const char *) => const char *
  iface.TextJoin = function TextJoin(textList, count, delimiter) {
    return processFunctionReturn(mod._TextJoin(processFunctionInput(textList, 'const char **'), processFunctionInput(count, 'int'), processFunctionInput(delimiter, 'const char *')), 'const char *')
  }

  // Split text into multiple strings: (const char *, char, int *) => const char **
  iface.TextSplit = function TextSplit(text, delimiter, count) {
    return processFunctionReturn(mod._TextSplit(processFunctionInput(text, 'const char *'), processFunctionInput(delimiter, 'char'), processFunctionInput(count, 'int *')), 'const char **')
  }

  // Append text at specific position and move cursor!: (char *, const char *, int *) => void
  iface.TextAppend = function TextAppend(text, append, position) {
    mod._TextAppend(processFunctionInput(text, 'char *'), processFunctionInput(append, 'const char *'), processFunctionInput(position, 'int *'))
  }

  // Find first text occurrence within a string: (const char *, const char *) => int
  iface.TextFindIndex = function TextFindIndex(text, find) {
    return processFunctionReturn(mod._TextFindIndex(processFunctionInput(text, 'const char *'), processFunctionInput(find, 'const char *')), 'int')
  }

  // Get upper case version of provided string: (const char *) => const char *
  iface.TextToUpper = function TextToUpper(text) {
    return processFunctionReturn(mod._TextToUpper(processFunctionInput(text, 'const char *')), 'const char *')
  }

  // Get lower case version of provided string: (const char *) => const char *
  iface.TextToLower = function TextToLower(text) {
    return processFunctionReturn(mod._TextToLower(processFunctionInput(text, 'const char *')), 'const char *')
  }

  // Get Pascal case notation version of provided string: (const char *) => const char *
  iface.TextToPascal = function TextToPascal(text) {
    return processFunctionReturn(mod._TextToPascal(processFunctionInput(text, 'const char *')), 'const char *')
  }

  // Get integer value from text (negative values not supported): (const char *) => int
  iface.TextToInteger = function TextToInteger(text) {
    return processFunctionReturn(mod._TextToInteger(processFunctionInput(text, 'const char *')), 'int')
  }

  // Draw a line in 3D world space: (Vector3, Vector3, Color) => void
  iface.DrawLine3D = function DrawLine3D(startPos, endPos, color) {
    mod._DrawLine3D(processFunctionInput(startPos, 'Vector3'), processFunctionInput(endPos, 'Vector3'), processFunctionInput(color, 'Color'))
  }

  // Draw a point in 3D space, actually a small line: (Vector3, Color) => void
  iface.DrawPoint3D = function DrawPoint3D(position, color) {
    mod._DrawPoint3D(processFunctionInput(position, 'Vector3'), processFunctionInput(color, 'Color'))
  }

  // Draw a circle in 3D world space: (Vector3, float, Vector3, float, Color) => void
  iface.DrawCircle3D = function DrawCircle3D(center, radius, rotationAxis, rotationAngle, color) {
    mod._DrawCircle3D(processFunctionInput(center, 'Vector3'), processFunctionInput(radius, 'float'), processFunctionInput(rotationAxis, 'Vector3'), processFunctionInput(rotationAngle, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw a color-filled triangle (vertex in counter-clockwise order!): (Vector3, Vector3, Vector3, Color) => void
  iface.DrawTriangle3D = function DrawTriangle3D(v1, v2, v3, color) {
    mod._DrawTriangle3D(processFunctionInput(v1, 'Vector3'), processFunctionInput(v2, 'Vector3'), processFunctionInput(v3, 'Vector3'), processFunctionInput(color, 'Color'))
  }

  // Draw a triangle strip defined by points: (Vector3 *, int, Color) => void
  iface.DrawTriangleStrip3D = function DrawTriangleStrip3D(points, pointCount, color) {
    mod._DrawTriangleStrip3D(processFunctionInput(points, 'Vector3 *'), processFunctionInput(pointCount, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw cube: (Vector3, float, float, float, Color) => void
  iface.DrawCube = function DrawCube(position, width, height, length, color) {
    mod._DrawCube(processFunctionInput(position, 'Vector3'), processFunctionInput(width, 'float'), processFunctionInput(height, 'float'), processFunctionInput(length, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw cube (Vector version): (Vector3, Vector3, Color) => void
  iface.DrawCubeV = function DrawCubeV(position, size, color) {
    mod._DrawCubeV(processFunctionInput(position, 'Vector3'), processFunctionInput(size, 'Vector3'), processFunctionInput(color, 'Color'))
  }

  // Draw cube wires: (Vector3, float, float, float, Color) => void
  iface.DrawCubeWires = function DrawCubeWires(position, width, height, length, color) {
    mod._DrawCubeWires(processFunctionInput(position, 'Vector3'), processFunctionInput(width, 'float'), processFunctionInput(height, 'float'), processFunctionInput(length, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw cube wires (Vector version): (Vector3, Vector3, Color) => void
  iface.DrawCubeWiresV = function DrawCubeWiresV(position, size, color) {
    mod._DrawCubeWiresV(processFunctionInput(position, 'Vector3'), processFunctionInput(size, 'Vector3'), processFunctionInput(color, 'Color'))
  }

  // Draw sphere: (Vector3, float, Color) => void
  iface.DrawSphere = function DrawSphere(centerPos, radius, color) {
    mod._DrawSphere(processFunctionInput(centerPos, 'Vector3'), processFunctionInput(radius, 'float'), processFunctionInput(color, 'Color'))
  }

  // Draw sphere with extended parameters: (Vector3, float, int, int, Color) => void
  iface.DrawSphereEx = function DrawSphereEx(centerPos, radius, rings, slices, color) {
    mod._DrawSphereEx(processFunctionInput(centerPos, 'Vector3'), processFunctionInput(radius, 'float'), processFunctionInput(rings, 'int'), processFunctionInput(slices, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw sphere wires: (Vector3, float, int, int, Color) => void
  iface.DrawSphereWires = function DrawSphereWires(centerPos, radius, rings, slices, color) {
    mod._DrawSphereWires(processFunctionInput(centerPos, 'Vector3'), processFunctionInput(radius, 'float'), processFunctionInput(rings, 'int'), processFunctionInput(slices, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a cylinder/cone: (Vector3, float, float, float, int, Color) => void
  iface.DrawCylinder = function DrawCylinder(position, radiusTop, radiusBottom, height, slices, color) {
    mod._DrawCylinder(processFunctionInput(position, 'Vector3'), processFunctionInput(radiusTop, 'float'), processFunctionInput(radiusBottom, 'float'), processFunctionInput(height, 'float'), processFunctionInput(slices, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a cylinder with base at startPos and top at endPos: (Vector3, Vector3, float, float, int, Color) => void
  iface.DrawCylinderEx = function DrawCylinderEx(startPos, endPos, startRadius, endRadius, sides, color) {
    mod._DrawCylinderEx(processFunctionInput(startPos, 'Vector3'), processFunctionInput(endPos, 'Vector3'), processFunctionInput(startRadius, 'float'), processFunctionInput(endRadius, 'float'), processFunctionInput(sides, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a cylinder/cone wires: (Vector3, float, float, float, int, Color) => void
  iface.DrawCylinderWires = function DrawCylinderWires(position, radiusTop, radiusBottom, height, slices, color) {
    mod._DrawCylinderWires(processFunctionInput(position, 'Vector3'), processFunctionInput(radiusTop, 'float'), processFunctionInput(radiusBottom, 'float'), processFunctionInput(height, 'float'), processFunctionInput(slices, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a cylinder wires with base at startPos and top at endPos: (Vector3, Vector3, float, float, int, Color) => void
  iface.DrawCylinderWiresEx = function DrawCylinderWiresEx(startPos, endPos, startRadius, endRadius, sides, color) {
    mod._DrawCylinderWiresEx(processFunctionInput(startPos, 'Vector3'), processFunctionInput(endPos, 'Vector3'), processFunctionInput(startRadius, 'float'), processFunctionInput(endRadius, 'float'), processFunctionInput(sides, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a capsule with the center of its sphere caps at startPos and endPos: (Vector3, Vector3, float, int, int, Color) => void
  iface.DrawCapsule = function DrawCapsule(startPos, endPos, radius, slices, rings, color) {
    mod._DrawCapsule(processFunctionInput(startPos, 'Vector3'), processFunctionInput(endPos, 'Vector3'), processFunctionInput(radius, 'float'), processFunctionInput(slices, 'int'), processFunctionInput(rings, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw capsule wireframe with the center of its sphere caps at startPos and endPos: (Vector3, Vector3, float, int, int, Color) => void
  iface.DrawCapsuleWires = function DrawCapsuleWires(startPos, endPos, radius, slices, rings, color) {
    mod._DrawCapsuleWires(processFunctionInput(startPos, 'Vector3'), processFunctionInput(endPos, 'Vector3'), processFunctionInput(radius, 'float'), processFunctionInput(slices, 'int'), processFunctionInput(rings, 'int'), processFunctionInput(color, 'Color'))
  }

  // Draw a plane XZ: (Vector3, Vector2, Color) => void
  iface.DrawPlane = function DrawPlane(centerPos, size, color) {
    mod._DrawPlane(processFunctionInput(centerPos, 'Vector3'), processFunctionInput(size, 'Vector2'), processFunctionInput(color, 'Color'))
  }

  // Draw a ray line: (Ray, Color) => void
  iface.DrawRay = function DrawRay(ray, color) {
    mod._DrawRay(processFunctionInput(ray, 'Ray'), processFunctionInput(color, 'Color'))
  }

  // Draw a grid (centered at (0, 0, 0)): (int, float) => void
  iface.DrawGrid = function DrawGrid(slices, spacing) {
    mod._DrawGrid(processFunctionInput(slices, 'int'), processFunctionInput(spacing, 'float'))
  }

  // Load model from files (meshes and materials): (const char *) => Model
  iface.LoadModel = function LoadModel(fileName) {
    const _ret = new iface.Model()
    mod._LoadModel(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load model from generated mesh (default material): (Mesh) => Model
  iface.LoadModelFromMesh = function LoadModelFromMesh(mesh) {
    const _ret = new iface.Model()
    mod._LoadModelFromMesh(_ret._address, processFunctionInput(mesh, 'Mesh'))
    return _ret
  }

  // Check if a model is ready: (Model) => bool
  iface.IsModelReady = function IsModelReady(model) {
    return processFunctionReturn(mod._IsModelReady(processFunctionInput(model, 'Model')), 'bool')
  }

  // Unload model (including meshes) from memory (RAM and/or VRAM): (Model) => void
  iface.UnloadModel = function UnloadModel(model) {
    mod._UnloadModel(processFunctionInput(model, 'Model'))
  }

  // Compute model bounding box limits (considers all meshes): (Model) => BoundingBox
  iface.GetModelBoundingBox = function GetModelBoundingBox(model) {
    const _ret = new iface.BoundingBox()
    mod._GetModelBoundingBox(_ret._address, processFunctionInput(model, 'Model'))
    return _ret
  }

  // Draw a model (with texture if set): (Model, Vector3, float, Color) => void
  iface.DrawModel = function DrawModel(model, position, scale, tint) {
    mod._DrawModel(processFunctionInput(model, 'Model'), processFunctionInput(position, 'Vector3'), processFunctionInput(scale, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw a model with extended parameters: (Model, Vector3, Vector3, float, Vector3, Color) => void
  iface.DrawModelEx = function DrawModelEx(model, position, rotationAxis, rotationAngle, scale, tint) {
    mod._DrawModelEx(processFunctionInput(model, 'Model'), processFunctionInput(position, 'Vector3'), processFunctionInput(rotationAxis, 'Vector3'), processFunctionInput(rotationAngle, 'float'), processFunctionInput(scale, 'Vector3'), processFunctionInput(tint, 'Color'))
  }

  // Draw a model wires (with texture if set): (Model, Vector3, float, Color) => void
  iface.DrawModelWires = function DrawModelWires(model, position, scale, tint) {
    mod._DrawModelWires(processFunctionInput(model, 'Model'), processFunctionInput(position, 'Vector3'), processFunctionInput(scale, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw a model wires (with texture if set) with extended parameters: (Model, Vector3, Vector3, float, Vector3, Color) => void
  iface.DrawModelWiresEx = function DrawModelWiresEx(model, position, rotationAxis, rotationAngle, scale, tint) {
    mod._DrawModelWiresEx(processFunctionInput(model, 'Model'), processFunctionInput(position, 'Vector3'), processFunctionInput(rotationAxis, 'Vector3'), processFunctionInput(rotationAngle, 'float'), processFunctionInput(scale, 'Vector3'), processFunctionInput(tint, 'Color'))
  }

  // Draw bounding box (wires): (BoundingBox, Color) => void
  iface.DrawBoundingBox = function DrawBoundingBox(box, color) {
    mod._DrawBoundingBox(processFunctionInput(box, 'BoundingBox'), processFunctionInput(color, 'Color'))
  }

  // Draw a billboard texture: (Camera, Texture2D, Vector3, float, Color) => void
  iface.DrawBillboard = function DrawBillboard(camera, texture, position, size, tint) {
    mod._DrawBillboard(processFunctionInput(camera, 'Camera'), processFunctionInput(texture, 'Texture2D'), processFunctionInput(position, 'Vector3'), processFunctionInput(size, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Draw a billboard texture defined by source: (Camera, Texture2D, Rectangle, Vector3, Vector2, Color) => void
  iface.DrawBillboardRec = function DrawBillboardRec(camera, texture, source, position, size, tint) {
    mod._DrawBillboardRec(processFunctionInput(camera, 'Camera'), processFunctionInput(texture, 'Texture2D'), processFunctionInput(source, 'Rectangle'), processFunctionInput(position, 'Vector3'), processFunctionInput(size, 'Vector2'), processFunctionInput(tint, 'Color'))
  }

  // Draw a billboard texture defined by source and rotation: (Camera, Texture2D, Rectangle, Vector3, Vector3, Vector2, Vector2, float, Color) => void
  iface.DrawBillboardPro = function DrawBillboardPro(camera, texture, source, position, up, size, origin, rotation, tint) {
    mod._DrawBillboardPro(processFunctionInput(camera, 'Camera'), processFunctionInput(texture, 'Texture2D'), processFunctionInput(source, 'Rectangle'), processFunctionInput(position, 'Vector3'), processFunctionInput(up, 'Vector3'), processFunctionInput(size, 'Vector2'), processFunctionInput(origin, 'Vector2'), processFunctionInput(rotation, 'float'), processFunctionInput(tint, 'Color'))
  }

  // Upload mesh vertex data in GPU and provide VAO/VBO ids: (Mesh *, bool) => void
  iface.UploadMesh = function UploadMesh(mesh, dynamic) {
    mod._UploadMesh(processFunctionInput(mesh, 'Mesh *'), processFunctionInput(dynamic, 'bool'))
  }

  // Update mesh vertex data in GPU for a specific buffer index: (Mesh, int, const void *, int, int) => void
  iface.UpdateMeshBuffer = function UpdateMeshBuffer(mesh, index, data, dataSize, offset) {
    mod._UpdateMeshBuffer(processFunctionInput(mesh, 'Mesh'), processFunctionInput(index, 'int'), processFunctionInput(data, 'const void *'), processFunctionInput(dataSize, 'int'), processFunctionInput(offset, 'int'))
  }

  // Unload mesh data from CPU and GPU: (Mesh) => void
  iface.UnloadMesh = function UnloadMesh(mesh) {
    mod._UnloadMesh(processFunctionInput(mesh, 'Mesh'))
  }

  // Draw a 3d mesh with material and transform: (Mesh, Material, Matrix) => void
  iface.DrawMesh = function DrawMesh(mesh, material, transform) {
    mod._DrawMesh(processFunctionInput(mesh, 'Mesh'), processFunctionInput(material, 'Material'), processFunctionInput(transform, 'Matrix'))
  }

  // Draw multiple mesh instances with material and different transforms: (Mesh, Material, const Matrix *, int) => void
  iface.DrawMeshInstanced = function DrawMeshInstanced(mesh, material, transforms, instances) {
    mod._DrawMeshInstanced(processFunctionInput(mesh, 'Mesh'), processFunctionInput(material, 'Material'), processFunctionInput(transforms, 'const Matrix *'), processFunctionInput(instances, 'int'))
  }

  // Export mesh data to file, returns true on success: (Mesh, const char *) => bool
  iface.ExportMesh = function ExportMesh(mesh, fileName) {
    return processFunctionReturn(mod._ExportMesh(processFunctionInput(mesh, 'Mesh'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Compute mesh bounding box limits: (Mesh) => BoundingBox
  iface.GetMeshBoundingBox = function GetMeshBoundingBox(mesh) {
    const _ret = new iface.BoundingBox()
    mod._GetMeshBoundingBox(_ret._address, processFunctionInput(mesh, 'Mesh'))
    return _ret
  }

  // Compute mesh tangents: (Mesh *) => void
  iface.GenMeshTangents = function GenMeshTangents(mesh) {
    mod._GenMeshTangents(processFunctionInput(mesh, 'Mesh *'))
  }

  // Generate polygonal mesh: (int, float) => Mesh
  iface.GenMeshPoly = function GenMeshPoly(sides, radius) {
    const _ret = new iface.Mesh()
    mod._GenMeshPoly(_ret._address, processFunctionInput(sides, 'int'), processFunctionInput(radius, 'float'))
    return _ret
  }

  // Generate plane mesh (with subdivisions): (float, float, int, int) => Mesh
  iface.GenMeshPlane = function GenMeshPlane(width, length, resX, resZ) {
    const _ret = new iface.Mesh()
    mod._GenMeshPlane(_ret._address, processFunctionInput(width, 'float'), processFunctionInput(length, 'float'), processFunctionInput(resX, 'int'), processFunctionInput(resZ, 'int'))
    return _ret
  }

  // Generate cuboid mesh: (float, float, float) => Mesh
  iface.GenMeshCube = function GenMeshCube(width, height, length) {
    const _ret = new iface.Mesh()
    mod._GenMeshCube(_ret._address, processFunctionInput(width, 'float'), processFunctionInput(height, 'float'), processFunctionInput(length, 'float'))
    return _ret
  }

  // Generate sphere mesh (standard sphere): (float, int, int) => Mesh
  iface.GenMeshSphere = function GenMeshSphere(radius, rings, slices) {
    const _ret = new iface.Mesh()
    mod._GenMeshSphere(_ret._address, processFunctionInput(radius, 'float'), processFunctionInput(rings, 'int'), processFunctionInput(slices, 'int'))
    return _ret
  }

  // Generate half-sphere mesh (no bottom cap): (float, int, int) => Mesh
  iface.GenMeshHemiSphere = function GenMeshHemiSphere(radius, rings, slices) {
    const _ret = new iface.Mesh()
    mod._GenMeshHemiSphere(_ret._address, processFunctionInput(radius, 'float'), processFunctionInput(rings, 'int'), processFunctionInput(slices, 'int'))
    return _ret
  }

  // Generate cylinder mesh: (float, float, int) => Mesh
  iface.GenMeshCylinder = function GenMeshCylinder(radius, height, slices) {
    const _ret = new iface.Mesh()
    mod._GenMeshCylinder(_ret._address, processFunctionInput(radius, 'float'), processFunctionInput(height, 'float'), processFunctionInput(slices, 'int'))
    return _ret
  }

  // Generate cone/pyramid mesh: (float, float, int) => Mesh
  iface.GenMeshCone = function GenMeshCone(radius, height, slices) {
    const _ret = new iface.Mesh()
    mod._GenMeshCone(_ret._address, processFunctionInput(radius, 'float'), processFunctionInput(height, 'float'), processFunctionInput(slices, 'int'))
    return _ret
  }

  // Generate torus mesh: (float, float, int, int) => Mesh
  iface.GenMeshTorus = function GenMeshTorus(radius, size, radSeg, sides) {
    const _ret = new iface.Mesh()
    mod._GenMeshTorus(_ret._address, processFunctionInput(radius, 'float'), processFunctionInput(size, 'float'), processFunctionInput(radSeg, 'int'), processFunctionInput(sides, 'int'))
    return _ret
  }

  // Generate trefoil knot mesh: (float, float, int, int) => Mesh
  iface.GenMeshKnot = function GenMeshKnot(radius, size, radSeg, sides) {
    const _ret = new iface.Mesh()
    mod._GenMeshKnot(_ret._address, processFunctionInput(radius, 'float'), processFunctionInput(size, 'float'), processFunctionInput(radSeg, 'int'), processFunctionInput(sides, 'int'))
    return _ret
  }

  // Generate heightmap mesh from image data: (Image, Vector3) => Mesh
  iface.GenMeshHeightmap = function GenMeshHeightmap(heightmap, size) {
    const _ret = new iface.Mesh()
    mod._GenMeshHeightmap(_ret._address, processFunctionInput(heightmap, 'Image'), processFunctionInput(size, 'Vector3'))
    return _ret
  }

  // Generate cubes-based map mesh from image data: (Image, Vector3) => Mesh
  iface.GenMeshCubicmap = function GenMeshCubicmap(cubicmap, cubeSize) {
    const _ret = new iface.Mesh()
    mod._GenMeshCubicmap(_ret._address, processFunctionInput(cubicmap, 'Image'), processFunctionInput(cubeSize, 'Vector3'))
    return _ret
  }

  // Load materials from model file: (const char *, int *) => Material *
  iface.LoadMaterials = function LoadMaterials(fileName, materialCount) {
    return processFunctionReturn(mod._LoadMaterials(processFunctionInput(fileName, 'const char *'), processFunctionInput(materialCount, 'int *')), 'Material *')
  }

  // Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps): () => Material
  iface.LoadMaterialDefault = function LoadMaterialDefault() {
    const _ret = new iface.Material()
    mod._LoadMaterialDefault(_ret._address, )
    return _ret
  }

  // Check if a material is ready: (Material) => bool
  iface.IsMaterialReady = function IsMaterialReady(material) {
    return processFunctionReturn(mod._IsMaterialReady(processFunctionInput(material, 'Material')), 'bool')
  }

  // Unload material from GPU memory (VRAM): (Material) => void
  iface.UnloadMaterial = function UnloadMaterial(material) {
    mod._UnloadMaterial(processFunctionInput(material, 'Material'))
  }

  // Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...): (Material *, int, Texture2D) => void
  iface.SetMaterialTexture = function SetMaterialTexture(material, mapType, texture) {
    mod._SetMaterialTexture(processFunctionInput(material, 'Material *'), processFunctionInput(mapType, 'int'), processFunctionInput(texture, 'Texture2D'))
  }

  // Set material for a mesh: (Model *, int, int) => void
  iface.SetModelMeshMaterial = function SetModelMeshMaterial(model, meshId, materialId) {
    mod._SetModelMeshMaterial(processFunctionInput(model, 'Model *'), processFunctionInput(meshId, 'int'), processFunctionInput(materialId, 'int'))
  }

  // Load model animations from file: (const char *, unsigned int *) => ModelAnimation *
  iface.LoadModelAnimations = function LoadModelAnimations(fileName, animCount) {
    return processFunctionReturn(mod._LoadModelAnimations(processFunctionInput(fileName, 'const char *'), processFunctionInput(animCount, 'unsigned int *')), 'ModelAnimation *')
  }

  // Update model animation pose: (Model, ModelAnimation, int) => void
  iface.UpdateModelAnimation = function UpdateModelAnimation(model, anim, frame) {
    mod._UpdateModelAnimation(processFunctionInput(model, 'Model'), processFunctionInput(anim, 'ModelAnimation'), processFunctionInput(frame, 'int'))
  }

  // Unload animation data: (ModelAnimation) => void
  iface.UnloadModelAnimation = function UnloadModelAnimation(anim) {
    mod._UnloadModelAnimation(processFunctionInput(anim, 'ModelAnimation'))
  }

  // Unload animation array data: (ModelAnimation *, unsigned int) => void
  iface.UnloadModelAnimations = function UnloadModelAnimations(animations, count) {
    mod._UnloadModelAnimations(processFunctionInput(animations, 'ModelAnimation *'), processFunctionInput(count, 'unsigned int'))
  }

  // Check model animation skeleton match: (Model, ModelAnimation) => bool
  iface.IsModelAnimationValid = function IsModelAnimationValid(model, anim) {
    return processFunctionReturn(mod._IsModelAnimationValid(processFunctionInput(model, 'Model'), processFunctionInput(anim, 'ModelAnimation')), 'bool')
  }

  // Check collision between two spheres: (Vector3, float, Vector3, float) => bool
  iface.CheckCollisionSpheres = function CheckCollisionSpheres(center1, radius1, center2, radius2) {
    return processFunctionReturn(mod._CheckCollisionSpheres(processFunctionInput(center1, 'Vector3'), processFunctionInput(radius1, 'float'), processFunctionInput(center2, 'Vector3'), processFunctionInput(radius2, 'float')), 'bool')
  }

  // Check collision between two bounding boxes: (BoundingBox, BoundingBox) => bool
  iface.CheckCollisionBoxes = function CheckCollisionBoxes(box1, box2) {
    return processFunctionReturn(mod._CheckCollisionBoxes(processFunctionInput(box1, 'BoundingBox'), processFunctionInput(box2, 'BoundingBox')), 'bool')
  }

  // Check collision between box and sphere: (BoundingBox, Vector3, float) => bool
  iface.CheckCollisionBoxSphere = function CheckCollisionBoxSphere(box, center, radius) {
    return processFunctionReturn(mod._CheckCollisionBoxSphere(processFunctionInput(box, 'BoundingBox'), processFunctionInput(center, 'Vector3'), processFunctionInput(radius, 'float')), 'bool')
  }

  // Get collision info between ray and sphere: (Ray, Vector3, float) => RayCollision
  iface.GetRayCollisionSphere = function GetRayCollisionSphere(ray, center, radius) {
    const _ret = new iface.RayCollision()
    mod._GetRayCollisionSphere(_ret._address, processFunctionInput(ray, 'Ray'), processFunctionInput(center, 'Vector3'), processFunctionInput(radius, 'float'))
    return _ret
  }

  // Get collision info between ray and box: (Ray, BoundingBox) => RayCollision
  iface.GetRayCollisionBox = function GetRayCollisionBox(ray, box) {
    const _ret = new iface.RayCollision()
    mod._GetRayCollisionBox(_ret._address, processFunctionInput(ray, 'Ray'), processFunctionInput(box, 'BoundingBox'))
    return _ret
  }

  // Get collision info between ray and mesh: (Ray, Mesh, Matrix) => RayCollision
  iface.GetRayCollisionMesh = function GetRayCollisionMesh(ray, mesh, transform) {
    const _ret = new iface.RayCollision()
    mod._GetRayCollisionMesh(_ret._address, processFunctionInput(ray, 'Ray'), processFunctionInput(mesh, 'Mesh'), processFunctionInput(transform, 'Matrix'))
    return _ret
  }

  // Get collision info between ray and triangle: (Ray, Vector3, Vector3, Vector3) => RayCollision
  iface.GetRayCollisionTriangle = function GetRayCollisionTriangle(ray, p1, p2, p3) {
    const _ret = new iface.RayCollision()
    mod._GetRayCollisionTriangle(_ret._address, processFunctionInput(ray, 'Ray'), processFunctionInput(p1, 'Vector3'), processFunctionInput(p2, 'Vector3'), processFunctionInput(p3, 'Vector3'))
    return _ret
  }

  // Get collision info between ray and quad: (Ray, Vector3, Vector3, Vector3, Vector3) => RayCollision
  iface.GetRayCollisionQuad = function GetRayCollisionQuad(ray, p1, p2, p3, p4) {
    const _ret = new iface.RayCollision()
    mod._GetRayCollisionQuad(_ret._address, processFunctionInput(ray, 'Ray'), processFunctionInput(p1, 'Vector3'), processFunctionInput(p2, 'Vector3'), processFunctionInput(p3, 'Vector3'), processFunctionInput(p4, 'Vector3'))
    return _ret
  }

  // Initialize audio device and context: () => void
  iface.InitAudioDevice = function InitAudioDevice() {
    mod._InitAudioDevice()
  }

  // Close the audio device and context: () => void
  iface.CloseAudioDevice = function CloseAudioDevice() {
    mod._CloseAudioDevice()
  }

  // Check if audio device has been initialized successfully: () => bool
  iface.IsAudioDeviceReady = function IsAudioDeviceReady() {
    return processFunctionReturn(mod._IsAudioDeviceReady(), 'bool')
  }

  // Set master volume (listener): (float) => void
  iface.SetMasterVolume = function SetMasterVolume(volume) {
    mod._SetMasterVolume(processFunctionInput(volume, 'float'))
  }

  // Load wave data from file: (const char *) => Wave
  iface.LoadWave = function LoadWave(fileName) {
    const _ret = new iface.Wave()
    mod._LoadWave(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load wave from memory buffer, fileType refers to extension: i.e. '.wav': (const char *, const unsigned char *, int) => Wave
  iface.LoadWaveFromMemory = function LoadWaveFromMemory(fileType, fileData, dataSize) {
    const _ret = new iface.Wave()
    mod._LoadWaveFromMemory(_ret._address, processFunctionInput(fileType, 'const char *'), processFunctionInput(fileData, 'const unsigned char *'), processFunctionInput(dataSize, 'int'))
    return _ret
  }

  // Checks if wave data is ready: (Wave) => bool
  iface.IsWaveReady = function IsWaveReady(wave) {
    return processFunctionReturn(mod._IsWaveReady(processFunctionInput(wave, 'Wave')), 'bool')
  }

  // Load sound from file: (const char *) => Sound
  iface.LoadSound = function LoadSound(fileName) {
    const _ret = new iface.Sound()
    mod._LoadSound(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load sound from wave data: (Wave) => Sound
  iface.LoadSoundFromWave = function LoadSoundFromWave(wave) {
    const _ret = new iface.Sound()
    mod._LoadSoundFromWave(_ret._address, processFunctionInput(wave, 'Wave'))
    return _ret
  }

  // Checks if a sound is ready: (Sound) => bool
  iface.IsSoundReady = function IsSoundReady(sound) {
    return processFunctionReturn(mod._IsSoundReady(processFunctionInput(sound, 'Sound')), 'bool')
  }

  // Update sound buffer with new data: (Sound, const void *, int) => void
  iface.UpdateSound = function UpdateSound(sound, data, sampleCount) {
    mod._UpdateSound(processFunctionInput(sound, 'Sound'), processFunctionInput(data, 'const void *'), processFunctionInput(sampleCount, 'int'))
  }

  // Unload wave data: (Wave) => void
  iface.UnloadWave = function UnloadWave(wave) {
    mod._UnloadWave(processFunctionInput(wave, 'Wave'))
  }

  // Unload sound: (Sound) => void
  iface.UnloadSound = function UnloadSound(sound) {
    mod._UnloadSound(processFunctionInput(sound, 'Sound'))
  }

  // Export wave data to file, returns true on success: (Wave, const char *) => bool
  iface.ExportWave = function ExportWave(wave, fileName) {
    return processFunctionReturn(mod._ExportWave(processFunctionInput(wave, 'Wave'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Export wave sample data to code (.h), returns true on success: (Wave, const char *) => bool
  iface.ExportWaveAsCode = function ExportWaveAsCode(wave, fileName) {
    return processFunctionReturn(mod._ExportWaveAsCode(processFunctionInput(wave, 'Wave'), processFunctionInput(fileName, 'const char *')), 'bool')
  }

  // Play a sound: (Sound) => void
  iface.PlaySound = function PlaySound(sound) {
    mod._PlaySound(processFunctionInput(sound, 'Sound'))
  }

  // Stop playing a sound: (Sound) => void
  iface.StopSound = function StopSound(sound) {
    mod._StopSound(processFunctionInput(sound, 'Sound'))
  }

  // Pause a sound: (Sound) => void
  iface.PauseSound = function PauseSound(sound) {
    mod._PauseSound(processFunctionInput(sound, 'Sound'))
  }

  // Resume a paused sound: (Sound) => void
  iface.ResumeSound = function ResumeSound(sound) {
    mod._ResumeSound(processFunctionInput(sound, 'Sound'))
  }

  // Check if a sound is currently playing: (Sound) => bool
  iface.IsSoundPlaying = function IsSoundPlaying(sound) {
    return processFunctionReturn(mod._IsSoundPlaying(processFunctionInput(sound, 'Sound')), 'bool')
  }

  // Set volume for a sound (1.0 is max level): (Sound, float) => void
  iface.SetSoundVolume = function SetSoundVolume(sound, volume) {
    mod._SetSoundVolume(processFunctionInput(sound, 'Sound'), processFunctionInput(volume, 'float'))
  }

  // Set pitch for a sound (1.0 is base level): (Sound, float) => void
  iface.SetSoundPitch = function SetSoundPitch(sound, pitch) {
    mod._SetSoundPitch(processFunctionInput(sound, 'Sound'), processFunctionInput(pitch, 'float'))
  }

  // Set pan for a sound (0.5 is center): (Sound, float) => void
  iface.SetSoundPan = function SetSoundPan(sound, pan) {
    mod._SetSoundPan(processFunctionInput(sound, 'Sound'), processFunctionInput(pan, 'float'))
  }

  // Copy a wave to a new wave: (Wave) => Wave
  iface.WaveCopy = function WaveCopy(wave) {
    const _ret = new iface.Wave()
    mod._WaveCopy(_ret._address, processFunctionInput(wave, 'Wave'))
    return _ret
  }

  // Crop a wave to defined samples range: (Wave *, int, int) => void
  iface.WaveCrop = function WaveCrop(wave, initSample, finalSample) {
    mod._WaveCrop(processFunctionInput(wave, 'Wave *'), processFunctionInput(initSample, 'int'), processFunctionInput(finalSample, 'int'))
  }

  // Convert wave data to desired format: (Wave *, int, int, int) => void
  iface.WaveFormat = function WaveFormat(wave, sampleRate, sampleSize, channels) {
    mod._WaveFormat(processFunctionInput(wave, 'Wave *'), processFunctionInput(sampleRate, 'int'), processFunctionInput(sampleSize, 'int'), processFunctionInput(channels, 'int'))
  }

  // Load samples data from wave as a 32bit float data array: (Wave) => float *
  iface.LoadWaveSamples = function LoadWaveSamples(wave) {
    return processFunctionReturn(mod._LoadWaveSamples(processFunctionInput(wave, 'Wave')), 'float *')
  }

  // Unload samples data loaded with LoadWaveSamples(): (float *) => void
  iface.UnloadWaveSamples = function UnloadWaveSamples(samples) {
    mod._UnloadWaveSamples(processFunctionInput(samples, 'float *'))
  }

  // Load music stream from file: (const char *) => Music
  iface.LoadMusicStream = function LoadMusicStream(fileName) {
    const _ret = new iface.Music()
    mod._LoadMusicStream(_ret._address, processFunctionInput(fileName, 'const char *'))
    return _ret
  }

  // Load music stream from data: (const char *, const unsigned char *, int) => Music
  iface.LoadMusicStreamFromMemory = function LoadMusicStreamFromMemory(fileType, data, dataSize) {
    const _ret = new iface.Music()
    mod._LoadMusicStreamFromMemory(_ret._address, processFunctionInput(fileType, 'const char *'), processFunctionInput(data, 'const unsigned char *'), processFunctionInput(dataSize, 'int'))
    return _ret
  }

  // Checks if a music stream is ready: (Music) => bool
  iface.IsMusicReady = function IsMusicReady(music) {
    return processFunctionReturn(mod._IsMusicReady(processFunctionInput(music, 'Music')), 'bool')
  }

  // Unload music stream: (Music) => void
  iface.UnloadMusicStream = function UnloadMusicStream(music) {
    mod._UnloadMusicStream(processFunctionInput(music, 'Music'))
  }

  // Start music playing: (Music) => void
  iface.PlayMusicStream = function PlayMusicStream(music) {
    mod._PlayMusicStream(processFunctionInput(music, 'Music'))
  }

  // Check if music is playing: (Music) => bool
  iface.IsMusicStreamPlaying = function IsMusicStreamPlaying(music) {
    return processFunctionReturn(mod._IsMusicStreamPlaying(processFunctionInput(music, 'Music')), 'bool')
  }

  // Updates buffers for music streaming: (Music) => void
  iface.UpdateMusicStream = function UpdateMusicStream(music) {
    mod._UpdateMusicStream(processFunctionInput(music, 'Music'))
  }

  // Stop music playing: (Music) => void
  iface.StopMusicStream = function StopMusicStream(music) {
    mod._StopMusicStream(processFunctionInput(music, 'Music'))
  }

  // Pause music playing: (Music) => void
  iface.PauseMusicStream = function PauseMusicStream(music) {
    mod._PauseMusicStream(processFunctionInput(music, 'Music'))
  }

  // Resume playing paused music: (Music) => void
  iface.ResumeMusicStream = function ResumeMusicStream(music) {
    mod._ResumeMusicStream(processFunctionInput(music, 'Music'))
  }

  // Seek music to a position (in seconds): (Music, float) => void
  iface.SeekMusicStream = function SeekMusicStream(music, position) {
    mod._SeekMusicStream(processFunctionInput(music, 'Music'), processFunctionInput(position, 'float'))
  }

  // Set volume for music (1.0 is max level): (Music, float) => void
  iface.SetMusicVolume = function SetMusicVolume(music, volume) {
    mod._SetMusicVolume(processFunctionInput(music, 'Music'), processFunctionInput(volume, 'float'))
  }

  // Set pitch for a music (1.0 is base level): (Music, float) => void
  iface.SetMusicPitch = function SetMusicPitch(music, pitch) {
    mod._SetMusicPitch(processFunctionInput(music, 'Music'), processFunctionInput(pitch, 'float'))
  }

  // Set pan for a music (0.5 is center): (Music, float) => void
  iface.SetMusicPan = function SetMusicPan(music, pan) {
    mod._SetMusicPan(processFunctionInput(music, 'Music'), processFunctionInput(pan, 'float'))
  }

  // Get music time length (in seconds): (Music) => float
  iface.GetMusicTimeLength = function GetMusicTimeLength(music) {
    return processFunctionReturn(mod._GetMusicTimeLength(processFunctionInput(music, 'Music')), 'float')
  }

  // Get current music time played (in seconds): (Music) => float
  iface.GetMusicTimePlayed = function GetMusicTimePlayed(music) {
    return processFunctionReturn(mod._GetMusicTimePlayed(processFunctionInput(music, 'Music')), 'float')
  }

  // Load audio stream (to stream raw audio pcm data): (unsigned int, unsigned int, unsigned int) => AudioStream
  iface.LoadAudioStream = function LoadAudioStream(sampleRate, sampleSize, channels) {
    const _ret = new iface.AudioStream()
    mod._LoadAudioStream(_ret._address, processFunctionInput(sampleRate, 'unsigned int'), processFunctionInput(sampleSize, 'unsigned int'), processFunctionInput(channels, 'unsigned int'))
    return _ret
  }

  // Checks if an audio stream is ready: (AudioStream) => bool
  iface.IsAudioStreamReady = function IsAudioStreamReady(stream) {
    return processFunctionReturn(mod._IsAudioStreamReady(processFunctionInput(stream, 'AudioStream')), 'bool')
  }

  // Unload audio stream and free memory: (AudioStream) => void
  iface.UnloadAudioStream = function UnloadAudioStream(stream) {
    mod._UnloadAudioStream(processFunctionInput(stream, 'AudioStream'))
  }

  // Update audio stream buffers with data: (AudioStream, const void *, int) => void
  iface.UpdateAudioStream = function UpdateAudioStream(stream, data, frameCount) {
    mod._UpdateAudioStream(processFunctionInput(stream, 'AudioStream'), processFunctionInput(data, 'const void *'), processFunctionInput(frameCount, 'int'))
  }

  // Check if any audio stream buffers requires refill: (AudioStream) => bool
  iface.IsAudioStreamProcessed = function IsAudioStreamProcessed(stream) {
    return processFunctionReturn(mod._IsAudioStreamProcessed(processFunctionInput(stream, 'AudioStream')), 'bool')
  }

  // Play audio stream: (AudioStream) => void
  iface.PlayAudioStream = function PlayAudioStream(stream) {
    mod._PlayAudioStream(processFunctionInput(stream, 'AudioStream'))
  }

  // Pause audio stream: (AudioStream) => void
  iface.PauseAudioStream = function PauseAudioStream(stream) {
    mod._PauseAudioStream(processFunctionInput(stream, 'AudioStream'))
  }

  // Resume audio stream: (AudioStream) => void
  iface.ResumeAudioStream = function ResumeAudioStream(stream) {
    mod._ResumeAudioStream(processFunctionInput(stream, 'AudioStream'))
  }

  // Check if audio stream is playing: (AudioStream) => bool
  iface.IsAudioStreamPlaying = function IsAudioStreamPlaying(stream) {
    return processFunctionReturn(mod._IsAudioStreamPlaying(processFunctionInput(stream, 'AudioStream')), 'bool')
  }

  // Stop audio stream: (AudioStream) => void
  iface.StopAudioStream = function StopAudioStream(stream) {
    mod._StopAudioStream(processFunctionInput(stream, 'AudioStream'))
  }

  // Set volume for audio stream (1.0 is max level): (AudioStream, float) => void
  iface.SetAudioStreamVolume = function SetAudioStreamVolume(stream, volume) {
    mod._SetAudioStreamVolume(processFunctionInput(stream, 'AudioStream'), processFunctionInput(volume, 'float'))
  }

  // Set pitch for audio stream (1.0 is base level): (AudioStream, float) => void
  iface.SetAudioStreamPitch = function SetAudioStreamPitch(stream, pitch) {
    mod._SetAudioStreamPitch(processFunctionInput(stream, 'AudioStream'), processFunctionInput(pitch, 'float'))
  }

  // Set pan for audio stream (0.5 is centered): (AudioStream, float) => void
  iface.SetAudioStreamPan = function SetAudioStreamPan(stream, pan) {
    mod._SetAudioStreamPan(processFunctionInput(stream, 'AudioStream'), processFunctionInput(pan, 'float'))
  }

  // Default size for new audio streams: (int) => void
  iface.SetAudioStreamBufferSizeDefault = function SetAudioStreamBufferSizeDefault(size) {
    mod._SetAudioStreamBufferSizeDefault(processFunctionInput(size, 'int'))
  }

  // Audio thread callback to request new data: (AudioStream, AudioCallback) => void
  iface.SetAudioStreamCallback = function SetAudioStreamCallback(stream, callback) {
    mod._SetAudioStreamCallback(processFunctionInput(stream, 'AudioStream'), processFunctionInput(callback, 'AudioCallback'))
  }

  // Attach audio stream processor to stream: (AudioStream, AudioCallback) => void
  iface.AttachAudioStreamProcessor = function AttachAudioStreamProcessor(stream, processor) {
    mod._AttachAudioStreamProcessor(processFunctionInput(stream, 'AudioStream'), processFunctionInput(processor, 'AudioCallback'))
  }

  // Detach audio stream processor from stream: (AudioStream, AudioCallback) => void
  iface.DetachAudioStreamProcessor = function DetachAudioStreamProcessor(stream, processor) {
    mod._DetachAudioStreamProcessor(processFunctionInput(stream, 'AudioStream'), processFunctionInput(processor, 'AudioCallback'))
  }

  // Attach audio stream processor to the entire audio pipeline: (AudioCallback) => void
  iface.AttachAudioMixedProcessor = function AttachAudioMixedProcessor(processor) {
    mod._AttachAudioMixedProcessor(processFunctionInput(processor, 'AudioCallback'))
  }

  // Detach audio stream processor from the entire audio pipeline: (AudioCallback) => void
  iface.DetachAudioMixedProcessor = function DetachAudioMixedProcessor(processor) {
    mod._DetachAudioMixedProcessor(processFunctionInput(processor, 'AudioCallback'))
  }

  iface.LIGHTGRAY = new iface.Color(200, 200, 200, 255) // Light Gray
  iface.GRAY = new iface.Color(130, 130, 130, 255) // Gray
  iface.DARKGRAY = new iface.Color(80, 80, 80, 255) // Dark Gray
  iface.YELLOW = new iface.Color(253, 249, 0, 255) // Yellow
  iface.GOLD = new iface.Color(255, 203, 0, 255) // Gold
  iface.ORANGE = new iface.Color(255, 161, 0, 255) // Orange
  iface.PINK = new iface.Color(255, 109, 194, 255) // Pink
  iface.RED = new iface.Color(230, 41, 55, 255) // Red
  iface.MAROON = new iface.Color(190, 33, 55, 255) // Maroon
  iface.GREEN = new iface.Color(0, 228, 48, 255) // Green
  iface.LIME = new iface.Color(0, 158, 47, 255) // Lime
  iface.DARKGREEN = new iface.Color(0, 117, 44, 255) // Dark Green
  iface.SKYBLUE = new iface.Color(102, 191, 255, 255) // Sky Blue
  iface.BLUE = new iface.Color(0, 121, 241, 255) // Blue
  iface.DARKBLUE = new iface.Color(0, 82, 172, 255) // Dark Blue
  iface.PURPLE = new iface.Color(200, 122, 255, 255) // Purple
  iface.VIOLET = new iface.Color(135, 60, 190, 255) // Violet
  iface.DARKPURPLE = new iface.Color(112, 31, 126, 255) // Dark Purple
  iface.BEIGE = new iface.Color(211, 176, 131, 255) // Beige
  iface.BROWN = new iface.Color(127, 106, 79, 255) // Brown
  iface.DARKBROWN = new iface.Color(76, 63, 47, 255) // Dark Brown
  iface.WHITE = new iface.Color(255, 255, 255, 255) // White
  iface.BLACK = new iface.Color(0, 0, 0, 255) // Black
  iface.BLANK = new iface.Color(0, 0, 0, 0) // Blank (Transparent)
  iface.MAGENTA = new iface.Color(255, 0, 255, 255) // Magenta
  iface.RAYWHITE = new iface.Color(245, 245, 245, 255) // My own White (raylib logo)

  return iface
}

export default setup


