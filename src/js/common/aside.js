// 用户信息展示
// 1，读取storage中的userinfo数据
// 2，但是读取的数据是字符串，使用JSON.parse转为对象
// 然后把对象中的信息和头像展示到导航对应的标签中

var userinfoStr = localStorage.getItem('userinfo');
// console.log(userinfoStr);

var userinfo = JSON.parse(userinfoStr);
$('.aside img').attr('src', userinfo.tc_avatar);
$('.aside h4').text(userinfo.tc_name);

// 点击侧yin边栏标题显示隐藏
// 1，获取导航中a标签绑定点击事件
// 2，事件促发时让他的下面兄弟元素显示隐藏切换

$('.navs a').on('click', function() {
    $(this).next().slideToggle();
})



// 根据定位自动定位导航焦点，并显示父级元素
// 1，首先获取页面的location.pathname;
// 2,获取全部导航a标签，先统一取出active类名
// 3，然后利用这个值和导航a标签的href来匹配对应的a标签，添加active类名的焦点式样
// 4，最后在焦点a标签的父级元素，让他show

var path = location.pathname;
$('.navs a').removeClass('active');
$('.navs a[href = "' + path + '"]').addClass('active').parents('ul').show();