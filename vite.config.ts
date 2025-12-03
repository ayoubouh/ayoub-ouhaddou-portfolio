import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: ['5174-i5pbbvzcugtxltr2pn5z5-c2a91c8c.manusvm.computer'],
  },
})
