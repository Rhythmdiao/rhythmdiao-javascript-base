define(['jquery', 'angular', 'waves', 'fullpage'], function ($, angular) {
    var app = angular.module('app', []);

    app.factory('cvService', ['$http', function ($http) {
        var cv = {
            language: 'en',
            content: function (language) {
                var _language = (language === 'en' || language === 'chn') ? language : cv.language;
                return $http.get('cv/' + _language + '.json', {cache: true});
            },
            changeLanguage: function () {
                cv.language = cv.language === 'en' ? 'chn' : 'en';
                return cv.content(cv.language);
            }
        };
        return cv;
    }]);

    app.controller('controller', ['$scope', 'cvService', function ($scope, cvService) {
        $scope.cv = $scope.cv || {};
        cvService.content('en').success(function (data) {
            $scope.cv = data;
        }).error(function (data) {
        });

        $scope.changeLanguage = function () {
            cvService.changeLanguage().success(function (data) {
                $scope.cv = data;
            }).error(function (data) {
            });
        }
    }]);

    app.directive('profile', function () {
        return {
            scope: true,
            restrict: 'EA',
            replace: 'true',
            templateUrl: 'views/profile.html'
        }
    });

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });

    $('#fullpage').fullpage({
        // anchors: ['profile', 'experience', 'education'],
        sectionsColor: ['#fff', '#0cf', '#09f', '#06f', '##03f'],
        menu: '#menu',
        navigation: true,
        slidesNavigation: true,
        afterRender: function () {
            Waves.displayEffect();
        },
        afterResize: function () {
            $.fn.fullpage.reBuild();
        }
    });
});