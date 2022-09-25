import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes = [
  {
    path: 'mantenimientos',
    loadChildren: () => import('./mantenimientos/mantenimientos.module').then(m=>m.MantenimientosModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component: ErrorPageComponent
    redirectTo: '404'
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
