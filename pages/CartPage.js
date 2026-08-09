export class CartPage {

    constructor(page) {

        this.page = page;

        this.backpackName = page.getByText(
            'Sauce Labs Backpack'
        );

        this.bikeLightName = page.getByText(
            'Sauce Labs Bike Light'
        );

        this.checkoutButton = page.getByRole(
            'button',
            { name: 'Checkout' }
        );

    }

    async clickCheckout() {

        await this.checkoutButton.click();

    }

}