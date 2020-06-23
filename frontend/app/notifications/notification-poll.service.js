(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .factory('TwakeNotificationPoller', TwakeNotificationPoller);

  function TwakeNotificationPoller($interval, $log, $rootScope, TwakeNotificationState, TwakeNotificationService, TWAKE_NOTIFICATION_UNREAD_REFRESH_TIMER) {
    var running = false;
    var intervalId;

    return {
      start: start,
      stop: stop
    };

    function stop() {
      intervalId && clearInterval(intervalId);
      running = false;
    }

    function start() {
      if (running) {
        return;
      }

      running = true;
      fetch();

      intervalId = $interval(fetch, TWAKE_NOTIFICATION_UNREAD_REFRESH_TIMER);
    }

    function fetch() {
      $log.debug('Fetching Twake notifications');

      TwakeNotificationService.get()
        .then(function(result) {
          if (result) {
            TwakeNotificationState.setUnreads(result.unread || 0);
            TwakeNotificationState.setNotifications(result.notifications || []);

            $rootScope.$broadcast('twake:updated');
          }
        })
        .catch(function(err) {
          $log.error('Error while fetching notifications', err);
        });
    }
  }

})(angular);
