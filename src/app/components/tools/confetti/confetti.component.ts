import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { pausable, PausableObservable } from 'rxjs-pausable';
import { BaseComponent } from 'src/app/base.component';
import { ConfettiService } from './confetti.service';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent extends BaseComponent implements OnInit {
  constructor(private _confettiService: ConfettiService) {
    super();
  }
  pausable: PausableObservable<number>;

  ngOnInit() {
    this.pausable = interval(900).pipe(pausable()) as PausableObservable<number>;
    this.pausable.safeSubscribe(this, () => this.shoot());
    this.pausable.pause();

    this._confettiService.visible$.safeSubscribe(this, visible => {
      if (visible) this.pausable.resume();
      else this.pausable.pause();
    });
  }

  shoot() {
    try {
      this.confetti({
        particleCount: 200,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        colors: ['#bb0000', '#ffffff']
      });
      this.confetti({
        particleCount: 200,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
        colors: ['#bb0000', '#ffffff']
      });
    } catch (e) {
      console.log('Confetti Failed');
    }
  }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }
}
