// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

// if (!$.cookie('PHPSESSID') && !(/\/login$/.test(location.pathname))) { //如果自己当前就是login页面的话，就不需要再跳转了
//     location.href = "login";
// }

// // if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/view/dashboard/login') {
// if (!(/\/login/.test(location.pathname))) {
//     var tcinfo = JSON.parse($.cookie('tcstr'));
//     var tplstr = template('tpl', tcinfo);
//     $(".aside>.profile").html(tplstr);
// }
define(['jquery', 'cookie', 'template'], function($, cookie, template) {
    // if (!$.cookie('PHPSESSID') && !(/\/login$/.test(location.pathname))) { //如果自己当前就是login页面的话，就不需要再跳转了
    //     location.href = "login";
    // }

    // // if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/view/dashboard/login') {
    // if (!(/\/login/.test(location.pathname))) {
    //     var tcinfo = JSON.parse($.cookie('tcstr'));
    //     var tplstr = template('tpl', tcinfo);
    //     $(".aside>.profile").html(tplstr);
    // }
    if (!$.cookie('PHPSESSID') && !(/\/login/.test(location.pathname))) {
        location.href = 'login';
    }
    if (!(/\/login/.test(location.pathname))) {
        var tcstr = JSON.parse($.cookie('tcstr'));
        var htmlStr = template('tpl', tcstr);
        console.log(htmlStr);
        $('.aside>.profile').html(htmlStr);
    }
})