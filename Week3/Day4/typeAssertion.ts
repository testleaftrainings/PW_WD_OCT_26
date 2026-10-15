let response : any = 'Success'

let responseValue = response as string
console.log(responseValue.length);

let responseValue1 =  <string>response
console.log(responseValue1.toUpperCase());

