$('#login-form').ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert('登陆成功');
            localStorage.setItem('userinfo', JSON.stringify(data.result));

            location.href = '/dist/index.html';
        } else {
            alert('登陆失败');

        }
    }

})

// $('#login-form').on('submit', function() {
//     $.ajax({
//         type: 'post',
//         url: 'v6/login',
//         data: $(this).serialize(),
//         success: function(data) {
//             if (data.code == 200) {
//                 alert('登陆成功');
//                 location.href = '/dist'
//             } else {
//                 alert('登陆失败');
//             }

//         },
//         error: function() {
//                 alert('登陆失败');
//             }
//             // jquery中阻止浏览器默认事件
//     })
//     return false;

// })


//回显历史登录用户头像，没有就展示一个默认头像

var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || {};
$('.avatar img').attr('src', tc_avatar);