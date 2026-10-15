"use strict";
/* let firstName = ''
let lastName = ''
let age =  */
//import { log } from "console"
//object literal is the simplest way to create object in Ts, its a collection
//of key-value pairs enclosed within {}
let user1 = {
    firstName: "Yuvarani", //firstName -->key , "Yuvarani" --> value
    lastName: "s",
    mobNumber: 896678976,
    date: "15/10/2026"
};
console.log(user1);
console.log(user1.firstName, user1.lastName);
console.log(user1.firstName); //dot Notation
let userDetails = {
    firstName: "Yuva", //firstName -->key , "Yuvarani" --> value
    lastName: "s",
    "s.No": 9876345678
};
console.log(userDetails.firstName);
//console.log(userDetails["#mobNumber"]);//square bracket notation
console.log(userDetails);
