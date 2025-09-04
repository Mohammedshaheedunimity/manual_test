import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Replace with your app's URL

  // Verify the page title
  await expect(page).toHaveTitle(/React/); // Replace with your app's title
});

test('Login function submits email and password', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Replace with your app's URL

  // Fill in the email and password fields
  await page.fill('input[placeholder="Email"]', 'test@example.com');
  await page.fill('input[placeholder="Password"]', 'password123');

  // Click the login button
  await page.click('button:has-text("Login")');

  // Log the page content to debug the issue
  console.log(await page.content());

  // Log the DOM structure after clicking the Login button
  console.log('DOM after clicking Login:', await page.content());

  // Wait for the HomePage to render after login using data-testid
  await page.waitForSelector('[data-testid="home-page"]');

  // Check if the HomePage content is visible
  await expect(page.locator('[data-testid="home-page"]')).toBeVisible(); // Replace with actual HomePage content
});

test('Navigate to Home Screen after Login', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Replace with your app's URL

  // Fill in the email and password fields
  await page.fill('input[placeholder="Email"]', 'test@example.com');
  await page.fill('input[placeholder="Password"]', 'password123');

  // Click the login button
  await page.click('button:has-text("Login")');

  // Wait for the HomePage to render after login using data-testid
  await page.waitForSelector('[data-testid="home-page"]');

  // Check if the HomePage content is visible
  await expect(page.locator('[data-testid="home-page"]')).toBeVisible();
});
