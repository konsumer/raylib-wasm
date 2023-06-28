#!/bin/bash

# this is intended to run inside emscripten/emsdk docker

mkdir -p build

if [ ! -d "include" ];then
	wget https://github.com/raysan5/raylib/releases/download/4.5.0/raylib-4.5.0_webassembly.zip
	unzip raylib-4.5.0_webassembly.zip
	mv raylib-4.5.0_webassembly/lib raylib-4.5.0_webassembly/include .
	rm -rf raylib-4.5.0_webassembly raylib-4.5.0_webassembly.zip
fi

emcc raylib.c lib/libraylib.a -o build/raylib_wasm.js -I include --no-entry -DPLATFORM_WEB -Os \
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