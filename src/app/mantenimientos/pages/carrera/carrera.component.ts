import { Component } from '@angular/core';
import { interfaceCarrera } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

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

  // @Input() registroCarrera: interfaceCarrera = {
  //   codigo: '',
  //   codigoFacultad: '',
  //   nombre: '',
  // }
  // @Output() onNewUser: EventEmitter<interfaceCarrera> = new EventEmitter();
  // ingresar() {
  //   if (this.registroCarrera.nombre.trim().length === 0) {
  //     return;
  //   }
  //   console.log(this.registroCarrera);
  //   this.onNewUser.emit(this.registroCarrera)
  //   this.registroCarrera = {
  //     codigo: '',
  //     codigoFacultad: '',
  //     nombre: '',
  //   }
  // }

  // Tabla de datos
  // @Input() tablaCarreras: interfaceCarrera[] = [];

  // // Intersección datos
  // carreras: interfaceCarrera[] = [];
  // agregarNuevaCarrera(argumento: interfaceCarrera) {
  //   this.carreras.push(argumento);
  // }
  // constructor(private ingresoServ: ServiciosService) {
  //   this.carreras = this.ingresoServ.serviceCarreras;
  // }

  //Llenado de tabla
  carrera:interfaceCarrera[]=[];
  constructor(private carreraService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.carreraService.getCarrera().subscribe(carrera=>this.carrera = carrera);
  }
}
