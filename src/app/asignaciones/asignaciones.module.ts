import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionAlumnoComponent } from './pages/asignacion-alumno/asignacion-alumno.component';
import { AsignacionProfesorComponent } from './pages/asignacion-profesor/asignacion-profesor.component';
import { AsiganacionesRoutingModule } from './asiganaciones-routing.module';

@NgModule({
  declarations: [
    AsignacionAlumnoComponent,
    AsignacionProfesorComponent
  ],
  imports: [
    CommonModule,
    AsiganacionesRoutingModule
  ]
})
export class AsignacionesModule { }
