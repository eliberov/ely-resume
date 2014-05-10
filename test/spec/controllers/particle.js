'use strict';

describe('Controller: ParticleCtrl', function () {

  // load the controller's module
  beforeEach(module('elyresumeApp'));

  var ParticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParticleCtrl = $controller('ParticleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
