(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .component('twakeNotificationHeaderButton', twakeNotificationHeaderButton());

  function twakeNotificationHeaderButton() {
    return {
      templateUrl: '/linagora.esn.twake/app/notifications/header-button/notification-header-button.html'
    };
  }
})(angular);
