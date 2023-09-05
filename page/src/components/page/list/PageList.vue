<script setup>
import {computed, ref} from "vue";
import {useValueStore} from "../../../store/useValueStore.js";
import {useRoute} from "vue-router";
import PageListSearch from "./PageListSearch.vue";
import PageListCards from "./PageListCards.vue"
import PageListAddForm from "./PageListAddForm.vue";
import PageListAlert from "./PageListAlert.vue";
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
    <PageListCards
        :searchValue="searchValue"
        :list="value.list"
        :addClick="changeAdd"
    />

    <!-- 显示信息 -->
    <PageListAlert/>

    <!-- 添加菜单 -->
    <PageListAddForm
        :addOn="addOn"
        :allTags="allTags"
    />
  </div>
</template>

<style scoped>

</style>