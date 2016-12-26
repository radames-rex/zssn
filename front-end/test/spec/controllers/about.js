'use strict';

describe('Controller: RepositoriesCtrl', function () {

  beforeEach(module('zssnApp'));

  var RepositoriesCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoriesCtrl = $controller('RepositoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoriesCtrl.awesomeThings.length).toBe(3);
  });
});
