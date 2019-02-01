const userModel = require('../model/user');
const JWT = require('jsonwebtoken');
const fs = require("fs");
const formidable = require("formidable");

const userLogin = (req,res)=>{
	// console.log(req.body);
	let {username,password}= req.body;

	userModel.userFindOne({username},function(result){
		console.log(result);
		if (!result) {
			res.json({
				status:false,
				info:'用户名不存在'
			})
		}else{
			if (result.password == password) {
				let payload = {
					user:username
				}
				let secret = 'wangying';

				let token = JWT.sign(payload,secret,{expiresIn:"1h"});

				res.cookie('token',token);
				res.cookie('username',username);

				res.json({
					status:true,
					info:'登陆成功',
					user:username,
					token:token,
					ok:"1",
				})
			}else{
				res.json({
					status:false,
					info:'密码错误'
				})
			}

		}

	})
}

const addgType = (req, res, cb) => {



    console.log(req)
    // console.log("sadasd",req.file, "!11111111111111");
    // var form = new formidable.IncomingForm();
    // form.encoding = "utf-8";
    // form.uploadDir = "../upload";
    // form.keepExtensions = true;
    // form.parse(req, (err, parmas, file) => {
    //     console.log(parmas,"\n aaaaaaaaaaaaaaaaa",file)
        // if (err) {
        //     cb({
        //         status: false,
        //         msg: "网络连接错误"
        //     })
        // } else {
        //     var picInfo = file[picName];
        //     var obj = {
        //         shopTypeName: parmas.shopTypeName,
        //         orderNum: parmas.orderNum,
        //         createTime: parmas.createTime,
        //         upTime: Date.now()
        //     }
        //     userModel.addgType(obj, cb({
        //         status: true,
        //         msg:"success"
        //     }))

        // }

    // })
}

module.exports = {
	userLogin,
	addgType
}