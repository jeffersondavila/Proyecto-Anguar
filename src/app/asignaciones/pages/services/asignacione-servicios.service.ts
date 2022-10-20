import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interfaceCarrera, interfaceCurso, interfacePerfil, interfaceSeccion, interfaceSede } from 'src/app/mantenimientos/pages/interfaces/admin.interface';
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
  getSede(){
    return this.http.get<interfaceSede[]>('http://localhost:3000/sede')
  }
  getSeccion(){
    return this.http.get<interfaceSeccion[]>('http://localhost:3000/seccion')
  }
  getCurso(){
    return this.http.get<interfaceCurso[]>('http://localhost:3000/curso')
  }
  getPerfil(){
    return this.http.get<interfacePerfil[]>('http://localhost:3000/perfil')
  }
}
