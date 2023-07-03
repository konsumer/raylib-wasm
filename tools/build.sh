#!/bin/bash

# this is intended to run inside emscripten/emsdk docker

mkdir -p build

# rm -rf src/raylib
if [ ! -d "src/raylib" ];then
	cd src
	git clone --branch master --depth 1 https://github.com/raysan5/raylib.git
	cd ..
fi

# rm -rf src/raygui
if [ ! -d "src/raygui" ];then
	cd src/
	git clone --branch master --depth 1 https://github.com/raysan5/raygui.git
	cd ..
fi

if [ ! -d "src/reasings" ];then
	cd src
	git clone --branch main --depth 1 https://github.com/raylib-extras/reasings.git
	cd ..
fi

# build JSON, ala RobLoach/raylib-api technique
make -C src/raylib/parser
./src/raylib/parser/raylib_parser -i src/raylib/src/raylib.h -o tools/api/raylib.json -f JSON -d RLAPI
./src/raylib/parser/raylib_parser -i src/raylib/src/raymath.h -o tools/api/raymath.json -f JSON -d RMAPI
./src/raylib/parser/raylib_parser -i src/raylib/src/rlgl.h -o tools/api/rlgl.json -f JSON -d RLAPI -t "RLGL IMPLEMENTATION"
./src/raylib/parser/raylib_parser -i src/raygui/src/raygui.h -o tools/api/raygui.json -f JSON -d RAYGUIAPI -t "RAYGUI IMPLEMENTATION"
./src/raylib/parser/raylib_parser -i src/reasings/src/reasings.h -o tools/api/reasings.json -f JSON -d EASEDEF

# ./src/raylib/parser/raylib_parser -i src/rmem/src/rmem.h -o tools/api/rmem.json -f JSON -d RMEMAPI -t "RMEM IMPLEMENTATION"
# ./src/raylib/parser/raylib_parser -i src/rres/src/rres.h -o tools/api/rres.json -f JSON -d RRESAPI -t "RRES IMPLEMENTATION"


# TODO: figure out lighter build that just incorporates into building the wasm (no linking to src/raylib/build/raylib/libraylib.a)
if [ ! -d "src/raylib/build" ];then
	cd src/raylib
	emcmake cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_EXAMPLES=Off -DPLATFORM="Web" -DCUSTOMIZE_BUILD=On -DSUPPORT_FILEFORMAT_BMP=1 -DSUPPORT_FILEFORMAT_PNG=1 -DSUPPORT_FILEFORMAT_TGA=1 -DSUPPORT_FILEFORMAT_JPG=1 -DSUPPORT_FILEFORMAT_GIF=1 -DSUPPORT_FILEFORMAT_QOI=1 -DSUPPORT_FILEFORMAT_PSD=1 -DSUPPORT_FILEFORMAT_HDR=1 -DSUPPORT_FILEFORMAT_PNM=1 -DSUPPORT_FILEFORMAT_DDS=1 -DSUPPORT_FILEFORMAT_PKM=1 -DSUPPORT_FILEFORMAT_KTX=1 -DSUPPORT_FILEFORMAT_PVR=1 -DSUPPORT_FILEFORMAT_ASTC=1 -DSUPPORT_FILEFORMAT_OBJ=1 -DSUPPORT_FILEFORMAT_MTL=1 -DSUPPORT_FILEFORMAT_IQM=1 -DSUPPORT_FILEFORMAT_GLTF=1 -DSUPPORT_FILEFORMAT_VOX=1 -DSUPPORT_FILEFORMAT_WAV=1 -DSUPPORT_FILEFORMAT_OGG=1 -DSUPPORT_FILEFORMAT_MP3=1 -DSUPPORT_FILEFORMAT_FLAC=1 -DSUPPORT_FILEFORMAT_XM=1 -DSUPPORT_FILEFORMAT_MOD=1 -DSUPPORT_FILEFORMAT_FNT=1 -DSUPPORT_FILEFORMAT_TTF=1
	cmake --build build
	cd ../..
fi

emcc src/raylib.c src/raylib/build/raylib/libraylib.a -o build/raylib.js -I src/reasings/src -I src/raygui/src -I src/raylib/examples/others/ -I src/raylib/src/ --no-entry -DPLATFORM_WEB -Os \
	-sEXPORT_KEEPALIVE=1 \
	-sEXPORT_ES6=1 \
	-sALLOW_MEMORY_GROWTH=1 \
	-sUSE_GLFW=3 \
	-sEXPORTED_RUNTIME_METHODS=cwrap,allocateUTF8,stringToUTF8,UTF8ToString,FS,setValue,getValue \
	-sENVIRONMENT=web \
	$(node tools/get_exports.js)