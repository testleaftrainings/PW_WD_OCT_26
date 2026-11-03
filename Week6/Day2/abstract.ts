import { RBIPolicy, RBIRegulations } from "./interface";

abstract class Basebank implements RBIRegulations,RBIPolicy{

    AccountType: string ="Savings"
    abstract BankBranch: string;
    abstract IFSC_Code: string;
    abstract AccountNumber: number
    debitCard: string ='activte'

    auditTranx(): void {
        console.log('Auditing all the accounts');
        }
        openAccount(): void {
            console.log('Open Account for 1000 applicants');
            //implemented method
        }
        //abstract creditCard(): void
        abstract withdrawMoney(): void; //unimplemented method
        abstract interestRatePolicy(): number;
        activateDebitCard(): void {
            console.log('Activate your debit card');
            
        }
}

export class SBIbank extends Basebank{

    BankBranch: string = 'Anna Nagar'
     IFSC_Code: string ='SBI5679876'
    AccountNumber: number = 456876557099987

    withdrawMoney(): void {
        console.log("withdrawal limit is 1000");
        
    }
    //only have implemented methods
    interestRatePolicy(): number {
        return 6
    }
}

export class HDFC extends Basebank{

    BankBranch: string = 'k.k Nagar'
     IFSC_Code: string ='HDFC5679876'
    AccountNumber: number = 98765345876358

    withdrawMoney(): void {
        console.log("withdrawal limit is 10000");
        
    }
    //only have implemented methods
    interestRatePolicy(): number {
        return 10
    }
}

class Axis extends Basebank{

    BankBranch: string = 'Avadi'
     IFSC_Code: string ='AXIS5679876'
    AccountNumber: number = 987634569876

    withdrawMoney(): void {
        console.log("withdrawal limit is 15000");
        
    }
    //only have implemented methods
    interestRatePolicy(): number {
        return 8
    }
}

/* Notes:
interface can have only => rules unimplemented methods
abstract class => can have both implemented as well as unimplemented method
class can have only implemented mehods */

const sbi = new SBIbank()
console.log(sbi.AccountNumber)
console.log(sbi.AccountType);
console.log(sbi.BankBranch);
console.log(sbi.IFSC_Code);
console.log(sbi.debitCard)
sbi.withdrawMoney()
sbi.openAccount()
console.log(sbi.interestRatePolicy())
sbi.auditTranx()
sbi.activateDebitCard()


