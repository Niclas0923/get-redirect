import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs"

const point = JSON.parse(String(fs.readFileSync("./../config/server.json")))["http"]["point"]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0',
    port:8082,
    proxy:{
      // 设置使用的代理，默认用 http 协议
      "/systemServer": `http://localhost:${point}`
    }
  },
  // 设置使用相对路径
  base:"./"
})
