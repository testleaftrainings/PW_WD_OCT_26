import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'
import path from "path";

//relative path to read data from CSV file
let value = fs.readFileSync('Data/sales.csv','utf-8')
console.log(value);

// let value1:any[] = parse(value,{columns:true,skip_empty_lines:true})
// console.log(value1);
//columns : true, this tells csv parser treat the first row of csv as column names(headers)

//absolute path to read data from csv file

let value1:any[] = parse(fs.readFileSync(path.join(__dirname,'../../../Data/sales.csv')),
{columns:true,skip_empty_lines:true})

//for loop to iterate 2 set of data
for(let details of value1){
test(`Learn to read data from CSV file ${details.tcid}`,async({page})=>{
     await page.goto('https://login.salesforce.com/?locale=in')    
    await page.getByText('Username',{exact:true}).fill(details.username)
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByLabel('Password').fill(details.password)
    await page.getByRole('button',{name:'Log In'}).click()
    
})
}