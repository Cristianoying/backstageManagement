const mongoose = require("../utils/database").mongoose;

const User = mongoose.model("user", {
    username: String,
    password:String
})

const goodsType = mongoose.model("goodstype", {
    shopTypeName: "string",
    shopTypePic: String,
    orderNum: String,
    createTime:String,
    upTime: String
})

const userFindOne = (userInfo, cb) => {
    User.findOne(userInfo).then((result) => {
        console.log(userInfo)
        cb(result);
    })
}

const addgType = (gInfo, cb) => {
    goodsType.insertOne(gInfo).then((result) => {
        console.log(result);
        cb(result);
    })
}







// // 添加一条数据
// module.exports.insertOne = function(coll,obj,cb){
//     _connect(function(db){
//         db.collection(coll).insertOne(obj,cb)
//     })
// }

// // 查找数据
// module.exports.find = function(coll,obj,cb){
//     obj.whereObj = obj.whereObj || {};
//     obj.sortObj = obj.sortObj || {};
//     obj.skipObj = obj.skipObj || 0;
//     obj.limitObj = obj.limitObj || 0;

//     _connect(function(db){
//         db.collection(coll).find(obj.whereObj).sort(obj.sortObj).skip(obj.skipObj).limit(obj.limitObj).toArray(cb)
//     })
// }

// // 计算总数
// module.exports.count = function(coll,obj = {},cb){
//     _connect(function(db){
//         db.collection(coll).countDocuments(obj).then(cb);
//     })
// }

// // delById
// module.exports.delOne = function(coll,whereObj,cb){
//     _connect(function(db){
//         db.collection(coll).deleteOne(whereObj,cb)
//     })
// }

// //updateOne
// module.exports.updateOne = function(coll,whereObj,updateObj,cb){
//     _connect(function(db){
//         db.collection(coll).updateOne(whereObj,updateObj,cb);
//     })
// }






module.exports = {
    userFindOne,
    addgType
}