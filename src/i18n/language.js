'use strict';

angular.module('idai.components')

/**
 * @return: the users primary browser language.
 * For german languages (de-*) it shortens the language code to "de".
 * For english languages (en-*) it returns the language code to "en".
 *
 * @author: Daniel de Oliveira
 */
.factory('language', function(){

	var lang=navigator.languages ?
		navigator.languages[0] :
		(navigator.language || navigator.userLanguage);

	if (typeof lang === 'undefined') {
		lang = COMPONENTS_GERMAN_LANG;
	} else {

		if (lang.substring(0,2)==COMPONENTS_GERMAN_LANG) lang=COMPONENTS_GERMAN_LANG;
		if (lang.substring(0,2)==COMPONENTS_ENGLISH_LANG) lang=COMPONENTS_ENGLISH_LANG;
	}

	return {
		browserPrimaryLanguage : function(){
			return lang;
		}
	}
});