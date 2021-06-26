import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  constructor(private sanitizer: DomSanitizer) {}

  private _roundTime: number;
  public get roundTime(): number {
    return this._roundTime;
  }

  private _lotteryInputData: any[];
  public get lotteryInputData(): any[] {
    return [...this._lotteryInputData];
  }

  private _oddsGroupings: number;
  public get oddsGroupsings(): number {
    return this._oddsGroupings;
  }

  public setOddsGroupings = (groups: number) => (this._oddsGroupings = groups);

  public setLotteryInputData = (inputData: any[]) => (this._lotteryInputData = inputData);

  public setRoundTime = (time: number) => (this._roundTime = time);

  private getSafeUrl(url): SafeUrl {
    let returnVal = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return returnVal;
  }
}
