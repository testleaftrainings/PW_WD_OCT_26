export class EmployeeSignup{

    //properties
    public eName : string //global public access modifier
    public static eid : string
    protected readonly ePho : number
    private eSalary : number

    constructor(){ //first the spl method called constructor will ba called when you create object of the class
console.log('Special method called constructor');

        this.eName = 'Yuva'
EmployeeSignup.eid = 'Emp123'
this.ePho = 9876567898
this.eSalary = 56566
    }

    // constructor(){

    // }

    //method
    //this refer to current instance of the class

printDetails(){
    console.log(`The Employee details ${this.eName} : ${EmployeeSignup.eid} :
        ${this.ePho} : ${this.eSalary}`);
    
}

public get readData(){// this block is to read data of private access modifier 
return this.eSalary
}

public  set writeData(newSal:number){
this.eSalary = newSal
}

}
//created object of the class
const emp1 = new EmployeeSignup()
//Access static variable by using class name its dont depend on oject
console.log(EmployeeSignup.eid);
console.log(emp1.eName)
//emp1.readData()
emp1.printDetails()
console.log(emp1.readData);//it will return old salary
emp1.writeData = 89897
console.log(emp1.readData); // it will return modified salary

//readData and writeData are methods internally
//but because we are using get and set keywords,
//TS treats them as accessor properties when you use them outside the class




// const emp2 = new EmployeeSignup()
// emp2.printDetails()

