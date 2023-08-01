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
    },
    getValueList(context){
        context.state.postTo("/systemServer/getValList",{
            name:context.state.user.name,
            password:context.state.user.password
        },data=>{
            context.commit("CHANGELIST", data)
        })
    },
    getValueLog(context){
        context.state.postTo("/systemServer/getValLog",{
            name:context.state.user.name,
            password:context.state.user.password
        },data=>{
            context.commit("CHANGELOG", data)
        })
    },
    // 向 list 中添加一个
    addListOne(context,value){
        context.state.postTo("/systemServer/addOne",{
            name:context.state.user.name,
            password:context.state.user.password,
            tag:value.tag,
            url:value.url
        },data=>{
            if (data){
                context.dispatch("getValueList").then(r => {
                    if (r) console.log(r)
                })
            }else alert("添加失败")
        })
    },
    // 从 list 中删除一个
    removeListOne(context,i){
        if (confirm(`确定要删除索引 ${i.name} 吗？`)) {
            // 用户点击了“确定”按钮，继续执行后面的代码
            context.state.postTo("/systemServer/removeOne",{
                name:context.state.user.name,
                password:context.state.user.password,
                tagId:i.id
            },data=>{
                if (data){
                    context.dispatch("getValueList").then(r => {
                        if (r) console.log(r)
                    })
                }else alert("删除失败")
            })
        }
    }
}
const mutations = {
    // 写入用户名和密码
    WHITEUSER(state,value){
        state.user.name = value.name
        state.user.password = value.password
    },
    CHANGELIST(state,value){
        state.list = value
    },
    CHANGELOG(state,value){
        state.log = value
    }
}
// 可以理解成所有组件都能访问到的data
const state = {
    user:{
        name:'',
        password:""
    },
    list:[],
    log:[],
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