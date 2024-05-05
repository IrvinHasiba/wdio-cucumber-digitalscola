import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { browser } from '@wdio/globals';

Given("user is on sauce-demo page", async() => {
    await browser.url("https://www.saucedemo.com/")
})

When(/^user inputs username with "(.*)"$/, async (username) => {
    await browser.$('#user-name').setValue(username)
})

When(/^user inputs password with "(.*)"$/, async (password) => {
    await browser.$('#password').setValue(password)
});

When(/^user clicks button$/, async() => {
    await browser.$('#login-button').click()
});

Then(/^user should be redirect to homepage$/, async () => {
    const homepageIndicator = await browser.$('Sauce Labs Backpack');
    expect(homepageIndicator).toBeDisplayed(); 
});

When(/^user adds item to cart$/, async () => {
    await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]').click(); // Mengklik tombol "Add to Cart"
});

Then(/^user should see the item in the cart$/, async () => {
    await browser.$('//*[@id="shopping_cart_container"]/a').click(); // Menavigasi ke halaman keranjang
    const cartItem = await browser.$('div.inventory_item_name[data-test="inventory-item-name"]'); // Memeriksa apakah item ada di keranjang
    expect(cartItem).toBeDisplayed(); // Pengecekan apakah item ada di keranjang
});
