'use strict';

angular.module('idai.components')


.directive('idaiCountryPicker', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/idai-country-picker.html',
        controller: [ '$scope', 'countries',
            function($scope, countries) {
                // $scope.kountries = countries.getCountries();

                countries.getCountriesAsync().then(function (countries) {
                	$scope.kountries = countries;
                	console.log(countries);
                });
            }]
    }});