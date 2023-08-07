import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入 pinia
import { createPinia } from 'pinia'

// 生成 pinia
const pinia = createPinia()
// 生成 app 对象
const app = createApp(App)

// 使用 pinia
app.use(pinia)
// 使用路由
app.use(router)
// 最后设置 el
app.mount('#app')