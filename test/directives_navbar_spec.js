/**
 * The main focus of this test is to prove that an item from
 * the static/content.json "navbar" node leads to the dynamic
 * creation of a menu item in the navigation bar.
 * 
 * The language selection mechanism if following the rules 
 * described in ../docs/feature_localization_con10t.md and is implemented
 * on top of the same mechanisms which are already tested in
 * ../test/controllers_projects_spec.js. 
 * So these rules won't be tested here again.
 * 
 * Author: Daniel M. de Oliveira
 */
describe ('idaiNavbar', function() {

	var scope = {};

	var prepare = function (primaryLanguage) {
		module('idai.services', function($provide) {
			$provide.value('language', {
				browserPrimaryLanguage: function () {
					return primaryLanguage;
				}
			});
			$provide.value('authService', {
				getUser: function () {
					return 'testUser';
				}
			});
			$provide.value('transl8', {
				getTranslation: function () {
					return 'translation';
				}
			});
			$provide.constant('arachneSettings', {
				dataserviceUri: '/data'
			});
		});
		module('idai.filters');
		module('idai.directives');
		module('templates');

		
		inject(function($rootScope, $compile, $templateCache,$httpBackend) {
			
			template = $templateCache.get('partials/directives/idai-navbar.html');
			$templateCache.put('app/partials/directives/idai-navbar.html',template);

			$httpBackend.expectGET('info/content.json').respond(200,'{\
				"id": "",\
				"children": [\
				{\
					"id": "navbar",\
					"children": [\
						{\
							"id": "about",\
							"title": {\
								"de": "Über Arachne",\
								"en": "About Arachne"\
							}}]}]}');

			$httpBackend.expectGET('partials/navbar-project.html').respond(200,'');

			
		    scope = $rootScope.$new();
			$templateCache.put();
		    element =
		        '<idai-navbar></idai-navbar>';

		    scope.size = 100;
		    element = $compile(element)(scope);
		    scope.$digest();
			$httpBackend.flush();
		});
	};
	
	it ('show german menu item',function(){
		prepare('de');
		expect(element.find('ul').eq(2).find('li').find('a').eq(0).text()).toBe("Über Arachne");
	});
	
		
	it ('show english menu item',function(){
		prepare('en');
		expect(element.find('ul').eq(2).find('li').find('a').eq(0).text()).toBe("About Arachne");
	});
});
