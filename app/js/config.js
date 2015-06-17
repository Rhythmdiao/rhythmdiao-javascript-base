require.config({
  baseUrl: '/app/js',
  paths: {
    jquery: '/app/js/lib/jquery',
    angular: '/app/js/lib/angular',
    slimscroll: '/app/js/lib/jquery.slimscroll.min',
    easings: '/app/js/lib/jquery.easings.min',
    waves: '/app/js/lib/waves',
    fullpage: '/app/js/lib/jquery.fullPage'
  },
  shim: {
    angular: {exports: 'angular'},
    fullpage: {
      deps: ['jquery'],
      exports: 'fullpage'
    }
  }
});

requirejs(['app'], function (app) {
});
