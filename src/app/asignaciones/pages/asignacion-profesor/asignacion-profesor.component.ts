import { Component } from '@angular/core';
import { interfaceCarrera, interfaceCurso, interfacePerfil, interfaceSeccion, interfaceSede } from 'src/app/mantenimientos/pages/interfaces/admin.interface';
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
  sede: interfaceSede[] = [];
  seccion: interfaceSeccion[] = [];
  curso: interfaceCurso[] = [];
  perfil: interfacePerfil[] = [];

  constructor(private asignacionProfesorService: AsignacioneServiciosService) { }

  ngOnInit(): void {
    this.asignacionProfesorService.getProfesor().subscribe(profesor => this.profesor = profesor);
    this.asignacionProfesorService.getCarrera().subscribe(carrera => this.carrera = carrera);
    this.asignacionProfesorService.getSede().subscribe(sede => this.sede = sede);
    this.asignacionProfesorService.getSeccion().subscribe(seccion => this.seccion = seccion);
    this.asignacionProfesorService.getCurso().subscribe(curso => this.curso = curso);
    this.asignacionProfesorService.getPerfil().subscribe(perfil => this.perfil = perfil);
  }
}
