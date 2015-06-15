var gulp = require('gulp'),
  util = require('gulp-util'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  src = './app/',
  bower_src = './bower_components/';

gulp.task('js', function () {
  var dest = 'js/lib/';
  gulp.src(bower_src + 'angularjs/angular.js')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'fullpage.js/jquery.fullPage.js')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'fullpage.js/vendors/jquery.easings.min.js')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'fullpage.js/vendors/jquery.slimscroll.min.js')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'jquery/dist/jquery.js')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'requirejs/require.js')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'waves/dist/waves.js')
    .pipe(gulp.dest(src + dest));
});

gulp.task('css', function () {
  var dest = 'css/lib/';
  gulp.src(bower_src + 'fullpage.js/jquery.fullPage.css')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'icono/icono.min.css')
    .pipe(gulp.dest(src + dest));

  gulp.src(bower_src + 'waves/dist/waves.css')
    .pipe(gulp.dest(src + dest));
});

gulp.task('default', ['js', 'css']);
