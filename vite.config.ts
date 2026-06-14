import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

declare const process: { env: Record<string, string | undefined> }

// Base path. Defaults to the GitHub Pages project subpath for testing at
// https://farmanalytica.github.io/homesite/. Override with VITE_BASE=/ when
// deploying to the custom domain (farmanalytica.com.br) at the root.
const base = process.env.VITE_BASE ?? '/homesite/'

export default defineConfig({
  base,
  plugins: [vue()],
})
