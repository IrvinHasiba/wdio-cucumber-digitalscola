const { Given, When, Then } = require('@wdio/cucumber-framework');
const SauceLoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const CartPage = require('../pageobjects/cart.page');

Given("user is on sauce-demo page", async () => {
    await SauceLoginPage.open()
})

When(/^user input username with "(.*)"$/, async (username) => {
    await SauceLoginPage.inputUsername(username)
})

When(/^user input password with "(.*)"$/, async (password) => {
    await SauceLoginPage.inputPassword(password)
});
   
When(/^user click button$/, async () => {
    await SauceLoginPage.clickLoginButton()
});

Then(/^User on dashboard page$/, async () => {
    await DashboardPage.validateOnPage()
});

Then(/^user see an error message$/, async () => {
    await SauceLoginPage.validateOnPage()
});

Then('user is on cart page', async () => {
    await CartPage.validateOnPage();
});

When('user adds an item to the cart', async () => {
    // Assuming you have a method in DashboardPage to add an item to the cart
    await DashboardPage.clickAddButton();
});

When('user click cart button', async () => {
    // Assuming you have a method in DashboardPage to navigate to the cart page
    await DashboardPage.clickCartButton();
});

Then('user should not be logged in', () => {
  // Write code here that turns the phrase above into concrete actions
})


