require('../common/header.js');
require('../common/aside.js');


// 讲师列表数据展示 
//get请求获取数据
// 得到数据后渲染模板，加载到页面中

$.get('/v6/teacher', function(data) {
    if (data.code == 200) {
        $('#teacher_list').append(template('form_tpl', data.result));
    }
})


// 讲师启用或注销
// 1，因为讲师列表是动态生成的，所以需要委托注册click事件
// 2，点击时通过自定义属性，拿到这个按钮身上的cg_id 和 cg_status请求接口
// 3，状态修改成功后，要重新设置按钮的文本，按钮的自定义属性


$(document).on('click', '.btn-teacher-list', function() {
    // 保存促发事件时的按钮，在ajax请求中再次调用
    var $this = $(this);
    var data = {
        tc_id: $(this).attr('data-id'),
        tc_status: $(this).attr('data-status')
    }
    $.post('/v6/teacher/handle', data, function(data) {
        var newStatus = data.result.tc_status;
        $this.text(newStatus == 0 ? '注销' : '开启');
        $this.attr('data-status', newStatus);

    })
})