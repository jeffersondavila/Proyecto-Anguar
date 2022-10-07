import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionAlumnoComponent } from './pages/asignacion-alumno/asignacion-alumno.component';
import { AsignacionProfesorComponent } from './pages/asignacion-profesor/asignacion-profesor.component';
import { AsiganacionesRoutingModule } from './asiganaciones-routing.module';
import { HomeAsignacionesComponent } from './pages/home-asignaciones/home-asignaciones.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AsignacionAlumnoComponent,
    AsignacionProfesorComponent,
    HomeAsignacionesComponent
  ],
  imports: [
    CommonModule,
    AsiganacionesRoutingModule,
    MaterialModule
  ]
})
export class AsignacionesModule { }
