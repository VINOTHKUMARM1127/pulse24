import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Make sure the base is set to '/' for root deployments
  build: {
    outDir: 'dist', // Vite will output the build files to the 'dist' directory
  },
});
