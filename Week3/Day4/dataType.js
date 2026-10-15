"use strict";
/*
1. number - store both integer and folting point number
2. string - collection of characters by using ('', " ", ``)
3. boolean - logical values it can be either true or false
4. undefined - no value assigned to the variable
5. null = intentional absence of value
6. any
7. unknown
8. never
9. tuple
*/
let accountNumber = 3456765;
//any it accepts any datatype
//it tries to implement dynamic typing behaviour here , bypasses the type checking
let value = 123;
value = 'Welcome';
value = true;
value = undefined;
console.log(typeof value);
//unknown : this also accept any datatype and checks the type before performing any operation
let info;
info = 'Playwright';
info = 100;
console.log(info);
//let result = info+20
console.log(typeof info);
if (typeof info === 'number') {
    console.log(info + 20);
}
else {
    console.log('info is not a number');
}
//never : it's type thet represent values that never occur, it's used for functions
//that throw exception or have infinite loops
function stopExecution() {
    throw new Error(`stop's the execution`);
}
function add(a, b) {
    //stopExecution()
    console.log(a + b);
}
add(4, 6);
//stopExecution()
//tuple : it's a fixed length array with specific datatypes for each element
let courseDetails = ['Playwright', 200, true];
//let course = ['Playwright',200,true]
console.log(courseDetails[0]);
