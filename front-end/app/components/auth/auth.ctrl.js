'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:AuthCtrl
   * @description
   * # AuthCtrl
   * Controller of the zssnApp
   */
  var AuthCtrl = function($scope, $rootScope, AuthFactory) {

    if (AuthFactory.getUUID() !== undefined) {
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
        
      });
    };

  };

  AuthCtrl.$inject = ['$scope', '$rootScope', 'AuthFactory'];

  angular
    .module('zssnApp')
    .controller('AuthCtrl', AuthCtrl);
})();
