<template>
  <div class="container col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
<!--    添加按钮 -->
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInUp"
        leave-active-class="animate__bounceOut"
    >
      <div class="card-page add-div" v-show="!addOn" @click="addOn=!addOn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus add-svg" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </div>
    </transition>
    <PageValueAdd
        v-show="addOn"
        :allTags="allTags"
    />
    <PageValueCards
        :list="list"
    />
  </div>
</template>

<script>
import "animate.css"
import PageValueAdd from "@/components/PageValueAdd.vue";
import PageValueCards from "@/components/PageValueCards.vue";
export default {
  name: 'PageList',
  props: ["list"],
  data(){
    return {
      addOn:false
    }
  },
  components:{
    PageValueAdd,
    PageValueCards
  },
  computed:{
    allTags(){
      const data = []
      for (let i of this.list){
        data.push(i.name)
      }
      return data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.add-div{
  position: relative;
  padding: 25px;
}
.add-svg{
  transform: translate(-50%,-50%);
  position: absolute;
  left: 50%;
  top: 50%;
  color:gray;
}
.add-div:hover{
  background-color: rgba(128, 128, 128, 0.96);
  .add-svg{
    color:white;
  }
}
</style>
