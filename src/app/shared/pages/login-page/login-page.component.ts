import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title:string='Sig in';
  titleEmail:string='Ingresar Usuario Institucional';
  titlePassword:string='Ingresar Contraseña';
  constructor() { }

  ngOnInit(): void {
  }

}
