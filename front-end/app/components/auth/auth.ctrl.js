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


    $scope.newSurvivor = function() {
      AuthFactory.getAuth($scope.name, $scope.age, $scope.gender, $scope.coordinates, $scope.inventory).then(function(data) {
        AuthFactory.setUUID(data.UUID);
      });
    };

  };

  AuthCtrl.$inject = ['$scope', 'AuthFactory'];

  angular
    .module('zssnApp')
    .controller('AuthCtrl', AuthCtrl);
})();
