import { TestBed } from '@angular/core/testing';

import { MregserviceService } from './mregservice.service';

describe('MregserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MregserviceService = TestBed.get(MregserviceService);
    expect(service).toBeTruthy();
  });
});
