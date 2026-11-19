import  { test, devices } from "@playwright/test";


// test.use({
//     ...devices['iPhone 12']

// })
test('Device Emulation',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
})


test.only('Learn basic xpath',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('//input[@id="username"]').fill('democsr')
    await page.locator('//label[text()="Password"]').fill('crmsfa')
    await page.locator('//input[contains(@class,"decorative")]').click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator("//a[normalize-space()='CRM/SFA']").click()
})