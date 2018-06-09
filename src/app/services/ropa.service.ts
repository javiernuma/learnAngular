import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre_prenda = 'pantalones';
  public coleccion_ropa = ['pantalones blancos', 'camisas rojas'];
  constructor() { }
  prueba( valor) {
    return this.nombre_prenda = valor;
  }
  addRopa(valor: string): Array<String> {
    this.coleccion_ropa.push(valor);
    return this.getRopa();
  }
  getRopa() {
    return this.coleccion_ropa;
  }
  deleteRopa(index: number) {
    this.coleccion_ropa.splice(index, 1);
    return this.getRopa();
  }
}
