import { TestBed } from '@angular/core/testing';

import { MantenimientoServiciosService } from './mantenimiento-servicios.service';

describe('MantenimientoServiciosService', () => {
  let service: MantenimientoServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
