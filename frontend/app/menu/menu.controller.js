(function(angular) {
  'use strict';

  angular
    .module('linagora.esn.twake')
    .controller(
      'twakeApplicationMenuController',
      twakeApplicationMenuController
    );

  function twakeApplicationMenuController(TwakeService) {
    var self = this;

    TwakeService.getApplicationUrl().then(function(url) {
      self.url = url;
    });
  }
})(angular);
