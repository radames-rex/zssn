'use strict';

describe('Controller: AuthCtrl', function () {

  beforeEach(module('zssnApp'));

  var AuthCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthCtrl = $controller('AuthCtrl', {
      $scope: scope
    });
  }));

  it('should normalize object with coordinates', function () {
    expect(true).toBe(true);
  });

  it('should normalize object with inventory', function () {
    expect(true).toBe(true);
  });

  it('should include new survivor and set UUID in localstorage', function () {
    expect(true).toBe(true);
  });
});
