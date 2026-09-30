//scope defines where a variable is accessible in your code

//global scope can be access anywhere

/* 
var, let, const -> all can be declared as gloal scope */

let y = 60
var a = 10

function test(){
console.log( y);
console.log(a);
}
test()
console.log(a);

//function scope (var is function scoped)
//let and const is block scoped


function demo(){

    var x = 20
    console.log('inside the function ', x );


    if(true){
        let z = 50
        console.log('Accessing z inside the block ', z);
        console.log('Accessing x inside the block', x);
        
        
    }
    
    //console.log('Accessing z inside the function and outside the block ', z); //ReferenceError: z is not defined
    
}
//console.log('Accessing x outside the function', x);

demo()

if(true){
    let b = 30
    const c = 40
    console.log('Accessing b and c value inside the block ', b, c);
    
}

console.log('Accessing b outside the block ', b);
//console.log('Accessing c outside the block', c);

