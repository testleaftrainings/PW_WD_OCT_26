import test from "@playwright/test";

/* 
Notes:
step 1 : identify the drop down from the page
step 2 : identify the dropdown value through value attribute, label, index
if the dropdown is present in select tag */
test('learn select dropdown',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')

    //select dropdown

    await page.locator('[class="ui-selectonemenu"]').selectOption({label:'Selenium'})
    await page.waitForTimeout(2000)

    await page.locator('[class="ui-selectonemenu"]').selectOption({index:2})
    await page.waitForTimeout(2000)

    //all dropdown values
    let ddvalues = page.locator('[class="ui-selectonemenu"]>option')

    //to get count of the dropdown
    let ddCount = await ddvalues.count()
    console.log(ddCount);

    //for loop -> used for iteration

    for (let index = 0; index < ddCount; index++) {
        
        console.log(await ddvalues.nth(index).innerText());
        
    }
    

})

//custom dropdown

test.only('learn to handle custom dropdown',async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    //selecting the dropdown

    await page.locator('text=Select Country').nth(1).click()

    //select the desired option from the dropdown

    await page.locator('[data-label="India"]').click()

    let ddText = await page.locator('[data-label="India"]').innerText()
    console.log(ddText);
    


})