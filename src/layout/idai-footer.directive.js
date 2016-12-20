'use strict';

angular.module('idai.components')


/**
 * @author: Daniel de Oliveira
 */

    .directive('idaiFooter', function () {
        return {
            restrict: 'E',
            scope: {
                institutions: '=',
                version: '@'
            },
            transclude: true,
            templateUrl: 'layout/idai-footer.html',
            controller: ['$scope', '$http', '$sce', 'localizedContent', '$transclude', 'componentsSettings',
                function ($scope, $http, $sce, localizedContent, $transclude,componentsSettings) {

                    $scope.mailto = componentsSettings.mailTo;
                    
                    $transclude(function(clone){
                        $scope.hasTranscludedContent = (clone.length > 0);
                    });

                    $scope.date = new Date();
                    $scope.getFooterLinks = function (contentDir) {

                        $http.get('info/content.json').success(function (data) {
                            var footerLinks = localizedContent.getNodeById(data, 'footer');
                            if (footerLinks == undefined) {
                                console.log('error: no footerLinks found');
                            }
                            localizedContent.reduceTitles(footerLinks);
                            $scope.dynamicLinkList = footerLinks.children;
                        });
                    }
                }],
            link: function (scope, element, attrs) {

                scope.getFooterLinks(attrs.contentDir);
            }
        }
    });