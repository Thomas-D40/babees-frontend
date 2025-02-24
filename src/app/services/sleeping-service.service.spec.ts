import { TestBed } from '@angular/core/testing';

import { SleepingServiceService } from './sleeping-service.service';

describe('SleepingServiceService', () => {
  let service: SleepingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
