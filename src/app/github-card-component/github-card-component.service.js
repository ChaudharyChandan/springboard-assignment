(function(angular) {
  'use strict';

  angular
    .module('github-card')
    .factory('GithubCardService', GithubCardService);

  /** @ngInject */
  function GithubCardService($q, $http) {

    function getGitHubUserDetails(username){
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: '/users/' + username 
      })
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(data){
        deferred.reject(data);
      })
      return deferred.promise;
    }

    return {
      getGitHubUserDetails: getGitHubUserDetails
    }
  }
})(angular);
