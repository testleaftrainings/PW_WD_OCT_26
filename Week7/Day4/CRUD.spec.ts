import test from "@playwright/test";
import { createLead, fetchLead, generateToken } from "./apiUtility";

test('Integrate playwright UI with API',async({page,request})=>{
   await generateToken(request) //Named function is called to make an API call for generation of token
   await createLead(request)//named function is called to make an API call for creation of lead
   let lname = await fetchLead(request)//named function is called to make an API call to retreive lead info

   await page.goto('https://login.salesforce.com/?locale=in')

    //await page.getByAltText('Salesforce login').click()

    await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password').fill('TestLeaf@2028')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(20000)
    await page.waitForLoadState('domcontentloaded')

    await page.getByTitle('App Launcher',{exact:true}).click()
    await page.getByLabel('View All Applications',{exact:true}).click()
    await page.getByPlaceholder('Search apps or items...',{exact:true}).fill('leads')
    await page.getByText("Leads",{exact:true}).click()
    const searchBox = page.getByPlaceholder('Search this list...')
    await searchBox.fill(lname)
    await searchBox.press('Enter')
    await page.waitForTimeout(2000)

})