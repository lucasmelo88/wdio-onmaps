var LoginPage = require('../pageobjects/login.page');

describe('Login onmaps', function() {
    it('should access the main screen and validate if layerpanel is visible', function() {
        browser.getTitle().should.be.equal('Portal do Usuário OnMaps | Geofusion :Geofusion');
        LoginPage.fillAndLogin();
    });
});