(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .component('twakeNotificationList', twakeNotificationList());

  function twakeNotificationList() {
    return {
      bindings: {
        scrollInsideContainer: '@?',
        hidePopover: '&'
      },
      controller: 'TwakeNotificationListController',
      templateUrl: '/linagora.esn.twake/app/notifications/list/notification-list.html'
    };
  }
})(angular);
