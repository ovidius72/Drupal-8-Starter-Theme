import path from 'path';
let basePath = path.join(__dirname, '../');
let assets = path.join(basePath, 'assets');
let build = path.join(basePath, 'build');
let src = path.join(basePath, 'src');


const DEBUG = true;

const SRC = {
  sassDir: path.join(src, 'sass'),
  sassFileName: 'style.sass',
  images: path.join(src, 'images'),
  jsDir: path.join(src, 'js')
};

const BUILD = {
  cssDir: path.join(build, 'css'),
  cssFileName: 'style.css',
  jsDir: path.join(build, 'js'),
  jsFileName: 'main.js',
  html: path.join(build, 'html')
};

const ASSETS = {
  cssDir: path.join(assets, 'css'),
  cssFileName: 'style.min.css',
  images: path.join(assets, 'images'),
  jsDir: path.join(assets, 'js'),
  jsFileName: 'main.min.js'
};

const TWIG = path.join(basePath, 'templates');

export default {
  debug: DEBUG,
  src: SRC,
  build: BUILD,
  assets: ASSETS,
  twig: TWIG
};
