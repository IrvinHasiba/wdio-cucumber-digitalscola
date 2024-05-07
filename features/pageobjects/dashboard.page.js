const { $ } = require('@wdio/globals')

class DashboardPage{

    get btnAddCart() { return $('//*[@id="add-to-cart-sauce-labs-backpack"]') }
    get addItemToCart() { return $('//*[@id="add-to-cart-sauce-labs-backpack"]') }
    get cartButton() { return $('//*[@id="shopping_cart_container"]/a') }

    async validateOnPage() { await expect(this.addItemToCart).toBeDisplayed() }
    async clickAddButton() { await this.btnAddCart.click() }
    async clickCartButton() { await this.cartButton.click() }

}

module.exports = new DashboardPage();