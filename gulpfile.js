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
  img_dest: 'images/'
};

var dependency = {
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

var sources = {
  scripts: ['./src/js/*.js',
    './src/js/**/*.js'],
  css: ['./src/css/*.css']
};

gulp.task('clean', function () {
  gulp.src(paths.src + '/' + paths.js_dest + '*.js', {read: false})
    .pipe(rimraf());
  gulp.src(paths.src + '/' + paths.css_dest + '*.css', {read: false})
    .pipe(rimraf());
});

gulp.task('dependency', function () {
  gulp.src(dependency.scripts)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src + paths.js_dest));
  gulp.src(dependency.css)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src + paths.css_dest));
});

gulp.task('source', function () {
  gulp.src(sources.css)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src +"/css"));
  gulp.src(sources.scripts)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src + "/js"));
});

gulp.task('bundle', function () {
  browserify('./app/js/start.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('prepare', ['source', 'dependency', 'bundle'], function () {
});

gulp.task('dev', ['bundle'], function () {
  gulp.src('app').pipe(webserver({
    host: 'localhost',
    port: '8000',
    path: '/app',
    livereload: true,
    directoryListing: false,
    open: 'http://localhost:8000/app'
  }));
});
