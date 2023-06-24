#!/bin/bash

# this is intended to run inside emscripten/emsdk docker

mkdir -p build

emcc raylib.c lib/libraylib.a -o site/raylib_wasm.js -I include --no-entry -DPLATFORM_WEB -Oz \
	-sLINKABLE=1 \
	-sEXPORT_ALL=1 \
	-sMODULARIZE=1 \
	-sEXPORT_KEEPALIVE=1 \
	-sEXPORT_ES6=1 \
	-sALLOW_MEMORY_GROWTH=1 \
	-sASYNCIFY \
	-sUSE_GLFW=3 \
	-sEXPORTED_FUNCTIONS=_malloc,_free \
	-sEXPORTED_RUNTIME_METHODS=cwrap,allocateUTF8,stringToUTF8,UTF8ToString,FS \
	-sENVIRONMENT=web