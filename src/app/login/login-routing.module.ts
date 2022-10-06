import { NgModule } from '@angular/core';
import { CrearUsuarioComponent } from './pages/Crear/crear.component';
import { IngresarUsuarioComponent } from './pages/Ingresar/ingresar.component';
import { RecuperarUsuarioComponent } from './pages/Recuperar/recuperar.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path: 'crear',
        component: CrearUsuarioComponent
      },
      {
        path: 'ingresar',
        component: IngresarUsuarioComponent
      },
      {
        path: 'recuperar',
        component: RecuperarUsuarioComponent
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
export class LoginRoutingModule { }
