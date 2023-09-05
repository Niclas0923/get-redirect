<script setup>
import {computed, ref} from "vue";
import {useValueStore} from "../../../store/useValueStore.js";
import {useRoute} from "vue-router";
import PageListSearch from "./PageListSearch.vue";
import PageListCards from "./PageListCards.vue"
import PageListAddForm from "./PageListAddForm.vue";
// 自动关闭navbar
import {useCloseNavbar} from "../../../hooks/useCloseNavbar.js";
useCloseNavbar()

// 引入 value 数据
const value = useValueStore()
// 引入 route
const route = useRoute()

// 设置正在搜索的值
let searchValue = ref(route.query.search?route.query.search:"")
if (searchValue.value === "null")searchValue.value = ""

// 修改搜索值的函数
function valueChange(data){
  searchValue.value = data
}

// add 按钮的数据
let addOn = ref(false)
function changeAdd(){
  addOn.value = true
}

// 所有的标签
const allTags = computed(()=>{
  const data = []
  for (let i of value.list){
    data.push(i.name)
  }
  return data
})

// 记录是否显示信息
let showValue = ref(true)

</script>

<template>
  <div class="container col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
    <!-- 搜索框 -->
    <PageListSearch
        :valueChange="valueChange"
        :searchValue="searchValue"
        :list="value.list"
    />

    <!-- 信息列表 -->
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInUp"
        leave-active-class="animate__bounceOut"
    >
      <PageListCards
          :searchValue="searchValue"
          :list="value.list"
          :addClick="changeAdd"
      />
    </transition>

    <!-- 显示信息 -->
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
        <!--        <button type="button" class="btn-close"></button>-->
      </div>
    </transition>

    <!-- 添加菜单 -->
    <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceIn"
        leave-active-class="animate__zoomOut"
    >
      <PageListAddForm
          v-show="addOn"
          :allTags="allTags"
      />
    </transition>
  </div>
</template>

<style scoped>

</style>