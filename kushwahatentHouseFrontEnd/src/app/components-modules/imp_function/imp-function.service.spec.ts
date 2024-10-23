import { TestBed } from '@angular/core/testing';

import { ImpFunctionService } from './imp-function.service';

describe('ImpFunctionService', () => {
  let service: ImpFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
