var gulp = require('gulp');
var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
// 编译sass文件任务
gulp.task('sass', function() {
    function sassCompile4nix(){
        function handler(){
            return plugins.notify.onError({
                title:'sass编译错误',
                message:'<%=error.message%>'
            });
        }
        return plugins.sass().on('error', handler());
    }
    return gulp.src('public/sass/*.scss')
        .pipe(sassCompile4nix())
        .pipe(plugins.autoprefixer({browsers: ['> 0%']}))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('public/css'))
        .pipe(reload({stream: true}));
});
// 服务程序入口
gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
                script: 'app.js',
                ext: 'js',
                ignore: ['public/**'],
                env: {'NODE_ENV': 'development'}
    })
    .on('start', function onStart() {
        if(!called){cb();}
            called = true;
        })
    .on('restart', function() {
        setTimeout(function() {
            console.log('-------- restart --------');
          reload({stream: false});
        }, 1000);
    });
});
// 监听服务变化
gulp.task('browser-sync', ['nodemon'], function(){
    browserSync.init({
        files: ['public/**','views/**'],
        proxy: 'http://localhost:3000',
        port: 4000,
        browser: ['/Applications/Google\ Chrome\ Canary.app/'],
        notify: true,
    });
});
// 设置默认任务
gulp.task('default',['browser-sync'], function(){
    gulp.watch('public/sass/**', ['sass']);
});
