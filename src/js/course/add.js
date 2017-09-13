require('../common/header.js');
require('../common/aside.js');

// 创建课程并实现跳转

$('#course-add').ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert('创建成功');
            location.href = '/dist/html/course/course_edit_step1.html?cs_id=' + data.result.cs_id;
        }
    }
})