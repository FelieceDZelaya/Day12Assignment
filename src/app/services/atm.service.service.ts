import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AtmServiceService {

  public express;
  public debitCardNumber : string;
  public debitCardAccount : string;
  public accountBalance : number;
  public lastTransactionAmount : number;

  constructor( public httpCli : HttpClient) { //Inject httpt client here

    this.debitCardNumber = '1234567891234567';
    this.debitCardAccount = '123456010220001';
    this.accountBalance = 5000.00;
    this.lastTransactionAmount = 23.00;
  }

  test(){ //Add more functionality here
    //this.httpCli.get('http://localhost:4200/');
  }

  getDebitCardNumber() {
    return this.debitCardNumber;
  }

  getDebitCardAccount() {
    return this.debitCardAccount;
  }

  getAccountBalance(acctNumber : string) {
    return this.accountBalance;
  }

  getLastTransactionAmount(acctNumber : string){
    return this.lastTransactionAmount;
  }

  withdrawCash(acctNumber : string, amount : number) {
    return this.accountBalance - Number(amount);
  }

 depositCash(acctNumber : string, amount : number) {
    return this.accountBalance + Number(amount);
  }

}