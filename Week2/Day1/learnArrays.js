//Array is collection of element of similar datatype or heterogeneous data type
//array is non primitive datatype


let name = 'hari'
let age = 34

//array of element

//index start from 0
let arr = ['Hari',34,true]

//length - no of element present in the array
console.log(arr.length);

//print the complete array
console.log(arr);

//print the specific element using index
console.log(arr[2]);

//print the undefined index
console.log(arr[3]);

//add elements to the array
arr[3] = 'Welcome'
console.log(arr);

console.log(arr[0],arr[1]);

//change the element in the array
arr[1]= 30
console.log(arr); 

let arr = ['Hari',34,true]

//push() - Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr.push("undefined",'Playwright'));
console.log(arr);

//pop() - Removes the last element from an array and returns it
let popMethod = arr.pop()
console.log(popMethod);
console.log(arr); //[ 'Hari', 30, true, 'Welcome', 'undefined' ]

//unshift() - Inserts new elements at the start of an array, and returns the new length of the array
let unshiftarray = arr.unshift('mango',100)
console.log(unshiftarray);
console.log(arr); //[ 'mango', 100, 'Hari', 30, true, 'Welcome', 'undefined' ]

//shift() //Removes the first element from an array and returns it. 

let shiftedArray = arr.shift()
console.log(shiftedArray);
console.log(arr); //[ 100, 'Hari', 30, true, 'Welcome', 'undefined' ]

//slice() -> extracts the portion of the array but it will not alter or modify the existing array

let slicedArray = arr.slice()

console.log(slicedArray);//[ 100, 'Hari', 34, true, 'undefined' ]

let slicedArray1 = arr.slice(1,4)
console.log(slicedArray1);
console.log(arr);//[ 100, 'Hari', 34, true, 'undefined' ]

//splice() -> add element, delete element from the array
//splice method modifies the original array
//first index = start index
//second index = delete count

let splicedArray = arr.splice(2,2)
console.log(splicedArray); //[ 34, true ]
console.log(arr); //[ 100, 'Hari', 'undefined' ]

//splice(startindex, no of items to be deleted, no of items to be added from delete index)
let splicedArray1 = arr.splice(1,1,'sai','sreeni','sanjeev')
console.log(splicedArray1); //[]
console.log(arr); //[ 100, 'sai', 'sreeni', 'sanjeev', 'Hari', 'undefined' ]

//includes() //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arr.includes(100));

//[ 100, 'sai', 'sreeni', 'sanjeev', 'undefined' ]
//reverse() - reverse the array
console.log(arr.reverse());

//join() -> convert array into string

console.log(arr.join()); //undefined,sanjeev,sreeni,sai,100
console.log(arr.join('-')); //undefined-sanjeev-sreeni-sai-100

//map =>transform every element into a new array

let arr1 = [100,110,250,268]
console.log(arr1.map((num)=>num*2)); //[ 200, 220, 500, 536 ]

//filte=> to filterout specific element based on the condiction

let arr2 = [1,2,3,4,5]
console.log(arr2.filter((num)=>num>1)); //[ 2, 3, 4, 5 ]




























