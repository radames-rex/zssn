'use strict';

(function() {

  /**
   * @ngdoc function
   * @name zssnApp.factory:DashboardFactory
   * @description
   * # DashboardFactory
   * Factory of the zssnApp
   */
  var DashboardFactory = function(REQUEST, RequestFactory, $q) {
    var DashboardFactory = {};

    return DashboardFactory;
  };

  DashboardFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('DashboardFactory', DashboardFactory);
})();
