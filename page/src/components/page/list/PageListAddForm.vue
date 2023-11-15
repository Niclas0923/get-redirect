<script setup>
import {reactive} from "vue";
import {useChangeListStore} from "../../../store/post/useChangeListStore.js";

const change = useChangeListStore()
const props = defineProps(["allTags","addOn","changeAdd"])

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
        // 最后关闭窗口
        props.changeAdd(false)
      }else alert("索引标签重复，请进行修改")
    }else alert("不能含有 <>\\ 这几个特殊符号")
  }else alert("不能为空")
}

function close(){
  props.changeAdd(false)
}

</script>

<template>
  <Teleport to="body">
    <Transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInUp"
        leave-active-class="animate__bounceOutDown"
    >
      <div class="mask" v-show="props.addOn" @click.self="close">
        <div class="in col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-3">
          <h5>索引</h5>
          <div class="mb-3">
            <input type="text" class="form-control" style="border-color: rgba(0,0,0,0.8)" v-model="value.tag">
            <div id="emailHelp" class="form-text">索引，索引无需添加斜杠 “/”。</div>
          </div>
          <h5>URL</h5>
          <div class="mb-3">
            <input type="url" class="form-control" style="border-color: rgba(0,0,0,0.8)" v-model="value.url" @keydown.enter="addListOne">
            <div id="emailHelp" class="form-text">URL可设置成转跳链接，也可以设置为相对路径，例如“#”，设置成转跳链接时候一定要添加“http(s)://”，不然会被认为是相对链接。</div>
          </div>
          <button type="submit" class="btn btn-primary" @click="addListOne">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </button>
          <div class="close" @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.card-page>ul{
  margin-bottom: 0;
}
button{
  float: right;
}
.mask{
  position: fixed;
  top: 0;bottom: 0;left: 0;right: 0;
  background-color: rgba(0,0,0,0.5);
}
.in{
  background-color: white;
  position: absolute;
  left: 50%;
  top: 45%;
  padding: 50px 50px 50px;
  border-radius: 20px;
  transform: translate(-50%,-50%);
}
.close{
  position: absolute;
  top: 20px;
  right: 25px;
  cursor: pointer;  /* 设置鼠标样式为手形 */
}
</style>
