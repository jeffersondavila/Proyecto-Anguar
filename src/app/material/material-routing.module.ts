import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionAlumnoComponent } from '../asignaciones/pages/asignacion-alumno/asignacion-alumno.component';
import { AsignacionProfesorComponent } from '../asignaciones/pages/asignacion-profesor/asignacion-profesor.component';
import { CrearUsuarioComponent } from '../login/Crear/crear.component';
import { CarreraComponent } from '../mantenimientos/pages/carrera/carrera.component';
import { CursoComponent } from '../mantenimientos/pages/curso/curso.component';
import { FacultadComponent } from '../mantenimientos/pages/facultad/facultad.component';
import { MaestroComponent } from '../mantenimientos/pages/maestro/maestro.component';
import { PerfilComponent } from '../mantenimientos/pages/perfil/perfil.component';
import { SeccionComponent } from '../mantenimientos/pages/seccion/seccion.component';
import { SedeComponent } from '../mantenimientos/pages/sede/sede.component';
import { ExamenComponent } from '../mantenimientos/pages/examen/examen.component';
import { NotaComponent } from '../mantenimientos/pages/nota/nota.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carrera',
        component: CarreraComponent
      },
      {
        path: 'curso',
        component: CursoComponent
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
        path: 'usuarios',
        component: CrearUsuarioComponent
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
        path: 'examenes',
        component: ExamenComponent
      },
      {
        path: 'notas',
        component: NotaComponent
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
