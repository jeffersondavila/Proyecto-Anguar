import { Component, OnInit } from '@angular/core';
import { interfaceAsignacionAlumno } from '../interfaces/asignaciones.interface';
import { AsignacioneServiciosService } from '../services/asignacione-servicios.service';

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

  alumno:interfaceAsignacionAlumno[]=[];
  constructor(private asignacionAlumnoService: AsignacioneServiciosService) { }

  ngOnInit(): void {
    this.asignacionAlumnoService.getAlumno().subscribe(alumno=>this.alumno = alumno);
  }
}
