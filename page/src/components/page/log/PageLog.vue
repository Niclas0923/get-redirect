<template>
<div class="container">
  <div class="pt-4">
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInUp"
        leave-active-class="animate__bounceOut"
    >
      <div class="row" v-for="i in nLog" :key="i.id">
        <div class="col-md-2 d-flex justify-content-center align-items-center app-line">
          <span class="badge rounded-pill bg-primary">{{i.time}}</span>
        </div>
        <div class="col-md-10">
          <div class="card rounded-0 border-0 shadow my-4">
            <div class="card-body">
              <h5 class="card-title" v-if="i.thing === 'addOne'">添加</h5>
              <h5 class="card-title" v-if="i.thing === 'removeOne'">删除</h5>
              <p class="card-text" v-if="i.thing === 'addOne'">
                管理员<mark>{{i.who}}</mark>增添了项目<mark>/{{i.obj.name}} ——> {{i.obj.url}}</mark>。
              </p>
              <p class="card-text" v-if="i.thing === 'removeOne'">
                管理员<mark>{{i.who}}</mark>删除了项目<mark>/{{i.obj.name}} ——> {{i.obj.url}}</mark>，
                它是管理员<mark>{{i.obj.userName}}</mark>于{{i.obj.time}}创建的。
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <div v-if="log.length === 0">
      <h2>{{noValue}}</h2>
    </div>
  </div>
</div>
</template>

<script>
// import "animate.css"
import {mapState} from "vuex"
export default {
  name:"PageLog",
  data(){
    return{
      log:[],
      noValue:""
    }
  },
  computed:{
    nLog(){
      let a = []
      for (let i of this.log){
        a.unshift(i)
      }
      return a
    },
    ...mapState(["getValueLog"])
  },
  mounted(){
    const userVal = JSON.parse(localStorage.getItem("user"))
    if (userVal){
      // 获取log信息
      this.getValueLog(data=>{
        if (data){
          this.log = data
          if (data.length === 0){
            this.noValue = "当前没有 log"
          }
        }else {
          alert("data 获取失败。")
        }
      })
    }else {
      this.$router.push("/login")
    }
  },
  beforeRouteEnter(to,from,next){
    try {
      const nav = document.getElementById('navbarSupportedContent')
      nav.classList.toggle('show');
    }catch (e) {
      console.log("直接访问出现此log可以忽视")
      console.log(e)
    }
    next()
  }
}
</script>

<style scoped>
.app-line {
  position: relative;
}

.app-line:before {
  background-color: #e7e7e7;
  position: absolute;
  content: "";
  display: block;
  width: 2px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: -1;
}
</style>