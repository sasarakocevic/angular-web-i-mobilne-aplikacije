import { TestBed } from '@angular/core/testing';

import { RezervacijaService } from './rezervacija.service';

describe('RezervacijaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RezervacijaService = TestBed.get(RezervacijaService);
    expect(service).toBeTruthy();
  });
});
