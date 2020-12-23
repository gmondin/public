import { TestBed } from '@angular/core/testing';

import { ProductsLinesService } from './productsLine.service';

describe('ProductsLinesService', () => {
  let service: ProductsLinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsLinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
