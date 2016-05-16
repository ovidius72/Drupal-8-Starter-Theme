import config  from '../config';
import gulp from 'gulp';
import path from 'path';
import livereload from 'gulp-livereload';

///**
// * Compile .jade template into html.
// */
//gulp.task('jade', function () {
//  return gulp.src(config.src. + '/**/*.jade')
//    .pipe(jade({
//      pretty: true,
//    }))
//    .pipe(rename(function (file) {
//      file.dirname = '';
//      return file.basename + file.extname;
//    }))
//    .pipe(gulp.dest(distPath.templates))
//    .pipe(livereload());
//});
