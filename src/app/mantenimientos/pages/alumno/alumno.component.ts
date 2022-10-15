import { Component } from '@angular/core';
import { interfaceAlumno } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  title: string = 'Mantenimiento Alumno';
  codigo: string = 'Carné Alumno';
  nombre: string = 'Nombre';
  direccion: string = 'Dirección';
  telefono: string = 'Número telefonico';
  email: string = 'Email';

  alumno:interfaceAlumno[]=[];
  constructor(private alumnoService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumno().subscribe(alumno=>this.alumno = alumno);
  }
}