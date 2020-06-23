(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .constant('TWAKE_NOTIFICATION_POPOVER_OPTIONS', {
      animation: 'am-fade',
      trigger: 'manual',
      autoClose: true,
      placement: 'bottom',
      prefixEvent: 'twake-notification',
      container: 'body',
      templateUrl: '/linagora.esn.twake/app/notifications/popover/notification-popover.html'
    })
    .constant('TWAKE_NOTIFICATION_UNREAD_REFRESH_TIMER', 1000 * 10)
    .constant('TWAKE_NOTIFICATION_API_PATH', '/api/v1/users/notifications');
})(angular);
