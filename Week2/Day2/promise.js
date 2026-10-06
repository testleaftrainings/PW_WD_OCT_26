//promise means i started the work now but i will get the result later

/*  
it has 3 states 
pending
resolved
rejected
*/

let marks1 = 30

let studentRecord = new Promise((resolve,reject)=>{
    if(marks1>35){
        resolve('passed')
    }else{
        reject('failed')
    }
})

//console.log(studentRecord);

studentRecord.then(message=>console.log(message))
.catch(error=>console.log(error))

//to handle promise with async and await keyword

let marks = 30

function getResult(){
    return new Promise((resolve,reject)=>{
        if(marks1>35){
        resolve('passed')
    }else{
        reject('failed')
    }
    })
}

async function progress(){

    try{
        const result = await getResult()
        console.log(result);
        
    }catch(error){
console.log(error);

    };
    
}

progress()

