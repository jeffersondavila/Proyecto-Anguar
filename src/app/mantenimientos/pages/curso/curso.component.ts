import { Component } from '@angular/core';
import { interfaceCurso } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  title: string = 'Mantenimiento Curso';
  codigo: string = 'Codigo curso';
  codigoCarrera: string = 'Codigo carrera';
  nombre: string = 'Nombre';
  estado: string = 'Email';

  curso: interfaceCurso[] = [];
  constructor(private cursoService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.cursoService.getCurso().subscribe(curso => this.curso = curso);
  }
}
