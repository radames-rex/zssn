'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:ReportCtrl
   * @description
   * # ReportCtrl
   * Controller of the zssnApp
   */
  var ReportCtrl = function($scope) {

    $scope.report = [{
      face: "images/icons/wall-blue.png",
      indicator : "Z",
      value: "10",
      description: "%"
    },{
      face: "images/icons/wall-red.png",
      indicator : "M",
      value: "10",
      description: "$"
    }];

  };

  ReportCtrl.$inject = ['$scope'];

  angular
    .module('zssnApp')
    .controller('ReportCtrl', ReportCtrl);
})();
