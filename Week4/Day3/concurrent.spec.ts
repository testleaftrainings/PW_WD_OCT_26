import test, { Page } from "@playwright/test";

test('Handling multiple windows',async({page,context})=>{
    await page.goto('https://leafground.com/window.xhtml')

    //playwright stats listening for new tab and immediately perform the click action
   const [parentPage] = await Promise.all([context.waitForEvent('page'),
        page.getByText('Open Multiple',{exact:true}).click()]) 

       // console.log(parentPage);

       const count = parentPage.context().pages(); //Returns all open pages in the context.

       console.log(count.length); //total no of pages

       //variables used to store specific child windows

       let dashboard : Page | undefined
       let webtable : Page | undefined

       for(let i=0; i<count.length; i++){
        await page.waitForLoadState('domcontentloaded')

        const title = await count[i].title()
        console.log(title);
        
        //if title matches dashboard
        //store the page object i dashboard variable

        if(title==='Dashboard'){
            dashboard = count[i]
        }else if(title === 'Web Table'){
            webtable =count[i]
        }
       }

       //console.log(dashboard);
       
       
       await dashboard?.getByPlaceholder('E-mail Address',{exact:true}).fill('support@testleaf.com')

       await webtable?.getByPlaceholder('Search',{exact:true}).fill('Russia')

       await page.waitForTimeout(3000)
       
})

