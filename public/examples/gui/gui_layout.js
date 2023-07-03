let layout

// these 2 functions might eventually be built into raylib-wasm
async function LoadLayout(filename) {
  const text = await LoadFileText(filename)

  let ref
  const anchors = {}
  const controls = {}
  const state = {}

  const data = text.replace(/#.*/g, '').split('\n').map(l => l.trim()).filter(l => l).map(l => l.split(' '))

  // 1st pass: setup anchors & others
  for (const m of data) {
    if (m[0] === 'r') {
      ref = new Rectangle({x: parseInt(m[1]), y: parseInt(m[2]), width: parseInt(m[3]), height: parseInt(m[4])})
    }
    if (m[0] === 'a') {
      anchors[ parseInt(m[1]) ] = new Vector2({x: parseInt(m[3]), y: parseInt(m[4])})
    }
  }
  
  // 2nd pass: setup controls
  for (const m of data) {
    if (m[0] === 'c') {
      const rect = new Rectangle({x: parseInt(m[4]), y: parseInt(m[5]), width: parseInt(m[6]), height: parseInt(m[7])})
      const anchor = anchors[parseInt(m[8])]
      const name = m[3]

      if (anchor) {
        rect.x += anchor.x
        rect.y += anchor.y
      }

      const elID = parseInt(m[2])
      state[name] = {}

      if (elID === 0) { // GuiWindowBox
        state[name].active = true
      }

      if (elID === 5) { // GuiButton
        state[name].pressed = false
      }

      if (elID === 8) { // GuiToggle
        state[name].active = false
      }

      if (elID === 16) { // GuiSlider
        state[name].value = 0
      }

      if (elID === 17) { // GuiSliderBar
        state[name].value = 0
      }

      if (elID === 18) { // GuiProgressBar
        state[name].value = 0
      }

      if (elID === 21) { // GuiListView
        state[name].active = 0
        state[name].scrollIndex = 0
      }

      controls[m[3]] = {
        id: parseInt(m[1]),
        elID,
        name,
        rect,
        text: m.slice(9).join(' ')
      }
    }
  }
  return {ref, controls, state}
}

function DrawLayout({ref, controls, state}) {
  for (const {name, elID, rect, text} of Object.values(controls)) {
    if (elID === 0) {
      state[name].active = !GuiWindowBox(rect, text)
    }
    if (elID === 5) {
      state[name].pressed = GuiButton(rect, text) 
    }
    if (elID === 8) {
      state[name].active = GuiToggle(rect, text, state[name].active)
    }
    if (elID === 16) {
      state[name].value = GuiSlider(rect, 0, 0, state[name].value, 0, 100)
    }
    if (elID === 17) {
      state[name].value = GuiSliderBar(rect, 0, 0, state[name].value, 0, 100)
    }
    if (elID === 18) {
      state[name].value = GuiProgressBar(rect, 0, 0, state[name].value, 0, 1)
    }
    if (elID === 21) {
      state[name].active = GuiListView(rect, text, state[name].scrollIndex, state[name].active)
    }
  }
}


const InitGame = async () => {
  layout = await LoadLayout('examples/gui/resources/audio_player.rgl')
  InitWindow(400, 450)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  DrawLayout(layout)
  EndDrawing()
}