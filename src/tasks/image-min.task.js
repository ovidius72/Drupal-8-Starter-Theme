import config  from '../config';
import gulp from 'gulp';
import path from 'path';
import imagemin from 'gulp-imagemin';

class ImageMinTask {

  constructor() {
    this.name = 'image-min';
  }

  run() {
    return gulp.task(this.name, () =>
      gulp.src(config.src.images + '**/*.*')
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest(config.assets.images))
    );
  }
}

export default ImageMinTask;
