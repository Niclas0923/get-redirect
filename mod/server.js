const server = (point,userRoutes)=>{
    const express = require("express")
    // 开启监听测试
    const app = express();
    app.use('/', userRoutes);
    app.listen(point, () => {
        console.log(`已经开启http协议${point}端口监听`);
    });
}

exports.ser = server