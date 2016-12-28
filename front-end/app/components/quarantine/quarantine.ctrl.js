'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:QuarantineCtrl
   * @description
   * # QuarantineCtrl
   * Controller of the zssnApp
   */
  var QuarantineCtrl = function($scope, QuarantineFactory) {
    $scope.survivors = [];
    $scope.message = "";

    $scope.infect = function(id) {
      id = id.replace('http://zssn-backend-example.herokuapp.com/api/people/','');
      QuarantineFactory.reportInfection(id).then(function(data){
        $scope.message = "Reported!"
      });
    };

    QuarantineFactory.getSurvivors().then(function(data){
      angular.forEach(data, function(value) {
        if(!value['infected?']){
          $scope.survivors.push(value);
        }
      });
    });

  };

  QuarantineCtrl.$inject = ['$scope', 'QuarantineFactory'];

  angular
    .module('zssnApp')
    .controller('QuarantineCtrl', QuarantineCtrl);
})();
