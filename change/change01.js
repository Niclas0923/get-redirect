/*
*       用于数据转化，这个文件用于1.0.2 ——> 1.0.3的更新
*       若安装版本大于等于1.0.3，那么数据无需使用这个方法更新
* */

const fs = require('fs')

const data = JSON.parse(String(fs.readFileSync("./../config/data.json")))

const data3 = JSON.parse(String(fs.readFileSync("./../config/user.json")))

// 修改data
const data2 = []
for (let i in data){
    data2.push({
        name:data[i][0],
        url:data[i][1],
        id:i+"",
        // 这里的姓名需要修改成你设置的账户的用户名，之后可以再data中进行分布更改
        userName:"Niclas0923"
    })
}

fs.writeFileSync("./../config/data.json",JSON.stringify(data2))


// 修改user
const data4 = []
for (let i in data3){
    data4.push({
        name:data3[i][0],
        password:data3[i][1]
    })
}

fs.writeFileSync("./../config/user.json",JSON.stringify(data4))
