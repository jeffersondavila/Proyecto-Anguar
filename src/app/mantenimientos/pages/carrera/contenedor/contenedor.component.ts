import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interfaceCarrera } from '../../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  title: string = 'Mantenimiento Carrera';

  ingresos: interfaceCarrera[] = [];

  agregarNuevo(argumento: interfaceCarrera) {
    this.ingresos.push(argumento);
    this.carreraService.getCarrera().subscribe(carrera => this.ingresos = carrera);
  }

  constructor(private carreraService: MantenimientoServiciosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //Llenado de tabla
  }

}
