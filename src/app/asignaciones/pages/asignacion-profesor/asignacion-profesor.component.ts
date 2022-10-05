import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignacion-profesor',
  templateUrl: './asignacion-profesor.component.html',
  styleUrls: ['./asignacion-profesor.component.css']
})
export class AsignacionProfesorComponent {
  titleAsignacionProfesor:string='Asignación Profesor';
  carreraAsignacionProfesor:string='Seleccione la carrera';
  sedeAsignacionProfesor:string='Seleccione la sede';
  seccionAsignacionProfesor:string='Seleccione la sección';
  cursoAsignacionProfesor:string='Seleccione el curso';
  carnetAsignacionProfesor:string='Ingrese el carnet';
  usuarioAsignacionProfesor:string='Seleccione el tipo de usuario';
}
