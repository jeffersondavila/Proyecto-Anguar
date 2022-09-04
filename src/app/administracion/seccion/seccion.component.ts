import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  title:string='Mantenimiento Sección';
  codigo:string='Codigo sección';
  nombre:string='Nombre';
  estado:string='Email';
}
