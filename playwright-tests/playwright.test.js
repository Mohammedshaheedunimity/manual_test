import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000); // Wait 3 seconds after page load

  await expect(page).toHaveTitle(/React/); // Adjust title match if needed
  await page.waitForTimeout(3000); // Wait to observe the title check
});

test('Login function submits email and password', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000); // Wait after page load

  await page.fill('input[placeholder="Email"]', 'test@example.com');
  await page.waitForTimeout(3000); // Wait after typing email

  await page.fill('input[placeholder="Password"]', 'password123');
  await page.waitForTimeout(3000); // Wait after typing password

  await page.click('button:has-text("Login")');
  await page.waitForTimeout(5000); // Wait after clicking login

  // Debug output if needed
  console.log('DOM after clicking Login:', await page.content());

  // Wait for home page after login
  await page.waitForSelector('[data-testid="home-page"]');
  await expect(page.locator('[data-testid="home-page"]')).toBeVisible();

  await page.waitForTimeout(5000); // Wait to show HomePage for video
});

test('Navigate to Home Screen after Login', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000); // Wait after load

  await page.fill('input[placeholder="Email"]', 'test@example.com');
  await page.waitForTimeout(3000); // Wait after email

  await page.fill('input[placeholder="Password"]', 'password123');
  await page.waitForTimeout(3000); // Wait after password

  await page.click('button:has-text("Login")');
  await page.waitForTimeout(5000); // Wait after submit

  await page.waitForSelector('[data-testid="home-page"]');
  await expect(page.locator('[data-testid="home-page"]')).toBeVisible();

  await page.waitForTimeout(5000); // Keep it visible
});
