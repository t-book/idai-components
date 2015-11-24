'use strict';

/**
 * Message store which holds one or more messages for a
 * certain amount of time for the purpose of being displayed to
 * the user. They are automatically removed on location changes,
 * but also can be removed on demand.
 *
 * The message access is based on
 * transl8keys, which are also used to automatically
 * retrieve the message texts via transl8.
 *
 * @author Sebastian Cuy
 * @author Daniel M. de Oliveira
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

    function _clear() {
        angular.forEach(messages, function(msg, key) {
            delete messages[key];
        });
    }

    /**
     * Clear actual messages when location changes.
     */
    $rootScope.$on("$locationChangeSuccess", function() {
        _clear();
    });

    return {

        /**
         * Adds a message to the actual messages. By default, an extra line
         * is appended below the message containing a standard contact info text.
         * This info text will not appear if level is success.
         *
         * @param transl8Key an existing transl8 key.
         *   Used to identify the message and retrieve the message text from transl8.
         * @param level (optional) should be set to one of
         *   'success', 'info', 'warning', 'danger', which are terms from bootstrap.
         *   If not set, the messages level will default to 'warning'.
         * @param showContactInfo boolean. If set and set to false the contact info
         *   line will not be created.
         *
         * @throws Error if level if set but does not match one of the allowed values.
         * @throws Error if there exists no translation for transl8Key.
         */
        addMessageForCode: function(transl8Key, level, showContactInfo) {

            messages[transl8Key] = {
                text:  transl8.getTranslation(transl8Key),
                level: 'warning',
                contactInfo: 'Please contact arachne@uni-koeln.org if the errors persist.'
            };

            if (level) {
                if (isUnknown(level))
                    throw new Error("If used, level must be set to an allowed value.");
                messages[transl8Key].level = level;
            }

            if (showContactInfo==false||messages[transl8Key].level=='success')
                delete messages[transl8Key].contactInfo;
        },

        /**
         * Removes an error message from the actual messages.
         *
         * @param transl8Key the identifier of the message to be removed.
         */
        removeMessage: function(transl8Key) {
            delete messages[transl8Key];
        },


        /**
         * Removes all messages.
         */
        clear: function() {
            _clear();
        },

        getMessages: function() {
            return messages;
        }
    }
}]);