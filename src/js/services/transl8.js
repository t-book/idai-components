'use strict';

/**
 * Provides translations for keys based on the primary browser language of the user.
 * Makes use of the CoDArchLab Transl8 tool.
 *
 * @author: Daniel M. de Oliveira
 */
angular.module('idai.components')
.factory('transl8', ['$http', 'language', 'componentsSettings',
		function($http, language, componentsSettings) {
			var ENGLISH_LANG = 'en';
			var GERMAN_LANG = 'de';

			var translationLang=ENGLISH_LANG;
			var translationsLoaded = false;
			var translations = {}; // Map: [transl8_key,translation].

			if (language.browserPrimaryLanguage()==GERMAN_LANG) translationLang=GERMAN_LANG;
			var transl8UrlComponents = "http://bogusman01.dai-cloud.uni-koeln.de/transl8/translation/jsonp?application=components1&lang={LANG}&callback=JSON_CALLBACK".replace('{LANG}',translationLang);
			var transl8UrlApplication = componentsSettings.transl8Uri.replace('{LANG}',translationLang);

			var promise = $http.jsonp(transl8UrlComponents).success(function(data) {
				for(var i = 0; i < data.length; i++) {
					translations[data[i].key] = data[i].value;
				}
			}).
			error(function() {
				alert("ERROR: Could not get components translations. Try to reload the page or send a mail to arachne@uni-koeln.de");
			});

			promise = $http.jsonp(transl8UrlApplication).success(function(data) {
				for(var i = 0; i < data.length; i++) {
					translations[data[i].key] = data[i].value;
				}
				translationsLoaded = true;
			}).
			error(function() {
				alert("ERROR: Could not get application translations. Try to reload the page or send a mail to arachne@uni-koeln.de");
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
				},

				onLoaded: function() {
					return promise;
				}

			}
		}
]);