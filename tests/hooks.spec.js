import { test, expect } from '../utils/fixtures.js';

import loginData from '../test-data/loginData.json';

test.beforeEach(
    async ({
        page,
        loginPage
    }) => {
        // Open application
        await page.goto(
            'https://www.saucedemo.com/'
        );

        // Login
        await loginPage.login(
             loginData.users.standardUser.username,
             loginData.users.standardUser.password
        );
    }
);

test(
    'Complete Checkout Flow using Fixtures and Hooks',
    async ({
        inventoryPage,
        cartPage,
        checkoutPage
    }) => {
        // Add products
        await inventoryPage.addBackpack();

        await inventoryPage.addBikeLight();

        // Verify cart badge
        await expect(
            inventoryPage.cartBadge
        ).toHaveText('2');

        // Open cart
        await inventoryPage.openCart();

        // Verify products in cart
        await expect(
            cartPage.backpackName
        ).toBeVisible();

        await expect(
            cartPage.bikeLightName
        ).toBeVisible();

        // Go to checkout
        await cartPage.clickCheckout();

        // Enter checkout details
        await checkoutPage.enterCheckoutDetails(
            'Hitesh',
            'Urs',
            '570001'
        );

        // Continue to overview page
        await checkoutPage.clickContinue();

        // Verify checkout overview page
        await expect(
            checkoutPage.checkoutOverviewTitle
        ).toBeVisible();

        // Finish order
        await checkoutPage.finishOrder();

        // Verify successful order
        await expect(
            checkoutPage.successMessage
        ).toHaveText(
            'Thank you for your order!'
        );
    }
);