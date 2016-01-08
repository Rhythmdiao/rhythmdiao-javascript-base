'use strict';
var $ = require('jquery')
  , angular = require('angular')
  , easings = require('./lib/jquery.easings.min')
  , slimscroll = require('./lib/jquery.slimscroll.min')
  , languageComponent = require('./vendor/language_component')
  , logger = require('./log/log')
  , gameComponent = require('./game/game_component')
  ;

var app = angular.module('app', [])
  .factory('cvService', [
    '$http', function ($http) {
      var cv;
      return cv = {
        content: function (language) {
          return $http.get('cv/' + (language === 'ENGLISH' ? 'chn' : 'en') + '.json', {
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
  })
  .directive('game', function () {
    return {
      scope: true,
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'views/tic_tac_toe.html'
    };
  });

window.componentHandler = componentHandler;

module.exports = function () {
  angular.element(document).ready(function () {
    componentHandler.upgradeAllRegistered();
    return angular.bootstrap(document, ['app']);
  });
};


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKVxuICAsIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJylcbiAgLCBlYXNpbmdzID0gcmVxdWlyZSgnLi9saWIvanF1ZXJ5LmVhc2luZ3MubWluJylcbiAgLCBzbGltc2Nyb2xsID0gcmVxdWlyZSgnLi9saWIvanF1ZXJ5LnNsaW1zY3JvbGwubWluJylcbiAgLCBsYW5ndWFnZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vdmVuZG9yL2xhbmd1YWdlX2NvbXBvbmVudCcpXG4gICwgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2cvbG9nJylcbiAgLCBnYW1lQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9nYW1lL2dhbWVfY29tcG9uZW50JylcbiAgO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKVxuICAuZmFjdG9yeSgnY3ZTZXJ2aWNlJywgW1xuICAgICckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgICAgdmFyIGN2O1xuICAgICAgcmV0dXJuIGN2ID0ge1xuICAgICAgICBjb250ZW50OiBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCdjdi8nICsgKGxhbmd1YWdlID09PSAnRU5HTElTSCcgPyAnY2huJyA6ICdlbicpICsgJy5qc29uJywge1xuICAgICAgICAgICAgY2FjaGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIF0pXG4gIC5jb250cm9sbGVyKCdjb250cm9sbGVyJywgW1xuICAgICckc2NvcGUnLCAnY3ZTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgY3ZTZXJ2aWNlKSB7XG4gICAgICBjdlNlcnZpY2UuY29udGVudCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICRzY29wZS5jdiA9IGRhdGE7XG4gICAgICB9KTtcbiAgICAgICRzY29wZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKFwiLmJ1dHRvbkNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIGN2U2VydmljZS5jb250ZW50KGVsZW1lbnQuaHRtbCgpKS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5jdiA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJldHVybiAkc2NvcGU7XG4gICAgfVxuICBdKVxuICAuZGlyZWN0aXZlKCdwcm9maWxlJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZTogdHJ1ZSxcbiAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgcmVwbGFjZTogJ3RydWUnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wcm9maWxlLmh0bWwnXG4gICAgfTtcbiAgfSlcbiAgLmRpcmVjdGl2ZSgnZWR1Y2F0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZTogdHJ1ZSxcbiAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgcmVwbGFjZTogJ3RydWUnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9lZHVjYXRpb24uaHRtbCdcbiAgICB9O1xuICB9KVxuICAuZGlyZWN0aXZlKCdnYW1lJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZTogdHJ1ZSxcbiAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgcmVwbGFjZTogJ3RydWUnLFxuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90aWNfdGFjX3RvZS5odG1sJ1xuICAgIH07XG4gIH0pO1xuXG53aW5kb3cuY29tcG9uZW50SGFuZGxlciA9IGNvbXBvbmVudEhhbmRsZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkKCk7XG4gICAgcmV0dXJuIGFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcCddKTtcbiAgfSk7XG59O1xuXG4iXSwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
