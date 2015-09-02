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

    var messages = {};

    /**
     * Close old messages when location changes
     */
    $rootScope.$on("$locationChangeSuccess", function(event, newState, oldState) {
        angular.forEach(messages, function(msg, key) {
            delete messages[key];
        });
    });

    return {

        /**
         * @param transl8Key transl8 key error transl8Key
         */
        addMessageForCode: function(transl8Key, level) {

            var translation = transl8.getTranslation(transl8Key);
            // set standard level to warning
            if (!level || ['success', 'info', 'warning', 'danger'].indexOf(level) == -1) {
                level = "warning";
            }

            var message = { level: level };
            var key = transl8Key;

            if (translation==""||translation.substring(0,4)=="TRL8") {
                key = 'default';
                message.body = 'An unknown error has occured.';
            } else {
                message.body = translation;
            }

            messages[transl8Key] = message;

        },

        // TODO write test for it
        removeMessage: function(transl8Key) {
            delete messages[transl8Key];
        },

        getMessages: function() {
            return messages;
        }
    }
}]);