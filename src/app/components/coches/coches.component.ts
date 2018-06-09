import { PeticionesService } from './../../services/peticiones.service';
import { Component, OnInit } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches: Array<Coche>
  public articulos;

  constructor(
    private _peticiones: PeticionesService
  ) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('mustang', '1456', 'red'),
      new Coche('ford', '500', 'black'),
      new Coche('hyundai', '1000', 'blue'),
    ];
  }

  ngOnInit() {
    this.getResItems();
  }
  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  }
  getResItems() {
    this._peticiones.getArticulos().subscribe(
      restItems => {
        this.articulos = restItems;
        console.log(restItems);
      }
    );
  }

}
