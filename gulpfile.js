var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var browserSync = require('browser-sync');


gulp.task('css', function () {
 var processors = [autoprefixer({browsers: ['last 2 version']}), cssnext];
 return gulp.src('./css/style.css')
 .pipe(postcss(processors))
 .pipe(gulp.dest('./dest'));
});


gulp.task('watch', ['browserSync', 'css'], function (){
  gulp.watch('css/*.css', ['css']);
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('dest/*.css', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
});