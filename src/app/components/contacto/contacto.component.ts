import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public titulo: String;
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Componente contacto';
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
    });
  }
  redirigir() {
    this._router.navigate(['/contacto', 'javiernuma']);
  }
  redirigirHome() {
    this._router.navigate(['/home']);
  }


}
