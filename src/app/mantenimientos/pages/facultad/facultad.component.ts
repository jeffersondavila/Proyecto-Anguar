import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { interfaceFacultad } from '../interfaces/admin.interface';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  title:string='Mantenimiento Facultad';
  codigo:string='Codigo facultad';
  nombre:string='Nombre';
  estado:string='Email';

  facultad:interfaceFacultad[]=[];
  constructor(private facultadService: ServiciosService) { }

  ngOnInit(): void {
    this.facultadService.getFacultad().subscribe(facultad=>this.facultad = facultad);
  }
}