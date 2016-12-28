'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:ExchangeCtrl
   * @description
   * # ExchangeCtrl
   * Controller of the zssnApp
   */
  var ExchangeCtrl = function($scope, ExchangeFactory) {
    $scope.message = "";

    var normalizeInventory = function(inventory) {
      return "Water:" + inventory.water +
        ";Food:" + inventory.food +
        ";Medication:" + inventory.medication +
        ";Ammunition:" + inventory.ammunition + ";";
    };

    $scope.trade = function(){
      ExchangeFactory.trade($scope.ctrl.recipient,
        normalizeInventory($scope.ctrl.inventory.recipient),
          normalizeInventory($scope.ctrl.inventory.your)).then(function(data) {
        $scope.message = "Okay";
      });
    };

  };

  ExchangeCtrl.$inject = ['$scope', 'ExchangeFactory'];

  angular
    .module('zssnApp')
    .controller('ExchangeCtrl', ExchangeCtrl);
})();
