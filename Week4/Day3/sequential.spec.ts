import test from "@playwright/test";

test('sequential way of handling windows', async({page,context})=>{

    await page.goto('https://www.amazon.in/ref=cs_503_link/')
     const searchBox = page.locator('[id="twotabsearchtextbox"]');
     await searchBox.fill('phones')
     searchBox.press('Enter')

     //step 1 start listening for new window
    let parentWindow = context.waitForEvent('page')

    //step 2 click the product
    await page.locator('[class="a-size-medium a-spacing-none a-color-base a-text-normal"]').first().click()

    //step 3 capture the child window after it opens
    let childWindow = await parentWindow //resolving the promise

    const price =await childWindow.locator('[class="a-section a-spacing-small price-update-row-ww aok-hidden"]').innerText()
    console.log(price);
    
    console.log(await childWindow.title()); //child window title
    console.log(await page.title()); // parent page or main

    await childWindow.close()
    
    //await page.bringToFront()

    await page.getByText('Bestsellers',{exact:true}).click()
    await page.waitForTimeout(5000)
    

})