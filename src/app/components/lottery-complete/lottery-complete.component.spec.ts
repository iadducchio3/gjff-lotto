import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryCompleteComponent } from './lottery-complete.component';

describe('LotteryCompleteComponent', () => {
  let component: LotteryCompleteComponent;
  let fixture: ComponentFixture<LotteryCompleteComponent>;

  beforeEach(async(() => {
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
