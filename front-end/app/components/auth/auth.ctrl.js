'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:AuthCtrl
   * @description
   * # AuthCtrl
   * Controller of the zssnApp
   */
  var AuthCtrl = function($scope) {
    $scope.logged = false;

  };

  AuthCtrl.$inject = ['$scope'];

  angular
    .module('zssnApp')
    .controller('AuthCtrl', AuthCtrl);
})();
