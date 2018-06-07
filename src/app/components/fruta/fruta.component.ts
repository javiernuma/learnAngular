import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {
  public nombre_componente = 'Componente Fruta';
  public listado_Frutas = ['Manzana', 'Pera', 'Naranja, Sandia'];

  public nombre: String;
  public edad: Number;
  public mayordeEdad: Boolean;
  public trabajos: Array<any>;
  constructor() {
    this.nombre = 'john';
    this.edad = 32;
    this.mayordeEdad = true;
    this.trabajos = ['carpintero', 48, 'fontanero'];
   }
   holamundo(nombre: String) {
     alert('holaMundo' + nombre);
   }

  ngOnInit() {
    this.holamundo('jhon doe');

    /* variables y alcance
    var uno = 8;
    var dos = 45;

    if (uno === 8) {
      let uno = 3;
      var dos = 88;
      console.log( 'DENTRO DEL IF:' + uno); // 3
      // fin del alcance del let
    }
    console.log( 'AFUERA DEL IF:' + uno); // 8*/

  }

}
