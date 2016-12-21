'use strict';

angular.module('idai.components')


/**
 * @author Patrick Jominet
 * @author Jan Wieners
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

            var localStorageKey='previousSearchQueries';

            $scope.buttonClass = 'btn-primary';
            if (this.buttonClass) {
                $scope.buttonClass = this.buttonClass;
            }

            $scope.search = function ($item) {

                var searchTerm;
                if ($item) {
                    searchTerm = $item.model;
                } else {
                    searchTerm = $scope.q;
                }
                memorizeSearch(searchTerm,3);

                var url = '/search?q=' + searchTerm;
                $scope.q = null;
                $location.url(url);

            };

            $scope.getSuggestions = function (value) {
                if (!componentsSettings.searchUri) return;

                return $http.get(componentsSettings.searchUri + value)
                    .then(function (response) {

                        var suggestions=
                            response.data.suggestions.map(function(e){return {model:e}});

                        var queries = JSON.parse(localStorage.getItem(localStorageKey));
                        queries.reverse();
                        queries.forEach(function(term){
                          suggestions.push({model:term,extra:true})
                        });

                        return suggestions;
                    });
            };

            function memorizeSearch(searchTerm,searchesToKeep) {

                var queries = JSON.parse(localStorage.getItem(localStorageKey));

                if (queries === null || !queries) {
                    queries = [searchTerm];
                } else {

                    queries.push(searchTerm);

                    // Make unique
                    queries = queries.filter(function(item, pos) {
                        return queries.indexOf(item) == pos;
                    });

                    if (queries.length > searchesToKeep +1) {
                        queries.shift();
                    }
                }
                localStorage.setItem(localStorageKey, JSON.stringify(queries));
            }
        }
    ]
});