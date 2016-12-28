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

    SurvivorFactory.patchSurvivor = function(id, name, age, gender, coordinates) {
      var defer = $q.defer(),
        params = '?person[name]=' + name +
        '&person[age]=' + age +
        '&person[gender]=' + gender +
        '&person[lonlat]=' + coordinates;
      RequestFactory.patch(REQUEST.api.url + (REQUEST.api.survivor.update.replace('/{id}/',id)), params).then(function(data) {
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

    return SurvivorFactory;
  };

  SurvivorFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('SurvivorFactory', SurvivorFactory);
})();
