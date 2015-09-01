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
        message.addMessageForCode("error_404");
        message.addMessageForCode("error_454");
        message.addMessageForCode("error_464");
        expect(message.getMessages()["error_404"].body).toBe("translation");
        expect(message.getMessages()["error_454"].body).toBe("translation");
        expect(message.getMessages()["error_464"].body).toBe("translation");
        expect(message.getMessages()["error_474"]).toBe(undefined);
    });

    it('should translate messages', function () {

        myBeforeEach("translation");
        message.addMessageForCode("error_404");
        expect(message.getMessages()["error_404"].body).toBe("translation");
    });

    it('should show a default error message if no translation found', function () {

        myBeforeEach("TRL8 MISSING");
        message.addMessageForCode("error_404");
        expect(message.getMessages()["default"].body).toBe("default");
    });

    it ('should clear messages when location changes', function() {

        myBeforeEach("translation");
        message.addMessageForCode("error_404");
        message.addMessageForCode("error_454");
        expect(message.getMessages()["error_404"].body).toBe("translation");
        expect(message.getMessages()["error_454"].body).toBe("translation");
        $rootScope.$broadcast('$locationChangeSuccess');
        expect(message.getMessages()["error_404"]).toBe(undefined);
        expect(message.getMessages()["error_454"]).toBe(undefined);
    });

    it ('should clear default msg when location changes', function() {

        myBeforeEach("TRL8 MISSING");
        message.addMessageForCode("error_404");
        expect(message.getMessages()["default"].body).toBe("default");
        $rootScope.$broadcast('$locationChangeSuccess');
        expect(message.getMessages()["default"]).toBe(undefined);
    });
});