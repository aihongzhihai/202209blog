let express = require('express')
// 调用Router方法可以得到一个路由中间间实例
let router = express.Router()
router.get('/',function(req,res){
    res.send('首页')
})
router.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
module.exports = router
