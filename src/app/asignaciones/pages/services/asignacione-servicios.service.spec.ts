import { TestBed } from '@angular/core/testing';

import { AsignacioneServiciosService } from './asignacione-servicios.service';

describe('AsignacioneServiciosService', () => {
  let service: AsignacioneServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacioneServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
