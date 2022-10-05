import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignacion-alumno',
  templateUrl: './asignacion-alumno.component.html',
  styleUrls: ['./asignacion-alumno.component.css']
})
export class AsignacionAlumnoComponent {
  titleAsignacionAlumno:string='Asignación Alumno';
  carreraAsignacionAlumno:string='Seleccione la carrera';
  sedeAsignacionAlumno:string='Seleccione la sede';
  seccionAsignacionAlumno:string='Seleccione la sección';
  cursoAsignacionAlumno:string='Seleccione el curso';
  carnetAsignacionAlumno:string='Ingrese el carnet';
  usuarioAsignacionAlumno:string='Seleccione el tipo de usuario';
}
