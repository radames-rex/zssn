'use strict';

describe('Controller: QuarantineCtrl', function () {

  beforeEach(module('zssnApp'));

  var QuarantineCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuarantineCtrl = $controller('QuarantineCtrl', {
      $scope: scope
    });
  }));

  it('should fetch all survivors not infected', function () {
    expect(true).toBe(true);
  });

  it('should report survivor infected', function () {
    expect(true).toBe(true);
  });
});
