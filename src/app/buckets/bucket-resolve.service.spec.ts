import { TestBed, inject } from '@angular/core/testing';

import { BucketResolveService } from './bucket-resolve.service';
import { BucketService } from './bucket.service';
import {InjectionToken} from '@angular/core';


describe('BucketResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketResolveService, BucketService, InjectionToken]
    });
  });

  it('should be created', inject([BucketResolveService], (service: BucketResolveService) => {
    expect(service).toBeTruthy();
  }));
});
