import { TestBed, inject } from '@angular/core/testing';

import { DefaultRequestOptions } from './default-request-options.service';

describe('DefaultRequestOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultRequestOptions]
    });
  });

  it('should be created', inject([DefaultRequestOptions], (service: DefaultRequestOptions) => {
    expect(service).toBeTruthy();
  }));
});
