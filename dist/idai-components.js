angular.module('idai.templates', ['partials/directives/idai-footer.html', 'partials/directives/idai-form.html', 'partials/directives/idai-message.html', 'partials/directives/idai-navbar.html', 'partials/directives/idai-picker.html']);

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

angular.module("partials/directives/idai-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-form.html",
    "<form name=\"form\" class=\"form-horizontal\">\n" +
    "	<ng-transclude></ng-transclude>\n" +
    "	<div class=\"form-group\">\n" +
    "	    <div class=\"col-sm-offset-3 col-sm-9\">\n" +
    "	    	<button ng-click=\"submit()\" class=\"btn btn-primary\" ng-class=\"{ disabled: form.$invalid }\">\n" +
    "	    		{{ 'form_save' | transl8 }}\n" +
    "	    	</button>	    	\n" +
    "	    	<button ng-click=\"reset()\" class=\"btn btn-link\">{{ 'form_reset' | transl8 }}</button>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "</form>");
}]);

angular.module("partials/directives/idai-message.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-message.html",
    "<div ng-repeat=\"(transl8Key,message) in messages\"\n" +
    "        ng-class=\"'alert-' + message.level\"\n" +
    "        class=\"col-md-10 col-md-offset-1 alert text-center\">\n" +
    "    <div class=\"alert-message\">\n" +
    "	    <button class=\"close\" ng-click=\"removeMessage(transl8Key)\" class=\"pull-right\" style=\"cursor:pointer;\">&times;</button>\n" +
    "	    <b>{{message.text}}</b><br>\n" +
    "	    Please contact arachne@uni-koeln.org if the errors persist.\n" +
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
    "                        <img src=\"img/kleinergreif.png\" id=\"brand-img\">\n" +
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
    "                <a ng-href=\"info/{{link.id}}\">{{link.title}}</a>\n" +
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
    "                            <a ng-click=\"logoutFunction();\">\n" +
    "                                <span class=\"glyphicon glyphicon-log-out\"></span> &nbsp;{{'navbar_sign_out' | transl8}}\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- login and register if not logged in -->\n" +
    "                <div ng-if=\"!userObject.username\" ng-cloak\n" +
    "                     class=\"btn-group btn-group-sm\">\n" +
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

angular.module("partials/directives/idai-picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-picker.html",
    "<div class=\"idai-picker\">\n" +
    "	\n" +
    "	<script type=\"text/ng-template\" id=\"picker_modal.html\">\n" +
    "		<div class=\"panel panel-default picker-modal\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<form class=\"input-group\">\n" +
    "					<input ng-keydown=\"keydown($event)\"\n" +
    "							ng-keypress=\"keypress($event)\"\n" +
    "							type=\"text\" ng-model=\"query\"\n" +
    "							class=\"form-control\" autofocus></input>\n" +
    "					<span class=\"input-group-btn\">\n" +
    "						<button ng-click=\"newQuery()\" class=\"btn btn-default\">\n" +
    "							<span class=\"glyphicon glyphicon-search\"></span>\n" +
    "						</button>\n" +
    "					</span>\n" +
    "				</form>\n" +
    "			</div>	\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div ng-show=\"loading\" class=\"loading\"></div>\n" +
    "				<em ng-show=\"result && total == 0 && !loading\">{{ 'picker_no_result' | transl8 }}</em>\n" +
    "				<em ng-show=\"!result && total == 0 && !loading\">{{ 'picker_perform_search' | transl8 }}</em>\n" +
    "				<div ng-show=\"total > 0 && !loading\" class=\"text-center small\">\n" +
    "					<b><i>{{ total | number }} {{ 'results' | transl8 }}</i></b>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"list-group\" style=\"max-height:470px; overflow-y: auto;\">\n" +
    "				<a href=\"#\" ng-repeat=\"item in result\" class=\"list-group-item\"\n" +
    "						ng-click=\"selectItem(item)\" ng-class=\"{ preselected: $index == preselect }\">\n" +
    "					<div class=\"row\">\n" +
    "						<div ng-class=\"{ 'col-sm-8': item['@id'], 'col-sm-12': !item['@id']}\">\n" +
    "							<span ng-class=\"{ invisible: $index != preselect }\"\n" +
    "								class=\"glyphicon glyphicon-menu-right small\"></span>\n" +
    "							{{ getTitleField(item) }}\n" +
    "						</div>\n" +
    "						<div class=\"col-sm-4 text-right\" ng-show=\"item['@id']\">\n" +
    "							<button class=\"btn btn-link btn-xs\" ng-click=\"open(item['@id'])\"\n" +
    "									style=\"padding:0px 5px 1px; border: 0;\">\n" +
    "								{{ item['@id'] }}\n" +
    "								<span class=\"glyphicon glyphicon-new-window\" style=\"font-size:0.8em\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<a ng-show=\"total > offset + limit\"\n" +
    "						href=\"#\" class=\"list-group-item text-center\"\n" +
    "						ng-click=\"more()\">\n" +
    "					...\n" +
    "		  		</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</script>\n" +
    "\n" +
    "	<div class=\"input-group\">\n" +
    "    	<span class=\"input-group-btn\">\n" +
    "    		<button class=\"btn btn-default\" type=\"button\" ng-click=\"openModal()\">\n" +
    "				<span class=\"glyphicon glyphicon-link\"></span>\n" +
    "			</button>\n" +
    "    	</span>\n" +
    "    	<span class=\"form-control\">\n" +
    "			<span ng-show=\"!selectedItem\">{{ 'pick_an_item' | transl8 }}</span>\n" +
    "			<a ng-show=\"selectedItem && selectedItem['@id']\"\n" +
    "					ng-href=\"{{ selectedItem['@id'] }}\" target=\"_blank\">\n" +
    "				{{ getTitleField(selectedItem) }}\n" +
    "			</a>\n" +
    "			<span ng-show=\"selectedItem && !selectedItem['@id']\">{{ getTitleField(selectedItem) }}</span>\n" +
    "			<button class=\"btn btn-link btn-xs\" ng-show=\"selectedItem\"\n" +
    "					ng-click=\"selectedItem = undefined\">\n" +
    "				<span class=\"glyphicon glyphicon-remove-sign text-muted\"></span>\n" +
    "			</button>\n" +
    "		</span>\n" +
    "    </div>\n" +
    "\n" +
    "	\n" +
    "\n" +
    "</div>");
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

angular.module('idai.components')

/** 
 * @author: Sebastian Cuy
 */

 .directive('idaiForm', function() {
	return {
		restrict: 'E',
        transclude: true,
		scope: {
			submit: '&', doc: '='
		},
		templateUrl: 'partials/directives/idai-form.html',
		link: function(scope, elem, attrs) {

			scope.reset = function() {
				scope.doc = {};
			};

		}
	}
});

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

angular.module('idai.components')


/**
 * @author: Daniel M. de Oliveira
 */

.directive('idaiMessage', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/directives/idai-message.html',
        controller: [ '$scope', 'message',
            function($scope,message) {

                $scope.messages = message.getMessages();

                $scope.removeMessage = function(transl8Key){
                    message.removeMessage(transl8Key)
                };

            }]
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

angular.module('idai.components')

/** 
 * @author: Sebastian Cuy
 */

 .directive('idaiPicker', function() {
	return {
		restrict: 'E',
		scope: {
			searchUri: '@',	resultField: '@', titleField: '@',
			totalField: '@', queryParam: '@', limitParam: '@',
			offsetParam: '@', addParams: '=', selectedItem: '='
		},
		templateUrl: 'partials/directives/idai-picker.html',
		controller: [ '$scope', '$parse', '$modal',
			function($scope, $parse, $modal) {

				$scope.openModal = function() {
					var modal = $modal.open({
						templateUrl: "picker_modal.html",
						controller: "PickerModalController",
						bindToController: true,
						size: 'lg',
						scope: $scope
					});
					modal.result.then(function(item) {
						$scope.selectedItem = item;
					});
				};

				$scope.$watch("titleField", function(titleField) {
					if (!titleField) titleField = "title";
					$scope.getTitleField = $parse(titleField);
				});

			}
		]
	}
})

.controller('PickerModalController', [ '$scope', '$http', '$q', '$parse', '$modalInstance',
	function($scope, $http, $q, $parse, $modalInstance) {
		
		var canceler;

		$scope.result;
		$scope.total = 0;
		$scope.offset = 0;
		$scope.limit = 10;
		$scope.loading = false;
		$scope.preselect = 0;

		var search = function() {
			if (canceler) canceler.resolve();
			if ($scope.query) {
				$scope.loading = true;
				canceler = $q.defer();
				if (!$scope.queryParam) $scope.queryParam = "q";
				if (!$scope.limitParam) $scope.limitParam = "limit";
				if (!$scope.offsetParam) $scope.offsetParam = "offset";
				var requestUri = $scope.searchUri + "?" + $scope.queryParam + "=" + $scope.query;
				requestUri += "&" + $scope.limitParam + "=" + $scope.limit;
				requestUri += "&" + $scope.offsetParam + "=" + $scope.offset;
				if ($scope.addParams) {
					angular.forEach($scope.addParams, function(value, key) {
						requestUri += "&" + key + "=" + value;
					});
				}
				$http.get(requestUri, { timeout: canceler.promise }).then(function(response) {
					if (!$scope.resultField) $scope.resultField = "result";
					var getResultField = $parse($scope.resultField);
					if ($scope.offset == 0) {
						$scope.result = getResultField(response.data);
					} else {
						$scope.result = $scope.result.concat(getResultField(response.data));
					}
					if (!$scope.totalField) $scope.totalField = "total";
					var getTotalField = $parse($scope.totalField);
					$scope.total = getTotalField(response.data);
					$scope.loading = false;
				});
			} else {
				$scope.result = [];
				$scope.total = 0;
			}
		};

		$scope.more = function() {
			$scope.offset += $scope.limit;
			search();
		};

		$scope.keydown = function($event) {
			// arrow down preselects next item
			console.log($event.keyCode);
			if ($event.keyCode == 40 && $scope.preselect < $scope.result.length - 1) {
				$scope.preselect++;
			// arrow up select precious item
			} else if ($event.keyCode == 38 && $scope.preselect > 0) {
				$scope.preselect--;
			}
		};

		$scope.keypress = function($event) {
			// enter selects preselected item (if query has not changed)
			if ($event.keyCode == 13) {
				if ($scope.total > 0 && $scope.query == $scope.lastQuery) {
					$event.stopPropagation();
					$scope.selectItem($scope.result[$scope.preselect]);
				} else {
					$scope.newQuery();
				}
			}
		};

		$scope.newQuery = function() {
			$scope.lastQuery = $scope.query;
			$scope.offset = 0;
			search();
		};

		$scope.open = function(uri) {
			window.open(uri, '_blank');
		};

		$scope.selectItem = function(item) {
			$modalInstance.close(item);
		};

		$scope.$watch("titleField", function(titleField) {
			if (!titleField) titleField = "title";
			$scope.getTitleField = $parse(titleField);
		});

	}
]);

'use strict';

/* Services */
angular.module('idai.components')

/**
 * @author: Daniel M. de Oliveira
 */
.filter('transl8', ['transl8',function(transl8){
	
	var filterFunction = function(key) {
        var trans;
        try {
            trans = transl8.getTranslation(key);
        } catch (err) {
            var msg = "TRL8 MISSING ('"+key+"')";
            console.log(msg);
            return msg;
        }
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
 * Message store which holds one or more messages for a
 * certain amount of time for the purpose of beeing displayed to
 * the user. They are automatically removed on location changes,
 * but also can be removed selectively on demand.
 *
 * The message access is based on
 * transl8keys, which are also used to automatically
 * retrieve the message texts via transl8.
 *
 * @author: Sebastian Cuy
 * @author: Daniel M. de Oliveira
 */
angular.module('idai.components')

.factory('message', [ '$rootScope', 'transl8', function( $rootScope, transl8 ) {

    /**
     * A Map.
     */
    var messages = {};

    function isUnknown(level){
        return (['success', 'info', 'warning', 'danger'].indexOf(level) === -1);
    }

    /**
     * Clear actual messages when location changes.
     */
    $rootScope.$on("$locationChangeSuccess", function() {
        angular.forEach(messages, function(msg, key) {
            delete messages[key];
        });
    });

    return {

        /**
         * Adds an error message to the actual messages.
         *
         * @param transl8Key an existing transl8 key.
         *   Used to identify the message and retrieve the message text from transl8.
         * @param level (optional) should be set to one of
         *   'success', 'info', 'warning', 'danger', which are terms from bootstrap.
         *   If not set, the messages level will default to 'warning'.
         * @throws Error if level if set but does not match one of the allowed values.
         * @throws Error if there exists no translation for transl8Key.
         */
        addMessageForCode: function(transl8Key, level) {

            messages[transl8Key] = {
                text:  transl8.getTranslation(transl8Key),
                level: 'warning'
            };

            if (level) {
                if (isUnknown(level))
                    throw new Error("If used, level must be set to an allowed value.");
                messages[transl8Key].level = level;
            }
        },

        /**
         * Removes an error message from the actual messages.
         *
         * @param transl8Key the identifier of the message to be removed.
         */
        removeMessage: function(transl8Key) {
            delete messages[transl8Key];
        },

        getMessages: function() {
            return messages;
        }
    }
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
	var TRANSL8_JSONP_URL = "//crazyhorse.archaeologie.uni-koeln.de/transl8/" +
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