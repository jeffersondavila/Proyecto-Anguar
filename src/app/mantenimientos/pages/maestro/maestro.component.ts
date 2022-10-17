import { Component, OnInit } from '@angular/core';
import { interfaceProfesor } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.css']
})
export class MaestroComponent {
  title:string='Mantenimiento Profesor';
  codigo:string='Codigo profesor';
  nombre:string='Nombre';
  direccion:string='Dirección';
  telefono:string='Número telefonico';
  email:string='Email';

  profesor:interfaceProfesor[]=[];
  constructor(private profesorService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.profesorService.getProfesor().subscribe(profesor=>this.profesor = profesor);
  }
}
