var gulp = require('gulp');
var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('sass', function() {
    function sassCompile4nix(){
        function handler(){
            return plugins.notify.onError({
                title:'sass编译错误',
                message:'<%=error.message%>'
            })
        }
        return plugins.sass().on('error', handler())
    }
    return gulp.src('public/sass/*.scss')
        .pipe(sassCompile4nix())
        .pipe(plugins.autoprefixer({browsers: ['> 0%']}))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('public/css'))
})

var BROWSER_SYNC_RELOAD_DELAY = 500;
gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
                script: 'app.js',
                watch: ['app.js']
    })
    .on('start', function onStart() {
        if(!called){cb();}
            called = true;
        })
    .on('restart', function onRestart() {
        setTimeout(function reload() {
            browserSync.reload({
                stream: true
        });
    }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init({
        files: ['public/**'],
        proxy: 'http://localhost:3000',
        port: 4000,
        browser: ['/Applications/Google\ Chrome\ Canary.app/']
    });
});


gulp.task('default',['browser-sync'], function(){
    gulp.watch('public/sass/**', ['sass'])
})
