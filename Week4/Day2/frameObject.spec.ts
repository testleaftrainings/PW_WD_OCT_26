import test, { expect } from "@playwright/test";

test('Learn frames using frame object',async({page})=>{

    await page.goto('https://www.leafground.com/frame.xhtml')

    //single frame

    const frameref = page.frame({url:'https://www.leafground.com/default.xhtml'})
    await frameref?.locator('#Click').click()
    await page.waitForTimeout(2000)

    //retry assertion
    //! its non null assertion operator
    await expect(frameref!.locator('#Click')).toContainText('Hurray! You Clicked Me.')

    //nested frame 
    await  page.frame({name:"frame2"})?.locator('#Click').click()
    await page.waitForTimeout(2000)
    
})