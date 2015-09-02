'use strict';

angular.module('sampleApp',[
	'ui.bootstrap',
	'ngRoute',
	'ngAnimate',
	'idai.components',
	'idai.templates',
	'sampleApp.controllers'
])
.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {templateUrl: 'partials/home.html'})
			.when('/info/layout', {templateUrl: 'partials/layout.html'})
			.when('/info/i18n', {templateUrl: 'partials/i18n.html'})
			.when('/info/forms', {templateUrl: 'partials/forms.html'});
	}
]);