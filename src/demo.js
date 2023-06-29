const dselect = document.getElementById('demo-select')
const r = document.getElementById('raylib')

dselect.addEventListener("change", () => {
  r.setAttribute('src', `/examples/${dselect.value}.js`)
})