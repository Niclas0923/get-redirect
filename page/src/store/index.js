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
            name:this.user.name,
            password:this.user.password
        },callback)
    },
    // 获取 log 数据
    getValueLog(callback){
        this.$store.state.postTo("/systemServer/getValLog",{
            name:this.user.name,
            password:this.user.password
        },callback)
    },
    // 向 list 中添加一个
    addListOne(tag,url,callback){
        this.$store.state.postTo("/systemServer/addOne",{
            name:this.user.name,
            password:this.user.password,
            tag,url
        },callback)
    },
    // 从 list 中删除一个
    removeListOne(tagId,callback){
        this.$store.state.postTo("/systemServer/removeOne",{
            name:this.user.name,
            password:this.user.password,
            tagId
        },callback)
    }

}
// 可以理解成所有组件都能访问到的计算属性
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})