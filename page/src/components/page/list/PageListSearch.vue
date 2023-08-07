<script setup>
import {computed, ref, watch} from "vue";
import {useRouter} from "vue-router";
// 接收数据
const props = defineProps(['searchValue','valueChange',"list"])
// 引入 router
const router = useRouter()

// 设置响应
const searchValue = ref(props.searchValue)

// timeout 计时器标识
let timeOutI = 0

// 设置监听
watch(searchValue,(newValue)=>{
  // 停止上次 timeout
  window.clearTimeout(timeOutI)
  timeOutI = window.setTimeout(()=>{
    // 更改数据
    props.valueChange(newValue)
    // 更改路径 query
    const value = newValue? newValue:"null"
    router.replace({
      query: {search:value}
    })
  },200)
})

// 标签计算
const tipsOn = computed(()=>{
  const ports = []
  const hostNames = []
  const admNames = []
  props.list.forEach(e=>{
    try {
      const url = new URL(e.url);
      const domain = url.hostname;
      const port = url.port;

      hostNames.push(domain)
      if (port) ports.push(port)
    } catch (err) {
      console.log(err)
    }
    admNames.push(e.userName)
  })
  // 去重域名
  const minHostName = [...new Set(hostNames)]
  // 去重管理员姓名
  const minAdmNames = [...new Set(admNames)]
  // 端口去重
  const minPorts = [...new Set(ports)]
  let allList = []
  // 域名
  // 只有一个域名，并且全都是与之相关
  if (minHostName.length === 1 && props.list.length === hostNames.length){
    // 不添加
  }else {
    allList = allList.concat(minHostName)
  }
  // 端口
  allList = allList.concat(minPorts)
  // 管理员名称
  if (minAdmNames.length !== 1){
    allList = allList.concat(minAdmNames)
  }
  // 总体去重
  return [...new Set(allList)]
})
</script>

<template>
  <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInDown"
  >
    <div class="col-12 offset-0 col-md-8 offset-md-2 col-xxl-6 offset-xxl-3 div-input">
<!--      输入框 -->
      <input type="text" class="input" v-model.trim="searchValue"/>
<!--      删除按钮 -->
      <div @click="searchValue=''" v-show="searchValue.length" id="del">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg clear" viewBox="0 0 16 16" v-pre>
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
<!--      搜索图标 -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-logo" viewBox="0 0 16 16" v-pre>
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
<!--      搜索提示 -->
      <div class="div-tips">
        <div class="tips-for-search" v-for="i in tipsOn" :key="i" @click="searchValue = i">
          {{i}}
        </div>
      </div>
    </div>
  </transition>
</template>

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
  #del{
    // 鼠标边为可选
    cursor: pointer;
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

  .div-tips::-webkit-scrollbar {
    display: none; /* Safari 和 Chrome */
  }
  .div-tips{
    margin: 10px 0 -10px -5px;
    display: flex;
    overflow-x: auto;
    /* 隐藏滚动条 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    white-space: nowrap; /* 防止子元素折行 */

    .tips-for-search{
      margin: 5px 8px 5px 5px;
      border-radius: 6px;
      box-shadow: 0 0 5px #bbbbbb;
      padding: 2px 4px;
      float: left;
      font-size: 13px;
      color: gray;
      // 鼠标边为可选
      cursor: pointer;
    }
    .tips-for-search:hover {
      box-shadow: 0 0 5px gray;
    }
  }
}
</style>