var Mock = require('mockjs');

var data = Mock.mock({
    'list|33':[{
      'shopId|+1':112312451,
      "shopName":'@ctitle',
      "shopTel":/^1(5|3|7|8)[0-9]{9}$/,
      'shopLogo':"@image('200x100', '#50B347', '#FFF', 'backstages')",
      "shopAddress":'@county(true)',
      "shopstar|1-5":"★",
      "shopcomments|32-100":100
    }]
});
let datalist = data.list;


function editmsg(config){
let body = JSON.parse(config.body);
let data = body.form;
    datalist.forEach((item)=>{
            if(item.shopId ==data.shopId){
                item.shopName=data.shopName;
                item.shopAddress=data.shopAddress;
                item.shopTel=data.shopTel;
                item.shopcomments=data.shopcomments;
            }
    });
    return datalist;
}
function  getdatalist() {
    return datalist;
}


// console.log(datalist);
export default {
    getdatalist,
    editmsg
}
