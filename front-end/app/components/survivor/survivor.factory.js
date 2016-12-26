'use strict';

(function() {

  /**
   * @ngdoc function
   * @name zssnApp.factory:SurvivorFactory
   * @description
   * # SurvivorFactory
   * Factory of the zssnApp
   */
  var SurvivorFactory = function(REQUEST, RequestFactory, $q) {
    var SurvivorFactory = {};

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

    SurvivorFactory.filterSurvivor = function() {
      return repoFormatted();
    };

    SurvivorFactory.getSurvivor = function(user) {
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

    return SurvivorFactory;
  };

  SurvivorFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('SurvivorFactory', SurvivorFactory);
})();
