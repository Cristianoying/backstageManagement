var express = require('express');
var router = express.Router();
var userController = require("../controller/user");

/* login. */
router.post('/login',userController.userLogin);

// 添加店铺
router.post("/addgtype",userController.addgType);

module.exports = router;
