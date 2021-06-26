import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import './extensions/safe-subscribe.extension';

@Injectable({ providedIn: 'root' })
export abstract class BaseComponent implements OnDestroy {
  private subscriptions: Subscription = new Subscription();
  protected unsubscribe$ = new Subject<void>();

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.subscriptions.unsubscribe();
  }

  public trackSubscription(sub: Subscription): Subscription {
    this.subscriptions.add(sub);
    return sub;
  }
}
