<script setup>
import {computed, onMounted, ref} from "vue";
import {useValueStore} from "../../../store/useValueStore.js";
import {useRoute, useRouter} from "vue-router";
import PageListSearch from "./PageListSearch.vue";
import PageListCards from "./PageListCards.vue"
import PageListAddForm from "./PageListAddForm.vue";

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

// 挂载后执行
onMounted(()=>{
  // 更新页面的功能
  const userVal = JSON.parse(localStorage.getItem("user"))
  if (userVal){
    // 获取 list 信息
    value.updateListValue()
  }else {
    const router = useRouter()
    router.push("/login")
  }

  // 收起 nav 的功能
  try {
    const nav = document.getElementById('navbarSupportedContent')
    // 检查 class 中是否有 show
    if (nav.classList.contains('show')) {
      // 移除 show
      nav.classList.remove('show');
    }
  }catch (e) {
    console.log("直接访问出现此log可以忽视")
    console.log(e)
  }
})

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