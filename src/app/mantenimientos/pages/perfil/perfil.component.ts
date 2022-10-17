import { Component, OnInit } from '@angular/core';
import { interfacePerfil } from '../interfaces/admin.interface';
import { MantenimientoServiciosService } from '../services/mantenimiento-servicios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  title:string='Mantenimiento Perfil';
  codigo:string='Codigo perfil';
  nombre:string='Nombre';
  descripcion:string='Descripción';
  estado:string='Email';

  perfil: interfacePerfil[] = [];
  constructor(private perfilService: MantenimientoServiciosService) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(perfil => this.perfil = perfil);
  }
}
