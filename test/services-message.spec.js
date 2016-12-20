/**
 * @author: Daniel M. de Oliveira
 */
describe('message', function () {

    var $rootScope;
    var messages;

    /**
     * Done this way to make it configurable with translation.
     * @param translation
     */
    function myBeforeEach(translation){

        module('idai.components',function($provide) {
                $provide.value('transl8', {
                    getTranslation: function (transl8Key) {
                        if (transl8Key=='components.message.contact')
                            return 'Please contact CONTACT if the errors persist.';
                        if (translation=="throwError") throw new Error();
                        return translation;
                    },
                    onLoaded: function () {
                        return {
                            then: function(callback) { return callback(); }
                        }
                    }
                });
            }
        );

        inject(function(_messageService_,$injector) {
            $rootScope = $injector.get('$rootScope');
            messages = _messageService_;
        });
    }

    it('should store and recall messages', function () {

        myBeforeEach("translation");
        messages.addMessageForCode("error_a");
        messages.addMessageForCode("error_b");
        messages.addMessageForCode("error_c");
        expect(messages.getMessages()["error_a"].text.toString()).toBe("translation");
        expect(messages.getMessages()["error_b"].text.toString()).toBe("translation");
        expect(messages.getMessages()["error_c"].text.toString()).toBe("translation");
        expect(messages.getMessages()["error_d"]).toBe(undefined);
    });

    it('should translate messages', function () {

        myBeforeEach("translation");
        messages.addMessageForCode("error_a");
        expect(messages.getMessages()["error_a"].text.toString()).toBe("translation");
    });

    it('should throw an error if translation key invalid', function () {
        myBeforeEach("throwError");
        expect(function(){messages.addMessageForCode("error_a")})
            .toThrow();
    });


    it ('should store the message level', function() {
        myBeforeEach("translation");
        messages.addMessageForCode("error_a",'danger');
        expect(messages.getMessages()["error_a"].level).toBe('danger');
    });

    it ('should default to the message level warning ', function() {
        myBeforeEach("translation");
        messages.addMessageForCode("error_a");
        expect(messages.getMessages()["error_a"].level).toBe('warning');
    });

    it('should generate a message with an empty body if translations not yet loaded', function () {

        myBeforeEach("");
        messages.addMessageForCode("error_a");
        expect(messages.getMessages()["error_a"].text.toString()).toBe("");
    });

    it('should throw an error if level param is set to non allowed value', function () {
        myBeforeEach("");
        expect(function(){messages.addMessageForCode("error_a","successs")})
            .toThrow();
    });

    it('should clear all the messages', function() {
        myBeforeEach("translation");
        messages.addMessageForCode("error_a");
        messages.addMessageForCode("error_b");
        expect(messages.getMessages()["error_a"].text.toString()).toBe("translation");
        expect(messages.getMessages()["error_b"].text.toString()).toBe("translation");
        messages.clear();
        expect(messages.getMessages()["error_a"]).toBe(undefined);
        expect(messages.getMessages()["error_b"]).toBe(undefined);
    });

    it ('should clear messages when location changes', function() {

        myBeforeEach("translation");
        messages.addMessageForCode("error_a");
        messages.addMessageForCode("error_b");
        expect(messages.getMessages()["error_a"].text.toString()).toBe("translation");
        expect(messages.getMessages()["error_b"].text.toString()).toBe("translation");
        $rootScope.$broadcast('$locationChangeSuccess');
        expect(messages.getMessages()["error_a"]).toBe(undefined);
        expect(messages.getMessages()["error_b"]).toBe(undefined);
    });


    it ('should not clear messages on demand when location changes', function() {

        myBeforeEach("translation");

        messages.addMessageForCode("error_a");
        expect(messages.getMessages()["error_a"].text.toString()).toBe("translation");

        messages.dontClearOnNextLocationChange();

        $rootScope.$broadcast('$locationChangeSuccess');
        expect(messages.getMessages()["error_a"].text.toString()).toBe("translation");
    });

    it ('should show contact info by default', function() {
        myBeforeEach("translation");
        messages.addMessageForCode("error_a");
        expect(messages.getMessages()["error_a"].contactInfo)
            .toBe('Please contact arachne@uni-koeln.de if the errors persist.');
    });

    it ('should hide contact info on demand', function() {
        myBeforeEach("translation");
        messages.addMessageForCode("error_a",'warning',false);
        expect(messages.getMessages()["error_a"].contactInfo)
            .toBe(undefined);
    });

    it ('should hide contact info on success', function() {
        myBeforeEach("translation");
        messages.addMessageForCode("error_a",'success');
        expect(messages.getMessages()["error_a"].contactInfo)
            .toBe(undefined);
    });
});