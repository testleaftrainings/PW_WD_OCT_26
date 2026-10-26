import test from "@playwright/test";

import login from '../../../Data/Leaf.json'

// test.describe.serial('Running test in serial mode',()=>{


// for(let data of login){
// test(`Learn to read data from json file ${data.TestCaseId}`,async({page})=>{
//     await page.goto('https://leaftaps.com/opentaps/control/login')
//     await page.locator('[id="username"]').fill(data.userName)
//     await page.locator('[id="password"]').fill(data.password)
//     await page.locator('[class="decorativeSubmit"]').click()
//     await page.locator("//a[contains(text(),'CRM/SFA')]").click()
// })
// } 
// })

let data1 = login[0]
test.only(`Learn to read data from json file ${data1.TestCaseId}`,async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('[id="username"]').fill(data1.userName)
    await page.locator('[id="password"]').fill(data1.password)
    await page.locator('[class="decorativeSubmit"]').click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
})
