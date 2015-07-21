module.exports = function(app,modelSet){
    app.get('/',function(req,res){
        modelSet.page.getPageById({'id':'1'})
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
