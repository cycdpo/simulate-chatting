var
  path = require('path')
  , gulp = require('gulp')
  , ghPages = require('gulp-gh-pages')
;

gulp.task('copy', function () {
  return gulp
    .src(path.resolve('static', 'image', 'demo', '*'))
    .pipe(gulp.dest(path.resolve('dist')))
});


// Deploy to ghPages
gulp.task('deploy', function () {
  return gulp
    .src(['dist/**/*', '!dist/**/*.map'])
    .pipe(ghPages());
});

