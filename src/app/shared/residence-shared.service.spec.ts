import { TestBed } from '@angular/core/testing';

import { ResidenceSharedService } from './residence-shared.service';

describe('ResidenceSharedService', () => {
  let service: ResidenceSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
