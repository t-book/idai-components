'use strict';


/**
 *
 * $rootScope
 *   messages
 *
 * @author: Sebastian Cuy
 * @author: Daniel M. de Oliveira
 */
angular.module('idai.components')

.factory('message', [ '$rootScope', 'transl8', function( $rootScope, transl8 ) {

    $rootScope.messages = {};

    /**
     * Close old messages when location changes
     */
    $rootScope.$on("$locationChangeSuccess", function(event, newState, oldState) {
        angular.forEach($rootScope.messages, function(msg, key) {
            delete $rootScope.messages[key];
        });
    });

    return {

        /**
         * @param transl8Key transl8 key error transl8Key
         */
        addMessageForCode: function(transl8Key) {

            var translation = transl8.getTranslation(transl8Key);

            if (translation==""||translation.substring(0,4)=="TRL8") {
                $rootScope.messages['default'] = {};
                $rootScope.messages['default'].body = 'An unknown error has occured.';
            } else {
                $rootScope.messages[transl8Key] = {};
                $rootScope.messages[transl8Key].body = translation;
            }
        },

        // TODO write test for it
        removeMessage: function(transl8Key) {
            delete $rootScope.messages[transl8Key];
        },

        getMessages: function() {
            return $rootScope.messages;
        }
    }
}]);