import test, { expect } from "@playwright/test";
import { log } from "console";
import path from "path";

test('Learn to upload file using input<type=file>',async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')

    let fUpload = page.locator('(//input[@type="file"])[1]')
    fUpload.setInputFiles('Data/Qeagle Logo.jpeg')

    //await page.waitForTimeout(2000)
let fuploadAssertion = await page.locator('[class="ui-fileupload-filename"]').innerText()
console.log(fuploadAssertion);

await page.waitForTimeout(3000)

//retry assertion
await expect(page.locator('[class="ui-fileupload-filename"]')).toContainText('Qeagle Logo.jpeg 10.6 KB')

})

test.only('to upload file using event listener',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    //create event listener

    let fileUploadRef = page.waitForEvent('filechooser') 

    //trigger click action
    await page.locator('[id="drag-drop-upload"]').click()

    //resolve the promise of event listener

    const upload = await fileUploadRef
//relative path
    //await upload.setFiles('Data/Testleaf Logo.jpeg')

    //absolute path
    await upload.setFiles(path.join(__dirname,'../../../Data/Qeagle Logo.jpeg'))
    console.log(__dirname);//C:\Users\Admin\OneDrive - TestLeaf Software Solutions Private Limited\Documents\PW_WD_OCT_26\tests\Week4\Day4

    //retry assertion

    await expect(page.locator("//span[text()='Qeagle Logo.jpeg']")).toHaveText('Qeagle Logo.jpeg')
    
    //await expect(page.locator("//span[text()='Qeagle Logo.jpeg']")).toBeAttached()

})