<script setup>
// 记录是否显示信息
import {onMounted, ref} from "vue";

let closeAlert = ref(true)

// 关闭的功能
function close(){
  closeAlert.value = true
  window.localStorage.setItem("PageValueAlert-close-alert",JSON.stringify({close:true}))
}

// 读取本地信息的测试
onMounted(()=>{
  const val = JSON.parse(String(window.localStorage.getItem("PageValueAlert-close-alert")))
  console.log(val)
  if (val){
    closeAlert.value = val.close
  }else{
    closeAlert.value = false
    window.localStorage.setItem("PageValueAlert-close-alert",JSON.stringify({close:false}))
  }
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
        <li>可以通过访问同网址/api/索引来直接跳转到目标地址。</li>
        <li>地址示例：<a href="不可点击哦" onclick="alert('不可点击哦');return false;">http(s)://test.com/api/test</a></li>
      </ul>
      <button type="button" class="btn-close" @click="close"></button>
    </div>
  </transition>
</template>

<style scoped>

</style>