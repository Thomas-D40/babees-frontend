import { TestBed } from '@angular/core/testing';

import { CareActServiceService } from './care-act-service.service';

describe('CareActServiceService', () => {
  let service: CareActServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareActServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
