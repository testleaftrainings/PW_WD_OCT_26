import { test } from "@playwright/test";

test('Learn CSS selector',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')

    //await page.locator('[id="username"]').fill('democsr')
    await page.locator('input').first().fill('democsr')

    //await page.locator('input[name="PASSWORD"]').fill('crmsfa')
    await page.locator('p >label').nth(1).fill('crmsfa')

    await page.locator('.decorativeSubmit').click()

    await page.locator('text=CRM/SFA').click()

    //await page.waitForTimeout(2000)

    let pageTitle = await page.title()
    console.log(pageTitle);

    let pageUrl = page.url()
    console.log(pageUrl);

    await page.waitForTimeout(2000)
    //await page.waitForLoadState('domcontentloaded')



})