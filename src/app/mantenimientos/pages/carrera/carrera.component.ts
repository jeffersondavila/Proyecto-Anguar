import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interfaceCarrera } from 'src/app/interfaces/interfaces';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent {
  title:string='Mantenimiento Carrera';
  codigo:string='Codigo carrera';
  codigoFacultad:string='Codigo facultad';
  nombre:string='Nombre';
  estado:string='Email';

  @Input() registroCarrera: interfaceCarrera = {
    codigo: '',
    codigoFacultad: '',
    nombre: '',
  }
  @Output() onNewUser: EventEmitter<interfaceCarrera> = new EventEmitter();
  ingresar() {
    if (this.registroCarrera.nombre.trim().length === 0) {
      return;
    }
    console.log(this.registroCarrera);
    this.onNewUser.emit(this.registroCarrera)
    this.registroCarrera = {
      codigo: '',
      codigoFacultad: '',
      nombre: '',
    }
  }

  // Tabla de datos
  @Input() tablaCarreras: interfaceCarrera[] = [];

  // Intersección datos
  carreras: interfaceCarrera[] = [];
  agregarNuevaCarrera(argumento: interfaceCarrera) {
    this.carreras.push(argumento);
  }
  constructor(private ingresoServ: ServiciosService) {
    this.carreras = this.ingresoServ.serviceCarreras;
  }
}
