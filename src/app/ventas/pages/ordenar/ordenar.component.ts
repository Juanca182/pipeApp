import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = true;

  

  constructor() { }

  ngOnInit(): void {
  }

  cambiar( ) {

    return this.enMayuscula = !this.enMayuscula;
  }

}
