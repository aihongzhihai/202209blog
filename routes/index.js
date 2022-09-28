let express = require('express')
// 调用Router方法可以得到一个路由中间间实例
let router = express.Router()
router.get('/',function(req,res){
    // 路由是相对路径，相对于模板根目录（views）,不要写./直接写/代表根目录，扩展名.html可以不写
    res.render('index',{title:'首页'})
})
router.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
module.exports = router
