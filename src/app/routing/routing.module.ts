import { PlantillasComponent } from './../components/plantillas/plantillas.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from '../components/empleados/empleados.component';
import { FrutaComponent } from './../components/fruta/fruta.component';
import { ContactoComponent } from './../components/contacto/contacto.component';
import { HomeComponent } from './../components/home/home.component';
import { CochesComponent } from './../components/coches/coches.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleado', component: EmpleadosComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:page', component: ContactoComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'plantillas', component: PlantillasComponent },
  { path: '**', component: HomeComponent }
];



// export class RoutingModule { }

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
