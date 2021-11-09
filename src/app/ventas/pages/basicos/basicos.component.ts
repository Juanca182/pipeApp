import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent   {

  nombreLower: string = 'Juan';
  nombreUpper: string = 'JUAN';
  nombreCompleto: string = 'jUaN CArlOS';

  fecha: Date = new Date();

  

}
