'use strict';


/**
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
         * @param code transl8 key error code
         */
        addMessageForCode: function(code) {

            var translation = transl8.getTranslation(code);

            if (translation.substring(0,4)=="TRL8") {
                messages['default'] = {};
                messages['default'].body = 'default';
            } else {
                messages[code] = {};
                messages[code].body = translation;
            }
        },

        // TODO write test for it
        removeMessage: function(code) {
            delete messages[code].body;
        },

        getMessages: function() {
            return messages;
        }
    }
}]);