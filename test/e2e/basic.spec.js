describe('basic scenarios', function() {

    beforeEach(function () {
        browser.get('/');
    });

    it('should have a brand logo', function () {
        expect(element(by.id('projectLogo')).isPresent()).toBeTruthy();
    });
});