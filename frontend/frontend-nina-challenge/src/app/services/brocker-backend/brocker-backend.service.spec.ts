import { TestBed } from '@angular/core/testing';

import { BrockerBackendService } from './brocker-backend.service';

describe('BrockerBackendService', () => {
  let service: BrockerBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrockerBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
