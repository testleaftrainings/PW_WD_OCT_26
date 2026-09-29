//var allows redeclaration and reassignment

var companyName = 'Testleaf'
var companyName = 'qeagle'

companyName = 'Hcl'
companyName = 2345 //dynamic typing

console.log(typeof companyName);

// let does not allow redeclaration but reassignment is allowed

let course = 'Selenium'
//let course = "playwright" //Cannot redeclare block-scoped variable 'course'.

course = 'Python' // reassignment is possible
//let course = 'playwright' //SyntaxError: Identifier 'course' has already been declared//
console.log(course);


//const -> can't redeclare and reassign

const pi = 3.14
//pi = 4.12 //TypeError: Assignment to constant variable.
console.log(pi);


