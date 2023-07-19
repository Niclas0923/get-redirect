const testConfig = (data)=>{
    let list = []
    for (const i of data) {
        // 重复检测和特殊检测
        const lintS = ["systemServer","adm"]
        if (list.indexOf(i.name)===-1 && lintS.indexOf(i.name)===-1){
            list.push(i.name)
        }else {
            console.error("配置文件出现监听重复或者此监听被系统占用，请修改配置文件,错误为\""+i.name+"\"重复")
            return false
        }
    }
    return true
}

exports.tec = testConfig