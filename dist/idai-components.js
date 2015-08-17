angular.module('idai.templates', ['partials/directives/idai-footer.html', 'partials/directives/idai-navbar.html']);

angular.module("partials/directives/idai-footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-footer.html",
    "<div class=\"row idai-footer\">\n" +
    "	<div class=\"col-md-12 text-center\">\n" +
    "		<p>\n" +
    "			<a href=\"http://www.dainst.org/\" target=\"_blank\"><img src=\"img/logo_dai.png\" height=\"60px\" style=\"margin-right: 20px;\"></a>\n" +
    "			<a href=\"http://archaeologie.uni-koeln.de\" target=\"_blank\"><img src=\"img/logo_unikoeln.png\" height=\"50px\" style=\"margin-right: 20px;\"></a>\n" +
    "			<a href=\"http://archaeologie.uni-koeln.de/node/23\" target=\"_blank\"><img src=\"img/logo_codarchlab.png\" height=\"25px\"></a>\n" +
    "		</p>\n" +
    "		<p>\n" +
    "			{{'footer_licensed_under'|transl8}}\n" +
    "			<a rel=\"license\" href=\"info/order\">Creative Commons</a> |\n" +
    "			<span ng-repeat=\"link in dynamicLinkList\">\n" +
    "				<a href=\"info/{{link.id}}\">{{link.title}}</a> |\n" +
    "			</span>\n" +
    "			{{'footer_bugs_to'|transl8}}\n" +
    "			<a href=\"mailto:{{mailto}}\">{{mailto}}</a></p>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("partials/directives/idai-navbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-navbar.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div style=\"padding-left:0px; position:relative\">\n" +
    "        <div class=\"pull-left\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li class=\"dropdown\" dropdown>\n" +
    "                    <a href=\"#\" dropdown-toggle class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                        <img src=\"img/kleinergreif.png\"\n" +
    "                            style=\"height: 36px; width: 36px; margin-top: -8px; margin-bottom: -8px\">\n" +
    "                        <b class=\"caret\"></b>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\" dropdown-menu>\n" +
    "                        <li><a href=\"http://www.dainst.org/de/forschung/forschung-digital/idai.welt\" target=\"_blank\">iDAI.welt</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li><a href=\"https://gazetteer.dainst.org/\" target=\"_blank\">iDAI.gazetteer</a></li>\n" +
    "                        <li><a href=\"http://geoserver.dainst.org/\" target=\"_blank\">iDAI.geoserver</a></li>\n" +
    "                        <li><a href=\"http://arachne.uni-koeln.de/\" target=\"_blank\">iDAI.objects&nbsp;/&nbsp;Arachne</a></li>\n" +
    "                        <li><a href=\"http://zenon.dainst.org\" target=\"_blank\">iDAI.bibliography&nbsp;/&nbsp;Zenon</a></li>\n" +
    "                        <li><a href=\"http://archwort.dainst.org/thesaurus/de/vocab\" target=\"_blank\">iDAI.vocab</a></li>\n" +
    "                        <li><a href=\"http://hellespont.dainst.org\" target=\"_blank\">Hellespont</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <a href=\"/\">\n" +
    "            <img class=\"pull-left\" ng-src=\"img/logo_{{projectId}}.png\" style=\"height: 36px; margin-top: 8px;\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"navbar-header\" ng-init=\"isCollapsed = true\">\n" +
    "\n" +
    "        <button class=\"navbar-toggle\" ng-click=\"isCollapsed = !isCollapsed\" type=\"button\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" collapse=\"isCollapsed\" style=\"padding-left:10px\">\n" +
    "\n" +
    "        <form\n" +
    "              ng-submit=\"search()\"\n" +
    "              ng-hide=\"hideSearchForm\"\n" +
    "              class=\"navbar-left navbar-form input-group form-inline\"\n" +
    "              role=\"search\">\n" +
    "            <input autofocus type=\"text\" class=\"form-control\" placeholder=\"neue Suche\" ng-model=\"q\" name=\"q\">\n" +
    "		        <span class=\"navbar-left input-group-btn\">\n" +
    "		        	<button type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "		        </span>\n" +
    "        </form>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "\n" +
    "            <li ng-repeat=\"link in dynamicLinkList\">\n" +
    "                <a href=\"info/{{link.id}}\">{{link.title}}</a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li>\n" +
    "\n" +
    "                <!-- user menu if logged in -->\n" +
    "                <div ng-if=\"userObject.username\" ng-cloak dropdown keyboard-nav>\n" +
    "\n" +
    "                    <a href=\"bookmarks\" class=\"btn btn-default btn-sm navbar-btn\" dropdown-toggle class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                        <span class=\"glyphicon glyphicon-user\"></span>\n" +
    "                        &nbsp;{{userObject.username}}\n" +
    "                        <span class=\"caret\"></span>\n" +
    "                    </a>\n" +
    "                    <ul dropdown-menu class=\"dropdown-menu\" role=\"menu\"\n" +
    "                            style=\"margin-top:-11px; margin-right: 4px;\">\n" +
    "                        <div ng-include=\"'partials/navbar-menu.html'\" include-replace></div>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li>\n" +
    "                            <a ng-click=\"logoutFunction();\" style=\"cursor:pointer;\">\n" +
    "                                <span class=\"glyphicon glyphicon-log-out\"></span> &nbsp;{{'navbar_sign_out' | transl8}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- login and register if not logged in -->\n" +
    "                <div ng-if=\"!userObject.username\" ng-cloak\n" +
    "                     class=\"btn-group btn-group-sm\"\n" +
    "                     style=\"margin-top:2px;\">\n" +
    "                    <a type=\"button\" class=\"btn btn-default navbar-btn\" ng-click=\"loginFunction();\">\n" +
    "                        <b>\n" +
    "                            <span class=\"glyphicon glyphicon-log-in\"></span>\n" +
    "                            &nbsp;{{'navbar_sign_in' | transl8}}\n" +
    "                        </b>\n" +
    "                    </a>\n" +
    "                    <a ng-if=\"!userObject.username\" class=\"btn btn-default navbar-btn\" href=\"register\">\n" +
    "                        {{'navbar_sign_up' | transl8}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "            </li>\n" +
    "\n" +
    "            <li style=\"margin-right:30px; margin-left: 5px;\">\n" +
    "                <div>\n" +
    "                    <a type=\"button\" href=\"contact\" class=\"btn btn-sm btn-default navbar-btn\">\n" +
    "                        <span class=\"glyphicon glyphicon-envelope\"></span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "				\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "");
}]);

'use strict';

angular.module('idai.components',[]);


'use strict';

angular.module('idai.components')


/** 
 * @author: Daniel M. de Oliveira
 */

.directive('idaiFooter', function() {
return {
	restrict: 'E',
	scope: { mailto: '@' },
	templateUrl: 'partials/directives/idai-footer.html',
	controller: [ '$scope', '$http', 'localizedContent', 
		function($scope,$http, localizedContent) {
			$scope.date = new Date();
			$scope.getFooterLinks = function(contentDir){
				$http.get('info/content.json').success(function(data){
					var footerLinks = localizedContent.getNodeById(data,'footer');
					if (footerLinks==undefined) {console.log('error: no footerLinks found');}
					localizedContent.reduceTitles(footerLinks)	
					$scope.dynamicLinkList=footerLinks.children;
				});				
			}
		}],
	link: function(scope,element,attrs){
		scope.getFooterLinks(attrs.contentDir);
	}
}});
'use strict';

/* Directives */
angular.module('idai.components')


/**
 * @author: Daniel M. de Oliveira
 */

.directive('includeReplace', function () {
    return {
       	require: 'ngInclude',
       	restrict: 'A', /* optional */
       	link: function (scope, el, attrs) {
           	el.replaceWith(el.children());
       	}  
	}});
'use strict';

/* Directives */
angular.module('idai.components')


/**
 * @author: Daniel M. de Oliveira
 */

	.directive('idaiNavbar', function() {
		return {
			restrict: 'E',
			scope: {
				userObject: '=',
				loginFunction: '&',
				logoutFunction: '&',
				hideSearchForm: '=',
				projectId: '@'
			},
			templateUrl: 'partials/directives/idai-navbar.html',
			controller: [ '$scope', '$http', 'localizedContent', '$location',
				function($scope, $http, localizedContent, $location) {

					$scope.getNavbarLinks = function(contentDir){
						$http.get('info/content.json').success(function(data){
							var navbarLinks = localizedContent.getNodeById(data,'navbar');
							if (navbarLinks==undefined) {console.log('error: no navbarLinks found');}
							localizedContent.reduceTitles(navbarLinks)
							$scope.dynamicLinkList=navbarLinks.children;
						});
					}

					$scope.search = function(fq) {
						if ($scope.q) {
							var url = '/search?q=' + $scope.q;
							if (fq) url += "&fq=" + fq;
							$scope.q = null;
							$location.url(url);
						}
					}
					
				}],
			link: function(scope,element,attrs){
				scope.getNavbarLinks(attrs.contentDir);
			}
		}});
'use strict';

/* Services */
angular.module('idai.components')

/**
 * Author: Daniel M. de Oliveira
 */
.filter('transl8', ['transl8',function(transl8){
	
	var filterFunction = function(key) {
		var trans = transl8.getTranslation(key);
		return trans;
	}
	filterFunction.$stateful=true;
	return filterFunction;
}]);
'use strict';

angular.module('idai.components')

/**
 * @return: the users primary browser language.
 * For german languages (de-*) it shortens the language code to "de".
 * For english languages (en-*) it returns the language code to "en".
 *
 * @author: Daniel M. de Oliveira
 */
.factory('language', function(){

	var lang=navigator.languages ?
		navigator.languages[0] :
		(navigator.language || navigator.userLanguage);

	if (lang.substring(0,2)=='de') lang='de';
	if (lang.substring(0,2)=='en') lang='en';

	return {
		browserPrimaryLanguage : function(){
			return lang;
		}
	}
});
'use strict';

angular.module('idai.components')

/**
 * Given a language, determines by a
 * rule if this language is applicable or if not which
 * other language is applicable in a given context.
 * Once found a suitable language, an operation to
 * apply that language in the clients context gets performed.
 *
 * @author: Daniel M. de Oliveira
 */
.factory('languageSelection', ['language', function(language) {

	var GERMAN_LANG = 'de';
	var ENGLISH_LANG = 'en';

	return {

		/**
		 * The language selection rule.
		 *
		 * @param prefered_lang - the language initially prefered by the client
		 * @param isLangApplicable - callback function(lang,param) for testing
		 *   if lang is applicable in the clients context
		 * @param applyLang - callback function(lang_,param) for applying
		 *   lang in the clients context
		 * @param param - used as second param for the callbacks
		 */
		__ : function(isLangApplicable,applyLang,param){

			if (language.browserPrimaryLanguage()==GERMAN_LANG){
				applyLang(GERMAN_LANG,param)
				return;
			}

			if (isLangApplicable(language.browserPrimaryLanguage(),param)){
				applyLang(language.browserPrimaryLanguage(),param);
			} else if (language.browserPrimaryLanguage()==ENGLISH_LANG){
				applyLang(GERMAN_LANG,param);
			} else if (isLangApplicable(ENGLISH_LANG,param))
				applyLang(ENGLISH_LANG,param);
			else
				applyLang(GERMAN_LANG,param);
		}
	}
}]);
'use strict';

/**
 * Perform localization related tasks on 
 * tree structure exemplified by:
 * 
 * node
 *   id: the_id,
 *   title: ( lang_a : title_lang_a, lang_b : title_lang_b ),
 *   children: [ node, node, node ]
 * 
 * @author: Daniel M. de Oliveira
 */
angular.module('idai.components')

.factory('localizedContent',
	['languageSelection', function(languageSelection) {

	return {

		/**
		 * Walks trough all elements of the tree
		 * and adjusts the titles of nodes to only appear
		 * in one language. 
		 *
		 * The choice is beeing made for each node independently 
		 * of the other nodes via the language selection 
		 * rule, taking into consideration the availability of the 
		 * languages of the node.
		 *
		 * Tree structure before:
		 *
		 * node
		 *   id: the_id,
		 *   title: ( lang_a : title_lang_a, lang_b : title_lang_b ),
		 *   children: [ node, node, node ]
		 *
		 * Tree structure after:
		 *
		 * node
		 *   id: the_id,
		 *   title: title_lang_b,
		 *   children: [ node, node, node ]
		 */
		reduceTitles : function(node){

			var adjustTitleForLang = function(lang,node) {
				if (node.title)
					node.title=node.title[lang];
			}

			var isTitleAvailableForLang = function (lang,node) {
				if (!node.title) return false;
				return node.title[lang];
			}

			var recurseProjectsToAdjustTitle = function(node){

				languageSelection.__(isTitleAvailableForLang,adjustTitleForLang,node);

				if (! node.children) return;
				for (var i=0;i<node.children.length;i++) {
					recurseProjectsToAdjustTitle(node.children[i]);
				}
			}

			recurseProjectsToAdjustTitle(node);
		},

		/**
		 * Walks through all elements of the tree and 
		 * determines which language for a node of 
		 * a given title is applicable. 
		 * 
		 * The choice is beeing made via the language selection 
		 * rule, taking into consideration the availability of the 
		 * languages of the node.
		 *
		 * @param node
		 * @param title
		 */
		determineLanguage : function (node,title) {

			var ret_language = '';

			/**
			 * Searches recursively through an object tree and
			 * determines if there is a node whose title matches
			 * *title* and which has a title for lang.
			 *
			 * Abstract tree structure:
			 * node
			 *   id: the_id,
			 *   title: ( lang_a : title, lang_b : title ),
			 *   children: [ node, node, node ]
			 *
			 * @param lang
			 * @param node the root of the object tree.
			 * @returns true if there is at least one item
			 *   meeting the above mentioned condition. false
			 *   otherwise.
			 */
			var isNodeAvailableForLang = function(lang,node) {
				var recursive = function(node){
					if (node.id==title&&node.title[lang]) return true;
					if (node.children)
						for (var i=0; i< node.children.length;i++)
							if (recursive(node.children[i])) return true;
					return false;
				}
				if (recursive(node)) return true;
				return false;
			}

			var setLang = function(lang) {
				ret_language = lang;
			}

			languageSelection.__ (isNodeAvailableForLang,setLang,node);
			return ret_language;
		},
		
		/**
		 * Walks through the elements of the tree 
		 * until it finds a node of the given id.
		 * 
		 * @return reference to the first node 
		 *   found whose id matches param id. 
		 *   undefined if no node could for the id
		 *   could be found.
		 */
		getNodeById : function (node,id) {
			
			var recurse = function(node,id){
				if (node.id==id) return node;
				if (! node.children) return undefined;
				var foundNode=undefined;
				for (var i=0;i<node.children.length;i++){
					var retval=recurse(node.children[i],id);
					if (retval!=undefined) foundNode=retval;
				}
				return foundNode;
					
			}
			return recurse(node,id);
		}
	};
}]);

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
	var TRANSLATION_MISSING = 'TRL8 MISSING';
	var TRANSL8_JSONP_URL = "http://crazyhorse.archaeologie.uni-koeln.de/transl8/" +
		"translation/jsonp?application=arachne4_frontend&lang={LANG}&callback=JSON_CALLBACK";



	var translationLang=ENGLISH_LANG;
	if (primaryBrowserLanguage.browserPrimaryLanguage()=='de') translationLang='de';
	var transl8Url = TRANSL8_JSONP_URL.replace('{LANG}',translationLang);



	var translations={}; // Map: [transl8_key,translation].
	$http.jsonp(transl8Url).
		success(function(data) {

			for(var i = 0; i < data.length; i++) {
				translations[data[i].key] = data[i].value;
			}
		}).
		error(function() {
			alert("ERROR: Could not get translations. Try to reload the page or send a mail to arachne@uni-koeln.de");
		});

	return {

		getTranslation: function(key) {

			var translation = translations[key];
			if (!translation || 0 === translation.length)
				translation=TRANSLATION_MISSING+' ('+key+')';

			return translation;
		}
	}
}]);