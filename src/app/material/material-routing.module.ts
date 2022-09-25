import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionAlumnoComponent } from '../asignaciones/pages/asignacion-alumno/asignacion-alumno.component';
import { AsignacionProfesorComponent } from '../asignaciones/pages/asignacion-profesor/asignacion-profesor.component';
import { CarreraComponent } from '../mantenimientos/pages/carrera/carrera.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path: 'carrera',
        component: CarreraComponent
      },
      {
        path: 'asignacionAlumno',
        component: AsignacionAlumnoComponent
      },
      {
        path: 'asignacionProfesor',
        component: AsignacionProfesorComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialRoutingModule { }
