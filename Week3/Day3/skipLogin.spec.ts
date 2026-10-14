import test from "@playwright/test";

//test.use({storageState:'Data/slogin.json'})

test('skip login using storage state',async({page})=>{
    await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home')

    await page.locator("//span[text()='Accounts']").click()
    await page.waitForTimeout(3000)
})