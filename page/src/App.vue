<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import {useTryLoginStore} from "./store/post/useTryLoginStore.js";

// 获取 post 的相关方法
const tryLogin = useTryLoginStore().tryLogin

// 构建完成后尝试读取本地数据并测试
onMounted(()=>{
  // 读取本地存储
  let user = JSON.parse(localStorage.getItem("user"))
  // 引入 router 用于跳转
  const router = useRouter()
  if (user){
    // 尝试登录
    tryLogin(user.name,user.password,data=>{
      // 不成功跳转到 /login
      if (!data) router.push("/login")
    })
  }else router.push("/login")
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
body{
  min-height: 100vh;
  padding-bottom: 4vh;
  overflow-y: scroll;
}
</style>
