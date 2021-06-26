import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { interval, of } from 'rxjs';
import { concatMap, filter, finalize, takeWhile, tap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { LotteryService } from 'src/app/components/lottery/lottery.service';
import { ConfettiService } from 'src/app/components/tools/confetti/confetti.service';
import 'src/app/extensions/array.extension';
import 'src/app/extensions/number.extension';
@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent extends BaseComponent implements OnInit {
  @ViewChild('download') downloadEl: ElementRef<HTMLElement>;
  public roundTime: number;
  public currentFriendlyTime: string;
  public currentTime: number;
  private oddsGroupings: number;

  public inputData: any[];
  public selectionPool = [];
  public lotteryResult = [];

  public title: string;
  public tickerString: string;
  public resultsTickerString: string;
  public ownerData: any[];
  public currentSelection: any;
  public lastYearRankings: any;

  public get year(): number {
    return new Date().getFullYear();
  }

  constructor(private _lotteryService: LotteryService, private _ngZone: NgZone, private _confettiService: ConfettiService, private sanitizer: DomSanitizer) {
    super();
  }

  ngOnInit(): void {
    this.initializeLottery();
  }

  private initializeLottery(): void {
    this.setLotteryParameters();
    this.buildSelectionPool();
    this.resetCurrentTime();
    this.buildTickerStrings();
    this.buildTitle();
    this.startTimer();
  }
  private getSafeUrl(url): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private setLotteryParameters() {
    this.roundTime = Number(this._lotteryService.roundTime);
    this.oddsGroupings = Number(this._lotteryService.oddsGroupsings);
    this.inputData = this._lotteryService.lotteryInputData;
  }

  private resetCurrentTime() {
    this.currentTime = this.roundTime;
    this.currentFriendlyTime = this.roundTime.toFriendlyTime();
  }

  private buildTickerStrings() {
    const nextPick = this.inputData.length - this.lotteryResult.length;
    this.tickerString = !!this.currentSelection ? `${(nextPick + 1).toSuperRank()} Pick: ${this.currentSelection.OwnerName} - ` : '';
    if (this.selectionPool.any()) this.tickerString += `Waiting for  ${nextPick.toSuperRank()}  Pick`;

    if (this.lotteryResult.any()) {
      let str = '';
      this.lotteryResult.forEach(owner => (str += `${owner.Selection.toSuperRank()} Pick: ${owner.OwnerName},  `));
      this.resultsTickerString = str;
    }
  }

  private buildTitle() {
    const year = new Date().getFullYear();
    this.title = year + ' Genital Jambalya Fantasy Football Lottery';
  }

  private startTimer() {
    interval(1000)
      .pipe(
        takeWhile(() => this.selectionPool.any()),
        concatMap(() => of((this.currentTime -= 1))),
        tap(sec => (this.currentFriendlyTime = sec.toFriendlyTime())),
        filter(sec => sec < 1),
        tap(() => this.makeNextSelection()),
        tap(() => this._ngZone.runOutsideAngular(() => this._confettiService.showConfetti(3))),
        tap(() => this.resetCurrentTime()),
        tap(() => this.buildTickerStrings()),
        finalize(() => this.downloadResults())
      )
      .safeSubscribe(this);
  }

  private makeNextSelection() {
    // this.currentSelection = null;
    let selectionIndex = Math.floor(Math.random() * this.selectionPool.length);
    this.currentSelection = this.selectionPool[selectionIndex];
    this.currentSelection.KeeperVideo = this.getSafeUrl(this.currentSelection.KeeperVideo + '?autoplay=1');
    const selectionNumber = this.inputData.length - this.lotteryResult.length;
    this.lotteryResult.push({ ...this.currentSelection, Selection: selectionNumber });
    this.lotteryResult.orderByAscending(owner => owner.Selection);
    this.removeFromSelectionPool(this.currentSelection.Rank);
  }

  private removeFromSelectionPool(rank: number) {
    this.selectionPool = this.selectionPool.filter(owner => owner.Rank != rank);
    this.selectionPool.shuffle();
  }

  private buildSelectionPool() {
    const getNumberOfEntries = rank => this.oddsGroupings + 1 - Math.ceil(rank / (this.inputData.length / this.oddsGroupings));
    this.inputData.forEach(input => {
      for (let i = 0; i < getNumberOfEntries(input.Rank); i++) this.selectionPool.push(input);
    });
    this.selectionPool.shuffle();
  }

  private downloadResults() {
    let result = this.lotteryResult.map(res => ({ Owner: res.OwnerName, Selection: res.Selection }));
    var sJson = JSON.stringify(result);
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson));
    element.setAttribute('download', `${new Date().getFullYear()}LotteryResults.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
