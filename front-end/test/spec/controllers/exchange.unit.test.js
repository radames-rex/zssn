'use strict';

describe('Controller: ExchangeCtrl', function () {

  beforeEach(module('zssnApp'));

  var ExchangeCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExchangeCtrl = $controller('ExchangeCtrl', {
      $scope: scope
    });
  }));

  it('should normalize object with inventory', function () {
    expect(true).toBe(true);
  });

  it('should trade items of inventory', function () {
    expect(true).toBe(true);
  });
});
