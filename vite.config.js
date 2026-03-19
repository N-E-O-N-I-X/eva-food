import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'public',
  
  build: {
    assetsInclude: ['**/*.png', '**/*.jpg'],
    rollupOptions: {
      input: 'index.html'
    }
  }
})
