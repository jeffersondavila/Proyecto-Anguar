import { Component } from '@angular/core';
import { interfaceCarrera } from 'src/app/mantenimientos/pages/interfaces/admin.interface';
import { interfaceAsignacionProfesor } from '../interfaces/asignaciones.interface';
import { AsignacioneServiciosService } from '../services/asignacione-servicios.service';

@Component({
  selector: 'app-asignacion-profesor',
  templateUrl: './asignacion-profesor.component.html',
  styleUrls: ['./asignacion-profesor.component.css']
})
export class AsignacionProfesorComponent {
  titleAsignacionProfesor: string = 'Asignación Profesor';
  carreraAsignacionProfesor: string = 'Seleccione la carrera';
  sedeAsignacionProfesor: string = 'Seleccione la sede';
  seccionAsignacionProfesor: string = 'Seleccione la sección';
  cursoAsignacionProfesor: string = 'Seleccione el curso';
  carnetAsignacionProfesor: string = 'Ingrese el carnet';
  usuarioAsignacionProfesor: string = 'Seleccione el tipo de usuario';

  profesor: interfaceAsignacionProfesor[] = [];
  carrera: interfaceCarrera[] = [];

  constructor(private asignacionProfesorService: AsignacioneServiciosService) { }

  ngOnInit(): void {
    this.asignacionProfesorService.getProfesor().subscribe(profesor => this.profesor = profesor);
    this.asignacionProfesorService.getCarrera().subscribe(carrera => this.carrera = carrera);
  }
}
