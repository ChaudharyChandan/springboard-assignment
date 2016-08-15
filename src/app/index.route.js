(function() {
  'use strict';

  angular
    .module('springBoard')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('assignmentOne', {
        url: '/sb-student-story',
        templateUrl: 'app/sb-student-story/sb-student-story.html',
        controller: 'StudentStoryController',
        controllerAs: 'sbssCtrl'
      })
      .state('assignmentTwo', {
        url: '/github-card-component',
        templateUrl: 'app/github-card-component/github-card-component.html',
        controller: 'GithubCardController',
        controllerAs: 'ghccCtrl'
      })

      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      })
    $urlRouterProvider.otherwise('sb-student-story');
  }

})();
