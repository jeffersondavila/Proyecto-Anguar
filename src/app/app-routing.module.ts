import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'mantenimientos',
    loadChildren: () => import('./mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
  },
  {
    path: 'asignaciones',
    loadChildren: () => import('./asignaciones/asignaciones.module').then(m => m.AsignacionesModule)
  },
  {
    path: 'login-ingreso',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.sharedModule)
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: 'login'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
