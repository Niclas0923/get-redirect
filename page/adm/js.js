// 创建vue实例
const vm = new Vue({
    // 获取容器
    el:"#root",
    // 基础属性
    data:{
        input:{
            i:"",
            url:""
        },
        list:[],
        user:{
            name:"",
            pw:""
        },
        init:false
    },
    // 方法
    methods:{
        // 登录
        login(){
            // 不能为空
            if (this.user.name.length !== 0 && this.user.pw.length !== 0){
                const regex = /[<>\\]/;
                // 测试几个特殊符号
                if(!regex.test(this.user.name) && !regex.test(this.user.pw)){
                    // 直接进行登录测试
                    this.getNewList()
                }else alert("不能含有 <>\\ 这几个特殊符号")
            }else alert("不能为空")
        },
        // 添加一个的函数
        addOne(){
            // 不能为空
            if (this.input.i.length !== 0 && this.input.url.length !== 0){
                const regex = /[<>\\]/;
                // 测试几个特殊符号
                if(!regex.test(this.input.i) && !regex.test(this.input.url)){
                    // 测试系统占用
                    if (["systemServer","adm"].indexOf(this.input.i) === -1){
                        // 测试重复
                        if (this.list.indexOf(this.input.i) === -1){
                            // 都正常
                            $.post("/systemServer/addOne",{name:this.user.name,password:this.user.pw,tag:this.input.i,url:this.input.url},(res)=>{
                                if (res[0]==="成功"){
                                    // 清空
                                    this.input.i = ""
                                    this.input.url = ""
                                    // 写入信息
                                    this.getNewList()
                                }
                                alert(res[0])
                            },"json")
                        }else alert("索引标签重复，请进行修改")
                    }else alert("索引标签与系统占用标签相同，请进行修改")
                }else alert("不能含有 <>\\ 这几个特殊符号")
            }else alert("不能为空")
        },
        // 删除一个的函数
        delOne(i){
            if (confirm(`确定要删除索引 ${i[0]} 吗？`)) {
                // 用户点击了“确定”按钮，继续执行后面的代码
                $.post("/systemServer/removeOne",{name:this.user.name,password:this.user.pw,tag:i[0]},(res)=>{
                    this.getNewList()
                    alert(res[0])
                },"json")
            }
        },
        // 获取最新list
        getNewList(){
            $.post("/systemServer/getValList",{name:this.user.name,password:this.user.pw},(res)=>{
                if (res === "用户名或密码错误") alert(res)
                else {
                    if (!this.init) {
                        alert("登录成功")
                        this.init = true
                        // 本地存储用户名和密码
                        localStorage.setItem("user", JSON.stringify({name:this.user.name,password:this.user.pw}));
                    }
                    this.list = res
                }
            },"json")
        }
    },
    // 起始时会调用的函数
    mounted(){
        // 尝试从以前的值中读取user的信息
        const userVal = JSON.parse(localStorage.getItem("user"))
        if (userVal){
            // 如果存在就直接写入，之后直接登录
            this.user.name = userVal["name"]
            this.user.pw = userVal["password"]
            this.init = true
            this.getNewList()
        }
    }
})