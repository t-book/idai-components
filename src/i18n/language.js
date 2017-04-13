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

	return {
		originalBrowserLanguage : function(){
			return lang;
		},
		browserLanguage : function() {
			return this.originalBrowserLanguage().substring(0,2);
		},
		currentLanguage : function(){

            var currentLang = this.browserLanguage();

            // Use user-chosen language settings by using idai-components language-switcher
            var lang = localStorage.getItem('lang');
            if (lang) currentLang = lang;

			return currentLang;
		}
	}
});



