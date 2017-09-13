require('../common/aside');
require("../common/header")
    // 引入暴露后的模块
var util = require('../common/util');



// 数据回显
// 1，模块点方法过去模块方法中的返回值
// 2，先获取location.search中的cg_id
// 3,得到数据渲染后的模板，引入到页面中

var cg_id = util.getSearch('cg_id');
$.get('/v6/category/edit', { cg_id: cg_id }, function(data) {
    if (data.code) {
        var html = template('form-tpl', data.result);
        $('.category-edit').html(html);

    }
})



// 修改表单并提交

// 因为数据要回显，所以form表单是异步动态插入到页面中的，使用ajaxForm插件时需要用到空控件

$('#form-category').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
        }
    }
})