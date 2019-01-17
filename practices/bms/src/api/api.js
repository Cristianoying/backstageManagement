import mock from '../mock/mock';
import Mock from 'mockjs';


Mock.mock(/\/getdatalist/,"get",mock.getdatalist);

Mock.mock(/\/editmsg/,'post',mock.editmsg);
