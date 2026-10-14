import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('yuvarani.sekar@testleaf.com');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2028');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Verification Code' }).fill('994922');
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/one/one.app');
  await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home');
  await expect(page.getByRole('button', { name: 'App Launcher' })).toBeVisible();
  await expect(page.getByRole('link', { description: 'Accounts', exact: true })).toContainText('Accounts');
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await page.getByRole('button', { name: 'View profile' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Forgfarm-d716fa5b16-dev-ed.develop.lightning.force.com%252Flightning%252Fpage%252Fhome');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('yuvarani.sekar@testleaf.com');
  await page.locator('#main').click();
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('yuvarani.sekar@testleaf.com');
  await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - img "Salesforce login"
    - text: Salesforce login To access this page, you have to log in to Salesforce.
    - heading "Salesforce login" [level=1]
    - text: Username
    - textbox "Username": yuvarani.sekar@testleaf.com
    - button "Log In"
    - checkbox "Remember me"
    - text: Remember me
    - link "Forgot Your Password?":
      - /url: /secur/forgotpassword.jsp?locale=us&lqs=startURL%3D%252Fvisualforce%252Fsession%253Furl%253Dhttps%25253A%25252F%25252Forgfarm-d716fa5b16-dev-ed.develop.lightning.force.com%25252Flightning%25252Fpage%25252Fhome%26ec%3D302
    `);
});