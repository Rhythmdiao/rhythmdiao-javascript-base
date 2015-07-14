var angular = require('angular')
  , app = require('./app.js');
angular.element(document).ready(function () {
  window.Waves.init();
  return angular.bootstrap(document, ['app']);
});
