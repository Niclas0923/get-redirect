<script setup>
import {onMounted, reactive, toRefs} from "vue";
import {useTryLoginStore} from "../../store/post/useTryLoginStore.js";
import {useRouter} from "vue-router";
// 引入 post 中的方法
const tryLogin = useTryLoginStore().tryLogin
// 引入 router
const router = useRouter()

// 组件内的用户信息
const user = reactive({
  name:"",
  password:""
})

// 登录函数
function login(){
  // console.log("正在登录",{name:user.name, password:user.password})
  tryLogin(user.name,user.password,data=>{
    if (data){
      // 登录成功
      user.name = ""
      user.password = ""
      // 跳转到 /page
      router.push("/page")
    }else alert("用户名或密码错误")
  })
}

onMounted(()=>{
  // 直接测试登录
  tryLogin("","",data=>{
    // 成功则跳转到 /page
    if (data) router.push("/page")
  })
})

// 释放数据用于页面显示
const {name,password}= toRefs(user)

</script>

<template>
  <div id="login-page" class="container">
    <div style="height: 30vh"></div>
    <div class="login-from col-12 offset-0 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2>管理员登陆</h2>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
        <label>用户名</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" placeholder="密码" v-model="password" @keydown.enter="login">
        <label>密码</label>
      </div>
      <button class="btn btn-primary" @click="login">登陆</button>
    </div>
  </div>
</template>

<style scoped>
/*登录表格*/
.login-from{
  padding: 35px 30px 28px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
}
.login-from>h2{
  padding-bottom: 15px;
}
.login-from>button{
  margin-top: 20px;
}
</style>