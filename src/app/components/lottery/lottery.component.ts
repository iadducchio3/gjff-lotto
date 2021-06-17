import { Component, OnInit } from '@angular/core';
import { ConfettiService } from 'src/app/services/confetti.service';
import { LotteryService } from 'src/app/services/lottery.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss'],
})
export class LotteryComponent implements OnInit {
  private roundTime: number;
  public friendlyRoundTime: string;
  private currentTime: number;

  public lotteryInputData: any;
  public lotteryResult: any;

  public title: string;
  public tickerString: string;
  public ownerData: any[];

  public get year(): number {
    return new Date().getFullYear();
  }

  constructor(
    private _lotteryService: LotteryService,
    private _confettiService: ConfettiService
  ) {}

  ngOnInit(): void {
    this.initializeLottery();
  }

  private initializeLottery(): void {
    this.setLotteryParameters();
    this.resetCurrentTime();
    this.buildTickerString();
    this.buildTitle();
    this.buildOwnerData();
    this.startTimer();
  }

  private setLotteryParameters() {
    this.roundTime = this._lotteryService.roundTime;
    this.lotteryInputData = this._lotteryService.lotteryInputData;
  }

  private resetCurrentTime() {
    this.currentTime = this.roundTime;
    this.friendlyRoundTime = this.convertToFriendlyTime(this.roundTime);
  }

  private buildTickerString() {
    this.tickerString = '';
  }

  private buildTitle() {
    this.title = '';
  }

  private startTimer() {}

  private convertToFriendlyTime(secs: number): string {
    return '';
  }

  private makeNextSelection() {}

  private buildOwnerData() {}
}
