import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

var a = 1

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9090,
  },
  plugins: [
    // 解析 vue 模板语法
    vue(),
  ],
})
