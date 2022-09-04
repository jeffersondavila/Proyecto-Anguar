import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  title:string='Mantenimiento Perfil';
  codigo:string='Codigo perfil';
  nombre:string='Nombre';
  descripcion:string='Descripción';
  estado:string='Email';
}
