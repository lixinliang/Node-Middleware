# Node-Middleware
基于Node的前后端分离架构


<br/>

### 背景
[淘宝UED关于前后端分离思想及其实现方式](http://ued.taobao.org/blog/2014/04/full-stack-development-with-nodejs/)


<br/>


### 技术基础
1. [EJS](http://www.embeddedjs.com/)
2. [NodeJS & Express](https://nodejs.org/)
3. [ModelProxy](https://github.com/carlisliu/modelproxy)
4. [MockJS](http://mockjs.com/)


<br/>


### 目录架构

    ├─┬ views                       // 视图层
    │ ├── include                   // EJS 引用模块
    │ └── inde.ejs...               // EJS 页面  
    │
    ├─┬ routes                      // 路由相关
    │ └── index.js                  // index 页面相关路由
    │
    ├── node_modules                // node module 模块
    │
    ├─┬ interfaceRules
    │ └── Users.getUsers.rule.json  // mock接口数据
    │
    ├─┬ common
    │ └── modelproxy                // modelproxy 相关JS库
    │
    ├─┬ public                      // 静态资源
    │ ├── include                   // 样式文件
    │ ├── js                        // 脚本文件
    │ ├── img                       // 图片文件
    │ └── lib                       // bower 库资源（如：bootstrap 、jquery 等）
    │
    ├── .bowerrc                    // bower 指定资源路径配置
    ├── package.json                // npm modules 配置信息
    ├── interface.json              // modelproxy 配置信息
    └── app.js                      // 全局入口



<br/>





