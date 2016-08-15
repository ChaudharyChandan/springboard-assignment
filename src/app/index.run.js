(function() {
  'use strict';

  angular
    .module('springBoard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('Application started!');
  }

})();
