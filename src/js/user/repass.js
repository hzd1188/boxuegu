require('../common/aside');
require("../common/header")

$('#repass-form').on('submit', function() {
    if ($('#input-repass').val() !== $('#input-repeat').val()) {
        alert('两次输入密码不一致');
        return false;
    }




    // 这个方法只负责获取表单中的值，发送ajax请求，并不负责表单事件的监听与阻止，
    // 即时调即时发送请求，调用这个方法就相当于调用$.ajax
    // 之前的那个方法比较强大，但是不灵活，这个相对弱一点，但是比较灵活。
    $('#repass-form').ajaxSubmit({
        success: function(data) {
            alert('密码修改成功');
        }
    })

    return false;
})