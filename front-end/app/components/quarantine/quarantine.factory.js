'use strict';

(function() {

  /**
   * @ngdoc function
   * @name zssnApp.factory:QuarantineFactory
   * @description
   * # QuarantineFactory
   * Factory of the zssnApp
   */
  var QuarantineFactory = function(REQUEST, RequestFactory, $q) {
    var QuarantineFactory = {};

    QuarantineFactory.getSurvivors = function() {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.api.url + REQUEST.api.survivors).then(function(data) {
        data = data.data;
        if (typeof data === 'object') {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    QuarantineFactory.reportInfection = function(id) {
      var defer = $q.defer(),
        params = "?infected="+localStorage.getItem('UUID');
      RequestFactory.post(REQUEST.api.url + (REQUEST.api.quarantine.replace('{id}',id)), params).then(function(data) {
        data = data.status;
        if (data === 204) {
          defer.resolve(true);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    return QuarantineFactory;
  };

  QuarantineFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('QuarantineFactory', QuarantineFactory);
})();
