import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarUsuarioComponent } from './pages/Ingresar/ingresar.component';
import { RecuperarUsuarioComponent } from './pages/Recuperar/recuperar.component';
import { CrearUsuarioComponent } from './pages/Crear/crear.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    IngresarUsuarioComponent,
    CrearUsuarioComponent,
    RecuperarUsuarioComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
