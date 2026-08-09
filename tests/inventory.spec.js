import { test, expect } from '@playwright/test';

import loginData from '../test-data/loginData.json';

import { LoginPage } from '../pages/LoginPage.js';

import { InventoryPage } from '../pages/InventoryPage.js';

import { CartPage } from '../pages/CartPage.js';


test('Add products and verify cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    // Login

    const loginPage = new LoginPage(page);

    await loginPage.login(
        loginData.username,
        loginData.password
    );


    // Inventory

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpack();

    await inventoryPage.addBikeLight();

    await expect(
        inventoryPage.cartBadge
    ).toHaveText('2');

    await inventoryPage.openCart();


    // Cart

    const cartPage = new CartPage(page);

    await expect(
        cartPage.backpackName
    ).toBeVisible();

    await expect(
        cartPage.bikeLightName
    ).toBeVisible();

    await cartPage.clickCheckout();

});