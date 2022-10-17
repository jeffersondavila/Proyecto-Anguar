import { Component, OnInit } from '@angular/core';
import { interfaceSede } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent {
  title:string='Mantenimiento Sede';
  codigo:string='Codigo sede';
  codigoFacultad:string='Codigo facultad';
  nombre:string='Nombre';
  estado:string='Email';

  sede: interfaceSede[] = [];
  constructor(private sedeService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.sedeService.getSede().subscribe(sede => this.sede = sede);
  }
}
