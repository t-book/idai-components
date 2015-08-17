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
