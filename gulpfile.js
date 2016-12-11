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
    .pipe(rename('geojson-canvas.js'))
    .pipe(gulp.dest('build'))
});

gulp.task('browserify-test', function() {
  return gulp.src('test/app.js')
    .pipe(browserify({
      insertGlobals: false
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('.'))
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js', 'test/**/**.js'], ['browserify-source', 'browserify-test']);
});

gulp.task('build', ['browserify-source', 'browserify-test']);

gulp.task('default', ['build', 'watch']);
