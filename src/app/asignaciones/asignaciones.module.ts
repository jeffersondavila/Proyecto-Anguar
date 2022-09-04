import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionAlumnoComponent } from './asignacion-alumno/asignacion-alumno.component';
import { AsignacionProfesorComponent } from './asignacion-profesor/asignacion-profesor.component';


@NgModule({
  declarations: [
    AsignacionAlumnoComponent,
    AsignacionProfesorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsignacionAlumnoComponent,
    AsignacionProfesorComponent
  ]
})
export class AsignacionesModule { }
