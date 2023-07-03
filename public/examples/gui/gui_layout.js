let layout

const controls = {
    GUI_WINDOWBOX       : 0,  // GuiWindowBox
    GUI_GROUPBOX        : 1,  // 
    GUI_LINE            : 2,  // 
    GUI_PANEL           : 3,  // 
    GUI_LABEL           : 4,  // 
    GUI_BUTTON          : 5,  // GuiButton
    GUI_LABELBUTTON     : 6,  // 
    GUI_CHECKBOX        : 7,  // 
    GUI_TOGGLE          : 8,  // GuiToggle
    GUI_TOGGLEGROUP     : 9,  // 
    GUI_COMBOBOX        : 10, // 
    GUI_DROPDOWNBOX     : 11, // 
    GUI_TEXTBOX         : 12, // 
    GUI_TEXTBOXMULTI    : 13, // 
    GUI_VALUEBOX        : 14, // 
    GUI_SPINNER         : 15, // 
    GUI_SLIDER          : 16, // GuiSlider
    GUI_SLIDERBAR       : 17, // GuiSliderBar
    GUI_PROGRESSBAR     : 18, // GuiProgressBar
    GUI_STATUSBAR       : 19, // 
    GUI_SCROLLPANEL     : 20, // 
    GUI_LISTVIEW        : 21, // GuiListView
    GUI_COLORPICKER     : 22, // 
    GUI_DUMMYREC        : 23  // 
}

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

      switch(elID) {
        case controls.GUI_WINDOWBOX:
          state[name].active = true
          break
        case controls.GUI_BUTTON:
          state[name].pressed = false
          break
        case controls.GUI_TOGGLE:
          state[name].active = false
          break
        case controls.GUI_SLIDER:
          state[name].value = 0
          break
        case controls.GUI_SLIDERBAR:
          state[name].value = 0
          break
        case controls.GUI_PROGRESSBAR:
          state[name].value = 0
          break
        case controls.GUI_LISTVIEW:
          state[name].active = 0
          state[name].scrollIndex = 0
          break
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
    switch(elID) {
      case controls.GUI_WINDOWBOX:
        state[name].active = !GuiWindowBox(rect, text)
        break
      case controls.GUI_BUTTON:
        state[name].pressed = GuiButton(rect, text) 
        break
      case controls.GUI_TOGGLE:
        state[name].active = GuiToggle(rect, text, state[name].active)
        break
      case controls.GUI_SLIDER:
        state[name].value = GuiSlider(rect, 0, 0, state[name].value, 0, 100)
        break
      case controls.GUI_SLIDERBAR:
        state[name].value = GuiSliderBar(rect, 0, 0, state[name].value, 0, 100)
        break
      case controls.GUI_PROGRESSBAR:
        state[name].value = GuiProgressBar(rect, 0, 0, state[name].value, 0, 1)
        break
      case controls.GUI_LISTVIEW:
        state[name].active = GuiListView(rect, text, state[name].scrollIndex, state[name].active)
        break
    }
  }
}


const InitGame = async () => {
  layout = await LoadLayout('examples/gui/resources/audio_player.rgl')
  InitWindow(400, 450)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(BLACK)
  DrawLayout(layout)
  EndDrawing()
}