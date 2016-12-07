'use strict';

angular.module('idai.components')


.directive('idaiCountryPicker', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/picker/idai-country-picker.html',
        scope: {
            model: '='
        },
        controller: [ '$scope', 'countries',
            function($scope, countries) {
                countries.getCountriesAsync().then(function (countries) {
                	$scope.kountries = countries;
                });
            }]
    }});