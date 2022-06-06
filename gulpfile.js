const {src, dest, watch, series, parallel, lastRun} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob'); // @importを纏めて指定
const cssdeclsort = require('css-declaration-sorter');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const ejs = require('gulp-ejs');
const replace = require("gulp-replace");
const cleanCss = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");
const concat = require('gulp-concat');

const destDir = 'dist/';
const mode = require('gulp-mode')({
  modes: ['prod', 'dev'],
  default: 'dev',
  verbose: false,
});

// ローカルサーバ起動
const buildServer = done => {
  browserSync.init({
    server: {
      baseDir: destDir
    }
  });
  done();
};

// ブラウザ自動リロード
const browserReload = done => {
  browserSync.reload();
  done();
};

// Sassコンパイル
const compileSass = done => {
  const postcssPlugins = [
    autoprefixer({
    cascade: false,
    grid: 'autoplace' // IE11のgrid対応('-ms-')
    }),
    cssdeclsort({ order: 'smacss' })
  ];

	src('src/styles/**/*.scss', {sourcemaps: true})
  .pipe(plumber(({ errorHandler: notify.onError("Error: <%= error.message %>") })))
	.pipe(sassGlob()) //importをディレクトリ単位で
  .pipe(sass({outputStyle: 'expanded'}))
	.pipe(postcss(postcssPlugins))
	.pipe(
		rename(function (path) {
			path.dirname = "assets/css";
			path.extname = '.css';
		})
	)
  .pipe(mode.prod(cleanCss()))
  .pipe(dest(destDir))
	done();
};

// ejsコンパイル
const compileEjs = done => {
	src(['src/templates/pages/**/*.ejs', '!src/templates/**/_*.ejs'])
  .pipe(plumber(({ errorHandler: notify.onError("Error: <%= error.message %>") })))
	.pipe(ejs())
  .pipe(rename({ extname: ".html" }))
  .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
	.pipe(dest(destDir))
	done();
};

// webpack
const bundleJs = () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(dest(destDir + 'assets/js'))
}; 

// 画像圧縮
const images = done => {
    src('src/img/**/*', {since : lastRun(images)})
    // 画像の圧縮
    .pipe(mode.prod(imagemin([
      imagemin.optipng(),
      imagemin.gifsicle()
      ]
    )))
    .pipe(dest(destDir + 'assets/img/'))
    done();
};

// 外部ライブラリの読み込み用結合_js
const concatJs = done => {
  src([
    'src/js/lib/lightbox-plus-jquery.js',
    'src/js/lib/owl.carousel.js'
    
  ])
  .pipe(concat('lib.js'))
  .pipe(dest(destDir + 'assets/js/'))
  done();
};

// 外部ライブラリの読み込み用結合_ss
const concatCss = done => {
  src([
    'src/styles/lib/owl.carousel.min.css',
    'src/styles/lib/owl.theme.default.min.css',
    'src/styles/lib/lightbox.css',
    'src/styles/lib/simple-calendar.css',
  ])
  .pipe(concat('lib.css'))
  .pipe(dest(destDir + 'assets/css/'))
  done();
};

// watchするフォルダ
const watchFiles = () => {
	watch('./src/styles/**/*.scss', series(compileSass, browserReload));
	watch('./src/templates/**/*.ejs', series(compileEjs, browserReload));
	watch('./src/js/**/*.js', series(bundleJs, browserReload));
  watch('./src/img/**/*', series(images, browserReload));
};
// 開発環境実行コマンド
exports.default = parallel(buildServer, watchFiles);

// 本番環境実行コマンド
exports.build = parallel(compileSass, compileEjs, bundleJs, images, concatJs, concatCss);
