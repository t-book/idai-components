'use strict';

/* Controllers */

angular.module('sampleApp.controllers',[])

.controller('MenuController',	[ '$scope', '$location', '$window',
	function ($scope, $location, $window) {

		$scope.user = {}

		$scope.currentPath = $location.path();
		$scope.$on("$locationChangeSuccess", function() {
			$scope.currentPath = $location.path();
		});

		$scope.openLoginModal = function() {
			console.log('openLoginModal')
		};

		$scope.logout = function() {
			//authService.clearCredentials();
			console.log('logout')
		}

	}
]);