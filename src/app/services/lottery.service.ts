import { Injectable } from '@angular/core';
import { LotteryInputDataModel } from '../models/lottery-input.model';

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  constructor() {}

  private _roundTime: number;
  public get roundTime(): number {
    return this._roundTime;
  }

  private _lotteryInputData: LotteryInputDataModel[];
  public get lotteryInputData(): LotteryInputDataModel[] {
    return [...this._lotteryInputData];
  }

  public setLotteryInputData(inputData: any) {
    this._lotteryInputData = inputData;
  }

  public setRoundTime = (time: number) => (this._roundTime = time);
}
