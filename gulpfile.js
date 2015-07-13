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
  scripts: ['./bower_components/angularjs/angular.js',
    './bower_components/fullpage.js/jquery.fullPage.js',
    './bower_components/fullpage.js/vendors/jquery.easings.min.js',
    './bower_components/fullpage.js/vendors/jquery.slimscroll.min.js',
    './bower_components/jquery/dist/jquery.js',
    './bower_components/requirejs/require.js',
    './bower_components/waves/dist/waves.js',
    './bower_components/material-design-lite/material.js'
  ],
  css: ['./bower_components/fullpage.js/jquery.fullPage.css',
    './bower_components/waves/dist/waves.css',
    './bower_components/material-design-lite/material.css'
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
  browserify('./app/js/app.js')
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
