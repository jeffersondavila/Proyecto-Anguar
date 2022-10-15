import { Injectable } from '@angular/core';
import { interfaceCarrera, Login } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  serviceCarreras: interfaceCarrera[] = [
    {
      codigo: '#',
      codigoFacultad: '#',
      nombre: 'Nombre',
    }
  ]
  constructor( private http:HttpClient ) { }

  getUsuarios(){
    return this.http.get<Login[]>('http://localhost:3000/usuarios')
  }
}
