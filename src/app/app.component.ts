import {Component} from '@angular/core';
import {ValueButtonComponent} from "./value-button/value-button.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roulette';

  row1: number[] = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
  row2: number[] = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
  row3: number[] = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];

  column1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  column2: number[] = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  column3: number[] = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  outBet1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  outBet2: number[] = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  evenBet: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
  oddBet: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];

  red: number[] = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  black: number[] = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

  payout: { betList: number[], payoutFactor: number, use: number }[] = [];

  enoughMoney = () => {
    return (this.newMoney >= this.value);
  }

  onclick(betList: number[], payoutFactor: number, use: number): void {
    this.newMoney -= use;
    this.payout.push({betList: betList, payoutFactor: payoutFactor, use: use});
  }

  newMoney: number = 1000;

  wonNum = 5;

  value: number = 1;

  won(): void {
    for (let payoutElement of this.payout) {

      if (payoutElement.betList.includes(this.wonNum)) {
        this.newMoney += payoutElement.use * (payoutElement.payoutFactor + 1);
      }
    }

    this.reset();
  }

  reset(): void {
    this.payout = [];
    this.resetSubject.next();
    this.value = 1;
  }

  resetSubject: Subject<void> = new Subject<void>();

}
