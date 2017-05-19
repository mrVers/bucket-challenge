import { TestBed, inject } from '@angular/core/testing';

import { BucketResolveService } from './bucket-resolve.service';

describe('BucketResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketResolveService]
    });
  });

  it('should be created', inject([BucketResolveService], (service: BucketResolveService) => {
    expect(service).toBeTruthy();
  }));
});
