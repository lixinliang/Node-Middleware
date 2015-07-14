module.exports = function(app,ModelProxy){
    app.get('/',function(req,res){

        // 创建model
        var usersModel = new ModelProxy({
            getUsers: 'Users.getUsers'
        });
        usersModel.getUsers()
        .done(function(data) {
            console.log( data );
        })
        .error(function(err) {
            console.log(err);
        });

        // 不使用modelproxy,可以直接使用以下方式（需要 var http = require('http')）
        // var optionspost = {
        //     host : '172.16.42.216',
        //     path : '/h5builder/user.php',
        //     method : 'POST'
        // };
        // // 服务器端发送REST请求
        // var resService = http.request(optionspost, function(resService) {
        //     resService.setEncoding("utf8");
        //     resService.on('data', function(d) {
        //         console.log(d);
        //     });
        // });
        // resService.end();
        // resService.on('error', function(e) {
        //     console.error(e);
        // });

        res.render('index',{
            'title': '首页'
        });
    });
};
