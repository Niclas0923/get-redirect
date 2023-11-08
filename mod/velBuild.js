const velBuild = (data)=>{
    // 通过配置文件完成文件内代码
    let val =
        "const express = require('express');\n" +
        "const router = express.Router();\n"
    for (const i of data) {
        val += `router.get(/\\/${i.name}(\\/.*)?/, (req, res) => {const path = req.params[0]?req.params[0].replace(/\\//g, ''):req.params[0];let url = '${i.url}';if(path)url+=\`/\${path}\`;res.redirect(url)});\n`
    }
    val += `module.exports = router;`

    return val
}

exports.velb = velBuild