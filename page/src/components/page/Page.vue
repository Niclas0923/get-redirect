<script setup>
import {onMounted} from "vue";
import {useValueStore} from "../../store/useValueStore.js";
import {useRouter} from "vue-router";
// 引入 value 数据
const value = useValueStore()

// 刷新页面的函数
function refresh(log=true){
  // 从服务器获取数据覆盖缓存
  const userVal = JSON.parse(localStorage.getItem("user"))
  if (userVal){
    // 获取所有信息
    value.updateAll(log)
  }else {
    const router = useRouter()
    router.push("/login")
  }
}

onMounted(()=>{
  refresh(false)
})
</script>

<template>
  <div>
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeInDown"
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">ADM-Menu</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                    class="nav-link" aria-current="page"
                    active-class="active"
                    to="/page/list"
                >
                  list
                </router-link>
              </li>
              <li>
                <router-link
                    class="nav-link" aria-current="page"
                    active-class="active"
                    to="/page/log"
                >
                  log
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </transition>
    <!-- 插入位置 -->
    <router-view/>
    <!-- 刷新按钮 -->
    <button class="btn btn-success refresh-btn" @click="refresh">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
nav{
  box-shadow: 0 0 5px rgb(128, 128, 128);
}
.refresh-btn{
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding:6px 11px 9px;
}
</style>