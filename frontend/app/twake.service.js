(function(angular) {
  angular
    .module('linagora.esn.twake')
    .factory('TwakeService', TwakeService);

  function TwakeService(esnConfig, TWAKE_DEFAULT_URL) {
    return {
      getApplicationUrl: getApplicationUrl
    };

    function getApplicationUrl() {
      return esnConfig('linagora.esn.twake.applicationUrl')
        .then(function(url) {
          if (!url) {
            return TWAKE_DEFAULT_URL;
          }

          return url.endsWith('/') ? url : url + '/';
        });
    }
  }
})(angular);
