(function() {
  'use strict';

  angular
    .module('sb-student-story')
    .controller('StudentStoryController', StudentStoryController);

  /** @ngInject */
  function StudentStoryController($window, $interval, $document) {
    document.body.scrollIntoView();
    var vm = this;
    var flag;

    vm.smoothScroll = function(id){
      scrollToPosition(document.getElementById(id).offsetTop, 800);
    }

    function scrollToPosition(to, duration) {
      var step = parseInt((to - $window.scrollY) / ( duration / 10)), flag;
      if(step === 0){
        step = 1;
      }
      flag = (to < $window.scrollY) ? -1 : 1;
      var remStep;
      var scrollInterval = $interval(function(){
        if ((to - $window.scrollY) * flag >= 1) {
          remStep = (to - $window.scrollY) * flag;
          if(remStep < (step * flag)){
            $window.scrollBy(0,to - $window.scrollY);
          } else{
            $window.scrollBy(0,step);
          }
        } else {
          $interval.cancel(scrollInterval);
          scrollInterval = undefined;
        }
      },10);
    }
  }
})();
