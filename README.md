# Node-Middleware
前后端分离架构 — 基于Node的中间层。

<br/>

### 背景
大多数项目，前端工程师往往参与项目的表现形式是完成HTML/CSS/JS开发后通过转为动态后端语言，如：JSP、PHP等。页面的大部分优化工作都离不开后端工程师的参与。后期维护、测试前端bug等，也需要前端工程师配置后端环境实现。前端开发者处于被动，依赖后端工程师的情况中。

前后端分离思想的提出，正是为了解决以上前后端耦合度高、职责不清的问题。阿里也提及到[淘宝UED关于前后端分离思想及其实现方式](http://ued.taobao.org/blog/2014/04/full-stack-development-with-nodejs/)。

<br/>

### 技术基础
1. [EJS](http://www.embeddedjs.com/)
2. [NodeJS & Express](https://nodejs.org/)
3. [ModelProxy](https://github.com/carlisliu/modelproxy)
4. [MockJS](http://mockjs.com/)
5. [Gulp](http://www.gulpjs.com.cn/)
6. [bower](http://bower.io/)

<br/>


### 工作流相关
1. 监听Sass文件，实时编译压缩
2. 监听public资源模块文件改动，实时刷新


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

### 优点
1. 前后端分离，用NodeJS作为中间层，处理View层和Controller层。让后端工程师更加专注于Model层的接口、数据等开发维护。
2. 前后端的协作往往通过接口部分，共同定义好数据的返回方式、类型等重要信息后，前端通过mock相关接口数据，无需等待后端工程师接口完成后才能开始工作周期，实现前后端并行开发，提升效率。
3. 优化性能技术，如：Comet、Bigpipe等不依赖于后端框架语言。


<br/>


### 疑问
1. 安全问题。对于一些恶意网络攻击，Node层需要做好应对措施。
2. 性能问题。通讯的通道变多变复杂了，会带来一定的损耗。
3. 稳定问题。Node层对于大并发量的处理。



<br/>


