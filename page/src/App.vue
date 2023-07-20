<template>
  <div>
    <log-in v-if="!init" :tryLogIn="tryLogIn"/>
    <div v-if="init">
      <transition
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeInDown"
      >
        <PageTop/>
      </transition>
      <div style="height: 1vh;"></div>
      <PageValue :list="list"/>
      <div style="height: 6vh;"></div>
    </div>
  </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import PageTop from "@/components/PageTop.vue";
import PageValue from "@/components/PageValue.vue";
import axios from "axios";
import "animate.css"

export default {
  name: 'App',
  components: {
    LogIn,
    PageTop,
    PageValue
  },
  data(){
    return{
      init:false,
      list:[],
      user:{
        name:"",
        password:""
      }
    }
  },
  methods:{
    // 尝试登陆
    tryLogIn(name,password,onLog=true){
      axios
          .post("/systemServer/getValList",{name,password})
          .then((res)=>{
            // 请求完成返回数据
              if (res.data[0] === "用户名或密码错误") alert(res.data[0])
              else {
                if (!this.init) {
                  if(onLog) alert("登录成功")
                  this.init = true
                  // 本地存储用户名和密码
                  localStorage.setItem("user", JSON.stringify({name,password}));
                }
                this.list = res.data
                this.user = {name,password}
              }
          })
          .catch(err=>{
            console.error(err)
          })
    },
    // 获取新数据
    getNewList(){
      this.tryLogIn(this.user.name,this.user.password,false)
    },

    // 添加一个
    addOne(tag,url){
      axios
          .post("/systemServer/addOne",{name:this.user.name,password:this.user.password,tag,url})
          .then((res)=>{
            // 请求完成返回数据
            if (res.data[0]==="成功"){
              // 刷新数据
              this.getNewList()
            }else alert(res.data[0])
          })
          .catch(err=>{
            console.error(err)
          })
    },
    // 删除一个
    delOne(i){
      if (confirm(`确定要删除索引 ${i.name} 吗？`)) {
        // 用户点击了“确定”按钮，继续执行后面的代码
        axios
            .post("/systemServer/removeOne",{name:this.user.name,password:this.user.password,tagId:i.id})
            .then((res)=>{
              // 直接输出返回的信息
              alert(res.data[0])
              // 然后获取新数据
              this.getNewList()
            })
            .catch(err=>{
              console.error(err)
            })
      }
    }
  },
  mounted() {
    // 尝试从以前的值中读取user的信息
    const userVal = JSON.parse(localStorage.getItem("user"))
    if (userVal){
      // 如果存在就读取，之后尝试登录
      this.tryLogIn(userVal["name"],userVal["password"],false)
    }
    // 设置信息传递回来的几个事件
    this.$bus.$on("addOne",this.addOne)
    this.$bus.$on("delOne",this.delOne)
  },
  beforeDestroy() {
    this.$bus.off("addOne")
    this.$bus.off("delOne")
  }
}
</script>

<style>

body{
  min-height: 100%;
}

/*卡片*/
.card-page{
  padding: 20px 35px;
  margin: 20px;
  box-shadow: 0 0 5px gray;
  border-radius: 10px;
  position: relative;
}
</style>
