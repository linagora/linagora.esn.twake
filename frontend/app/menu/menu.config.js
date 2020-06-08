(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake').config(injectApplicationMenu);

  function injectApplicationMenu(dynamicDirectiveServiceProvider) {
    dynamicDirectiveServiceProvider.addInjection(
      'esn-application-menu',
      new dynamicDirectiveServiceProvider.DynamicDirective(
        true,
        'twake-application-menu',
        { priority: 30 }
      )
    );
  }
})(angular);
