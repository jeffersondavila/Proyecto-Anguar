import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionAlumnoComponent } from './pages/asignacion-alumno/asignacion-alumno.component';
import { AsignacionProfesorComponent } from './pages/asignacion-profesor/asignacion-profesor.component';
import { HomeAsignacionesComponent } from './pages/home-asignaciones/home-asignaciones.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path: 'HomeAsignaciones',
        component: HomeAsignacionesComponent
      },
      {
        path: 'asignacionAlumno',
        component: AsignacionAlumnoComponent
      },
      {
        path: 'asignacionProfesor',
        component: AsignacionProfesorComponent
      },
      {
        path: '**',
        redirectTo: 'HomeAsignaciones'
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
export class AsiganacionesRoutingModule { }
