// Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');

// Build Dependencies
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('browserify-source', function() {
  return gulp.src('src/index.js')
    .pipe(browserify({
      insertGlobals: false
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['browserify-source']);
});

gulp.task('build', ['browserify-source']);

gulp.task('default', ['build', 'watch']);
