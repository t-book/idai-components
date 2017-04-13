/**
 * Author: Sebastian Cuy, Wolfgang Schmidle
 */

describe('language', function (){

	var language;
	
	beforeEach(function() {
		module('idai.components');
		inject(function(_language_) {
			language = _language_;
		});
	});

	function mockBrowserLanguage(lang){

		language.originalBrowserLanguage = jasmine.createSpy('originalBrowserLanguage() spy').and.callFake(function() {
			return lang;
		});
	}
	
	function mockStoredLanguage(lang){

		localStorage.getItem = jasmine.createSpy('getItem() spy').and.callFake(function() {
			return lang;
		});
	}

	it('should shorten language codes', function () {

		mockBrowserLanguage("en-US");
		expect(language.currentLanguage()).toBe("en");

		mockBrowserLanguage("de-DE");
		expect(language.currentLanguage()).toBe("de");
	});

	it('should provide current browser language if no language has been explicitly specified', function () {

		mockBrowserLanguage("en");
		expect(language.currentLanguage()).toBe("en");
		
		mockBrowserLanguage("de");
		expect(language.currentLanguage()).toBe("de");
		
		mockBrowserLanguage("da");
		expect(language.currentLanguage()).toBe("da");
	});

	it('should provide explicitly specified language if it has been set', function () {

		mockBrowserLanguage("en");
		mockStoredLanguage("de")
		expect(language.currentLanguage()).toBe("de");
		
		mockBrowserLanguage("de");
		mockStoredLanguage("en")
		expect(language.currentLanguage()).toBe("en");
		
		mockBrowserLanguage("da");
		mockStoredLanguage("en")
		expect(language.currentLanguage()).toBe("en");
	});

});