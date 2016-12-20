'use strict';

angular.module('idai.components')


/**
 * @author Patrick Jominet
 * @author Daniel de Oliveira
 */
.component('idaiSearch', {
    restrict: 'E',
    templateUrl: 'forms/idai-search.html',
    bindings: {
        buttonClass: '@'
    },
    controller: [ '$scope', '$location', 'componentsSettings', '$http',
        function($scope,$location,componentsSettings,$http) {

            $scope.buttonClass = 'btn-primary';
            if (this.buttonClass) {
                $scope.buttonClass = this.buttonClass;
            }

            $scope.search = function ($item, $model, $label, $event) {
                if ($scope.q) {
                    var url = '/search?q=' + $scope.q;
                    $scope.q = null;
                    $location.url(url);
                }
            };

            $scope.getSuggestions = function (value) {
                if (!componentsSettings.searchUri) return;

                var promise = $http.get(componentsSettings.searchUri + value)
                    .then(function (response) {
                        return response.data.suggestions;
                    });
                if(promise != 'undefined') return promise;
            };
        }
    ]
});