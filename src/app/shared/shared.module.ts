import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
  ]
})
export class sharedModule { }
