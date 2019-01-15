const mongoose = require('../utils/database').mongoose;

const User = mongoose.model('user',{
username:String,
password:String
})

const userFindOne = (userInfo,cb)=>{
	User.findOne(userInfo).then((result)=>{
		cb(result)
	})
}

module.exports = {
	userFindOne
}