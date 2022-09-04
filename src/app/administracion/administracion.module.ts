import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnoComponent } from './alumno/alumno.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CursoComponent } from './curso/curso.component';
import { ExamenComponent } from './examen/examen.component';
import { FacultadComponent } from './facultad/facultad.component';
import { MaestroComponent } from './maestro/maestro.component';
import { NotaComponent } from './nota/nota.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SeccionComponent } from './seccion/seccion.component';
import { SedeComponent } from './sede/sede.component';


@NgModule({
  declarations: [
      AlumnoComponent,
      CarreraComponent,
      CursoComponent,
      ExamenComponent,
      FacultadComponent,
      MaestroComponent,
      NotaComponent,
      PerfilComponent,
      SeccionComponent,
      SedeComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    exports: [
      AlumnoComponent,
      CarreraComponent,
      CursoComponent,
      ExamenComponent,
      FacultadComponent,
      MaestroComponent,
      NotaComponent,
      PerfilComponent,
      SeccionComponent,
      SedeComponent
    ]
})
export class AdministracionModule { }