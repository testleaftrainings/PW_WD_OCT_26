"use strict";
//Union Type: it allows variable , parameter or property to hold more than one type or value
//alias name of the 2 datatypes 
let userName = 'support@testleaf.com';
userName = 97567898745;
function invokeBrowsers(browserName) {
    console.log(browserName);
}
//invokeBrowsers('safari')
invokeBrowsers('firefox');
const QAProfile = {
    adminName: "Testleaf",
    privilege: "server",
    name: "Yuvarani",
    empId: 101
};
console.log(QAProfile.adminName);
console.log(typeof QAProfile);
console.log(QAProfile);
