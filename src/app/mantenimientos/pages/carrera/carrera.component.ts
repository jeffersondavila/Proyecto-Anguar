import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { interfaceCarrera } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent {
  // title: string = 'Mantenimiento Carrera';
  // codigo: string = 'Codigo carrera';
  // codigoFacultad: string = 'Codigo facultad';
  // nombre: string = 'Nombre';
  // estado: string = 'Email';

  // carrera: interfaceCarrera[] = [];

  // addCarrera: interfaceCarrera = {
  //   codigoFacultad: 0,
  //   nombre: '',
  //   estado: 1,
  // }

  // constructor(private carreraService: MantenimientoServiciosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  // ngOnInit(): void {
  //   //Llenado de tablaa
  //   this.carreraService.getCarrera().subscribe(carrera => this.carrera = carrera);
  // }

  // guardar() {
  //   if (this.addCarrera.id) {
  //     //actualizar
  //     this.carreraService.actualizarCarrera(this.addCarrera)
  //       .subscribe(addCarrera => console.log('Actualizando...', addCarrera))
  //   } else {
  //     //crear
  //     // this.carreraService.agregarCarrera(this.addCarrera)
  //     //   .subscribe(addCarrera => {
  //     //     this.router.navigate(['/mantenimientos/carrera', addCarrera.id]);
  //     //   })
  //     this.carreraService.agregarCarrera(this.addCarrera)
  //       .subscribe(addCarrera => console.log('Agregando...', addCarrera.id))
  //   }
  // }

  // borrar() {
  //   this.carreraService.eliminar(this.addCarrera.id!)
  //     .subscribe(resp => {
  //       this.router.navigate(['/mantenimientos/carrera'])
  //     });
  //   // this.carreraService.getCarrera().subscribe(carrera => this.carrera = carrera);
  // }

  // cambios() {
  //   this.carreraService.getCarrera().subscribe(carrera => this.carrera = carrera);
  // }
}
