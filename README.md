This is the start of some ideas about making raylib games in JS for the web.

It's not really functional yet, but see [index.html](index.html) for an example. It includes raylib 4.5.0.

### usage

```
# run local development web-server
npm start
```

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