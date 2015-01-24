define ['jquery'
        'angular'
        'waves'
        'fullpage'
], ($, angular) ->
  app = angular.module('app', [])

  app.factory 'cvService', ['$http', ($http)->
    cv =
      language: 'en'
      content: (language)->
        $http.get 'cv/' + (if language is 'en' or 'chn' then language else cv.language) + '.json', {cache: true}
      changeLanguage: ->
        cv.content cv.language = if cv.language is 'en' then 'chn' else 'en'
  ]

  app.controller 'controller', ['$scope', 'cvService', ($scope, cvService)->
    cvService.content('en').success (data)->
      $scope.cv = data;
    $scope.changeLanguage = ->
      cvService.changeLanguage().success (data)->
        $scope.cv = data;
  ]

  app.directive 'profile', ->
    scope: true
    restrict: 'EA'
    replace: 'true'
    templateUrl: 'views/profile.html'

  angular.element(document).ready ->
    angular.bootstrap(document, ['app'])

  $("#fullpage").fullpage({
    sectionsColor: ['#fff', '#0cf', '#09f', '#06f', '##03f']
    menu: '#menu'
    navigation: true
    slidesNavigation: true
    afterRender: -> Waves.displayEffect()
    afterResize: -> $.fn.fullpage.reBuild()
  })