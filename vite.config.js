import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://github.com/vitejs/vite/issues/238#issuecomment-633016902
  base: './',
});
