'use strict';

angular.module('idai.components')
.factory('countries', ['$http', 'language', '$q', 
		function($http, language, $q) {

			var deferred = $q.defer();

			var translationLang=COMPONENTS_ENGLISH_LANG;
			var countries = null;
			if (language.browserPrimaryLanguage()==COMPONENTS_GERMAN_LANG) translationLang=COMPONENTS_GERMAN_LANG;
			
			//TODO load countries.json from inside components-module
	        $http.get('info/countries.json').then(function (response) {
	            countries = [];
	            response.data.forEach(function(ctry){
	            	countries.push({
		            	name: ctry['name_' + translationLang],
		            	iso_2: ctry['iso_2']
	            	});
	            });
	            deferred.resolve(countries);
	        });
		    
		    var factory = {};

		    factory.getCountriesAsync = function() {
		        return deferred.promise;
		    };

		    factory.getCountries = function() {
		        return countries;
		    };

		    return factory;
		}
	]);