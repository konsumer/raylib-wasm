This is the start of some ideas about making raylib games in JS for the web. It includes raylib 4.5.0.

### usage

```
# run local development web-server
npm start
```

It live-reloads, so it can be a great way to prototype some raylib code, even for other languages/platforms.

You can include these files in your project to get started:

- [raylib.js](site/raylib.js)
- [raylib_wasm.js](site/raylib_wasm.js)
- [raylib_wasm.wasm](site/raylib_wasm.wasm)


Have a look at [basic.html](site/basic.html) to see how to use it.

You can also usie it directly in [a codepen](https://codepen.io/konsumer/pen/NWEdxZq?editors=0010) for quick demos and such.

### development

This is not needed for regular use, but here is how I created the wasm:

```
# get the wasm build of raylib
wget https://github.com/raysan5/raylib/releases/download/4.5.0/raylib-4.5.0_webassembly.zip
unzip raylib-4.5.0_webassembly.zip
mv raylib-4.5.0_webassembly/lib raylib-4.5.0_webassembly/include .
rm -rf raylib-4.5.0_webassembly

# build the wasm using docker
npm run build
```
