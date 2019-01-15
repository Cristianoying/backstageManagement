var express = require('express');
var router = express.Router();
var userController = require("../controller/user");

/* login. */
router.post('/login',userController.userLogin);

module.exports = router;
