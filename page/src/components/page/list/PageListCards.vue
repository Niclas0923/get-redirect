<script setup>
import {computed} from "vue";
import {useChangeListStore} from "../../../store/post/useChangeListStore.js";

const props = defineProps(["list","changeAdd","searchValue"])
const change = useChangeListStore()

// 计算是否显示
function showCard(i){
  const val = props.searchValue
  // 用于判断2是否在1内，不区分大小写
  const x = (str,str2) => str.toLowerCase().includes(str2.toLowerCase())
  return (x(i.name,val) || x(i.url,val) || x(i.time,val) || x(i.userName,val))
}
// 写入是否显示
const listOn = computed(()=>{
  const sendArr = []
  props.list.forEach(i =>{
    i.show = (props.searchValue === "")?true:showCard(i)
    sendArr.push(i)
  })
  return sendArr
})

// 管理员姓名是否显示
const admOn = computed(()=>{
  let list = []
  props.list.forEach((value,i)=>{
    list[i] = value.userName
  })
  list = [...new Set(list)]
  return list.length !== 1
})

// 根据当前显示年份进行时间信息的处理
const timeBuild = (time)=> {
  // 如果时间是今年，那么就不进行显示
  const on = time.substring(0, 4) !== String(new Date().getFullYear())
  return on ? time : time.substring(5)
}


</script>

<template>
  <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
      leave-active-class="animate__bounceOut"
  >
    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xxl-5 g-4 mb-4">
      <div class="col" v-for="i in listOn" :key="i.id" v-show="i.show">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title mb-2">{{i.name}}</h5>
            <h6 class="card-subtitle text-muted" v-if="admOn">{{i.userName}}</h6>
            <a :href="i.url" target="_blank" class="card-link">{{i.url}}</a>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{timeBuild(i.time)}}</small>
          </div>
          <div class="false" @click="change.removeOne(i)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg svg" viewBox="0 0 16 16" v-pre>
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </div>
        </div>
      </div>
      <!-- 添加按钮 -->
      <div class="col">
        <button class="btn btn-add" @click="props.changeAdd(true)">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus svg" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

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
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);

      .card-body{
        a{
          word-wrap: break-word; /* 让长单词或URL在不超出容器的情况下强制换行 */
          word-break: break-all; /* 让单词内部自动换行，防止文本溢出容器 */
        }
      }

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
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.20);
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

    // 部分引入图标
    .svg{
      color: #676767;
    }
  }
}

</style>
