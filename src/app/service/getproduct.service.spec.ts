import { TestBed } from '@angular/core/testing';

import { GetproductService } from './getproduct.service';

describe('GetproductService', () => {
  let service: GetproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
