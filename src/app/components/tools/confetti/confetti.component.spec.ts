import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfettiComponent } from './confetti.component';

describe('ConfettiComponent', () => {
  let component: ConfettiComponent;
  let fixture: ComponentFixture<ConfettiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
