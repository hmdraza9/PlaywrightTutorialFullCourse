// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// Read environment variables from file.
require('dotenv').config({ path: './test-data/.env' });
//in case the file is at project directory.
require('dotenv').config();

/**
 * @see more at https://bit.ly/playwright-tutorial-automation-testing
 */
module.exports = defineConfig({
  // test timeout
  timeout: 20 * 1000,
  expect: {
    timeout: 20 * 1000
  },
  
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  // Reporter
  reporter:[
    ['html', { open: 'never' }],
    ['html'],
    ['allure-playwright', {open: 'never'}],
    // ['junit', { outputFile: 'test-results/e2e-junit-results.xml' }],
    ],

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    browserName: 'chromium',         // Use Chromium as the browser
    headless: true,                  // Run tests in headless mode

    // launchOptions: {
    //   args: ["--start-fullscreen"]
    // },

    // video, screenshot, headless mode
    video:'on',
    screenshot: 'on',

    // custom attribute
    testIdAttribute: 'autocomplete',

    // Collect trace when retrying the failed test
    trace: 'on',
  },

  /* Configure projects for major browsers */
  // projects: [
  //   // {
  //   //   name: 'chromium',
  //   //   use: { ...devices['Desktop Chrome'] },
  //   // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

  //   // {
  //   //   name: 'webkit',
  //   //   use: { ...devices['Desktop Safari'], browserName: 'webkit' },
  //   // },

  //   /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

  //   /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome'
    //     , browserName: 'chromium'
    //  },
    // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
