import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarUsuarioComponent } from './Ingresar/ingresar.component';
import { CrearUsuarioComponent } from './Crear/crear.component';
import { RecuperarUsuarioComponent } from './Recuperar/recuperar.component';


@NgModule({
  declarations: [
    IngresarUsuarioComponent,
    CrearUsuarioComponent,
    RecuperarUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngresarUsuarioComponent,
    CrearUsuarioComponent,
    RecuperarUsuarioComponent
  ]
})
export class LoginModule { }
