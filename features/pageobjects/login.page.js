const { browser, $ } = require('@wdio/globals')

class SauceLoginPage {
    get username() { return $('#user-name');}
    get password() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container') }

    async validateOnPage() {
        await expect(this.errorMessage).toBeDisplayed()
    }

    async inputUsername(username) {
        await this.username.setValue(username)
    }

    async inputPassword(password) {
        await this.password.setValue(password)
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async login(username, password) {
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
    }

    open() {
        return browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = new SauceLoginPage();
