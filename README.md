This is the start of some ideas about making raylib games in JS for the web. It includes raylib 4.5.0.

### usage

```
# run local development web-server
npm start
```

It live-reloads, so it can be a great way to prototype some raylib code, even for other languages/platforms.

You can include [raylib.js](https://raylib.surge.sh/raylib.js) in your project to get started. Have a look at [basic.html](public/basic.html) to see how to use it.

You can also use it directly in [a codepen](https://codepen.io/konsumer/pen/NWEdxZq?editors=1000) for quick demos and such.

It is also provided via this CDN link:

```html
<script type="module" src="https://raylib.surge.sh/raylib.js"></script>
```

### development

This is not needed for regular use, but here is how I created the wasm/wrapper, which requires docker:

```
npm run build
```
