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
        :del-one="delOne"
    />
    <!-- 添加菜单 -->
    <PageListAddForm
        v-show="addOn"
        :allTags="allTags"
        :addOne="addOne"
    />
  </div>
</template>

<script>
import {mapState} from "vuex";
import PageListAddForm from "@/components/page/list/PageListAddForm.vue";
import PageListCards from "@/components/page/list/PageListCards.vue";
import PageListSearch from "@/components/page/list/PageListSearch.vue";
export default {
  name: 'PageList',
  data(){
    return {
      addOn:false,
      searchValue:"",
      list:[]
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
    },
    ...mapState(["getValueList","removeListOne","addListOne"])
  },
  methods:{
    addClick(){
      this.addOn = true
    },
    valueChange(val){
      this.searchValue = val
    },
    getList(){
      // 尝试获取 list 信息
      this.getValueList(data=>{
        if (data){
          this.list = data
        }else alert("list 信息请求失败")
      })
    },
    delOne(i){
      if (confirm(`确定要删除索引 ${i.name} 吗？`)) {
        // 用户点击了“确定”按钮，继续执行后面的代码
        this.removeListOne(i.id,data=>{
          if (!data){
            alert("失败")
          }else {
            this.getList()
          }
        })
      }
    },
    addOne(tag,url){
      this.addListOne(tag,url,data=>{
        if(data){
          this.getList()
        }else {
          alert("失败")
        }
      })
    }
  },
  mounted(){
    const userVal = JSON.parse(localStorage.getItem("user"))
    if (userVal){
      this.getList()
    }else {
      this.$router.push("/login")
    }
  },
  beforeRouteEnter(to,from,next){
    try {
      const nav = document.getElementById('navbarSupportedContent')
      nav.classList.toggle('show');
    }catch (e) {
      console.log("直接访问出现此log可以忽视")
      console.log(e)
    }
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
