import { Observable, Subscription } from 'rxjs';
import { BaseComponent } from '../base.component';

export function safeSubscribe<T>(
  this: Observable<T>,
  component: BaseComponent,
  next?: (value: T) => void,
  error?: (error: T) => void,
  complete?: () => void
): Subscription {
  const sub = this.subscribe(next, error, complete);
  component?.trackSubscription(sub);
  return sub;
}

(Observable as any).prototype.safeSubscribe = safeSubscribe;
// * Example of Observable as any: https://github.com/ReactiveX/rxjs/blob/6.1.0/compat/add/operator/audit.ts

declare module 'rxjs/internal/Observable' {
  export interface Observable<T> {
    safeSubscribe: typeof safeSubscribe;
  }
}
