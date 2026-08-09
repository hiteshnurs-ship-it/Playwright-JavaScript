export class InventoryPage {

    constructor(page) {

        this.page = page;

        this.backpackButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );

        this.bikeLightButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-bike-light"]'
        );

        this.cartBadge = page.locator(
            '.shopping_cart_badge'
        );

        this.cartLink = page.locator(
            '.shopping_cart_link'
        );
    }

    async addBackpack() {

        await this.backpackButton.click();

    }

    async addBikeLight() {

        await this.bikeLightButton.click();

    }

    async getCartCount() {

        return await this.cartBadge.textContent();

    }

    async openCart() {

        await this.cartLink.click();

    }

}