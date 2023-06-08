const fs = require("fs")

// 读取配置文件
const config = JSON.parse(String(fs.readFileSync("./config.json")))

// 判断格式
if (require("./mod/testConfig").tec(config)){

    // 写入文件
    fs.writeFileSync("./routes/user.js",require("./mod/velBuild").velb(config))

    // 开始监听
    require("./mod/server").ser(parseInt(config["listenPoint"]),require('./routes/user.js'))
}