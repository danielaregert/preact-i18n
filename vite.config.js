import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  base: '/preact-i18n/',
  plugins: [preact()],
})
