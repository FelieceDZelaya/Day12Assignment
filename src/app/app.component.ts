import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  businessDate = new Date();
  debitCardNum : string;
  debitCardAcc : string;
  prevBalance : number;
  newBalance : number;
  newNewBalance : number;
  lastTransactionAmount : number;

  constructor( public atmService : AtmServiceService ) {

    this.debitCardNum = atmService.getDebitCardNumber();
    this.debitCardAcc = atmService.getDebitCardAccount();
    this.prevBalance = atmService.getAccountBalance(this.debitCardAcc);
    this.newBalance = atmService.withdrawCash(this.debitCardAcc,50);
    this.newNewBalance = atmService.depositCash(this.debitCardAcc,30);
    this.lastTransactionAmount = atmService.getLastTransactionAmount(this.debitCardAcc);

  }

}