export interface RBIRegulations{

    //unimplemented properties
    AccountType : string
    BankBranch :string
    IFSC_Code :string
    AccountNumber : number

    //umimplemented methods /method signature
    openAccount() : void
    withdrawMoney() : void
    interestRatePolicy() : number
    auditTranx()  :void
}

export interface RBIPolicy{
activateDebitCard():void
}