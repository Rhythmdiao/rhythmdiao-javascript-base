require.config({
  baseUrl: '/app/js',
  paths: {
    jquery: 'lib/jquery',
    angular: 'lib/angular',
    slimscroll: 'lib/jquery.slimscroll.min',
    fullpage: 'lib/jquery.fullPage',
    waves: 'lib/waves'
  },
  shim: {
    angular: {exports: 'angular'},
    fullpage: {exports: 'fullpage'}
  }
});

requirejs(['app'], function (app) {
});
