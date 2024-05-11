// this makes the select trigger different hashes
// and hashes trigger the demo

const dselect = document.getElementById('demo-select')
const r = document.getElementById('raylib')
const s = document.getElementById('source')

dselect.addEventListener('change', () => {
  document.location.hash = `#${dselect.value}`
})

window.addEventListener('hashchange', (event) => {
  const h = `/examples/${document.location.hash.slice(1) || 'welcome'}.js`
  r.setAttribute('src', h)
  s.setAttribute('href', h)
})
const h = `/examples/${document.location.hash.slice(1) || 'welcome'}.js`
dselect.value = document.location.hash.slice(1) || 'welcome'
r.setAttribute('src', h)
s.setAttribute('href', h)
