import test from "@playwright/test";

test.describe('lead management',()=>{

    test.describe.configure({mode:'parallel',retries:1})
    
test.skip('create lead',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    console.log('lead created successfully');
    
})
// test.only('Edit lead',{
// annotation:{type:'author',description:'yuvarani',}},async({page})=>{
//     await test.step('lead id edited',async()=>{
//         await page.goto('https://leaftaps.com/opentaps/control/login')
//         console.log('lead is edited successfully');
        
//     })
// })

test.fixme('duplicate lead',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    console.log('lead is duplicated successfully');
    
})

test.fail('delete lead',async({page})=>{

    //expect:fail
    await page.goto('https://leaftaps.com/opentaps/control/login')
    console.log("lead is deleted successfully");
    throw new Error('failure due to assertion')
    
})


test('sample test',{
    tag:'@smoke'
},async()=>{
    test.slow()
    console.log('timeout',test.info().timeout);
    
})


})
