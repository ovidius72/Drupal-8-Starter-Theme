import config  from '../config';
import gulp from 'gulp';
import path from 'path';
import cleanCSS from 'gulp-clean-css';

class CleanCSS {

  constructor() {
    this.name = 'CleanCSS';
  }

  run() {
    gulp.task(this.name, () => {
      return gulp.src(path.join(config.build.cssDir, config.build.cssFileName))
        .pipe(cleanCSS({
          compatibility: 'ie11'
        }))
        .pipe(gulp.dest(config.assets.cssDir));
    });
  }
}

export default CleanCSS;
