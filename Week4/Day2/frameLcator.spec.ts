import test, { expect } from "@playwright/test";

test('Learn frame using framelocator',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')

    //handle single frame

    let singleframe = page.frameLocator('//iframe[@src="default.xhtml"]')

    //message before click action
    let beforeClick = await singleframe.locator('#Click').innerText()
    console.log(beforeClick);

    //clcik action
    await singleframe.locator('#Click').click()

    //message after performing the click action
   const afterClick = await singleframe.locator('#Click').innerText()
   console.log(afterClick);

   //retry assertion

   await expect(singleframe.locator('#Click')).toContainText('Hurray!')
   await expect(singleframe.locator('#Click')).toHaveText('Hurray! You Clicked Me.')

   //single frame
await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()
    
    
})