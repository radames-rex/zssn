'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the zssnApp
   */
  var MainCtrl = function($scope, $mdDialog) {

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    $mdDialog.show({
      // controller: AuthCtrl,
      templateUrl: '/views/auth.html',
      parent: angular.element(document.body),
      clickOutsideToClose: false,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });

  };

  MainCtrl.$inject = ['$scope', '$mdDialog'];

  angular
    .module('zssnApp')
    .controller('MainCtrl', MainCtrl);
})();
