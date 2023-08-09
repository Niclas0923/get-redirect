import {defineStore} from "pinia";
import {reactive, toRefs} from "vue";
import {usePostStore} from "./post/usePostStore.js";

export const useValueStore = defineStore('value', ()=>{
    // 引入 post 命令
    const post = usePostStore()
    // 列表数据

    // 所有数据
    const value = reactive({
        // list 数据
        list:[],
        // log 数据
        log:[]
    })

    // 更新 log 的数据
    // function updateLogValue(){
    //     post.postUseUser("/systemServer/getValLog",data=>{
    //         if (data){
    //             value.log = data
    //         }else alert('登录信息错误')
    //     })
    // }

    // 更新 list 的数据
    // function updateListValue(){
    //     post.postUseUser("/systemServer/getValList",data=>{
    //         if (data){
    //             value.list = data
    //         }else alert('登录信息错误')
    //     })
    // }

    // 都进行更新
    function updateAll(log=false){
        post.postUseUser("/systemServer/getValues",data=>{
            if (data){
                value.list = data.list
                value.log = data.log.reverse()
                if (log) alert("更新完成")
            }else alert('登录信息错误')
        })
    }

    return {...toRefs(value),updateAll}
})