import { TestBed } from '@angular/core/testing';

import { MdService } from './md.service';

describe('MdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdService = TestBed.get(MdService);
    expect(service).toBeTruthy();
  });
});
