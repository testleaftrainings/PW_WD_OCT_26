//use if -- else  when you know range condictions or if multiple logical operator is required

let marks = 40

if(marks>80){
    console.log('distinction');
    
}else if(marks>60){
    console.log('First class');
    
}else if(marks<30){
    console.log("failed");
    
}
else{
    console.log('Second class');  
}

//use switch when one variable can have many fixed values

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let alertType = "confirm"

switch(alertType){

    case "simple":
        console.log("simple alert");
        break
        case "confirm":
            console.log("confirm alert");
            break
            case "prompt":
                console.log('prompt alert');
                break
                default:
                    console.log('invalid alert');
}