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
  constructor(r, g, b, a) {
    this.address = Module._malloc(4)
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  get r () {
    return int8SignedToUnsigned(Module.getValue(this.address))
  }
  get g () {
    return int8SignedToUnsigned(Module.getValue(this.address + 1))
  }
  get b () {
    return int8SignedToUnsigned(Module.getValue(this.address + 2))
  }
  get a () {
    return int8SignedToUnsigned(Module.getValue(this.address + 3))
  }
  
  set r (v) {
    Module.setValue(this.address, v)
  }
  set g (v) {
    Module.setValue(this.address + 1, v)
  }
  set b (v) {
    Module.setValue(this.address + 2, v)
  }
  set a (v) {
    Module.setValue(this.address + 3, v)
  }
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
  }
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