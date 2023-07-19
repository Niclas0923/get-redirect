<template>
  <div>
    <div class="card-page" v-for="i in list" :key="i.id">
      <h4>{{i.name}}</h4>
      <h6 class="card-subtitle text-muted">{{i.userName}}</h6>
      <a :href="i.url" target="_blank" class="as">{{i.url}}</a>
      <a class="false" href="#" @click="delOne(i)">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" v-pre>
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageValueCards',
  props: ["list"],
  methods:{
    delOne(i){
      this.$bus.$emit("delOne",i)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*卡片的错误按钮*/
.false{
  position: absolute;
  right: 25px;
  top: 20px;
}
.false>svg{
  color: gray;
}
/*a标签*/
.as{
  display: inline-block;
  word-break: break-all;
}
</style>
