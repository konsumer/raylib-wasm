// this makes the select trigger different hashes
// and hashes trigger the demo

const dselect = document.getElementById('demo-select')
const r = document.getElementById('raylib')

dselect.addEventListener("change", () => {
  document.location.hash = `#${dselect.value}`
})

addEventListener("hashchange", (event) => r.setAttribute('src', `/examples/${document.location.hash.slice(1) || 'welcome'}.js`))
dselect.value = document.location.hash.slice(1) || 'welcome'
r.setAttribute('src', `/examples/${document.location.hash.slice(1) || 'welcome'}.js`)