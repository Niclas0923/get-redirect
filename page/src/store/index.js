import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

const actions = {
    // 写入用户名和密码，同时在 localStorage 也写入
    whiteUser(context,value){
        // localStorage写入
        localStorage.setItem("user", JSON.stringify(value));
        context.commit("WHITEUSER",value)
    }
}
const mutations = {
    // 写入用户名和密码
    WHITEUSER(state,value){
        state.user.name = value.name
        state.user.password = value.password
    },

}
// 可以理解成所有组件都能访问到的data
const state = {
    user:{
        name:'',
        password:""
    },
    // 发送 post 命令
    postTo(path,data,callback){
        // 为了直接访问某个链接的兄弟们写的
        if (!(data.name || data.password)){
            // 没有数据的话就先尝试去读取数据
            const userVal = JSON.parse(localStorage.getItem("user"))
            // 如果有数据
            if (userVal) {
                this.user = userVal
                data = userVal
            }
        }
        axios.post(path,data).then(
            res => callback(res.data),
            err => alert("网络连接失败"+err)
        )
    },
    // 登录使用的函数，会返回成功和失败
    tryLogIn(name,password,callback){
        this.$store.state.postTo("/systemServer/login",{
            name,password
        },callback)
    },
    // 获取 list 数据
    getValueList(callback){
        this.$store.state.postTo("/systemServer/getValList",{
            name:this.$store.state.user.name,
            password:this.$store.state.user.password
        },callback)
    },
    // 获取 log 数据
    getValueLog(callback){
        this.$store.state.postTo("/systemServer/getValLog",{
            name:this.$store.state.user.name,
            password:this.$store.state.user.password
        },callback)
    },
    // 向 list 中添加一个
    addListOne(tag,url,callback){
        this.$store.state.postTo("/systemServer/addOne",{
            name:this.$store.state.user.name,
            password:this.$store.state.user.password,
            tag,url
        },callback)
    },
    // 从 list 中删除一个
    removeListOne(tagId,callback){
        this.$store.state.postTo("/systemServer/removeOne",{
            name:this.$store.state.user.name,
            password:this.$store.state.user.password,
            tagId
        },callback)
    }

}
// 可以理解成所有组件都能访问到的计算属性
const getters = {

}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})