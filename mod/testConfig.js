const testConfig = (data)=>{
    let list = []
    for (const i of data) {
        // 重复检测
        if (list.indexOf(i.name)===-1){
            list.push(i.name)
        }else {
            console.error("配置文件出现监听重复，请修改配置文件,错误为\""+i.name+"\"")
            return false
        }
    }
    return true
}

exports.tec = testConfig