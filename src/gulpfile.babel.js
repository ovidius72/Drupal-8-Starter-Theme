import gulp from 'gulp';
import config from './config';

//IMPORT TASKS
import sassTask from './tasks/sass.task';
import cleanCss from './tasks/css.task';
import watchTask from './tasks/watch.task';
import imageMin from './tasks/image-min.task';



/**
 * SASS task
 * @name sass
 */
let sass = new sassTask();
sass.run();



/**
 * JS task.
 * @name js
 */



/**
 * Minify CSS task
 */
let css = new cleanCss();
css.run();



/**
 * Optimize Images
 */
let imgMin = new imageMin();
imgMin.run();


/**
 *  WATCH task.
 * @name watch
 */
let watch = new watchTask();
watch.watch();


gulp.task('default', [watch.name, sass.name]);

gulp.task('build', [css.name, imgMin.name]);

