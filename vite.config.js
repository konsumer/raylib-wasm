export default {
  build: {
    rollupOptions: {
      input: {
        'demo': "src/demo.js",
        'raylib': "src/raylib.js",
        'index.html': "index.html",
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
}