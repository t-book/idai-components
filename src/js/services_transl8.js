'use strict';

/**
 * Provides translations for keys based on the primary browser language of the user.
 * Makes use of the CoDArchLab Transl8 tool.
 *
 * @author: Daniel M. de Oliveira
 */
angular.module('idai.components')
.factory('transl8', ['$http', 'language', function($http, primaryBrowserLanguage) {

	var ENGLISH_LANG='en';
	var TRANSL8_JSONP_URL = "http://crazyhorse.archaeologie.uni-koeln.de/transl8/" +
		"translation/jsonp?application=arachne4_frontend&lang={LANG}&callback=JSON_CALLBACK";


	var translationLang=ENGLISH_LANG;
	var translationsLoaded = false;
	var translations={}; // Map: [transl8_key,translation].


	if (primaryBrowserLanguage.browserPrimaryLanguage()=='de') translationLang='de';
	var transl8Url = TRANSL8_JSONP_URL.replace('{LANG}',translationLang);



	$http.jsonp(transl8Url).
		success(function(data) {
			for(var i = 0; i < data.length; i++) {
				translations[data[i].key] = data[i].value;
			}
			translationsLoaded=true;
		}).
		error(function() {
			alert("ERROR: Could not get translations. Try to reload the page or send a mail to arachne@uni-koeln.de");
		});

	return {

        /**
         * @param key an existing key in transl8 with
         *   translations for all existing language sets.
         * @returns translation text
         * @throws Error if the key does not exist in transl8 or
         *   there is no translation for the given key.
         */
		getTranslation: function(key) {
			if (!translationsLoaded) return '';

			var translation = translations[key];
			if (!translation || 0 === translation.length) {
                throw new Error("No translation found for key '" + key + "'");
            }
			return translation;
		}
	}
}]);