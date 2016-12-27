'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:AuthCtrl
   * @description
   * # AuthCtrl
   * Controller of the zssnApp
   */
  var AuthCtrl = function($scope, AuthFactory) {

    if (AuthFactory.getUUID() !== undefined) {
      $scope.logged = false;
    } else {
      $scope.logged = true;
    }

    // $scope.name = "";
    // $scope.age = "";
    // $scope.gender = "";
    // $scope.coordinates = "";
    $scope.inventory = [{
      name: "Water",
      amount: 0
    },{
      name: "Food",
      amount: 0
    },{
      name: "Medication",
      amount: 0
    },{
      name: "Ammunition",
      amount: 0
    }];

    $scope.newSurvivor = function() {
      AuthFactory.getAuth($scope.survivorForm.name, $scope.survivorForm.age, $scope.survivorForm.gender, $scope.survivorForm.coordinates, $scope.survivorForm.inventory).then(function(data) {
        AuthFactory.setUUID(data.UUID);
      });
    };

  };

  AuthCtrl.$inject = ['$scope', 'AuthFactory'];

  angular
    .module('zssnApp')
    .controller('AuthCtrl', AuthCtrl);
})();
