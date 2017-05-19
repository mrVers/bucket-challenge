import { TestBed, inject } from '@angular/core/testing';

import { BucketService } from './bucket.service';
import {InjectionToken} from '@angular/core';


describe('BucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketService, InjectionToken]
    });
  });

  it('should be created', inject([BucketService], (service: BucketService) => {
    expect(service).toBeTruthy();
  }));
});
