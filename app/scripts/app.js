(function (angular, $) {

	'use strict';
	var app = angular.module('elyresumeApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ngAnimate']);
	app.config(function($urlRouterProvider, $stateProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.state('index', {
		url: '/',
		templateUrl: 'views/main.html'
	  }).state('animate', {
		url: '/animate',
		templateUrl: 'views/demos/animate.html'
	  }).state('factory', {
		url: '/factory',
		templateUrl: 'views/demos/factory.html'
	  }).state('icecream', {
		url: '/icecream',
		templateUrl: 'views/demos/icecream.html'
	  }).state('particle2', {
		url: '/particle2',
		templateUrl: 'views/demos/particle.html',
		controller: 'ParticleCtrl as p'
	  }).state('particle', {
		url: '/particle',
		templateUrl: 'views/demos/particle-ring.html',
		controller: 'ParticleRingCtrl as pr'
	  });
	});
}(angular, jQuery));