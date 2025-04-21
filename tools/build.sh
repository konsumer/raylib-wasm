#!/bin/bash

# this is intended to run inside emscripten/emsdk docker

mkdir -p build tools/api/ vendor

# rm -rf vendor/raylib
if [ ! -d "vendor/raylib" ];then
	cd vendor
	git clone --branch  5.5  --depth 1 https://github.com/raysan5/raylib.git
	cd ..
fi

# rm -rf vendor/raygui
if [ ! -d "vendor/raygui" ];then
	cd vendor/
	git clone --branch 4.0 --depth 1 https://github.com/raysan5/raygui.git
	cd ..
fi

# rm -rf vendor/reasings
if [ ! -d "vendor/reasings" ];then
	cd vendor
	git clone --branch main --depth 1 https://github.com/raylib-extras/reasings.git
	cd ..
fi

# rm -rf vendor/rmem
if [ ! -d "vendor/rmem" ];then
	cd vendor
	git clone --branch main --depth 1 https://github.com/raylib-extras/rmem.git
	cd ..
fi

# rm -rf vendor/rres
if [ ! -d "vendor/rres" ];then
	cd vendor
	git clone --branch master --depth 1 https://github.com/raysan5/rres.git
	cd ..
fi

# rm -rf vendor/raudio
if [ ! -d "vendor/raudio" ];then
	cd vendor
	git clone --branch master --depth 1 https://github.com/raysan5/raudio.git
	cd ..
fi

# rm -rf vendor/Physac
if [ ! -d "vendor/Physac" ];then
	cd vendor
	git clone --branch master --depth 1 https://github.com/victorfisac/Physac.git
	cd ..
fi

# build JSON, ala RobLoach/raylib-api technique
make -C vendor/raylib/parser
./vendor/raylib/parser/raylib_parser -i vendor/raylib/src/raylib.h -o tools/api/raylib.json -f JSON -d RLAPI
./vendor/raylib/parser/raylib_parser -i vendor/raylib/src/rcamera.h -o tools/api/rcamera.json -f JSON -d RLAPI
./vendor/raylib/parser/raylib_parser -i vendor/raylib/src/raymath.h -o tools/api/raymath.json -f JSON -d RMAPI
./vendor/raylib/parser/raylib_parser -i vendor/raylib/src/rlgl.h -o tools/api/rlgl.json -f JSON -d RLAPI -t "RLGL IMPLEMENTATION"
./vendor/raylib/parser/raylib_parser -i vendor/raygui/src/raygui.h -o tools/api/raygui.json -f JSON -d RAYGUIAPI -t "RAYGUI IMPLEMENTATION"
./vendor/raylib/parser/raylib_parser -i vendor/reasings/src/reasings.h -o tools/api/reasings.json -f JSON -d EASEDEF
./vendor/raylib/parser/raylib_parser -i vendor/rmem/src/rmem.h -o tools/api/rmem.json -f JSON -d RMEMAPI -t "RMEM IMPLEMENTATION"
./vendor/raylib/parser/raylib_parser -i vendor/rres/src/rres.h -o tools/api/rres.json -f JSON -d RRESAPI -t "RRES IMPLEMENTATION"
./vendor/raylib/parser/raylib_parser -i vendor/raudio/src/raudio.h -o tools/api/raudio.json -f JSON -t "RAUDIO IMPLEMENTATION"
./vendor/raylib/parser/raylib_parser -i vendor/Physac/src/physac.h -o tools/api/physac.json -f JSON -d PHYSACDEF -t "PHYSAC IMPLEMENTATION"


if [ ! -d "vendor/raylib/build" ];then
	cd vendor/raylib
	emcmake cmake -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_EXAMPLES=Off -DPLATFORM="Web" -DCUSTOMIZE_BUILD=On -DSUPPORT_FILEFORMAT_BMP=1 -DSUPPORT_FILEFORMAT_PNG=1 -DSUPPORT_FILEFORMAT_TGA=1 -DSUPPORT_FILEFORMAT_JPG=1 -DSUPPORT_FILEFORMAT_GIF=1 -DSUPPORT_FILEFORMAT_QOI=1 -DSUPPORT_FILEFORMAT_PSD=1 -DSUPPORT_FILEFORMAT_HDR=1 -DSUPPORT_FILEFORMAT_PNM=1 -DSUPPORT_FILEFORMAT_DDS=1 -DSUPPORT_FILEFORMAT_PKM=1 -DSUPPORT_FILEFORMAT_KTX=1 -DSUPPORT_FILEFORMAT_PVR=1 -DSUPPORT_FILEFORMAT_ASTC=1 -DSUPPORT_FILEFORMAT_OBJ=1 -DSUPPORT_FILEFORMAT_MTL=1 -DSUPPORT_FILEFORMAT_IQM=1 -DSUPPORT_FILEFORMAT_GLTF=1 -DSUPPORT_FILEFORMAT_VOX=1 -DSUPPORT_FILEFORMAT_WAV=1 -DSUPPORT_FILEFORMAT_OGG=1 -DSUPPORT_FILEFORMAT_MP3=1 -DSUPPORT_FILEFORMAT_FLAC=1 -DSUPPORT_FILEFORMAT_XM=1 -DSUPPORT_FILEFORMAT_MOD=1 -DSUPPORT_FILEFORMAT_FNT=1 -DSUPPORT_FILEFORMAT_TTF=1
	cmake --build build
	cd ../..
fi

emcc raylib.c vendor/raylib/build/raylib/libraylib.a -o build/raylib.js -I vendor/reasings/src -I vendor/raygui/src -I vendor/raylib/examples/others -I vendor/raylib/src --no-entry -DPLATFORM_WEB -Os \
	-sEXPORT_KEEPALIVE=1 \
	-sEXPORT_ES6=1 \
	-sALLOW_MEMORY_GROWTH=1 \
	-sUSE_GLFW=3 \
	-sEXPORTED_RUNTIME_METHODS=cwrap,allocateUTF8,stringToUTF8,UTF8ToString,FS,setValue,getValue \
	-sENVIRONMENT=web \
	$(node ./tools/get_exports.js)

cp build/raylib.js docs/raylib/raylib_emscripten.js
cp build/raylib.wasm docs/raylib/raylib.wasm

