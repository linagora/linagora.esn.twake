(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .controller('TwakeNotificationListItemController', TwakeNotificationListItemController);

  function TwakeNotificationListItemController($window, TwakeService) {
    var self = this;

    self.open = function() {
      $window.open(self.notification.url, '_blank');
      self.hidePopover();
    };

  }
})(angular);
