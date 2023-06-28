This is the start of some ideas about making raylib games in JS for the web. It includes raylib 4.5.0.

### usage

```
# run local development web-server
npm start
```

It live-reloads, so it can be a great way to prototype some raylib code, even for other languages/platforms.

You can include [raylib.js](site/raylib.js) in your project to get started. Have a look at [basic.html](site/basic.html) to see how to use it.

You can also use it directly in [a codepen](https://codepen.io/konsumer/pen/NWEdxZq?editors=1000) for quick demos and such.

### development

This is not needed for regular use, but here is how I created the wasm/wrapper, which requires docker:

```
npm run build
```

It is also provided via this CDN link:

```html
<script src="https://cdn.jsdelivr.net/gh/konsumer/raylib-wasm@main/site/raylib.js"></script>
```

If you prefer to not use web-components, for some reason, you can also do this:

```html
<script type="module">
import raylib_run from 'https://cdn.jsdelivr.net/gh/konsumer/raylib-wasm@main/site/raylib.module.js'

function InitGame(raylib) {
  raylib.globalize()
  InitWindow(640, 480)
}

function UpdateGame(ts, raylib) {
  BeginDrawing()
  // whatever
  EndDrawing()
}

raylib_run(document.getElementById('canvas'), InitGame, UpdateGame)
</script>
```