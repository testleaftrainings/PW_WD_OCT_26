import test from "@playwright/test";
import dotenv from 'dotenv'


//toggle between different env 
//envData user defined variable to set the environment in the terminal
let fileName = process.env.envData || 'qa' || 'prod'
dotenv.config({path:`Data/${fileName}.env`})

//Here if i dont set the environment using command $env:envData
//it's set as undefined in that scenario by default 'qa' environment should be taken

//to read a single env file
//dotenv.config({path:'Data/qa.env'})


test('learn to read data from env file',async({page})=>{
//process.env => node js object to read environment variables
//process is object used to expose the system environment details of my local system

    // console.log(process.env);
    // console.log(process.env.username);
    //expose the username from your local system

    await page.goto(process.env.L_Url as string)
    await page.locator('[id="username"]').fill(process.env.L_UserName as string)
    await page.locator('[id="password"]').fill(process.env.L_Password as string)
    await page.locator('.decorativeSubmit').click()
    
    
})

/* Action	     Windows (PowerShell)	      macOS / Linux
Set env	      $env:envFile="Qa"	           export envFile=Qa
Check env	   $env:envFile	               echo $envFile
Unset env	  $env:envFile=""	           unset envFile */
//command to check the environment
//set env  $env:envData="Qa"
//check your env $env:envData
//unset env  $env:envData=""