'use strict';

(function() {

  /**
   * @ngdoc function
   * @name zssnApp.factory:AuthFactory
   * @description
   * # AuthFactory
   * Factory of the zssnApp
   */
  var AuthFactory = function(REQUEST, RequestFactory, $q) {
    var AuthFactory = {};

    AuthFactory.getAuth = function(name, age, gender, coordinates, inventory) {
      var defer = $q.defer(),
        params = '?person[name]=' + name +
        '&person[age]=' + age +
        '&person[gender]=' + gender +
        '&person[lonlat]=' + coordinates +
        '&items=' + inventory;
      RequestFactory.postSimple(REQUEST.api.url + REQUEST.api.survivor.new, params).then(function(data) {
        data = data.data;
        if (data.id !== undefined) {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    AuthFactory.setUUID = function(UUID) {
      localStorage.setItem('UUID',UUID);
    };

    AuthFactory.getUUID = function() {
      var UUID = localStorage.getItem('UUID');
      return UUID;
    };

    AuthFactory.hasUUID = function() {
      return AuthFactory.getUUID() !== undefined;
    };

    return AuthFactory;
  };

  AuthFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('AuthFactory', AuthFactory);
})();
