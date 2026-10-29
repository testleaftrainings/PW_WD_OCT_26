import { EmployeeSignup } from "./accessModifier";

class Hr extends EmployeeSignup{

    dep : string //property that is specific to hr class
    public empUpdate(){

        console.log(this.ePho, this.dep);
        
    }
    constructor(){
        super()
        this.dep ='QA'
    }
}
const hr = new Hr()
hr.empUpdate()