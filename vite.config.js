import arraybuffer from 'vite-plugin-arraybuffer'

export default {
  plugins: [arraybuffer()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        demo: 'src/raylib.js',
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
