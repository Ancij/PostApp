// -- Dependencies -------------------------------------------------------------

var gulp               = require('gulp');
var webserver          = require('gulp-webserver');

var path = {
  root    : './app/',
  scripts : './app/js/',
  dist    : './dist/'
};

// -- Tasks --------------------------------------------------------------------

// Development server
gulp.task('server', function() {
  gulp.src(path.root)
    .pipe(webserver({
      livereload  : true,
      host        : '0.0.0.0',
      port        : 8080,
      fallback    : 'index.html'
    }));
});

// -- Run Tasks ----------------------------------------------------------------

gulp.task('default', [ 'server' ]);
