import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

import loginData from '../test-data/loginData.json';
import checkoutData from '../test-data/checkoutData.json';

export const test = base.extend({

    // Login test data
    testData: async ({}, use) => {

        await use(loginData);

    },


    // Checkout test data
    checkoutData: async ({}, use) => {

        await use(checkoutData);

    },


    // Login Page fixture
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },


    // Inventory Page fixture
    inventoryPage: async ({ page }, use) => {

        const inventoryPage = new InventoryPage(page);

        await use(inventoryPage);

    },


    // Cart Page fixture
    cartPage: async ({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);

    },


    // Checkout Page fixture
    checkoutPage: async ({ page }, use) => {

        const checkoutPage = new CheckoutPage(page);

        await use(checkoutPage);

    }

});

export { expect } from '@playwright/test';