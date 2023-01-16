import { TestBed } from '@angular/core/testing';

import { OtpWidgetService } from './otp-widget.service';

describe('OtpWidgetService', () => {
  let service: OtpWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
