import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios.service';
import { FormularioComponent } from './formulario/formulario.component';
import { TableroComponent } from './tablero/tablero.component';
import { ContenedorComponent } from './contenedor/contenedor.component';



@NgModule({
  declarations: [
    // FormularioComponent,
    // TableroComponent,
    // ContenedorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServiciosService],
  bootstrap: []
})
export class CarreraModule { }
