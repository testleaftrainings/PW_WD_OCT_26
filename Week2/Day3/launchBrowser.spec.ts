/* 
browser -> actual browser engine (chromium , firefox, webkit)
context -> isolated environment like an incognito session
page -> single tab within a context */

import { chromium, firefox, test } from "@playwright/test";
import { appendFile } from "node:fs";

test('learn to launch browser',async()=>{

    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})

//to execute script use command: npx playwright test filename.spec.ts

//page fixture is built in playwright fixture that provides a ready to use browser
//  page for each test

test.only('launch browser using page fixture',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
})
