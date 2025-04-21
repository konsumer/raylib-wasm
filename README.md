This is the start of some ideas about making raylib games in JS for the web. It includes raylib 5.5 & raygui 4.0. You can see some examples [here](https://konsumer.js.org/raylib-wasm).

### usage

You can use it in [a codepen](https://codepen.io/konsumer/pen/NWEdxZq?editors=1000), for no setup.

Otherwsie you need to import the library from somewhere, like via CDN:

```html
<script type="module" src="https://konsumer.js.org/raylib-wasm/raylib/raylib.js"></script>
```

or you can put [raylib/](docs/raylib/) in your project and do this:

```html
<script type="module" src="raylib/raylib.js"></script>
```

Then use it like this:

```html
<raylib-game>
const InitGame = async () => {
  InitWindow(800, 450)
}

const UpdateGame = (ts) => {
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText("Congrats! You created your first window!", 190, 200, 20, LIGHTGRAY);
  DrawFPS(10, 10)
  EndDrawing()
}
</raylib-game>
```

Have a look at [basic.html](docs/basic.html) for an example.


#### python

You can also use python on the web (pyiodide) if you prefer:

```html
<script src="https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"></script>
<script type="module" src="https://konsumer.js.org/raylib-wasm/raylib/raylib-python.js"></script>
<raylib-python>
def init():
  InitWindow(800, 450)

def update():
  BeginDrawing()
  ClearBackground(RAYWHITE)
  DrawText("Congrats! You created your first python window!", 150, 200, 20, LIGHTGRAY)
  DrawFPS(10, 10)
  EndDrawing()
</raylib-python
```

Have a look at [python.html](docs/python.html) for an example.

### development

You probably do not need to do this. Here is how I created the wasm/wrapper. Only do this, if you are actually working on the library:

```
# build & run local development web-server
npm start
```

