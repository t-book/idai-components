'use strict';

/* Services */
angular.module('idai.components')

/**
 * @author: Daniel de Oliveira
 */
    .filter('transl8Number', ['language',function(language){

        var filterFunction = function(nu) {

            if (typeof nu == 'undefined') return undefined;

            if (language.browserPrimaryLanguage()==COMPONENTS_GERMAN_LANG) {
                return nu.toLocaleString(COMPONENTS_GERMAN_LANG+"-DE");
            } else {
                return nu.toLocaleString(COMPONENTS_ENGLISH_LANG+"-US");
            }
        };
        filterFunction.$stateful=true;
        return filterFunction;
    }]);