import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      external: [
        // 移除无法解析的外部模块，使用正确的相对路径引用
        // 如果需要排除这些模块，应该使用绝对路径或模块ID
      ]
    }
  }
})