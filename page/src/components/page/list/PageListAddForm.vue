<script setup>
import {reactive} from "vue";
import {useChangeListStore} from "../../../store/post/useChangeListStore.js";

const change = useChangeListStore()
const props = defineProps(["allTags"])

const value = reactive({
  tag:"",
  url:""
})

// 添加按钮的函数
function addListOne(){
  // 不能为空
  if (value.tag.length !== 0 && value.url.length !== 0){
    const regex = /[<>\\]/;
    // 测试几个特殊符号
    if(!regex.test(value.tag) && !regex.test(value.url)){
      // 测试重复
      if (props.allTags.indexOf(value.tag) === -1){
        // 全部正常那么触发添加
        change.addOne(value.tag,value.url)
        // 然后清空信息
        value.url = ""
        value.tag = ""
      }else alert("索引标签重复，请进行修改")
    }else alert("不能含有 <>\\ 这几个特殊符号")
  }else alert("不能为空")
}

</script>

<template>
  <div class="col-12 offset-0 col-md-6 offset-md-3">
    <!-- 添加表单 -->
    <div class="card-page from">
      <div class="row g-2 mb-2">
        <div class="col-xxl">
          <div class="form-floating">
            <input type="email" class="form-control" placeholder="索引" v-model="value.tag">
            <label>索引</label>
          </div>
        </div>
        <div class="col-xxl">
          <div class="form-floating">
            <input type="url" class="form-control" placeholder="URL" v-model="value.url" @keydown.enter="addListOne">
            <label>URL</label>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="addListOne">添加</button>
    </div>
    <!-- 提示栏 -->
    <div class="card-page warning" v-pre>
      <ul>
        <li>索引无需添加斜杠 “/”。</li>
        <li>URL可设置成转跳链接，也可以设置为相对路径，例如“#”。</li>
        <li>URL要设置成转跳链接时候一定要添加“http(s)://”，不然会被认为是相对链接。</li>
      </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warning{
  padding: 20px 15px;
}
.card-page>ul{
  margin-bottom: 0;
}
/*卡片*/
.card-page{
  padding: 20px 35px;
  box-shadow: 0 0 5px #bbbbbb;
  border-radius: 6px;
  position: relative;
  margin: 24px 0;
}
.from{
  overflow: auto;
}
button{
  float: right;
}
</style>
