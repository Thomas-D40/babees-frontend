import { TestBed } from '@angular/core/testing';

import { BabeeServiceService } from './babee-service.service';

describe('BabeeServiceService', () => {
  let service: BabeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
