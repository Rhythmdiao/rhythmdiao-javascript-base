require.config({
    baseUrl: '/app/scripts',
    paths: {
        rhythmdiao: 'rhythmdiao',
        jquery: 'jquery/jquery',
        angular: 'angularjs/angular',
        slimscroll: 'fullpage.js/jquery.slimscroll.min',
        fullpage: 'fullpage.js/jquery.fullPage',
        waves: 'waves/waves'
    },
    shim: {
        angular: {exports: 'angular'},
        fullpage: {exports: 'fullpage'}
    }
});

requirejs(['app'], function (app) {
});