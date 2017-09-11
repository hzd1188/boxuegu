require('../common/aside');
require("../common/header")


// ajax请求form表单数据  get主要为请求数据    post提交数据
$.ajax({
    url: '/v6/teacher/profile',
    type: 'get',
    success: function(data) {
        if (data.code == 200) {
            var html = template('tpl-form', data.result);
            $('.teacher-profile').html(html);
        }
    }
})


// 修改表单
//  因为前面表单提交后数据回显需要时间，是动态异步创建出来的 
// 这里通过插件ajaxForm监听表单提交事件必须使用委托的方式，插件提供了delegation选项配置为true即可

//  点击获取表单内容 可用jquery-form插件
$('#teacher-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
        }
    }
})