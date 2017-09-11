// 本地加载
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlReplace = require('gulp-html-replace');

// 压缩htmlmin

gulp.task('html', function() {
    gulp.src(['src/**/*.html', 'index.html'])
        .pipe(htmlReplace({
            style: gulp.src('src/html/common/style.html'),
            aside: gulp.src('src/html/common/aside.html'),
            header: gulp.src('src/html/common/header.html')
        }))
        .pipe(htmlmin({
            collapseWhitespace: true, // 去掉空白字符
            minifyJS: true, //压缩页面JS
            minifyCSS: true, //压缩页面CSS
            removeComments: true //清除HTML注释
        }))

    .pipe(gulp.dest('dist'));
})



// less处理

gulp.task('less', function() {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cleanCss())

    .pipe(gulp.dest('dist/css'));
})

// 配置要打包的第三方路径

var listJs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery-form/dist/jquery.form.min.js'
];

// 合并所有第三方包为一个js
gulp.task('listJs', function() {
    gulp.src(listJs)
        .pipe(concat('lib.js'))

    .pipe(gulp.dest('dist/js'));
})


var jsModules = [
    // 首页
    'src/js/index.js',
    // 用户
    'src/js/user/login.js',
    'src/js/user/profile.js',
    'src/js/user/repass.js',
    // 讲师
    'src/js/teacher/add.js',
    'src/js/teacher/edit.js',
    'src/js/teacher/list.js',
    // 课程
    'src/js/course/add.js',
    'src/js/course/course_edit1.js',
    'src/js/course/course_edit2.js',
    'src/js/course/course_edit3.js',
    // 学科分类
    'src/js/category/add.js',
    'src/js/category/edit.js',
    'src/js/category/list.js',


];

// browserify打包commonjs
gulp.task('js', function() {
    jsModules.forEach(function(jsPath) {
        // 将每一个路径的字符串切割成数组
        jsArr = jsPath.split('/');
        // 取到数组中的最后一个字符串
        newJS = jsArr.pop();
        // 去掉新数组中的第一个字符串
        jsArr.shift()

        browserify(jsPath, { debug: true }).bundle()
            .pipe(source(newJS))
            .pipe(buffer())
            // .pipe(uglify())
            .pipe(gulp.dest('dist/' + jsArr.join('/')))

    })

})

// 统一解压

gulp.task('build', function() {
    gulp.run(['html', 'less', 'listJs', 'js'])
});

// 监听路径变化
gulp.task('default', function() {
    gulp.run(['html', 'less', 'listJs', 'js'])

    gulp.watch('src/**/*.html', function() {
        gulp.run('html')
    })

    gulp.watch('src/less/index.less', function() {
        gulp.run('less')
    })

    gulp.watch('src/**/*.js', function() {
        gulp.run('js')
    })

    gulp.watch(listJs, function() {
        gulp.run('listJs')
    })
})