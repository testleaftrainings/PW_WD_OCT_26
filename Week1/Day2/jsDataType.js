// ctrl+/ to command single line
/* 
Alt+Shift+A - to command multiple line
*/

/* 
1.primitive datatype: in bulit datatype, once created cannot be changed so we say it has immutable 
number
string
boolean
undefined
null
bigint*/

//variable declaration
//var companyName

//value assigning to the variable
//companyName = "Testleaf"

//this is called declaration + initialization in a single statement

//number ,whole number, float, decimal

var phoneNumber = 456709876
phoneNumber = 56798765678
var num = 0.5
console.log(phoneNumber);
console.log(typeof phoneNumber);


//string - represented using '', "", ``

var empName = "Yuvarani"
console.log(empName);
console.log(typeof empName);

//boolean -> either it can be true or false

var hasPlaywright = true
console.log(hasPlaywright);
console.log(typeof hasPlaywright);



//undefined -> undefined means a value has not been assigned yetand may be assigned later at run time

var accountNumber
console.log(accountNumber);
console.log(typeof accountNumber);


//null -> null means the value is intentionally set to 'no value' or empty

var landLine = null
console.log(landLine);
console.log( typeof landLine);


//bigint - bigint is used to store very large integer beyond js number limit (2^53-1)

var transactionID = 3456789345679997654n
var transNumber = Number(transactionID)

console.log(transNumber);


console.log(transactionID);
console.log( typeof transactionID);





