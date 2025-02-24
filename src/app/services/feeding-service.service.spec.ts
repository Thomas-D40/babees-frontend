import { TestBed } from '@angular/core/testing';

import { FeedingServiceService } from './feeding-service.service';

describe('FeedingServiceService', () => {
  let service: FeedingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
