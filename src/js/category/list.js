require('../common/aside');
require("../common/header")



// 获取数据，渲染学科列表
// 1，请求接口，获取渲染数据
// 2，使用模板引擎得到数据渲染后的html ，插入到页面指定位置

// 快速get 请求获取数据的方法

$.get('/v6/category', function(data) {
    var html = template('tpl-category', data.result);
    $('.table-bordered').append(html);
})