import test from "@playwright/test";

test.use({
    geolocation:{latitude:12.9882597,longitude:77.457154},
    permissions:['geolocation','notifications']
})
test('geolocation mocking',async({page})=>{

    await page.goto('https://www.google.com/maps')
    await page.locator('.sVuEFc').click()
    await page.waitForTimeout(5000)

})