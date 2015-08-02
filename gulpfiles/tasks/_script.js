var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config.js').script;

gulp.task('script', function() {
  return gulp.src(config.src)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.dest));
});
