const server = (point,userRoutes,config)=>{
    const express = require("express")
    // 开启监听测试
    const app = express();
    app.use('/', userRoutes);
    app.listen(point, () => {
        console.log(`已经开启http协议${point}端口监听`);
        for (const i of config["options"]) {
            console.log(`\\${i[0]}\t————>\t${i[1]}`)
        }
    });
}

exports.ser = server