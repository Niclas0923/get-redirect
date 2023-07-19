const { defineConfig } = require('@vue/cli-service')
const fs = require("fs")
// 读取后端服务器的配置文件，用于服务器的代理
const data = JSON.parse(String(fs.readFileSync("./../config/server.json")))
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 指定开发服务器的端口号以侦听
    port: 8082,
    proxy:`http://localhost:${data["http"]["point"]}}`
  },
  publicPath:"./"
})
