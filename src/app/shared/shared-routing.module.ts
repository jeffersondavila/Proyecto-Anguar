import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: '404',
        component: ErrorPageComponent
      },
      {
        path: '**',
        redirectTo: '404'
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
export class SharedRoutingModule { }
