import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: './docs',
  build: {
    outDir: '../dist/docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './docs'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
});