'use strict';


/**
 * @author: Sebastian Cuy
 * @author: Daniel M. de Oliveira
 */
angular.module('idai.components')

.factory('message', [ '$rootScope', 'transl8', function( $rootScope, transl8 ) {


    /**
     * key, value pairs of
     * transl8Key, messageObject
     * with
     * messageObject
     *   level - one of 'success', 'info', 'warning', 'danger'
     *   text  - localized message text
     */
    var messages = {};

    function isUnknown(level){
        return (['success', 'info', 'warning', 'danger'].indexOf(level) === -1);
    }

    function determineMessageLevel (level) {
        if (level) {
            if (isUnknown(level))
                throw new Error("If used, level must be set to an allowed value.");
            return level;
        }
        else {
            return 'warning';
        }
    }

    function fetchTransl8Translation(transl8Key) {
        var transl8Translation = transl8.getTranslation(transl8Key);
        if (transl8Translation===null)
            throw new Error("Unknown transl8 key: "+transl8Key);
        return transl8Translation;
    }

    /**
     * Close old messages when location changes
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
         * @param transl8Key transl8 is used to identify the message
         *   within the messages map as well as for retrieval of
         *   a localized message text from transl8.
         * @param level (optional) should be set to one of
         *   'success', 'info', 'warning', 'danger', which are terms from bootstrap.
         *   If not set, level defaults to 'warning'.
         * @throws Error if level if set but does not match one of the allowed values.
         * @throws Error if there exists no translation for transl8Key.
         */
        addMessageForCode: function(transl8Key, level) {

            var newMessage = {
                level: determineMessageLevel(level),
                text:  fetchTransl8Translation(transl8Key)
            };

            messages[transl8Key] = newMessage;
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