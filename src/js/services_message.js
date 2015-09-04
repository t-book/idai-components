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
     *   level - any of 'success', 'info', 'warning', 'danger'
     *   body - localized message text for transl8 key
     */
    var messages = {};

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
         * Adds an error msg to the actual messages array.
         * If no translation for transl8 key could be found, add message at 'default'
         * key of messages array.
         *
         * @param transl8Key transl8 key for localized error description
         * @param level (optional) can be set to one of the following values:
         *   'success', 'info', 'warning', 'danger'. If not set, level defaults to 'warning'.
         * @throws Error if level set but matches none of the allowed values.
         * @throws Error if transl8Key is unknown.
         */
        addMessageForCode: function(transl8Key, level) {

            if (level){
                if (['success', 'info', 'warning', 'danger'].indexOf(level) === -1) {
                    throw new Error("If used, level must be set to an allowed value.");
                }}
            else
                level = 'warning';

            var messageText = transl8.getTranslation(transl8Key);
            if (messageText===null)
                throw new Error("Unknown transl8 key: "+transl8Key);

            var newMessage = {
                level: level,
                body: messageText
            };
            messages[transl8Key] = newMessage;
        },

        removeMessage: function(transl8Key) {
            delete messages[transl8Key];
        },

        getMessages: function() {
            return messages;
        }
    }
}]);