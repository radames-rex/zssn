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

    AuthFactory.getAuth = function(name, age, gender, inventory, coordinates) {
      var defer = $q.defer(),
        params = '?person[name]=' + name +
        '&person[age]=' + age +
        '&person[gender]=' + gender +
        '&person[lonlat]=' + coordinates +
        '&items=' + inventory;
      RequestFactory.postSimple(REQUEST.api.url + REQUEST.api.survivor.new, params).then(function(data) {
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

    AuthFactory.setUUID = function() {

    };

    AuthFactory.getUUID = function() {
      var UUID = null;
      
      return UUID;
    };

    AuthFactory.hasUUID = function() {
      return AuthFactory.getUUID() !== null;
    };

    return AuthFactory;
  };

  AuthFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('AuthFactory', AuthFactory);
})();
