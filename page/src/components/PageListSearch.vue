<template>
  <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
      leave-active-class="animate__bounceOut"
  >
    <div class="col-12 offset-0 col-md-6 offset-md-3 div-input">
      <input type="text" class="input" v-model.trim="searchValue"/>
      <a class="clear" href="#" @click="searchValue=''">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" v-pre>
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name:"PageListSearch",
  data(){
    return{
      searchValue:""
    }
  },
  props:["valueChange"],
  watch:{
    searchValue(a){
      this.valueChange(a)
    }
  }
}
</script>

<style scoped>
.div-input{
  position: relative;
  margin-top: 24px;
  padding: 0;
}
.input{
  width: 100%;
  height: 40px;
  box-shadow: 0 0 5px #bbbbbb;
  padding: 0 15px;
  border-radius: 6px;
  border: none;
  outline: 2px solid white;
  outline-offset: -2px;
}
.input:focus {
  outline:2px solid lightgrey;
}
.clear{
  position: absolute;
  color:gray;
  top: 48%;
  right: 10px;
  transform: translate(0,-50%);
}
</style>