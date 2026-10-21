import { test } from "@playwright/test"; 

test('Learn frames using playwright',async({page})=>{

    await page.goto('https://www.leafground.com/frame.xhtml')
    //page.click()

    const allframes = page.frames() //returns all frames present in the page
//main page (top frame)
//[main frame, frame1, frame2, frame3, frame4]
    console.log(allframes.length); //5
    //console.log(allframes);
    

   for (let i = 0; i <allframes.length ; i++) {
   const url = allframes[i].url()
   console.log(`the url of the page is ${url}`);
   const title = await allframes[i].title()
   await page.waitForLoadState('domcontentloaded')
   console.log(title);
    
   } 

   const frame1 = allframes[1]
   await frame1.locator('#Click').click()
   await page.waitForTimeout(2000)
   console.log('frame1 is clicked');
   
   //nested frame using index we can directly switch to the nested frame

   const nestedFrame = allframes[4]
   await nestedFrame.locator('#Click').click()
   await page.waitForTimeout(2000)
   console.log('nested frame is clicked');
   
   //index is not reliable
   //frame order may change -> leads to flaky tests
    
})