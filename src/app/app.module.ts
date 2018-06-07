import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
