import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    // Test folder
    testDir: './tests',

    // Run tests in parallel
    fullyParallel: true,

    // Retry failed tests only in CI
    retries: process.env.CI ? 2 : 0,

    // Number of parallel workers
    workers: undefined,

    // Test execution settings
    use: {

        // Base URL
        baseURL: 'https://www.saucedemo.com',

        // Capture trace when test fails and retries
        trace: 'on-first-retry',

        // Screenshot only when test fails
        screenshot: 'only-on-failure',

        // Record video when test fails
        video: 'retain-on-failure'

    },

    // Test report
    reporter: 'html',

    // Browser projects
    projects: [

        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },

        /*{
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }*/

    ]

});