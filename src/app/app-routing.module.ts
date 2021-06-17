import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotteryCompleteComponent } from './components/lottery-complete/lottery-complete.component';
import { LotteryStarterComponent } from './components/lottery-starter/lottery-starter.component';
import { LotteryComponent } from './components/lottery/lottery.component';

const routes: Routes = [
  { path: '', redirectTo: '/lottery-starter', pathMatch: 'full' },
  { path: 'lottery-starter', component: LotteryStarterComponent },
  { path: 'lottery', component: LotteryComponent },
  { path: 'lottery-complete', component: LotteryCompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
