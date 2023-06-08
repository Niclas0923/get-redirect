const fs = require("fs")

// 读取配置文件
let data = "配置文件"
let server = [false,false]

// 单次运行函数
const ones = ()=>{
    const one = data === "配置文件"
    const data0 = JSON.parse(String(fs.readFileSync("./config/data.json")))
    // 判断是否与之前相同，不相同则执行下列句子
    if (JSON.stringify(data) !== JSON.stringify(data0)){
        if (!one) console.log("\n\n配置文件被修改，准备检测修改")
        data = data0
        // 判断格式
        if (require("./mod/testConfig").tec(data)){
            if (!one) console.log("修改格式正确，正在重启监听")
            // 格式正确会删除并重新开始，格式错误会继续原先函数
            if (server[0]) server[0].close()
            if (server[1]) server[1].close()
            // 写入文件
            fs.writeFileSync("./routes/user.js",require("./mod/velBuild").velb(data))

            // 读取配置文件
            const ser = JSON.parse(String(fs.readFileSync("./config/server.json")))
            const serF = require("./mod/server").ser
            const usrS = require('./routes/user.js')
            server[0] = ser["http"]["on"]?serF(ser["http"],usrS,data):false
            server[1] = ser["https"]["on"]?serF(ser["https"],usrS,data,true):false
        }else{
            if (!one) console.log("格式错误，将来不会重启监听")
        }
    }
}
// 直接运行一次
ones()

// 添加更新检测
setInterval(()=>{ones()},5000)