var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var config = require('../config.js').html;

gulp.task('html', function () {
  nunjucksRender.nunjucks.configure([config.srcTemplates], {watch: false});
  return gulp.src(config.src)
    .pipe(nunjucksRender({
      data: config.data
    }))
    .pipe(gulp.dest(config.dest));
});
