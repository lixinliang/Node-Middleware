module.exports = function(app,ModelProxy){
    app.get('/',function(req,res){

        // 创建model
        var pageModel = new ModelProxy({
            getPageById: 'Page.getPageById'
        });
        pageModel.getPageById({'id':'1'})
        .done(function(data) {
            console.log(data);
        })
        .error(function(err) {
            console.log(err);
        });
        res.render('index',{
            'title': '首页'
        });
    });
};
