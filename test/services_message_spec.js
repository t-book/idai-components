/**
 * @author: Daniel M. de Oliveira
 */
ddescribe('message', function () {

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
                        if (translation=="throwError") throw new Error();
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
        expect(message.getMessages()["error_a"].text).toBe("translation");
        expect(message.getMessages()["error_b"].text).toBe("translation");
        expect(message.getMessages()["error_c"].text).toBe("translation");
        expect(message.getMessages()["error_d"]).toBe(undefined);
    });

    it('should translate messages', function () {

        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["error_a"].text).toBe("translation");
    });

    it('should throw an error if translation key invalid', function () {
        myBeforeEach("throwError");
        expect(function(){message.addMessageForCode("error_a")})
            .toThrow();
    });


    it ('should store the message level', function() {
        myBeforeEach("translation");
        message.addMessageForCode("error_a",'danger');
        expect(message.getMessages()["error_a"].level).toBe('danger');
    });

    it ('should default to the message level warning ', function() {
        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["error_a"].level).toBe('warning');
    });

    it('should generate a message with an empty body if translations not yet loaded', function () {

        myBeforeEach("");
        message.addMessageForCode("error_a");
        expect(message.getMessages()["error_a"].text).toBe("");
    });

    it('should throw an error if level param is set to non allowed value', function () {
        myBeforeEach("");
        expect(function(){message.addMessageForCode("error_a","successs")})
            .toThrow();
    });

    it('should clear all the messages', function() {
        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        message.addMessageForCode("error_b");
        expect(message.getMessages()["error_a"].text).toBe("translation");
        expect(message.getMessages()["error_b"].text).toBe("translation");
        message.clear();
        expect(message.getMessages()["error_a"]).toBe(undefined);
        expect(message.getMessages()["error_b"]).toBe(undefined);
    });

    it ('should clear messages when location changes', function() {

        myBeforeEach("translation");
        message.addMessageForCode("error_a");
        message.addMessageForCode("error_b");
        expect(message.getMessages()["error_a"].text).toBe("translation");
        expect(message.getMessages()["error_b"].text).toBe("translation");
        $rootScope.$broadcast('$locationChangeSuccess');
        expect(message.getMessages()["error_a"]).toBe(undefined);
        expect(message.getMessages()["error_b"]).toBe(undefined);
    });
});