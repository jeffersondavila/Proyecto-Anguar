import { Component, OnInit } from '@angular/core';
import { interfaceSeccion } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  title:string='Mantenimiento Sección';
  codigo:string='Codigo sección';
  nombre:string='Nombre';
  estado:string='Email';

  seccion: interfaceSeccion[] = [];
  constructor(private seccionService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.seccionService.getSeccion().subscribe(seccion => this.seccion = seccion);
  }
}
