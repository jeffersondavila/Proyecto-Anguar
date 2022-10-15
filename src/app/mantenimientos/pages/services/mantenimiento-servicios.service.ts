import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interfaceFacultad, interfaceAlumno, interfaceCarrera, interfaceCurso, interfaceExamenes, interfaceProfesor, interfaceNotas, interfacePerfil, interfaceSeccion, interfaceSede } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoServiciosService {

  constructor( private http:HttpClient ) { }

  getAlumno(){
    return this.http.get<interfaceAlumno[]>('http://localhost:3000/alumno')
  }
  getCarrera(){
    return this.http.get<interfaceCarrera[]>('http://localhost:3000/carrera')
  }
  getCurso(){
    return this.http.get<interfaceCurso[]>('http://localhost:3000/curso')
  }
  getExamen(){
    return this.http.get<interfaceExamenes[]>('http://localhost:3000/examen')
  }
  getFacultad(){
    return this.http.get<interfaceFacultad[]>('http://localhost:3000/facultad')
  }
  getProfesor(){
    return this.http.get<interfaceProfesor[]>('http://localhost:3000/profesor')
  }
  getNota(){
    return this.http.get<interfaceNotas[]>('http://localhost:3000/nota')
  }
  getPerfil(){
    return this.http.get<interfacePerfil[]>('http://localhost:3000/perfil')
  }
  getSeccion(){
    return this.http.get<interfaceSeccion[]>('http://localhost:3000/seccion')
  }
  getSede(){
    return this.http.get<interfaceSede[]>('http://localhost:3000/sede')
  }
}
