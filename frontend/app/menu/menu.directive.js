(function(angular) {
  'use strict';

  angular
    .module('linagora.esn.twake')
    .directive('twakeApplicationMenu', twakeApplicationMenu);

  function twakeApplicationMenu(applicationMenuTemplateBuilder) {
    return {
      retrict: 'E',
      replace: true,
      controller: 'twakeApplicationMenuController',
      controllerAs: '$ctrl',
      scope: true,
      template: applicationMenuTemplateBuilder(
        { url: '{{$ctrl.url}}', target: '_blank', rel: 'noopener noreferrer' },
        { url: '/linagora.esn.twake/images/twake.svg' },
        'Twake'
      )
    };
  }
})(angular);
