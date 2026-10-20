import { test } from "@playwright/test";

test("Test to handle alerts",async({page})=>{

//register event listener page.on to handle the alert
//page.once -> handle the first occuring alert and stop listening
//page .on -> handles all the alerts present in the page

page.on('dialog', async(alert)=>{
    //page.on is a event listener to listen for user interaction like clicks to capture the alert
    //alert local variable captures the simple alert object

    const message = alert.message() //A message displayed in the dialog.
    console.log(message);

    const alertType = alert.type() //Returns dialog's type, can be one of alert, beforeunload, confirm or prompt.
    console.log(alertType);

    if(alertType==='confirm'){
    await alert.accept()
    }
    else if(alertType==='alert'){
        await alert.accept()
    }
    else{
        alert.accept()
    }
    
    
})

    await page.goto('https://leafground.com/alert.xhtml')
    
    //simple alert
    await page.locator("(//span[text()='Show'])[1]").click()
    await page.waitForTimeout(3000)

    //confirm alert
    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(3000)

    //prompt alert

await page.locator("(//span[text()='Show'])[5]").click()
await page.waitForTimeout(3000)
})