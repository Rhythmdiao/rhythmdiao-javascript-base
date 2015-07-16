var gulp = require('gulp')
  , gutil = require('gulp-util')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat')
  , rimraf = require('gulp-rimraf')
  , sourcemaps = require('gulp-sourcemaps')
  , webserver = require('gulp-webserver')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream');

var paths = {
  src: './app/',
  js_dest: 'js/lib/',
  css_dest: 'css/lib/',
  scripts: ['./node_modules/jquery/dist/jquery.min.js'
    , './node_modules/fullpage.js/vendors/jquery.easings.min.js'
    , './node_modules/fullpage.js/vendors/jquery.slimscroll.min.js'
    , './node_modules/fullpage.js/jquery.fullPage.js'
    , './node_modules/material-design-lite/material.min.js'
  ],
  css: ['./node_modules/fullpage.js/jquery.fullPage.css',
    './node_modules/node-waves/dist/waves.css',
    './node_modules/material-design-lite/material.css'
  ]
};

gulp.task('clean', function () {
  gulp.src(paths.src + '/' + paths.js_dest + '*.js', {read: false})
    .pipe(rimraf());
  gulp.src(paths.src + '/' + paths.css_dest + '*.css', {read: false})
    .pipe(rimraf());
});

gulp.task('js', function () {
  gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src + paths.js_dest));
});

gulp.task('css', function () {
  gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src + paths.css_dest));
});

gulp.task('browserify', function () {
  browserify('./app/js/start.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('dev', ['browserify'], function () {
  gulp.src('app').pipe(webserver({
    host: 'localhost',
    port: '8000',
    path: '/app',
    livereload: true,
    directoryListing: false,
    open: 'http://localhost:8000/app'
  }));
});
