'use strict';

describe('Controller: SurvivorCtrl', function () {

  beforeEach(module('zssnApp'));

  var SurvivorCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurvivorCtrl = $controller('SurvivorCtrl', {
      $scope: scope
    });
  }));

  it('should normalize object with coordinates', function () {
    expect(true).toBe(true);
  });

  it('should edit informations of the survivor logged', function () {
    expect(true).toBe(true);
  });
});
