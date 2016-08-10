var gulp       = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('browserify', function (cb) {

    /*gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./build/'))
        .on('end', cb);*/

});

gulp.task('default', ['browserify']);

