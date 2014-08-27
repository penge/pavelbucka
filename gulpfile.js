'use strict';

var //var
  browserSync    = require('browser-sync'),
  browserify     = require('gulp-browserify'),
  cleanhtml      = require('gulp-cleanhtml'),
  compass        = require('gulp-compass'),
  gulp           = require('gulp'),
  jshint         = require('gulp-jshint'),
  reload         = browserSync.reload,
  rename         = require('gulp-rename'),
  runSequence    = require('run-sequence'),
  uglify         = require('gulp-uglify');

gulp.task('browser-sync', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('htmls', function () {
  return gulp.src('./app/*.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function () {
  return gulp.src('./app/styles/**/*.sass')
    .pipe(compass({
      style: 'compressed',
      sass: 'app/styles',
      css: 'dist/styles' 
    }))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['jshint'], function() {
  return gulp.src('./app/scripts/main.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('default', ['browser-sync'], function () {
  runSequence(['htmls', 'styles', 'scripts']);

  gulp.watch('./app/*.html',
    ['htmls', reload]);
 
  gulp.watch('./app/styles/**/*.sass',
    ['styles', reload]);

  gulp.watch('./app/scripts/**/*.js',
    ['scripts', reload]);
});
