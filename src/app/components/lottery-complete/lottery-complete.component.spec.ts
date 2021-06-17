import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LotteryCompleteComponent } from './lottery-complete.component';

describe('LotteryCompleteComponent', () => {
  let component: LotteryCompleteComponent;
  let fixture: ComponentFixture<LotteryCompleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
