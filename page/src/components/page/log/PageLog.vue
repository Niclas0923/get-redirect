<script setup>
import {computed, onMounted} from "vue";
import {useValueStore} from "../../../store/useValueStore.js";
import {useRouter} from "vue-router";

// 引入显示的数据
const value = useValueStore()

// 翻转的计算属性
const nLog = computed(()=>{
  let a = []
  for (let i of value.log) a.unshift(i)
  return a
})

onMounted(()=>{
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

// 转换的数据
</script>

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
    </div>
  </div>
</template>

<style scoped>

</style>