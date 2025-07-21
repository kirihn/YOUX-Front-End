import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:10000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:10000',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
