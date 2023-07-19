<template>
  <div>
    <!-- 提示栏 -->
    <div class="card-page" v-pre style="padding: 20px 15px">
      <ul>
        <li>索引无需添加斜杠 “/”。</li>
        <li>URL可设置成转跳链接，也可以设置为相对路径，例如“#”。</li>
        <li>URL要设置成转跳链接时候一定要添加“http(s)://”，不然会被认为是相对链接。</li>
      </ul>
    </div>
    <!-- 添加表单 -->
    <div class="card-page" style="padding: 35px">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">索引</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="path">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">URL</label>
        <input type="url" class="form-control" id="exampleInputPassword1" v-model="url"  @keydown.enter="addOne">
      </div>
      <button class="btn btn-primary" id="add" @click="addOne">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageValueAdd',
  props: ["allTags"],
  data(){
    return{
      path:"",
      url:""
    }
  },
  methods:{
    addOne(){
      console.log(this.path,this.url)
      // 不能为空
      if (this.path.length !== 0 && this.url.length !== 0){
        const regex = /[<>\\]/;
        // 测试几个特殊符号
        if(!regex.test(this.path) && !regex.test(this.url)){
          // 测试系统占用
          if (["systemServer","adm"].indexOf(this.path) === -1){
            // 测试重复
            if (this.allTags.indexOf(this.path) === -1){
              // 全部正常那么触发添加
              this.$bus.$emit("addOne",this.path,this.url)
              // 然后清空信息
              this.url = ""
              this.path = ""
            }else alert("索引标签重复，请进行修改")
          }else alert("索引标签与系统占用标签相同，请进行修改")
        }else alert("不能含有 <>\\ 这几个特殊符号")
      }else alert("不能为空")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-page>ul{
  margin-bottom: 0;
}
</style>
