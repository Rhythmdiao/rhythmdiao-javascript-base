'use strict';
var $ = require('./lib/jquery.js')
  , waves = require('node-waves')
  , easings = require('./lib/jquery.easings.min.js')
  , slimscroll = require('./lib/jquery.slimscroll.min.js')
  , contentComponent = require('./contentComponent.js')
  ;
var app = angular.module('app', [])
  .factory('cvService', [
    '$http', function ($http) {
      var cv;
      return cv = {
        content: function (language) {
          return $http.get('cv/' + (language === '中文' ? 'chn' : 'en') + '.json', {
            cache: true
          });
        }
      };
    }
  ])
  .controller('controller', [
    '$scope', 'cvService', function ($scope, cvService) {
      cvService.content().success(function (data) {
        return $scope.cv = data;
      });
      $scope.changeLanguage = function () {
        var element = $(".buttonComponent");
        return cvService.content(element.html()).success(function (data) {
          return $scope.cv = data;
        });
      };
      return $scope;
    }
  ])
  .directive('profile', function () {
    return {
      scope: true,
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'views/profile.html'
    };
  })
  .directive('education', function () {
    return {
      scope: true,
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'views/education.html'
    };
  });

window.Waves = waves;

module.exports = function(){
  angular.element(document).ready(function () {
    window.Waves.init();
    return angular.bootstrap(document, ['app']);
  });
};

