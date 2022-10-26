import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interfaceCarrera } from '../../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title: string = 'Mantenimiento Carrera';
  codigo: string = 'Codigo carrera';
  codigoFacultad: string = 'Codigo facultad';
  nombre: string = 'Nombre';
  estado: string = 'Email';

  addCarrera: interfaceCarrera = {
    codigoFacultad: 0,
    nombre: '',
    estado: 1,
  }

  constructor(private carreraService: MantenimientoServiciosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { }

  guardar() {
    if (this.addCarrera.id) {
      //actualizar
      this.carreraService.actualizarCarrera(this.addCarrera)
        .subscribe(addCarrera => console.log('Actualizando...', addCarrera))
    } else {
      //crear
      this.carreraService.agregarCarrera(this.addCarrera)
        .subscribe(addCarrera => console.log('Agregando...', addCarrera.id))
    }
  }

  borrar() {
    this.carreraService.eliminar(this.addCarrera.id!)
      .subscribe(resp => {
        this.router.navigate(['/mantenimientos/carrera'])
      });
  }
}
