require('../common/header.js');
require('../common/aside.js');

// get 请求课程列表数据回显

$.get('/v6/course', function(data) {
    if (data.code == 200) {
        var html = template('course-tpl', data.result);
        $('#course-list').html(html);
    }
})