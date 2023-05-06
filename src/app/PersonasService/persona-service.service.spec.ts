import { TestBed } from '@angular/core/testing';

import { PersonaServiceService } from './persona-service.service';

describe('PersonaServiceService', () => {
  let service: PersonaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
