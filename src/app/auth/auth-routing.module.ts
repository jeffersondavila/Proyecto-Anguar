import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CarreraComponent } from './pages/carrera/carrera.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'carrera',
        component: CarreraComponent
      },
      {
        path: '**',
        redirectTo: 'login'
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
export class AuthRoutingModule { }
