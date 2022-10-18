import { Component, OnInit } from '@angular/core';
import { interfaceAsignacionProfesor } from '../interfaces/asignaciones.interface';
import { AsignacioneServiciosService } from '../services/asignacione-servicios.service';

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

  profesor:interfaceAsignacionProfesor[]=[];
  constructor(private asignacionProfesorService: AsignacioneServiciosService) { }

  ngOnInit(): void {
    this.asignacionProfesorService.getProfesor().subscribe(profesor=>this.profesor = profesor);
  }
}
