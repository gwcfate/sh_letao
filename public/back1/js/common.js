// NProgress.start();
// NProgress.done();
$(document).ajaxStart(function () {
    NProgress.start();
});
$(document).ajaxStop(function () {
    NProgress.done();
});


//公共效果
$(function () {
    // 二级菜单切换
    $('.lt_aside .category').click(function () {
        $('.lt_aside .child').stop().slideToggle();
    });

    $('.icon_menu').click(function () {
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
        $('.lt_main').toggleClass('hidemenu');
    });

    // js插件模态框
    $('.icon_logout').click(function () {
        $('#logoutModal').modal('show');
    });
    
    $('#logoutBtn').click(function () {
        $.ajax({
            type: 'get',
            url: '/employee/employeeLogout',
            dataType: 'json',
            success: function (info) {
                // console.log(info);
                if (info.success) {
                    location.href = "login.html";
                }
                
            }
        })
    })







})