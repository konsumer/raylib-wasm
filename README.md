This is the start of some ideas about making raylib games in JS for the web. It includes raylib 4.5.0.

### usage

You can include [raylib.js](https://konsumer.js.org/raylib-wasm/raylib.js) in your project to get started. Have a look at [basic.html](public/basic.html) to see how to use it.

You can also use it directly in [a codepen](https://codepen.io/konsumer/pen/NWEdxZq?editors=1000) for quick demos and such.

It is also provided via this CDN link:

```html
<script type="module" src="https://konsumer.js.org/raylib-wasm/raylib.js"></script>
```

### development

You probably do not need to do this step. Here is how I created the wasm/wrapper. Only do this, if you are actually working on the library:

```
# build each part from scratch
npm run build

# run local development web-server
npm start
```

