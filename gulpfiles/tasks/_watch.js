/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['browserSync'], function(callback) {
  watch(config.sassFiles, function() { gulp.start('sass'); });
  watch(config.jsFiles, function() { gulp.start('scripts'); });
});
