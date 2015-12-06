/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var plugins = require('gulp-load-plugins')({scope: ['devDependencies']});
var del = require('del');
var babelify = require('babelify');
var browserify = require('browserify');
var through2 = require('through2');
var connect = require('gulp-connect');
var buffer = require('vinyl-buffer');

gulp.task('default', ['js', 'html'], function () {


});

gulp.task('js', function () {
    return gulp.src('./src/js/init.js')
            .pipe(through2.obj(function (file, enc, next) {
                browserify(file.path, {debug: process.env.NODE_ENV === 'development'})
                        .transform(babelify, {presets: ["es2015", "react","stage-1"]})
                        .bundle(function (err, res) {
                            if (err) {
                                return next(err);
                            }

                            file.contents = res;
                            next(null, file);
                        });
            }))
            .on('error', function (error) {
                console.log(error.stack);
                this.emit('end');
            })
            .pipe(require('gulp-rename')('bundle.js'))
            .pipe(gulp.dest('./dist'));
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
            .pipe(gulp.dest('dist'));
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('clean', function () {
    return del(['dist', 'build']);
});

gulp.task('watch', function () {
    gulp.watch('src/**/*', ['default']);
});


