import config  from '../config';
import gulp from 'gulp';
import path from 'path';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import EventEmitter from 'events'; //.EventEmitter;

/**
 * Gulp task.
 * Compile sass and scss files into css.
 */
class SassTask {

  constructor() {
    this.name = 'sass';
  }

  run() {
    let onError = (err) => {
      let ee = new EventEmitter();
      console.log(ee);
      notify.onError({
        title: "Gulp",
        subtitle: "Failure!",
        message: "Error: <%= error.message %>",
        sound: "Beep"
      })(err);
//      ee.emit('end');
    };

    gulp.task(this.name, () => {
      return gulp.src(path.join(config.src.sassDir, config.src.sassFileName))
        .pipe(plumber({errorHandler: onError}))
        .pipe(sourcemaps.init())
        .pipe(sass({
          errLogToConsole: true,
          output: 'nested',
          onSuccess: {},
          onError: (err) => {
            notify.onError({
              title: "Gulp",
              subtitle: "Failure!",
              message: "Error: <%= error.message %>",
              sound: "Beep"
            }).write(err);
          }
        })).on('error', sass.logError)
        .pipe(autoprefixer({
          browser: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.build.cssDir))
    });

  }
}

export default SassTask;

