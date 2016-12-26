'use strict';

(function() {

  /**
   * @ngdoc function
   * @name zssnApp.factory:ReportFactory
   * @description
   * # ReportFactory
   * Factory of the zssnApp
   */
  var ReportFactory = function(REQUEST, RequestFactory, $q) {
    var ReportFactory = {};

    var formatReport = function(data){
      var formatted = {
        description: "",
        indicators: [],
      };
      angular.forEach(data.report, function(value, key){
        if(key === 'description'){
          formatted.description = value;
        }else {
          formatted.indicators.push({
            name: key.replace(/_/gi, " "),
            value: value
          });
        }
      });
      return formatted;
    };

    ReportFactory.getReport = function() {
      var defer = $q.defer(),
        reports = [];
      RequestFactory.get(REQUEST.api.url + REQUEST.api.reports).then(function(data) {
        data = data.data;
        if (typeof data === 'object') {

          angular.forEach(data, function(value) {
            RequestFactory.get(value).then(function(data) {
              data = data.data;
              if (typeof data === 'object') {
                reports.push(formatReport(data));
              } else {
                defer.reject("hasnt object");
              }
            }, function(response, status) {
              defer.reject(response, status);
            });
          });

          defer.resolve(reports);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    return ReportFactory;
  };

  ReportFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('zssnApp')
    .factory('ReportFactory', ReportFactory);
})();
