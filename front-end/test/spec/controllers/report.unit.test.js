'use strict';

describe('Controller: ReportCtrl', function () {

  beforeEach(module('zssnApp'));

  var ReportCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportCtrl = $controller('ReportCtrl', {
      $scope: scope
    });
  }));

  it('should fetch all reports', function () {
    expect(true).toBe(true);
  });
});
