var gulp = require('gulp');
var fs = require('fs');
var nunjucksRender = require('gulp-nunjucks-render');
var config = require('../config.js').html;

gulp.task('html', function () {
  nunjucksRender.nunjucks.configure([config.srcTemplates], {watch: false});
  return gulp.src(config.src)
    .pipe(nunjucksRender({
      data: JSON.parse(fs.readFileSync(config.dataFile))
    }))
    .pipe(gulp.dest(config.dest));
});
