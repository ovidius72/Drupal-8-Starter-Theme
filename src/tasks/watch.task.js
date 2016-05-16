import config  from '../config';
import gulp from 'gulp';
import path from 'path';
import livereload from 'gulp-livereload';

class WatchTask {
  constructor() {
    this.name = 'watch';
  }

  watch() {
    return gulp.task(this.name, () => {


      "use strict";
      livereload.listen();

      //Watch sass files
      gulp.watch(config.src.sassDir + '/**/*.{sass,scss}', ['sass']);

      //watch for js files
      //  gulp.watch(config.src.jsDir + '/**/*.js', 'js');

      //watch twig files
      gulp.watch(config.twig + '/**/*.twig').on('change', livereload.changed);

      //watch for css file changes.
      gulp.watch(config.build.cssDir + '/**/*.css').on('change', livereload.changed);
    });
  }
}

export default WatchTask;

