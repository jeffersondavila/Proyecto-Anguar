import { Injectable } from '@angular/core';
import { interfaceCarrera } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  serviceCarreras: interfaceCarrera[] = [
    {
      codigo: 0,
      codigoFacultad: 0,
      nombre: 'Nombre',
    }
  ]
  constructor() { }
}
