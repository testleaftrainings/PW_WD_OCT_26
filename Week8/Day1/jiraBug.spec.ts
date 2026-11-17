import test from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jiraticket";

test('Test to record a specific bug',async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')

    //await page.getByAltText('Salesforce login').click()

    await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password').fill('TestLeaf@2028')
    await page.getByRole('button',{name:'button1'}).click()
    await page.waitForTimeout(20000)
})

test.afterEach('Fetch the test status',async({},testInfo)=>{
    logADefectInJira(testInfo)
})