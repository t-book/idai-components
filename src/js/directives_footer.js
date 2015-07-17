'use strict';

angular.module('idai.directives')


/** 
 * @author: Daniel M. de Oliveira
 */

.directive('idaiFooter', function() {
return {
	restrict: 'E',
	scope: {},
	templateUrl: 'partials/directives/ar-footer.html',
	controller: [ '$scope', '$http', 'localizedContent', 
		function($scope,$http, localizedContent) {
		$scope.getFooterLinks = function(contentDir){
			$http.get('info/content.json').success(function(data){
				var footerLinks = localizedContent.getNodeById(data,'footer');
				if (footerLinks==undefined) {console.log('error: no footerLinks found');}
				localizedContent.reduceTitles(footerLinks)	
				$scope.dynamicLinkList=footerLinks.children;
			});				
		}
		}],
	link: function(scope,element,attrs){
		scope.getFooterLinks(attrs.contentDir);
	}
}});