import { Component, OnInit } from '@angular/core';
import { interfaceExamenes } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {
  title: string = 'Examenes';
  codigo: string = 'Codigo examen';
  codigoCurso: string = 'Codigo curso';
  codigoAsigAlumno: string = 'Codigo asignación alumno';
  codigoAsigProfesor: string = 'Codigo asignación profesor';
  punteo: string = 'Punteo';
  estado: string = 'Email';

  examen: interfaceExamenes[] = [];
  constructor(private examenService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.examenService.getExamen().subscribe(examen => this.examen = examen);
  }
}
