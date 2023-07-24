<template>
  <div class="container col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
    <!-- 搜索框 -->
    <PageListSearch
        :valueChange="valueChange"
        :list="list"
    />
    <!-- 信息列表 -->
    <PageListCards
        :list="list"
        :searchValue="searchValue"
        :addClick="addClick"
    />
    <!-- 添加菜单 -->
    <PageListAddForm
        v-show="addOn"
        :allTags="allTags"
    />
  </div>
</template>

<script>
import "animate.css"
import PageListAddForm from "@/components/PageListAddForm.vue";
import PageListCards from "@/components/PageListCards.vue";
import PageListSearch from "@/components/PageListSearch.vue";
export default {
  name: 'PageList',
  props: ["list"],
  data(){
    return {
      addOn:false,
      searchValue:""
    }
  },
  components:{
    PageListSearch,
    PageListAddForm,
    PageListCards
  },
  computed:{
    allTags(){
      const data = []
      for (let i of this.list){
        data.push(i.name)
      }
      return data
    }
  },
  methods:{
    addClick(){
      this.addOn = true
    },
    valueChange(val){
      this.searchValue = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
