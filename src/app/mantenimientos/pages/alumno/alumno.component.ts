import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interfaceAlumno } from '../interfaces/admin.interface';

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

  // @Input() alumno: interfaceAlumno = {
  //   codigo: 0,
  //   nombre: '',
  //   telefono: 0,
  //   email: '',
  //   direccion: '',
  //   estado: 1
  // }
  // @Output() nuevoAlumno: EventEmitter<interfaceAlumno> = new EventEmitter();
  // ingresar() {
  //   if (this.alumno.nombre.trim().length === 0) {
  //     return;
  //   }
  //   console.log(this.alumno);
  //   this.nuevoAlumno.emit(this.alumno);
  //   this.alumno = {
  //     codigo: 0,
  //     nombre: '',
  //     telefono: 0,
  //     email: '',
  //     direccion: '',
  //     estado: 1
  //   }
  // }

  // @Input() registros: interfaceAlumno[] = [];
  // agregarNuevousuario(argumento: interfaceAlumno) {
  //   this.registros.push(argumento);
  // }
}