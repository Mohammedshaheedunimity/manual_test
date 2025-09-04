import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    ignoreHTTPSErrors: true,
    baseURL: 'http://localhost:5173',
  },
});
