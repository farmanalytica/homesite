import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

declare const process: { env: Record<string, string | undefined> }

// Base path. Defaults to the GitHub Pages project subpath for testing at
// https://farmanalytica.github.io/homesite/. Set VITE_BASE=/ (repo variable)
// to deploy at the custom domain root (farmanalytica.com.br). `||` so an empty
// value (unset CI variable resolves to '') still falls back to the subpath.
const base = process.env.VITE_BASE || '/homesite/'

export default defineConfig({
  base,
  plugins: [vue()],
})
