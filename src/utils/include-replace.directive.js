'use strict';

/* Directives */
angular.module('idai.components')


/**
 * @author: Daniel de Oliveira
 */

.directive('includeReplace', function () {
    return {
       	require: 'ngInclude',
       	restrict: 'A', /* optional */
       	link: function (scope, el, attrs) {
           	el.replaceWith(el.children());
       	}  
	}});