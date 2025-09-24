import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/search': 'http://localhost:5173/mock-api/search.json',
      '/tickets': 'http://localhost:5173/mock-api/tickets.json',
    },
  },
});
