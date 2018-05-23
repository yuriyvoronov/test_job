'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const wiredep = require('gulp-wiredep');
var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');
 
gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      directory: "./bower_components"
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('images',function(){
	gulp.src('img/**/*.jpg')
		.pipe(gulp.dest('dist/img'));
	gulp.src('img/**/*.png')
		.pipe(gulp.dest('dist/img'));
	gulp.src('img/**/*.svg')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('fonts',function(){
	gulp.src('fonts/**/*.eot)')
		.pipe(gulp.dest('dist/fonts'));
	gulp.src('fonts/**/*.ttf)')
		.pipe(gulp.dest('dist/fonts'));
	gulp.src('fonts/**/*.woff)')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', [
    'html',
    'images',
    'fonts'
    
]);
gulp.task('sass', function () {
  return gulp.src('./templates/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./templates/**/*.scss', ['sass']);
});


gulp.task('default',function(){
	gulp.watch('./templates/**/*.scss', ['sass']);
	gulp.watch('./bower.json', ['bower']);
})