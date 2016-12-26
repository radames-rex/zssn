'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:ReportCtrl
   * @description
   * # ReportCtrl
   * Controller of the zssnApp
   */
  var ReportCtrl = function($scope, ReportFactory) {

    $scope.reports = [];

    ReportFactory.getReport().then(function(data){
      $scope.reports = data;
    });

  };

  ReportCtrl.$inject = ['$scope', 'ReportFactory'];

  angular
    .module('zssnApp')
    .controller('ReportCtrl', ReportCtrl);
})();
