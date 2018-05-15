'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const wiredep = require('gulp-wiredep')
 
gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      directory: "./bower_components"
    }))
    .pipe(gulp.dest('./'));
});


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