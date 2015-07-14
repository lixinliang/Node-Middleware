var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

// view 层指定
app.set('views','./views');
// view 编译语言
app.set('view engine','ejs');
// 指定view资源文件目录
app.use(express.static(__dirname + '/public'));
// web 服务
app.listen(port,function(){
    console.log('service is start on port ' + port);
});

// 引入模块
var ModelProxy = require( './common/modelproxy/modelproxy' );
// 初始化引入接口配置文件  （注意：初始化工作有且只有一次）
ModelProxy.init( './interface.json' );

// 引入路由
require('./routes')(app,ModelProxy);
