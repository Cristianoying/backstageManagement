const userModel = require('../model/user');
const JWT = require('jsonwebtoken');

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

module.exports = {
	userLogin
}