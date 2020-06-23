(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .directive('twakeNotificationToggler', twakeNotificationToggler);

  function twakeNotificationToggler($popover, TWAKE_NOTIFICATION_POPOVER_OPTIONS, TwakeNotificationState) {
    return {
      controller: 'TwakeNotificationTogglerController',
      controllerAs: 'ctrl',
      link: link,
      restrict: 'E',
      replace: true,
      templateUrl: '/linagora.esn.twake/app/notifications/toggler/notification-toggler.html'
    };

    function link(scope, element) {
      scope.popover = $popover(element, TWAKE_NOTIFICATION_POPOVER_OPTIONS);
    }
  }
})(angular);
