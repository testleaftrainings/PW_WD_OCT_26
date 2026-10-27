import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'


let value:any[]

test.describe.serial('run test in serial mode',async()=>{


//connectivity to read data from csv file
test.beforeAll('database connectivity',async()=>{
   console.log('Runs before all');
   value=parse(fs.readFileSync('Data/testLeaf.csv','utf-8'),
   {columns:true,skip_empty_lines:true})
    
})

//login functionality before each test
test.beforeEach('login functionality for each test',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('[id="username"]').fill(value[0].username)
    await page.locator('[id="password"]').fill(value[0].password)
    await page.locator('[class="decorativeSubmit"]').click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

})

//test to create lead
test('create lead',async({page})=>{
    console.log('create lead module');
    await page.locator("//a[text()='Leads']").click()
    
})

//test to create account
test('create account',async({page})=>{
    console.log('create account module');
    await page.locator("//a[text()='Accounts']").click()
    
})

//print report status for each test

test.afterEach('print the status of reports',async({},testinfo)=>{
    console.log('Runs after each and every test');
    console.log(testinfo.status);
    console.log(testinfo.title);
})

//close the browser and DB connectivity

test.afterAll('close the connection',async()=>{
    console.log('Runs afterAll');
    
})

})