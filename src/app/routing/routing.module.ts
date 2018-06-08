import { FrutaComponent } from './../components/fruta/fruta.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from '../components/empleados/empleados.component';

const appRoutes: Routes = [
  { path: '', component: EmpleadosComponent },
  { path: 'empleado', component: EmpleadosComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: '**', component: EmpleadosComponent }
];


@NgModule({
  imports: [
  ],
  declarations: []
})
export class RoutingModule { }

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
