define(['jquery', 'angular', 'waves', 'fullpage'], function ($, angular) {
  var app = angular.module('app', [])
    .factory('cvService', [
      '$http', function ($http) {
        var cv;
        return cv = {
          language: 'en',
          content: function (language) {
            return $http.get('cv/' + (language === 'en' || 'chn' ? language : cv.language) + '.json', {
              cache: true
            });
          },
          changeLanguage: function () {
            return cv.content(cv.language = cv.language === 'en' ? 'chn' : 'en');
          }
        };
      }
    ])
    .controller('controller', [
      '$scope', 'cvService', function ($scope, cvService) {
        cvService.content('en').success(function (data) {
          return $scope.cv = data;
        });
        return $scope.changeLanguage = function () {
          return cvService.changeLanguage().success(function (data) {
            return $scope.cv = data;
          });
        };
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

  angular.element(document).ready(function () {
    return angular.bootstrap(document, ['app']);
  });

  return $("#fullpage").fullpage({
    sectionsColor: ['#fff', '#0cf', '#09f', '#06f', '##03f'],
    menu: '#menu',
    navigation: true,
    slidesNavigation: true,
    afterRender: function () {
      return Waves.displayEffect();
    },
    afterResize: function () {
      return $.fn.fullpage.reBuild();
    }
  });
});
