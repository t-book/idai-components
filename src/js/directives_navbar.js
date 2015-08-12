'use strict';

/* Directives */
angular.module('idai.components')


/**
 * @author: Daniel M. de Oliveira
 */

	.directive('idaiNavbar', function() {
		return {
			restrict: 'E',
			scope: {
				userObject: '=',
				loginFunction: '&',
				logoutFunction: '&',
				hideSearchForm: '='
			},
			templateUrl: 'partials/directives/idai-navbar.html',
			controller: [ '$scope', '$http', 'localizedContent', '$location',
				function($scope,$http, localizedContent, $location) {

					$scope.getNavbarLinks = function(contentDir){
						$http.get('info/content.json').success(function(data){
							var navbarLinks = localizedContent.getNodeById(data,'navbar');
							if (navbarLinks==undefined) {console.log('error: no navbarLinks found');}
							localizedContent.reduceTitles(navbarLinks)
							$scope.dynamicLinkList=navbarLinks.children;
						});
					}

					$scope.search = function(fq) {
						if ($scope.q) {
							var url = '/search?q=' + $scope.q;
							if (fq) url += "&fq=" + fq;
							$scope.q = null;
							$location.url(url);
						}
					}
					
				}],
			link: function(scope,element,attrs){
				scope.getNavbarLinks(attrs.contentDir);
			}
		}});