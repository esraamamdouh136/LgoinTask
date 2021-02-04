const gulp = require('gulp');
const Autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat')
const SASS = require('gulp-sass');
const pug = require('gulp-pug');
const livereloader = require('gulp-livereload');



gulp.task('html', function () {
    return gulp.src('Project/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereloader());

});


gulp.task('css', function () {
    return gulp.src('Project/assets/Css/*.scss')
        .pipe(SASS({
            outputStyle: 'compressed'
        }))
        .pipe(Autoprefixer('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereloader());

});

gulp.task('JS', function () {
    return gulp.src('Project/assets/Js/*.js')
        .pipe(gulp.dest('dist/Js'))
        .pipe(livereloader());

});

gulp.task('image', function () {
    return gulp.src('Project/assets/images/*.png')
        .pipe(gulp.dest('dist/images'))
        .pipe(livereloader());

});

gulp.task('watch', function () {
    require('./server')
    livereloader.listen()
    gulp.watch('Project/**/*.pug', gulp.series('html'));
    gulp.watch('Project/assets/Css/*.scss', gulp.series('css'));
    gulp.watch('Project/assets/Js/*.js', gulp.series('JS'));
    gulp.watch('Project/assets/images/*', gulp.series('image'));

})

gulp.task('default' , gulp.series('watch'));


