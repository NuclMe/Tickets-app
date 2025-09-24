import { defineConfig, UserConfig } from 'vite';

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
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './tests/setup.js', // assuming the test folder is in the root of our project
  },
} as UserConfig);
