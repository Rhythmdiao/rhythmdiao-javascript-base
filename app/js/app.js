'use strict';
var $ = require('jquery')
  , angular = require('angular')
  , easings = require('./lib/jquery.easings.min')
  , slimscroll = require('./lib/jquery.slimscroll.min')
  , contentComponent = require('./contentComponent')
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

window.componentHandler = componentHandler;

module.exports = function () {
  angular.element(document).ready(function () {
    componentHandler.upgradeAllRegistered();
    return angular.bootstrap(document, ['app']);
  });
};

