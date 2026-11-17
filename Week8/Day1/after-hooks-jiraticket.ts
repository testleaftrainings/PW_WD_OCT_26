import { TestInfo } from "@playwright/test";
import { createIssue } from "./Jira_integration";


export async function logADefectInJira(testinfo:TestInfo){

//checks test result and creates jira issue if failed
    if(testinfo.status === 'failed' || testinfo.status === 'timedOut'){
const summary =`Test ${testinfo.status}: ${testinfo.title}`
const description = `Here is the error ${testinfo.error}`

await createIssue(summary,description)

console.log(`jira issue created for ${testinfo.status} : ${testinfo.title}`);
console.log(`Error Message : ${testinfo.error}`);
    }
    else{
        console.log('The test is passed successfully');
        
    }
}