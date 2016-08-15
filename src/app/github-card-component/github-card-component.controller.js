(function() {
  'use strict';

  angular
    .module('github-card')
    .controller('GithubCardController', GithubCardController);

  /** @ngInject */
  function GithubCardController($log, GithubCardService) {
    var vm = this;
    vm.users = [];
    var index;
    vm.property = null;
    vm.reverse = false;
    vm.username = null;
    vm.error = null;
    vm.pending = false;

    vm.addUser = function(){
      var found = vm.users.some(function(user){
        return user.login.toLowerCase() === vm.username.toLowerCase();
      });
      if(found){
        vm.error = 'User already exists';
      } else{
        getUserDetails(vm.username);
      }
    }

    function getUserDetails(username){
      vm.pending = true;
      GithubCardService.getGitHubUserDetails(username)
      .then(function(data){
        vm.users.push(data);
        vm.error = null;
        vm.pending = false;
        vm.githubUserForm.$setPristine();
        vm.githubUserForm.$setUntouched();
        vm.githubUserForm.$setValidity();
      },function(data){
        vm.error = data.message;
        vm.pending = false;
      })
    }

    vm.removeUser = function(event, id){
      event.stopPropagation();
      event.preventDefault();
      index = vm.users.map(function(user){
        return user.id;
      }).indexOf(id);
      vm.users.splice(index, 1);
    }

    vm.sortBy = function(property){
      vm.reverse = (vm.property === property) ? !vm.reverse : false;
      vm.property = property;
    }
  }
})();
