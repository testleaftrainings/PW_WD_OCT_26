//Hoisting is the default behavior of JavaScript where declarations are moved to the 
//top of their scope during the memory creation phase before execution.

//var is hoisted and if you access it before initalization, js return undefined

console.log(x);

var x = 10
//console.log(x);

//let is hoisted but cannot be accessed before initialization, resulting in reference error

//console.log(y);

let y = 20 //ReferenceError: Cannot access 'y' before initialization
//console.log(y);

//TDZ(temporal dead zone) : time period btw variable declaration and value assignment to the variable

//const
console.log(z);

const z = 30 //ReferenceError: Cannot access 'z' before initialization

//console.log(z);



