import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  public title = 'componente empleados';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: Boolean;
  constructor() {
    this.empleado = new Empleado('karl', 45, 'cocinero', true);
    this.trabajadores = [
       new Empleado('larry', 50, 'guardia', false),
       new Empleado('brat', 35, 'administrativo', true),
       new Empleado('javier', 60, 'programador', true)
    ];
    this.trabajador_externo = true;
   }

  ngOnInit() {
    console.log(this.empleado);
  }
  cambiarExterno(valor) {
    this.trabajador_externo = valor;
  }

}
