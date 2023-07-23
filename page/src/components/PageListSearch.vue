<template>
  <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
      leave-active-class="animate__bounceOut"
  >
    <div class="col-12 offset-0 col-md-8 offset-md-2 col-xxl-6 offset-xxl-3 div-input">
<!--      输入框 -->
      <input type="text" class="input" v-model.trim="searchValue"/>
<!--      删除按钮 -->
      <a href="#" @click="searchValue=''">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg clear" viewBox="0 0 16 16" v-pre>
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </a>
<!--      搜索图标 -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-logo" viewBox="0 0 16 16" v-pre>
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
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

<style lang="less" scoped>
.div-input{
  position: relative;
  margin-top: 24px;
  padding: 0;

  .input{
    width: 100%;
    height: 40px;
    box-shadow: 0 0 5px #bbbbbb;
    padding: 0 35px;
    border-radius: 6px;
    border: none;
    outline: 2px solid white;
    outline-offset: -2px;
  }
  .input:focus {
    outline:2px solid lightgrey;
  }
  .input:hover {
    box-shadow: 0 0 5px gray;
  }
  .clear{
    position: absolute;
    color:gray;
    top: 20px;
    right: 10px;
    transform: translate(0,-50%);
  }
  .search-logo{
    position: absolute;
    color:gray;
    top: 20px;
    left: 10px;
    transform: translate(0,-50%);
  }

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