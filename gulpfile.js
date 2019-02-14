
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function () {
  return gulp.watch('scss/style.scss', function () {

    return gulp.src('scss/style.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      })
        .on('error', sass.logError))
      .pipe(gulp.dest('css'));
  });
});
