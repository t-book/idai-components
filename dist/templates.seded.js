angular.module('idai.components', ['partials/directives/idai-footer.html', 'partials/directives/idai-navbar.html']);

angular.module("partials/directives/idai-footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-footer.html",
    "<div ng-hide=\"$root.hideFooter\" class=\"row\">\n" +
    "			<div class=\"col-md-12 text-center\">\n" +
    "				<hr>\n" +
    "				<p>\n" +
    "					<a href=\"http://archaeologie.uni-koeln.de\" target=\"_blank\"><img src=\"img/siegel_unikoeln.gif\" height=\"80px\"></a>\n" +
    "					<a href=\"http://www.dainst.org/\" target=\"_blank\"><img src=\"img/greif.png\" height=\"80px\"></a>\n" +
    "				</p>\n" +
    "				<p class=\"small\">Copyright Arachne © 2014 | \n" +
    "					\n" +
    "					<span ng-repeat=\"link in dynamicLinkList\">\n" +
    "						<a href=\"info/{{link.id}}\">{{link.title}}</a> |\n" +
    "					</span>\n" +
    "					 {{'footer_bugs_to'|transl8}} <a href=\"mailto:idai.objects@dainst.de\">idai.objects@dainst.de</a></p>\n" +
    "			</div>\n" +
    "		</div>");
}]);

angular.module("partials/directives/idai-navbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directives/idai-navbar.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color:white; opacity:0.89\" role=\"navigation\">\n" +
    "    <div style=\"padding-left:0px; position:relative\">\n" +
    "        <div class=\"pull-left\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li><img src=\"img/kleinergreif.png\" style=\"height: 36px; margin-left: 16px; margin-top: 8px; width: 36px;\"></img></li>\n" +
    "                <li class=\"dropdown\" dropdown>\n" +
    "                    <a href=\"#\" dropdown-toggle class=\"dropdown-toggle\" data-toggle=\"dropdown\">iDAI.welt <b class=\"caret\"></b></a>\n" +
    "                    <ul class=\"dropdown-menu\" dropdown-menu>\n" +
    "                        <li><a href=\"http://www.dainst.org/de/forschung/forschung-digital/idai.welt\" target=\"_blank\">Übersicht</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li><a href=\"https://gazetteer.dainst.org/\" target=\"_blank\">iDAI.gazetteer</a></li>\n" +
    "                        <li><a href=\"http://geoserver.dainst.org/\" target=\"_blank\">iDAI.geoserver</a></li>\n" +
    "                        <li><a href=\"http://arachne.uni-koeln.de/\" target=\"_blank\">iDAI.objects&nbsp;/&nbsp;arachne 3</a></li>\n" +
    "                        <li><a href=\"http://geoserver.dainst.org/\" target=\"_blank\">iDAI.bibliography&nbsp;/&nbsp;Zenon 2.0</a></li>\n" +
    "                        <li><a href=\"http://archwort.dainst.org/thesaurus/de/vocab\" target=\"_blank\">iDAI.vocab</a></li>\n" +
    "                        <li><a href=\"http://hellespont.dainst.org\" target=\"_blank\">Hellespont</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <a href=\"#\">\n" +
    "            <img class=\"pull-left\" src=\"img/project-logo.png\" style=\"height: 36px; margin-left: 16px; margin-top: 8px; width: 36px;\"></img>\n" +
    "            <div ng-include=\"'partials/navbar-project.html'\" include-replace></div>\n" +
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
    "              ng-hide=\"currentPath == '/'\"\n" +
    "              class=\"navbar-left navbar-form input-group form-inline\"\n" +
    "              role=\"search\">\n" +
    "            <input autofocus type=\"text\" class=\"form-control\" placeholder=\"neue Suche\" ng-model=\"q\" name=\"q\">\n" +
    "		        <span class=\"navbar-left input-group-btn\">\n" +
    "		        	<button type=\"submit\" class=\"btn btn-default\"><span style=\"line-height:inherit\" class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "		        </span>\n" +
    "        </form>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "\n" +
    "            <li ng-repeat=\"link in dynamicLinkList\">\n" +
    "                <a href=\"info/{{link.id}}\">{{link.title}}</a>\n" +
    "            </li>\n" +
    "\n" +
    "            <!-- user menu if logged in -->\n" +
    "            <li ng-if=\"userObject.username\" ng-cloak dropdown\n" +
    "                 class=\"btn-group btn-group-sm dropdown\"\n" +
    "                 style=\"margin-top:2px; padding-left:20px; margin-right:5px;\">\n" +
    "\n" +
    "                    <a href=\"bookmarks\" class=\"btn btn-default navbar-btn\" dropdown-toggle class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                    <span class=\"glyphicon glyphicon-user\"></span>\n" +
    "                    &nbsp;{{userObject.username}}\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                    </a>\n" +
    "\n" +
    "					\n" +
    "\n" +
    "                <ul dropdown-menu class=\"dropdown-menu\" role=\"menu\"\n" +
    "                    style=\"margin-top:-6px;\">\n" +
    "\n" +
    "                    <div ng-include=\"'partials/navbar-menu.html'\" include-replace></div>\n" +
    "\n" +
    "                    <li class=\"divider\"></li>\n" +
    "                    <li>\n" +
    "                        <a ng-click=\"logoutFunction();\" style=\"cursor:pointer;\">\n" +
    "                            <span class=\"glyphicon glyphicon-log-out\"></span> &nbsp;{{'navbar_sign_out' | transl8}}\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "				\n" +
    "				<a type=\"button\" href=\"contact\" class=\"btn btn-default navbar-btn\" style=\"padding-top:6px; padding-bottom:4px;\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\n" +
    "            </li>\n" +
    "\n" +
    "            <!-- login and register if not logged in -->\n" +
    "            <li ng-if=\"!userObject.username\" ng-cloak\n" +
    "                 class=\"btn-group btn-group-sm\"\n" +
    "                 style=\"margin-top:2px;\">\n" +
    "                <a  type=\"button\" class=\"btn btn-primary navbar-btn\" ng-click=\"loginFunction();\">\n" +
    "                    <span class=\"glyphicon glyphicon-log-in\"></span> &nbsp;{{'navbar_sign_in' | transl8}}\n" +
    "                </a>\n" +
    "                <a ng-if=\"!userObject.username\" class=\"btn btn-default navbar-btn\" href=\"register\">\n" +
    "                    {{'navbar_sign_up' | transl8}}\n" +
    "                </a>\n" +
    "				\n" +
    "				<a type=\"button\" href=\"contact\" class=\"btn btn-default navbar-btn\" style=\"padding-top:6px; padding-bottom:4px;\"><span class=\"glyphicon glyphicon-envelope\"></span></a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li style=\"margin-top:2px; margin-right:30px;\">\n" +
    "               \n" +
    "				\n" +
    "            </li>\n" +
    "				\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "");
}]);
