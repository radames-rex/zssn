'use strict';

(function() {

  /**
   * @ngdoc function
   * @type zssnApp.controller:QuanratineCtrl
   * @description
   * # QuanratineCtrl
   * Controller of the zssnApp
   */
  var QuanratineCtrl = function($scope) {

    // Mock-up info data
    $scope.datalist = [{
      name: "Tenrox-R1_1235",
      type: "build",
      imgtype: "pc-gray.png",
      class: "content--gray",
      owner: "",
      time: "",
      state: "Pending",
      metrics: 0,
      colormetrics: "",
      build: 0,
      colorbuild: "",
      unit: 0,
      colorunit: "",
      functional: 0,
      colorfunc: "",
      full: false
    },{
      name: "432462",
      type: "firewall",
      imgtype: "wall-blue.png",
      class: "content--blue",
      owner: "jtuck",
      time: "4/18/2014 12:12pm",
      state: "Running",
      metrics: 70,
      colormetrics: "blue",
      build: 0,
      colorbuild: "",
      unit: 0,
      colorunit: "",
      functional: 0,
      colorfunc: "",
      full: false
    },{
      name: "432461",
      type: "firewall",
      imgtype: "wall-red.png",
      class: "content--red",
      owner: "samy",
      time: "4/18/2014 10:53am",
      state: "Rejected",
      metrics: 100,
      colormetrics: "red",
      build: 100,
      colorbuild: "green",
      unit: 100,
      colorunit: "green",
      functional: 100,
      colorfunc: "green",
      full: false
    },{
      name: "Tenrox-R1_1234",
      type: "build",
      imgtype: "pc-green.png",
      class: "content--green",
      owner: "",
      time: "4/17/2014 9:42am",
      state: "Complete",
      metrics: 100,
      colormetrics: "green",
      build: 100,
      colorbuild: "green",
      unit: 100,
      colorunit: "green",
      functional: 100,
      colorfunc: "green",
      full: false
    },{
      name: "432460",
      type: "firewall",
      imgtype: "wall-red.png",
      class: "content--red",
      owner: "samy",
      time: "4/17/2014 7:51am",
      state: "Rejected",
      metrics: 100,
      colormetrics: "red",
      build: 0,
      colorbuild: "",
      unit: 0,
      colorunit: "",
      functional: 0,
      colorfunc: "",
      full: false
    },{
      name: "432459",
      type: "firewall",
      imgtype: "wall-green.png",
      class: "content--green",
      owner: "samy",
      time: "4/16/2014 6:43am",
      state: "Accepted",
      metrics: 100,
      colormetrics: "green",
      build: 100,
      colorbuild: "green",
      unit: 100,
      colorunit: "green",
      functional: 100,
      colorfunc: "green",
      full: false
    }];

    var resetFulls =  function(){
      angular.forEach($scope.datalist, function(value){
        value.full = false;
      });
    };

    $scope.openFull = function(data){
      if(!data.full){
        resetFulls();
        data.full = true;
      }else{
        data.full = false;
      }
    };

  };

  QuanratineCtrl.$inject = ['$scope'];

  angular
    .module('zssnApp')
    .controller('QuanratineCtrl', QuanratineCtrl);
})();
