// this is optional, but keeps the canvas the right aspect, but filling the screen

const onResize = () => {
  const { clientWidth, clientHeight } = document.body
  for (const r of document.querySelectorAll('raylib-game')) {
    const c = r?.shadowRoot?.querySelector('canvas')
    if (c){
      c.className = clientWidth > clientHeight ? 'landscape' : 'portrait'
    }
  }
}
window.addEventListener('resize', onResize)
window.addEventListener('load', onResize)
