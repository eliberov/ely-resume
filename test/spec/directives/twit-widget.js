'use strict';

describe('Directive: twitWidget', function () {

  // load the directive's module
  beforeEach(module('elyresumeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<twit-widget></twit-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the twitWidget directive');
  }));
});
