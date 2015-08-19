'use strict';

angular.module('idai.components')

/** 
 * @author: Sebastian Cuy
 */

 .directive('idaiPicker', function() {
	return {
		restrict: 'E',
		scope: {
			searchUri: '@',	resultField: '@', titleField: '@',
			returnField: '@', totalField: '@',
			queryParam: '@', limitParam: '@', offsetParam: '@',
			addParams: '='
		},
		templateUrl: 'partials/directives/idai-picker.html',
		controller: [ '$scope', '$http', '$q', '$parse',
			function($scope, $http, $q, $parse) {
				
				var canceler;

				$scope.result;
				$scope.total = 0;
				$scope.offset = 0;
				$scope.limit = 10;
				$scope.loading = false;

				var search = function() {
					if (canceler) canceler.resolve();
					if ($scope.query) {
						$scope.loading = true;
						canceler = $q.defer();
						if (!$scope.queryParam) $scope.queryParam = "q";
						if (!$scope.limitParam) $scope.limitParam = "limit";
						if (!$scope.offsetParam) $scope.offsetParam = "offset";
						var requestUri = $scope.searchUri + "?" + $scope.queryParam + "=" + $scope.query;
						requestUri += "&" + $scope.limitParam + "=" + $scope.limit;
						requestUri += "&" + $scope.offsetParam + "=" + $scope.offset;
						if ($scope.addParams) {
							angular.forEach($scope.addParams, function(value, key) {
								requestUri += "&" + key + "=" + value;
							});
						}
						$http.get(requestUri, { timeout: canceler.promise }).then(function(response) {
							if (!$scope.resultField) $scope.resultField = "result";
							var getResultField = $parse($scope.resultField);
							if ($scope.offset == 0) {
								$scope.result = getResultField(response.data);
							} else {
								$scope.result = $scope.result.concat(getResultField(response.data));
							}
							if (!$scope.totalField) $scope.totalField = "total";
							var getTotalField = $parse($scope.totalField);
							$scope.total = getTotalField(response.data);
							$scope.loading = false;
						});
					} else {
						$scope.result = [];
						$scope.total = 0;
					}
				};

				$scope.more = function() {
					$scope.offset += $scope.limit;
					search();
				};

				$scope.newQuery = function() {
					$scope.offset = 0;
					search();
				};

				$scope.open = function(uri) {
					console.log("asdf");
					window.open(uri, '_blank');
				};

				$scope.$watch("titleField", function(titleField) {
					if (!titleField) titleField = "title";
					$scope.getTitleField = $parse(titleField);
				});

			}
		]
	}
});