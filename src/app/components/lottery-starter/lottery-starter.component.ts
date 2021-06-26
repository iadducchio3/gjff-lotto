import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LotteryService } from 'src/app/components/lottery/lottery.service';

@Component({
  selector: 'app-lottery-starter',
  templateUrl: './lottery-starter.component.html',
  styleUrls: ['./lottery-starter.component.scss']
})
export class LotteryStarterComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private _lotteryService: LotteryService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  public onStartLottery(): void {
    this._lotteryService.setRoundTime(this.form.controls.RoundTime.value);
    this._lotteryService.setOddsGroupings(this.form.controls.OddsGroupings.value);
    this.router.navigate(['lottery']);
  }

  public onFileUploaded(file) {
    this._lotteryService.setLotteryInputData(file);
  }

  private createForm() {
    this.form = this.fb.group({
      RoundTime: [null, Validators.required],
      OddsGroupings: [null, Validators.required],
      Name: [null, Validators.required]
    });
  }
}
