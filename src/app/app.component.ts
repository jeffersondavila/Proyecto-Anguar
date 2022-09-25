import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Primera fase del proyecto';
  mostrar: boolean = false

  mostrarOcultar() {

    if (this.mostrar) {
      // muestra el contenido
      this.mostrar = false
    } else {
      // oculta el contenido
      this.mostrar = true
    }
  }
}
