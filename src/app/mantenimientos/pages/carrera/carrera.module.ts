import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServiciosService],
  bootstrap: []
})
export class CarreraModule { }
