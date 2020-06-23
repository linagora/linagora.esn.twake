(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .controller('TwakeNotificationTogglerController', TwakeNotificationTogglerController);

  function TwakeNotificationTogglerController(
    $scope,
    TwakeNotificationState
  ) {
    $scope.size = TwakeNotificationState.getUnreads();
    $scope.open = open;

    $scope.$on('twake:updated', function() {
      $scope.size = TwakeNotificationState.getUnreads();
    });

    function open() {
      $scope.popover && $scope.popover.toggle();
    }
  }
})(angular);
