// login.page.js
var Page = require('./page')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#page-username'); } },
    password: { get: function () { return browser.element('#page-password'); } },
    login:    { get: function () { return browser.element('#page-cas-login'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    fillAndLogin: { value: function() {
        this.username.setValue('pautomacao');
        this.password.setValue('E2E.automacao1');
        this.login.submitForm();
    } }
});

module.exports = LoginPage;