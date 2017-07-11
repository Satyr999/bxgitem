// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

if (!$.cookie('PHPSESSID') && location.pathname != '/login') { //如果自己当前就是login页面的话，就不需要再跳转了
    location.href = "login";
}

if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/view/dashboard/login') {
    var tcinfo = JSON.parse($.cookie('tcstr'));
    var tplstr = template(tpl, tcinfo);
    $(".aside>.profile").html(tplstr);
}