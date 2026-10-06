//named function

console.log(launchApp())
function launchApp(){
    //console.log("App launched successfully");
    return 'App launched successfully'
}

//console.log(launchApp())

//Function Expression(Anonymous function)
//login()
let login = function(){
console.log('Login successful');

}

login()

//Arrow function
let a = 5
let b = 3
let add = () => a + b
console.log(add());

let funArrow = ()=>{
    console.log('Hello team I am an arrow function');
    
}
funArrow()

//callback function
//call back is a function passed as an argument to another function, 
//and it's executed later after some task is completed

//when one task finished another function is called automatically

function login1(cb1, cb2){
    console.log('login was successful');
    cb1()
    cb2()
    
}

function enterUsername(){
    console.log('entered username');
    
}

function enterPassword(){
    console.log('Entered password');
    
}
login1(enterUsername,enterPassword)
