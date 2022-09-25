import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeImageComponent } from './heroe-image/heroe-image.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeroeImageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    HeroeImageComponent
  ]
})
export class MaterialModule { }
