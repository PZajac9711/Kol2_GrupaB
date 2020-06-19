import { TestBed } from '@angular/core/testing';

import { PzDataService } from './pz-data.service';

describe('PzDataService', () => {
  let service: PzDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PzDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
