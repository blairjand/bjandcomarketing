import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  }
});
