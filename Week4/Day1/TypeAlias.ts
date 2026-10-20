//Union Type: it allows variable , parameter or property to hold more than one type or value

type facebookUsername = string | number | boolean//facebookUsername is the new customized 
//alias name of the 2 datatypes 

let userName : facebookUsername = 'support@testleaf.com'
userName = 97567898745
userName = true

//alias name for values

type supportedBrowser = "chrome" | "firefox" | "msedge"

function invokeBrowsers(browserName: supportedBrowser){

    console.log(browserName);
    
}

//invokeBrowsers('safari')
invokeBrowsers('firefox')

//Intersection -> & (it combine multiple type into one, meaning the value must satisfy all the type
//together)

type employee ={
    name : string,
    empId : number
}

type admin ={
    adminName : string,
    privilege : string
}

type QA = admin & employee

const QAProfile : QA ={// QAProfile is the object and QA is the type 
adminName : "Testleaf",
privilege : "server",
name : "Yuvarani",
empId : 101
}

console.log(QAProfile.adminName);
console.log(typeof QAProfile);

console.log(QAProfile);

