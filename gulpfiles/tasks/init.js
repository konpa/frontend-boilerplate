var gulp = require('gulp');
var del = require('del');
var shell = require('gulp-shell');
var config = require('../config.js');

gulp.task('copy-html5-boilerplate', function () {
  return gulp.src(['html5-boilerplate/dist/**/*', '!html5-boilerplate/dist/doc/**/*'])
    .pipe(gulp.dest(config.dest));
});

gulp.task('copy-sass-boilerplate', function () {
  return gulp.src('sass-boilerplate/stylesheets/**/*')
    .pipe(gulp.dest(config.src + '/stylesheets/'));
});

gulp.task('clean-repo', ['copy-html5-boilerplate', 'copy-sass-boilerplate'], function(cb) {
  return del([
    'html5-boilerplate',
    'sass-boilerplate',
    '.gitmodules',
    '.git',
    'dist/doc'
  ], cb);
});

gulp.task('init', ['clean-repo'], shell.task([
  'git init'
]));
