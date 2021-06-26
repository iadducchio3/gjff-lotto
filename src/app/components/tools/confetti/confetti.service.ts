import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfettiService {
  private visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public showConfetti(seconds: number) {
    this.show();
    setTimeout(() => this.hide(), seconds * 1000);
  }

  public visible$ = this.visible.asObservable();
  public show = () => this.visible.next(true);
  public hide = () => this.visible.next(false);
}
