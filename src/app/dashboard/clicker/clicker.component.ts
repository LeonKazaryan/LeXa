import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {
  public cardPiecesPerClickUpdate: any = {
    cardPiecesPerClick: 1,
    cost: 15
  }
  // public autoClickPerSecondUpdater: any = {
  //   autoClickPerSecond: 0,
  //   cost: 50,
  //   isActive: false
  // }
  public cardPiecesCount: number = 0;
  public lowMoney: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const localStoragePiecesCount = localStorage.getItem('card_pieces_count');
    const localStoragePiecesPerClick = localStorage.getItem('card_pieces_per_click');
    if (localStoragePiecesCount) {
      this.cardPiecesCount = parseInt(localStoragePiecesCount);
    }
    if (localStoragePiecesPerClick) {
      this.cardPiecesPerClickUpdate.cardPiecesPerClick = parseFloat(localStoragePiecesPerClick);
    }
  }
  public addCardPiece(): void {
    this.cardPiecesCount += this.cardPiecesPerClickUpdate.cardPiecesPerClick;
  }
  public upgradeClicks(obj: string): void {
    console.log(obj);
    switch(obj) {
      case 'cardPiecesPerClick': {
        if (this.cardPiecesCount < this.cardPiecesPerClickUpdate.cost){
          this.lowMoney = true;
        } else {
          this.lowMoney = false;
          this.cardPiecesPerClickUpdate.cardPiecesPerClick += 0.1;
          this.cardPiecesCount -= this.cardPiecesPerClickUpdate.cost;
          this.cardPiecesPerClickUpdate.cost += 5;
        }
        break;
      }
      // case 'autoClick': {
      //   if (this.cardPiecesCount < this.autoClickPerSecondUpdater.cost) {
      //     this.lowMoney = true;
      //   } else {
      //     this.lowMoney = false;
      //     this.autoClickPerSecondUpdater.autoClickPerSecond += 1;
      //     this.cardPiecesCount -= this.autoClickPerSecondUpdater.cost;
      //     this.autoClickPerSecondUpdater.cost += 5;
      //   }
      //   break;
      // }
    }
  }
  // public enableAutoClicker(): void {
  //   this.autoClickPerSecondUpdater.isActive = !this.autoClickPerSecondUpdater.isActive;
  //   console.log(this.autoClickPerSecondUpdater.isActive);
  //   let interval;
  //   if (this.autoClickPerSecondUpdater.isActive) {
  //     interval = setInterval(() => {
  //       this.cardPiecesCount += this.autoClickPerSecondUpdater.autoClickPerSecond;
  //     }, 1000)
  //   } else {
  //     clearInterval(interval);
  //     console.log("stop auto click");
  //   }
  // }

}
