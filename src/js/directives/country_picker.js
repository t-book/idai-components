'use strict';

angular.module('idai.components')


.directive('idaiCountryPicker', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/idai-country-picker.html',
        controller: [ '$scope', 'countries',
            function($scope, countries) {
                countries.getCountriesAsync().then(function (countries) {
                	$scope.kountries = countries;
                });
            }]
    }});