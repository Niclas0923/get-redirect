import {defineStore} from "pinia";
import axios from "axios";
import {reactive,toRefs} from "vue";

export const usePostStore = defineStore('post', ()=>{
    // 用户信息
    // 不向外释放，仅能通过内部函数进行读取和修改
    const user = reactive({
        name:"",
        password:""
    })

    // 发送 post 命令
    function post(path,data,canCallback){
        // 为了直接访问某个链接的兄弟们写的
        if (!(user.name)){
            // 没有数据的话就先尝试去读取数据
            const userVal = JSON.parse(localStorage.getItem("user"))
            // 如果有数据
            if (userVal) {
                user.name = userVal.name
                user.password = userVal.password
                data = userVal
            }
        }
        axios.post(path,data).then(
            res=>{
                canCallback(res.data)
            },
            err=>{
                console.log("请求发送失败---postStore.post---"+err)
                alert("请求发送失败")
            }
        )
    }

    // 用用户名和密码作为数据发送 post 命令
    function postUseUser(path,canCallback){
        // 设置 setTimeout 来解决用户数据更新的问题
        // 让这些函数运行在更新后
        setTimeout(()=>{
            axios.post(path,{
                name:user.name,
                password:user.password
            }).then(
                res=> canCallback(res.data),
                err=>{
                    console.log("请求发送失败---postStore.postUseUser"+err)
                    alert("请求发送失败")
                }
            )
        })
    }

    return {...toRefs(user),post,postUseUser}
})