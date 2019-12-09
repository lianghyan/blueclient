import { TestBed } from '@angular/core/testing';

import { BfinterceptorService } from './bfinterceptor.service';

describe('BfinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BfinterceptorService = TestBed.get(BfinterceptorService);
    expect(service).toBeTruthy();
  });
});
