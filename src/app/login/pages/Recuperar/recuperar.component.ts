import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarUsuarioComponent {
  title:string='Restablecer Usuario';
  userName:string='Ingresar username';
  contraseniaUserName:string='Ingresar contraseña nueva';
}