import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {
  title:string='Notas';
  codigo:string='Codigo nota';
  codigoExamen:string='Codigo examen';
  maximo:string='Nota maxima';
  minimo:string='Nota minima';
  estado:string='estado';
}
