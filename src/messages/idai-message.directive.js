'use strict';

angular.module('idai.components')


/**
 * @author: Daniel de Oliveira
 */
.component('idaiMessages', {
        restrict: 'E',
        templateUrl: 'messages/idai-message.html',
        controller: [ '$scope', 'messageService',
            function($scope,messages) {

                $scope.messages = messages.all();

                $scope.remove = function(transl8Key){
                    messages.remove(transl8Key)
                };

            }]
    }
);