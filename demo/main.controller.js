'use strict';

/* Controllers */

angular.module('sampleApp.controllers')

.controller('MainController',	[ '$scope', 'messageService',
	function ($scope, messages) {

		$scope.user = {username:"daniel"};

        $scope.addMsg = function(transl8Key, level, showContactInfo) {
            messages.add(transl8Key, level, showContactInfo);
        }

	}
]);