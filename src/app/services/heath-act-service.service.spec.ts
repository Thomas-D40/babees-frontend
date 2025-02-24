import { TestBed } from '@angular/core/testing';

import { HeathActServiceService } from './heath-act-service.service';

describe('HeathActServiceService', () => {
  let service: HeathActServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeathActServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
