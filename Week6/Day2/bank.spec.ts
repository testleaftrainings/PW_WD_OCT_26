import test from "@playwright/test";
import { HDFC, SBIbank } from "./abstract";

test('Implementation of SBI',async()=>{

    const bank = new SBIbank()
    const hdfc = new HDFC()
    console.log(bank.AccountNumber)
    console.log(bank.AccountType)
console.log(bank.BankBranch);
console.log(bank.IFSC_Code);
bank.auditTranx()
bank.interestRatePolicy()
bank.openAccount()
bank.withdrawMoney()

})