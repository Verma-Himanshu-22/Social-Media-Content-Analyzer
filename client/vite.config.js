import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Keep your Tailwind CSS configuration as it is correct
    tailwindcss({
      config: {
        darkMode: 'class',
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    }),
  ],
  server: {
    // This is the corrected proxy configuration
    proxy: {
      // Any request starting with '/api' will be forwarded
      '/api': {
        // The target should be the URL of your backend server
        target: 'http://localhost:5001', // Ensure this port matches your running Node.js server
        
        // This is necessary for the backend to accept the request
        changeOrigin: true,
      },
    }
  },
})
