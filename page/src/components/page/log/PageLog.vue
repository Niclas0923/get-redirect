<script setup>
import {useValueStore} from "../../../store/useValueStore.js";
// 自动关闭navbar
import {useCloseNavbar} from "../../../hooks/useCloseNavbar.js";
useCloseNavbar()

// 引入显示的数据
const value = useValueStore()

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
        <div class="row" v-for="i in value.log" :key="i.id">
          <div class="col-md-2 d-flex justify-content-center align-items-center app-line">
            <span class="badge rounded-pill bg-primary">{{i.time}}</span>
          </div>
          <div class="col-md-10">
            <div class="card rounded-6 border-0 shadow my-4">
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