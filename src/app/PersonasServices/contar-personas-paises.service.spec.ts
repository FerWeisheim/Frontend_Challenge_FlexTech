import { TestBed } from '@angular/core/testing';

import { ContarPersonasPaisesService } from './contar-personas-paises.service';

describe('ContarPersonasPaisesService', () => {
  let service: ContarPersonasPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContarPersonasPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
