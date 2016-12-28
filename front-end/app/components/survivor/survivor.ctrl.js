'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:SurvivorCtrl
   * @description
   * # SurvivorCtrl
   * Controller of the zssnApp
   */
  var SurvivorCtrl = function($scope, SurvivorFactory, AuthFactory) {

    var normalizeCoordinates = function(coordinates) {
      return "POINT (" + coordinates.lat + " " + coordinates.lon + ")";
    };

    $scope.editSurvivor = function() {
      SurvivorFactory.patchSurvivor(AuthFactory.getUUID() ,$scope.ctrl.name,
        $scope.ctrl.age, $scope.ctrl.gender,
          normalizeCoordinates($scope.ctrl.coordinates)).then(function(data) {
          if(data !== undefined){
            console.log("Okay!");
          }
      });
    };

  };

  SurvivorCtrl.$inject = ['$scope', 'SurvivorFactory', 'AuthFactory'];

  angular
    .module('zssnApp')
    .controller('SurvivorCtrl', SurvivorCtrl);
})();
