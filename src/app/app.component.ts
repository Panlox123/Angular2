import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'proyecto "Reparacion de Pistas"';
  montoInversion: number | null = null;
  laMar: number = 0;
  abancay: number = 0;
  julio: number = 0;
  aviacion: number = 0;
  tacna: number = 0;

  calcularReparticion() {
    if (this.montoInversion !== null) {
      this.laMar = this.montoInversion * 0.35; // 35%
      this.abancay = this.montoInversion * 0.25; // 25%
      this.julio = this.montoInversion * 0.10; // 10%
      this.aviacion = this.montoInversion * 0.15; // 15%
      this.tacna = this.montoInversion - (this.laMar + this.abancay + this.julio + this.aviacion); // Resto
    }
  }
}
