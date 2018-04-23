import { TestBed, inject } from '@angular/core/testing';

import { Atm.ServiceService } from './atm.service.service';

describe('Atm.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Atm.ServiceService]
    });
  });

  it('should be created', inject([Atm.ServiceService], (service: Atm.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
