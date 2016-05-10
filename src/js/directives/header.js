'use strict';

angular.module('idai.components')

    /**
     * @author: Jan G. Wieners
     */
    .directive('idaiHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/directives/idai-header.html',
            controller: ['$scope', 'header',
                function ($scope, header) {

                }]
        }
    });