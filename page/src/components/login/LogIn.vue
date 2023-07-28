<template>
  <div id="login-page" class="container">
    <div style="height: 30vh"></div>
    <div class="login-from col-12 offset-0 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h2>管理员登陆</h2>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="用户名" v-model="name">
        <label for="floatingInput">用户名</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="密码" v-model="password" @keydown.enter="login">
        <label for="floatingPassword">密码</label>
      </div>
      <button class="btn btn-primary" @click="login">登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data(){
    return{
      name:"",
      password:""
    }
  },
  props: ["tryLogIn"],
  methods:{
    login(){
      // 不能为空
      if (this.name.length !== 0 && this.password.length !== 0){
        const regex = /[<>\\]/;
        // 测试几个特殊符号
        if(!regex.test(this.name) && !regex.test(this.password)){
          // 直接进行登录测试
          this.tryLogIn(this.name,this.password)
        }else alert("不能含有特殊符号")
      }else alert("不能为空")
    }
  }
}
</script>

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
