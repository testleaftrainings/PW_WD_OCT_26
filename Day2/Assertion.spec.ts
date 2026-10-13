import test, { expect } from "@playwright/test";

test('Learn assertions in playwright',async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/login')

    const Title = await page.title()

    console.log(Title); //Leaftaps - TestLeaf Automation Platform

    const Url =  page.url()
    console.log(Url); //https://leaftaps.com/opentaps/control/login

    //retry assertion or locator based assertion

    await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/login")
    //await expect(page).toHaveTitle(' TestLeaf Automation Platform')//fails
    await expect.soft(page).toHaveTitle(' TestLeaf Automation Platform')//works

    //by default (Hard or Normal assertion)
    /* 
    if the title doesn't match the test fails immediately
    The remaining lines will not be executed */

    /* soft Assertion
    if the title doesn't match the assertion is recorded as failed
    but the test continues executing the remaining lines of code */

    //non retry assertion or generic assetion
    //expect(Title).toBe('- TestLeaf Automation Platform')


    expect.soft(Title).toBe('- TestLeaf Automation Platform')

    console.log('Assertion completed successfully');
    
    //locator or retry assertion

    await expect(page.locator('//input[@id="username"]')).toBeVisible()

    //locator assertion using variable reference
    const pwd = page.locator('//input[@id="password"]')

    await expect(pwd).toBeEditable()
    await expect(pwd).toBeEnabled()
    await expect(pwd).toBeEmpty()

    //Assertion timeout(default 5s or 5000ms), when the assertion fails - it retries for 2s

    //await expect(pwd).toBeHidden({timeout:2000})

    //Action timeout -no default timeout
    await page.locator('#username').fill('democsr',{timeout:5000})
    
})