'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

// Optimize js-files
gulp.task('jsCompile', () => {
  gulp.src('src/js/*.js')
      .pipe(babel({
            presets: ['env']
        }))
      .pipe(gulp.dest('js'))
});

// Copy CSS
gulp.task('cssCopy', () => {
  gulp.src('src/scss/*.css')
      .pipe(gulp.dest('css'))
});

// SASS Compilation
gulp.task('sassCompile', () => {
  gulp.src(['src/scss/*.scss', '!src/scss/_components/*'])
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 16 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});

// Start All Comands
gulp.task('build', ['jsCompile', 'sassCompile', 'cssCopy']);

// Gulp Watching
gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['jsCompile']);
  gulp.watch('src/scss/*.scss', ['sassCompile']);
	gulp.watch('src/scss/*.css', ['cssCopy']);
});

gulp.task('default', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    scrollProportionally: true,
    notify: false,
    open: "local"
  })
  gulp.watch('src/js/*.js', ['jsCompile']);
  gulp.watch('src/scss/*.scss', ['sassCompile']);
	gulp.watch('src/scss/*.css', ['cssCopy']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
});
