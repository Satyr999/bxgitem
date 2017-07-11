define(['jquery', 'cookie'], function($, cookie) {
    $("#formLogin").submit(function() {
        var data = $(this).serializeArray();
        console.log(data);

        $.ajax({
            url: "/api/login",
            type: 'post',
            data: data,
            success: function(info) {
                if (info.code == 200) {
                    // alert("登陆成功");
                    var tcstr = JSON.stringify(info.result);
                    $.cookie("tcstr", tcstr);
                    location.href = "index";
                }
            },
            error: function(errorInfo) {
                console.log('用户名或密码不正确');
            }
        });
        return false;
    })
})