import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})
export class MaestroComponent {
  title:string='Mantenimiento Profesor';
  codigo:string='Codigo profesor';
  nombre:string='Nombre';
  direccion:string='Dirección';
  telefono:string='Número telefonico';
  email:string='Email';
}
