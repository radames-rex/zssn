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

    var repoFormatted = function() {
      return [{
        owner: "@radames-rex",
        name: "nvd3js-vhline",
        language: "js",
        stars: "3",
        forks: "1"
      }, {
        owner: "@radames-rex",
        name: "zionmvc",
        language: "php",
        stars: "2",
        forks: "1"
      }, {
        owner: "@radames-rex",
        name: "starbus-api",
        language: "ruby",
        stars: "5",
        forks: "1"
      }];
    };

    ExchangeFactory.filterExchange = function() {
      return repoFormatted();
    };

    ExchangeFactory.getExchange = function(user) {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.github.url + REQUEST.github.users + user + REQUEST.github.repos).then(function(data) {
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
