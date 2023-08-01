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
    <router-view />
  </div>
</template>

<script>
// import "animate.css"
export default {
  name: 'HomePage'
}
</script>

<style scoped>
nav{
  box-shadow: 0 0 5px gray;
}
</style>
