import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    sourcemap: true,
    target: "es2020",
    lib: {
      name: "spaday",
      entry: "src/main.ts"
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020"
    }
  }
});
