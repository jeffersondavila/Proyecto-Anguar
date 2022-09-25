import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { CursoComponent } from './pages/curso/curso.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { FacultadComponent } from './pages/facultad/facultad.component';
import { MaestroComponent } from './pages/maestro/maestro.component';
import { NotaComponent } from './pages/nota/nota.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SeccionComponent } from './pages/seccion/seccion.component';
import { SedeComponent } from './pages/sede/sede.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path: 'prueba',
        component: PruebaComponent
      },
      {
        path: 'carrera',
        component: CarreraComponent
      },
      {
        path: 'curso',
        component: CursoComponent
      },
      {
        path: 'examen',
        component: ExamenComponent
      },
      {
        path: 'facultad',
        component: FacultadComponent
      },
      {
        path: 'maestro',
        component: MaestroComponent
      },
      {
        path: 'nota',
        component: NotaComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'seccion',
        component: SeccionComponent
      },
      {
        path: 'sede',
        component: SedeComponent
      },
      {
        path: '**',
        redirectTo: 'prueba'
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
export class MantenimientosRoutingModule { }
