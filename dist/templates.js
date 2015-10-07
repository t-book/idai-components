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
