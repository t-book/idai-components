/**
 * @author: Daniel M. de Oliveira
 */
describe('message', function () {

    var $rootScope;
    var message;

    /**
     * Done this way to make it configurable with translation.
     * @param translation
     */
    function myBeforeEach(translation){

        module('idai.components',function($provide) {
                $provide.value('transl8', {
                    getTranslation: function () {
                        return translation;
                    }
                });
            }
        );

        inject(function(_message_,$injector) {
            $rootScope = $injector.get('$rootScope')
            message = _message_;
        });
    }

    it('should store and recall messages', function () {

        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        message.addMessageForCode("error_b");
        message.addMessageForCode("error_c");
        expect(message.getMessages()["error_a"].body).toBe("translation");
        expect(message.getMessages()["error_b"].body).toBe("translation");
        expect(message.getMessages()["error_c"].body).toBe("translation");
        expect(message.getMessages()["error_d"]).toBe(undefined);
    });

    it('should translate messages', function () {

        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["error_a"].body).toBe("translation");
    });

    it('should show a default error message if no translation found', function () {

        myBeforeEach("TRL8 MISSING");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["default"].body).toBe("An unknown error has occured.");
    });

    it('should show a default error message if translation not yet loaded', function () {

        myBeforeEach("");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["default"].body).toBe("An unknown error has occured.");
    });

    it ('should clear messages when location changes', function() {

        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        message.addMessageForCode("error_b");
        expect(message.getMessages()["error_a"].body).toBe("translation");
        expect(message.getMessages()["error_b"].body).toBe("translation");
        $rootScope.$broadcast('$locationChangeSuccess');
        expect(message.getMessages()["error_a"]).toBe(undefined);
        expect(message.getMessages()["error_b"]).toBe(undefined);
    });

    it ('should clear default msg when location changes', function() {

        myBeforeEach("TRL8 MISSING");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["default"].body).toBe("An unknown error has occured.");
        $rootScope.$broadcast('$locationChangeSuccess');
        expect(message.getMessages()["default"]).toBe(undefined);
    });
});