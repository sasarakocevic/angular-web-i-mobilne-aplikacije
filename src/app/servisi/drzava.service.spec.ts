import { TestBed } from '@angular/core/testing';

import { DrzavaService } from './drzava.service';

describe('DrzavaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrzavaService = TestBed.get(DrzavaService);
    expect(service).toBeTruthy();
  });
});
