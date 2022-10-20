import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interfaceCarrera } from 'src/app/mantenimientos/pages/interfaces/admin.interface';
import { interfaceAsignacionAlumno, interfaceAsignacionProfesor } from '../interfaces/asignaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class AsignacioneServiciosService {

  constructor( private http:HttpClient ) { }

  getAlumno(){
    return this.http.get<interfaceAsignacionAlumno[]>('http://localhost:3000/asignacionAlumno')
  }
  getProfesor(){
    return this.http.get<interfaceAsignacionProfesor[]>('http://localhost:3000/asignacionProfesor')
  }

  // Llenar cbx
  getCarrera(){
    return this.http.get<interfaceCarrera[]>('http://localhost:3000/carrera')
  }
}
