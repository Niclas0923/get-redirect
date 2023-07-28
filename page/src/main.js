import Vue from 'vue'
import App from './App.vue'

// 引入 vuex
import store from "./store"
// 引入 router
import VueRouter from "vue-router";
import router from "./router"

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
