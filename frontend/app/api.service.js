(function(angular) {
  'use strict';

  angular.module('linagora.esn.twake')
    .factory('TwakeAPI', TwakeAPI);

  function TwakeAPI($http, TwakeService) {
    return {
      post: post
    };

    function post(path, body) {
      return TwakeService.getApplicationUrl().then(function(base) {
        var url = new URL(path, base);

        return $http.post(url, body);
      });
    }
  }

})(angular);
