'use strict';

(function() {

  /**
   * @ngdoc function
   * @name zssnApp.factory:ExchangeFactory
   * @description
   * # ExchangeFactory
   * Factory of the zssnApp
   */
  var ExchangeFactory = function(REQUEST, RequestFactory, $q) {
    var ExchangeFactory = {};

    ExchangeFactory.trade = function(name, pick, payment) {
      var defer = $q.defer(),
        params = '?consumer[name]=' + name +
        '&consumer[pick]=' + pick +
        '&consumer[payment]=' + payment;
      RequestFactory.post(REQUEST.api.url + (REQUEST.api.exchange.replace('{person_id}',localStorage.getItem('UUID'))), params).then(function(data) {
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

    return ExchangeFactory;
  };

  ExchangeFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('ExchangeFactory', ExchangeFactory);
})();
