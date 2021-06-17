import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotteryCompleteComponent } from './components/lottery-complete/lottery-complete.component';
import { LotteryStarterComponent } from './components/lottery-starter/lottery-starter.component';
import { LotteryComponent } from './components/lottery/lottery.component';
import { ConfettiComponent } from './components/tools/confetti/confetti.component';
import { TimerComponent } from './components/tools/timer/timer.component';
import { InputComponent } from './components/ui/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryComponent,
    LotteryCompleteComponent,
    LotteryStarterComponent,
    ConfettiComponent,
    TimerComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
