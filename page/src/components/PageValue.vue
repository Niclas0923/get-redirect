<template>
  <div class="container col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
    <PageValueAdd
        :allTags="allTags"
    />
    <PageValueCards
        :list="list"
    />
  </div>
</template>

<script>
import PageValueAdd from "@/components/PageValueAdd.vue";
import PageValueCards from "@/components/PageValueCards.vue";
export default {
  name: 'PageValue',
  props: ["list"],
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
<style scoped>

</style>
