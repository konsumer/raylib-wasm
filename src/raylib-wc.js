/* global MutationObserver HTMLElement */

import { raylib_run_string } from './raylib.js'

export default class RaylibComponent extends HTMLElement {
  constructor () {
    super()
    // hide things while setting up
    this.style.display = 'none'
    this.shadow = this.attachShadow({ mode: 'open' })
    this.canvas = document.createElement('canvas')
    window.addEventListener('resize', this.onResize.bind(this))
    this.shadow.innerHTML = `
<style>

canvas {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  object-fit: contain;
}
</style>
`
    this.shadow.appendChild(this.canvas)
    this.start(this.getAttribute('src'))

    // this makes right-click work better in raylib
    this.canvas.addEventListener('contextmenu', e => e.preventDefault())
  }

  onResize () {
    if (this.fill) {
      const { clientWidth, clientHeight } = document.body
      this.canvas.className = clientWidth > clientHeight ? 'landscape' : 'portrait'
    }
  }

  static get observedAttributes () {
    return ['src', 'fill']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'fill') {
      this.fill = typeof newValue !== 'undefined'
      this.onResize()
    }
    if (name === 'src') {
      this.start(newValue)
    }
  }

  async start (src) {
    let userCode = this.textContent
    if (src) {
      userCode = await fetch(src).then(r => r.text())
    }
    raylib_run_string(this.canvas, userCode)

    console.log('game loaded')

    // game is loaded so show myself
    this.style.display = 'block'
  }

  connectedCallback () {
    const observer = new MutationObserver((mutations) => {
      this.start(this.src)
    })
    observer.observe(this, { childList: true })
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.customElements.define('raylib-game', RaylibComponent)
  })
}
