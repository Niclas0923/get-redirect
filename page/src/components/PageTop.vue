<template>
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
            <li class="nav-item" v-for="i in page.all" :key="i.name">
              <a class="nav-link" aria-current="page" href="#"
                 :class="(page.now === i.name?'active':'')+(i.on?'':'disabled')"
                 @click="changePage(i)"
              >{{i.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import "animate.css"
export default {
  name: 'PageTop',
  props:["page","changePage"],
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  box-shadow: 0 0 5px gray;
  margin-bottom: 1vh;
}
</style>
