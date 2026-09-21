import { test, expect } from '@playwright/test';

test.describe('SauceDemo login flow', () => {
  test('standard user can log in and view inventory', async ({ page }) => {
    await page.goto('/');

    // Act: fill credentials and submit
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    // Assert: inventory page loads
    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('locked out user sees an error', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('username').fill('locked_out_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      'Sorry, this user has been locked out'
    );
  });
});
