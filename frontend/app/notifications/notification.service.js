(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .factory('TwakeNotificationService', TwakeNotificationService);

  function TwakeNotificationService(TwakeAPI, TwakeService, session, TWAKE_NOTIFICATION_API_PATH) {
    return {
      get: get
    };

    function get(options) {
      options = options || {};
      options.limit = options.limit || 10;
      options.user_email = session.user.emails[0];

      return TwakeAPI.post(TWAKE_NOTIFICATION_API_PATH, options)
        .then(function(result) { return result.data; })
        .then(function(result) {
          return TwakeService.getApplicationUrl().then(function(twakeUrl) {
            return {
              unread: result.unread,
              notifications: (result.notifications || []).map(function(notification) {
                var url;

                try {
                  url = new URL(notification.url);
                } catch (err) {
                  url = new URL(notification.url, twakeUrl);
                }

                return {
                  title: notification.title,
                  content: notification.content,
                  date: notification.date * 1000,
                  url: url
                };
              })
            };
          });
        });
    }
  }

})(angular);
