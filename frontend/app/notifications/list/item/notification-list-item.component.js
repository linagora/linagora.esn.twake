(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .component('twakeNotificationListItem', twakeNotificationListItem());

  function twakeNotificationListItem() {
    return {
      bindings: {
        notification: '<',
        hidePopover: '&?'
      },
      controller: 'TwakeNotificationListItemController',
      templateUrl: '/linagora.esn.twake/app/notifications/list/item/notification-list-item.html'
    };
  }
})(angular);
