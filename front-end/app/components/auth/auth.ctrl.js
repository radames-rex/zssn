'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:AuthCtrl
   * @description
   * # AuthCtrl
   * Controller of the zssnApp
   */
  var AuthCtrl = function($scope, $rootScope, AuthFactory, NgMap) {

    if (AuthFactory.hasUUID()) {
      $scope.logged = true;
    } else {
      $scope.logged = false;
    }

    var normalizeCoordinates = function(coordinates) {
      return "POINT (" + coordinates.lat + " " + coordinates.lon + ")";
    };

    var normalizeInventory = function(inventory) {
      return "Water:" + inventory.water +
        ";Food:" + inventory.food +
        ";Medication:" + inventory.medication +
        ";Ammunition:" + inventory.ammunition + ";";
    };

    $scope.newSurvivor = function() {
      AuthFactory.getAuth($scope.ctrl.name,
        $scope.ctrl.age, $scope.ctrl.gender,
          normalizeCoordinates($scope.ctrl.coordinates),
            normalizeInventory($scope.ctrl.inventory)).then(function(data) {
        AuthFactory.setUUID(data.id);
        $scope.logged = true;
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

  AuthCtrl.$inject = ['$scope', '$rootScope', 'AuthFactory', 'NgMap'];

  angular
    .module('zssnApp')
    .controller('AuthCtrl', AuthCtrl);
})();
