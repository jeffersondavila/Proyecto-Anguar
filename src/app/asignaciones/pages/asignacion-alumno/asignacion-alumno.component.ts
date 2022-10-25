import { Component, OnInit } from '@angular/core';
import { interfaceAsignacionAlumno } from '../interfaces/asignaciones.interface';
import { AsignacioneServiciosService } from '../services/asignacione-servicios.service';
import { interfaceCarrera, interfaceCurso, interfacePerfil, interfaceSeccion, interfaceSede } from 'src/app/mantenimientos/pages/interfaces/admin.interface';

@Component({
  selector: 'app-asignacion-alumno',
  templateUrl: './asignacion-alumno.component.html',
  styleUrls: ['./asignacion-alumno.component.css']
})
export class AsignacionAlumnoComponent {
  titleAsignacionAlumno: string = 'Asignación Alumno';
  carreraAsignacionAlumno: string = 'Seleccione la carrera';
  sedeAsignacionAlumno: string = 'Seleccione la sede';
  seccionAsignacionAlumno: string = 'Seleccione la sección';
  cursoAsignacionAlumno: string = 'Seleccione el curso';
  carnetAsignacionAlumno: string = 'Ingrese el carnet';
  usuarioAsignacionAlumno: string = 'Seleccione el tipo de usuario';

  alumno: interfaceAsignacionAlumno[] = [];
  carrera: interfaceCarrera[] = [];
  sede: interfaceSede[] = [];
  seccion: interfaceSeccion[] = [];
  curso: interfaceCurso[] = [];
  perfil: interfacePerfil[] = [];

  constructor(private asignacionAlumnoService: AsignacioneServiciosService) { }

  ngOnInit(): void {
    this.asignacionAlumnoService.getAlumno().subscribe(alumno => this.alumno = alumno);
    this.asignacionAlumnoService.getCarrera().subscribe(carrera => this.carrera = carrera);
    this.asignacionAlumnoService.getSede().subscribe(sede => this.sede = sede);
    this.asignacionAlumnoService.getSeccion().subscribe(seccion => this.seccion = seccion);
    this.asignacionAlumnoService.getCurso().subscribe(curso => this.curso = curso);
    this.asignacionAlumnoService.getPerfil().subscribe(perfil => this.perfil = perfil);
  }
}
