import { test, expect } from '../utils/fixtures.js';

const users = [
    'standardUser',
    'problemUser',
    'performanceUser'
];

for (const userType of users) {

    test.beforeEach(
        async ({
            page,
            loginPage,
            testData
        }) => {

            // Open application

            await page.goto('/');


            // Get current user

            const user = testData.users[userType];


            // Login

            await loginPage.login(
                user.username,
                user.password
            );

        }
    );


    test(
        `Complete Checkout Flow - ${userType}`,
        async ({
            inventoryPage,
            cartPage,
            checkoutPage,
            checkoutData
        }) => {

            // Customer test data

            const customer = checkoutData.customer;


            // Add products

            await inventoryPage.addBackpack();

            await inventoryPage.addBikeLight();


            // Verify cart count

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


            // Click Checkout

            await cartPage.clickCheckout();


            // Enter customer details

            await checkoutPage.enterCheckoutDetails(
                customer.firstName,
                customer.lastName,
                customer.postalCode
            );


            // Continue

            await checkoutPage.clickContinue();


            // Verify Checkout Overview page

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
}