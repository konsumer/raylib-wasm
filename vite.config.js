export default {
  build: {
    rollupOptions: {
      input: {
        demo: 'src/demo.js',
        raylib: 'src/raylib.js',
        'raylib-wc': 'src/raylib-wc.js',
        raylib_emscripten: 'src/raylib_emscripten.js',
        'index.html': 'index.html'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
}
