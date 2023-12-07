<script setup>
// 记录是否显示信息
import {onMounted, ref} from "vue";

let closeAlert = ref(true)

// 关闭的功能
function close(){
  closeAlert.value = true
  window.localStorage.setItem("PageValueAlert-close-alert",JSON.stringify({close:true,time:Date.now()}))
}

// 读取本地信息的测试
onMounted(()=>{
  function initialization(){
    closeAlert.value = false
    window.localStorage.setItem("PageValueAlert-close-alert",JSON.stringify({close:false,time:Date.now()}))
  }

  const val = JSON.parse(String(window.localStorage.getItem("PageValueAlert-close-alert")))
  if (val){
    // 转化为小时，超过24小时就重置信息
    // console.log((Date.now() - val.time)/1000/60/60,(Date.now() - val.time)/1000/60/60>24)
    if ((Date.now() - val.time)/1000/60/60>24){
      initialization()
    } else closeAlert.value = val.close
  }else initialization()
})

</script>

<template>
  <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
      leave-active-class="animate__bounceOut"
  >
    <div class="alert alert-primary alert-dismissible fade show" v-show="!closeAlert">
      <ul class="mb-0">
        <li>可以点击上方的卡片中的链接直接打开于新页面。</li>
        <li>可以通过访问同网址/adm/api/索引来直接跳转到目标地址。</li>
        <li>地址示例：<a href="不可点击哦" onclick="alert('不可点击哦');return false;">http(s)://test.com/adm/api/test</a></li>
      </ul>
      <button type="button" class="btn-close" @click="close"></button>
    </div>
  </transition>
</template>

<style scoped>

</style>