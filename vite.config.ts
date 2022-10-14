import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'node:path'

function folderAlias(name: string): string {
  return path.resolve(__dirname, 'src', name)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@context': folderAlias('context'),
      '@components': folderAlias('components'),
      '@lib': folderAlias('lib')
    }
  },
  plugins: [react(), eslint()]
})
