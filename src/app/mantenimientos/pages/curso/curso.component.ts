import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  title:string='Mantenimiento Curso';
  codigo:string='Codigo curso';
  codigoCarrera:string='Codigo carrera';
  nombre:string='Nombre';
  estado:string='Email';
}
