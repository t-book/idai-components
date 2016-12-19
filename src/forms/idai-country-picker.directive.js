'use strict';

angular.module('idai.components')


.directive('idaiCountryPicker', function() {
    return {
        restrict: 'E',
        templateUrl: 'forms/idai-country-picker.html',
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