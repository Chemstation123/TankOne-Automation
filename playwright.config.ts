import { defineConfig, devices } from '@playwright/test';

// Your existing code for loading dotenv — kept intact
import dotenv from 'dotenv';

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
});

/**
 * Read environment variables from file.
 * [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See [https://playwright.dev/docs/test-configuration](https://playwright.dev/docs/test-configuration).
 */
export default defineConfig({
  testDir: './tests',
  timeout: 90 * 8000,
  expect: {
    timeout: 90 * 8000,
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporters configuration */
  reporter: [
    ['html'],
    ['line'],
    // ['allure-playwright'],
  ],

  /* Shared settings for all projects */
  use: {
    // trace: 'on-first-retry',
      trace: 'retain-on-failure',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      // actionTimeout: 0,
      // navigationTimeout: 90 * 8000,
      // headless: true,
      // ignoreHTTPSErrors: true,
      // viewport: { width: 1920, height: 1080 },
      // launchOptions: {
      //   slowMo: 0,
      // },
  },

  /* Configuration for multiple projects/environments */
  projects: [
    // Example browser project
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: { args: ['--start-maximized'] },
        channel: 'msedge'
      },
    },

    
  ],

  /* Run your local dev server before tests (optional) */
  /*
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  },
  */

  // Add globalSetup pointing to your setup script
  
});
