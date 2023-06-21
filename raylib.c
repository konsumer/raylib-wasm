// docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk emcc raylib.c lib/libraylib.a -o raylib.js -I include -DPLATFORM_WEB -sASYNCIFY -sUSE_GLFW=3 -sEXPORT_ALL=1 -sLINKABLE=1

#include <emscripten/emscripten.h>
#define RLAPI EMSCRIPTEN_KEEPALIVE
#include "raylib.h"
