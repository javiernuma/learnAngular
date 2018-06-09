import { Component, OnInit } from '@angular/core';
import { RopaService } from '../../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo: String;
  public listado_ropa: Array<String>;
  public prenda_a_Guardar: string;
  public fecha;
  public nombre;
  constructor(
    public _ropaService: RopaService
  )  {
    this.titulo = 'Componente home';
    this.fecha = new Date(2018 , 6 , 8);
    this.nombre = 'Javier NUMA';
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
  }
  addPrenda() {
    this._ropaService.addRopa(this.prenda_a_Guardar);
    this.prenda_a_Guardar = null;
  }
  eliminarPrenda(index: number) {
    this._ropaService.deleteRopa(index);
  }

}
