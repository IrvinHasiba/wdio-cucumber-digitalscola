const { $ } = require('@wdio/globals')

class CartPage {

    get checkoutButton() {
        return $('#checkout');
    }

    async validateOnPage() {
        await expect(this.checkoutButton).toHaveText("Checkout")
    }
}

module.exports = new CartPage();