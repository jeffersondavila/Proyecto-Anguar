import { Component, OnInit } from '@angular/core';
import { interfaceNotas } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

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

  nota: interfaceNotas[] = [];
  constructor(private notaService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.notaService.getNota().subscribe(nota => this.nota = nota);
  }
}
