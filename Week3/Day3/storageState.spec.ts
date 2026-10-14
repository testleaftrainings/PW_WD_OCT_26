import test from "@playwright/test";

test('Learn storage state',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')

    //await page.getByAltText('Salesforce login').click()

    await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password').fill('TestLeaf@2028')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(20000)
    await page.context().storageState({path:'Data/slogin.json'})
})