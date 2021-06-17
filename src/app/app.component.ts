import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div id="wrapper">
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
