(function(angular) {
  angular
    .module('linagora.esn.twake')
    .run(runBlock);

  function runBlock($log, TwakeNotificationPoller, dynamicDirectiveService, session) {
    session.ready.then(function() {
      TwakeNotificationPoller.start();
    });

    dynamicDirectiveService.addInjection('header-actions', new dynamicDirectiveService.DynamicDirective(true, 'twake-notification-header-button'));
  }
})(angular);
