//properties =>data
//methods => actionables
//create object using new keyword inorder to access the properties and method 


class Employee{//scope of the class

    //golbal reference //properties // global variables

    name:string
    role : string
    departmment : string
    empid : number

    // name:string = 'yuva'
    // role : string = 'Sr SDET'
    // departmment : string = 'QA'
    // empid : number = 1234
    constructor(name:string, role:string, department:string, empid:number){
        console.log('constructor is exectued here');
        this.name = name //i have assigned local variable to the global variable
        this.role = role
        this.departmment = department
        this.empid = empid
    }
    
    
    
    //action-->method
//this keyword refer to current instance of the class
    selfIntroduction(){
        console.log(`Hi, I am ${this.name}, working as ${this.role} in ${this.departmment}
            and my employee id is ${this.empid}`);
        
    }


}

//using the object global reference should be called
//syntax to create the real entiy or object
//const oject = new className()

const emp = new Employee("Hari","vp","Engineering-projects",9876)

//console.log(emp.name, emp.role, emp.departmment, emp.empid);
emp.selfIntroduction()

