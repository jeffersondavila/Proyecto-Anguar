import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearUsuarioComponent {
  title:string='Sign up';
  codigoPerfil:string='Seleccionar tipo de usuario';
  nombreUsuario:string='Ingresar nombre del usuario';
  userName:string='Ingresar username';
  contraseniaUserName:string='Ingresar contraseña';
  estado:string='Ingresar estado';
}
