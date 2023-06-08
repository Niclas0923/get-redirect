const fs = require("fs")

// 读取配置文件
let config = "配置文件"
let server = false

// 单次运行函数
const ones = ()=>{
    const one = config === "配置文件"
    const config0 = JSON.parse(String(fs.readFileSync("./config.json")))
    // 判断是否与之前相同，不相同则执行下列句子
    if (JSON.stringify(config) !== JSON.stringify(config0)){
        if (!one) console.log("\n\n配置文件被修改，准备检测修改")
        config = config0
        // 判断格式
        if (require("./mod/testConfig").tec(config)){
            if (!one) console.log("修改格式正确，正在重启监听")
            // 格式正确会删除并重新开始，格式错误会继续原先函数
            if (server) server.close()
            // 写入文件
            fs.writeFileSync("./routes/user.js",require("./mod/velBuild").velb(config))

            // 开始监听
            server = require("./mod/server").ser(parseInt(config["listenPoint"]),require('./routes/user.js'),config)
        }else{
            if (!one) console.log("格式错误，讲不会重启监听")
        }
    }
}
// 直接运行一次
ones()

// 添加更新检测
setInterval(()=>{ones()},5000)