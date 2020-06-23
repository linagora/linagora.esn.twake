(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .controller('TwakeNotificationListController', TwakeNotificationListController);

  function TwakeNotificationListController(TwakeNotificationState) {
    var self = this;

    self.$onInit = $onInit;

    function $onInit() {
      self.elements = TwakeNotificationState.getNotifications();
    }
  }
})(angular);
