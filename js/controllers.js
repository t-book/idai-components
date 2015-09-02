'use strict';

/* Controllers */

angular.module('sampleApp.controllers',[])

.controller('MainController',	[ '$scope', 'message',
	function ($scope, message) {

		$scope.user = {username:"daniel"};

        $scope.addMsg = function(transl8Key) {
            message.addMessageForCode(transl8Key)
        }

	}
]);