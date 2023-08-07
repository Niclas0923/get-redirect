import {defineStore} from "pinia";
import {usePostStore} from "./usePostStore.js";

export const useTryLoginStore = defineStore('tryLogin', ()=>{
    // 引入 post 的数据和函数
    const post = usePostStore()

    // 测试用户信息
    function tryLogin(name,password,canCallback){
        post.post("/systemServer/login",{name,password},(data)=>{
            // 登录成功的话修改本地存储
            if (data && name && password){
                // 修改本地的数据
                post.name = name
                post.password = password
                // 存储到本地
                localStorage.setItem("user", JSON.stringify({name,password}));
            }
            if (!data){
                // 失败则删除本地储存
                localStorage.removeItem(("user"))
            }
            // 运行回调并且传递数据
            canCallback(data)
        })
    }

    return {tryLogin}
})