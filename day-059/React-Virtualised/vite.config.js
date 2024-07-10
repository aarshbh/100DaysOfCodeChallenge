import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fixReactVirtualized from "esbuild-plugin-react-virtualized";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimiseDeps: {
    plugins: [fixReactVirtualized],
  },
})
