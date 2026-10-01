//Escape sequence

let testEsc = 'it\'s a  \n regression \t testing'

/* \' ->single quote
\n -> new line
\t -> tab space */
console.log(testEsc);

//concatenation:

let testCase = 'Create a new lead'
let testCaseId = 123

//using +

let result = testCase + " - " + testCaseId
console.log(result);

//template literal ${} (backtick)


console.log(`${testCase} - ${testCaseId}`);

//string properties & methods

let course = 'Playwright session'
console.log(`The length of the string is \n  ${course.length}`);

//counts character charAt()

console.log(`The charAt of 3 of the string is ${course.charAt(3)}`);

//indexof() it returns character at index

console.log(`The indexof() 'y' of the string is ${course.indexOf('s')}`);







