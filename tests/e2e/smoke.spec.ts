import { test, expect } from '@playwright/test';

test('placeholder smoke test', async ({ page }) => {
  await page.goto('/');
  expect(true).toBeTruthy();
});
