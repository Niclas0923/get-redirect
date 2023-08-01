<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-4">
    <div class="col" v-for="i in listOn" :key="i.id" v-show="i.show">
      <div class="card h-100" v-if="i.id !== add.id">
        <div class="card-body">
          <h5 class="card-title mb-2">{{i.name}}</h5>
          <h6 class="card-subtitle text-muted">{{i.userName}}</h6>
          <a :href="i.url" target="_blank" class="card-link">{{i.url}}</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{i.time}}</small>
        </div>
        <div class="false" @click="delOne(i)">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" v-pre>
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </div>
      </div>
      <!-- 添加按钮 -->
      <button class="btn btn-add" @click="addBtn(i)" v-if="i.id === add.id">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus add-svg" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
// import "animate.css"
import {mapState} from "vuex";
export default {
  name: 'PageListCards',
  props: ["list","addClick","searchValue","delOne"],
  data(){
    return{
      add:{
        id:"addBtn123",
        show:true
      }
    }
  },
  methods:{
    addBtn(i){
      this.add.show = false
      i.show = false
      this.addClick()
    },
    showCard(i){
      if (this.searchValue === ""){
        return true
      }else {
        const val = this.searchValue
        // 用于判断2是否在1内，不区分大小写
        const x = (str,str2) => str.toLowerCase().includes(str2.toLowerCase())
        return (x(i.name,val) || x(i.url,val) || x(i.time,val) || x(i.userName,val))
      }
    }
  },
  computed:{
    ...mapState(["removeListOne"]),
    listOn(){
      const add = this.add
      add.show = this.searchValue !== "🤮#$%^&*(😂"
      if (this.searchValue === ""){
        const l = []
        for (let i of this.list){
          i.show = true
          l.push(i)
        }
        l.push(add)
        return l
      }else {
        const trueArr = []
        const falseArr = []
        this.list.forEach(i =>{
          if (this.showCard(i)) {
            i.show = true
            trueArr.push(i)
          } else {
            i.show = false
            falseArr.push(i)
          }
        })
        let sendArr = []
        if (trueArr.length === 0){
          falseArr.push(add)
          sendArr = falseArr
        }else {
          trueArr.push(add)
          sendArr = trueArr.concat(falseArr)
        }
        return sendArr
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
// 最外层
.row{
  margin-top: 0;

  // 每个卡片的最外层
  .col{
    min-height: 44px;
    position: relative;

    // 卡片的内部
    .card{
      box-shadow: 0 0 5px lightgrey;

      // 删除div
      .false{
        // 鼠标边为可选
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 15px;

        svg{
          color: gray;
        }
      }
    }
    .card:hover{
      box-shadow: 0 0 5px gray;
    }

    // 添加按钮
    .btn-add{
      box-shadow: 0 0 5px #bbbbbb;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .btn-add:hover{
      background-color: #f8f9fa;
      box-shadow: 0 0 10px #bbbbbb;
    }

    // 所有引入图标
    svg{
      color: #676767;
    }
  }
}

</style>
