import test, { expect } from "@playwright/test";
import * as fs from "fs";
import path from "path";

test('Learn file download',async({page})=>{

    await page.goto('https://leafground.com/file.xhtml')

    //register the event listener

    let downloadRef = page.waitForEvent('download')

    //trigger click action
    await page.locator("//span[text()='Download']").click()

    //resolve the listener promise and store the download ref

    const fDownload = await downloadRef

    //using the file download reference save the file (absolute path)

    fDownload.saveAs(path.join(__dirname,'../../../Data/test1.jpeg'))
    //relative path
    
    await fDownload.saveAs(`Utils/${fDownload.suggestedFilename()}`)// browser suggested name

    //await fDownload.saveAs('Data/test.jpeg')
    //to verify the download

    expect(fDownload).toBeTruthy()

    //verify the filename
    expect(fDownload.suggestedFilename()).toContain('TestLeaf')


    //verify the file exits in the path

    const customfilePath = 'Utils/TestLeaf Logo.png'
    expect(fs.existsSync(customfilePath)).toBeTruthy()

})