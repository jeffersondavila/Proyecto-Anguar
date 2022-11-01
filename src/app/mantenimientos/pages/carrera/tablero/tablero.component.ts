import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interfaceCarrera } from '../../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  @Input() carrera: interfaceCarrera[] = [];

  constructor(private carreraService: MantenimientoServiciosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //Llenado de tabla
    this.carreraService.getCarrera().subscribe(carrera => this.carrera = carrera);
  }
}