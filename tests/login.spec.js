import loginData from '../test-data/loginData.json';

import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';

test('Login using POM', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        loginData.username,
        loginData.password
    );

    await expect(page).toHaveURL(/inventory/);

});