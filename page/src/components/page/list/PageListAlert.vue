<script setup>
// 记录是否显示信息
import {ref} from "vue";

let showValue = ref(true)

// 关闭的功能
function close(){
  showValue.value = false
}

</script>

<template>
  <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
      leave-active-class="animate__bounceOut"
  >
    <div class="alert alert-primary alert-dismissible fade show" v-if="showValue">
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