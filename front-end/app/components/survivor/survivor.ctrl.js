'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:SurvivorCtrl
   * @description
   * # SurvivorCtrl
   * Controller of the zssnApp
   */
  var SurvivorCtrl = function($scope, SurvivorFactory, AuthFactory, NgMap) {

    var normalizeCoordinates = function(coordinates) {
      return "POINT (" + coordinates.lat + " " + coordinates.lon + ")";
    };

    $scope.editSurvivor = function() {
      SurvivorFactory.patchSurvivor(AuthFactory.getUUID(), $scope.ctrl.name,
        $scope.ctrl.age, $scope.ctrl.gender,
        normalizeCoordinates($scope.ctrl.coordinates)).then(function(data) {
        if (data !== undefined) {
          console.log("Okay!");
        }
      });
    };

    var ctrl = this;
    NgMap.getMap().then(function(map) {
      ctrl.map = map;
    });
    ctrl.callbackFunc = function() {
      setTimeout(function () {
        $scope.ctrl.coordinates = {
          lat: ctrl.map.center.lat(),
          lon: ctrl.map.center.lng()
        };
      }, 700);
    };

  };

  SurvivorCtrl.$inject = ['$scope', 'SurvivorFactory', 'AuthFactory', 'NgMap'];

  angular
    .module('zssnApp')
    .controller('SurvivorCtrl', SurvivorCtrl);
})();
