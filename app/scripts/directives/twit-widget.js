'use strict';

angular.module('elyresumeApp')
  .directive('twitWidget', function ($document) {
    return {
      templateUrl: 'views/directives/twit-widget.html',
      restrict: 'E',
      scope: {
      	user: '@'
      },
      replace: true,
      link: {
      	post: function(scope, elem, attrs) {
      		$($document).find('head').append($('<script id="twitter-wjs" src="http://platform.twitter.com/widgets.js"></script>'));
      	}
      }
    };
  });
