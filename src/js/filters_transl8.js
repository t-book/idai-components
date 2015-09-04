'use strict';

/* Services */
angular.module('idai.components')

/**
 * Author: Daniel M. de Oliveira
 */
.filter('transl8', ['transl8',function(transl8){
	
	var filterFunction = function(key) {
		var trans = transl8.getTranslation(key);
        if (trans==null) {
            var msg = "TRL8 MISSING ('"+key+"')";
            console.log(msg);
            return msg;
        }
		return trans;
	}
	filterFunction.$stateful=true;
	return filterFunction;
}]);