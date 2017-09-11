require('../common/aside');
require("../common/header")

// 动态渲染模板引擎
// 请求加载数据

$.get('/v6/category/top', function(data) {
    if (data.code == 200) {
        var html = template('form-tpl', data.result);
        $('.form-control ').html(html);

    }

});

// 提交表单
$('#form-category').ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
        }
    }
})