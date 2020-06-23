(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .service('TwakeNotificationState', TwakeNotificationState);

  function TwakeNotificationState() {
    var unreads = 0;
    var notifications = [];

    this.getUnreads = function() {
      return unreads;
    };

    this.setUnreads = function(n) {
      unreads = n;
    };

    this.setNotifications = function(array) {
      array && (notifications = array);
    };

    this.getNotifications = function() {
      return notifications;
    };
  }

})(angular);
