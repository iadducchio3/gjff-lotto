import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LotteryService } from 'src/app/services/lottery.service';
import { SeasonResults } from 'src/assets/2020-results';

@Component({
  selector: 'app-lottery-starter',
  templateUrl: './lottery-starter.component.html',
  styleUrls: ['./lottery-starter.component.scss'],
})
export class LotteryStarterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _lotteryService: LotteryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getSeasonData();
  }

  private createForm() {
    this.form = this.fb.group({ RoundTime: [] });
  }

  public onStartLottery(): void {
    this._lotteryService.setLotteryInputData(this.getSeasonData());
    this._lotteryService.setRoundTime(this.form.controls.RoundTime.value);
    this.router.navigate(['lottery']);
  }

  private getSeasonData() {
    return SeasonResults;
  }
}
