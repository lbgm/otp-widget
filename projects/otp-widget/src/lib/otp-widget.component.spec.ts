import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpWidgetComponent } from './otp-widget.component';

describe('OtpWidgetComponent', () => {
  let component: OtpWidgetComponent;
  let fixture: ComponentFixture<OtpWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
