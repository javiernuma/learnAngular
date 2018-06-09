import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }
  getPrueba() {
    return 'Hola mundo desde el servicio';
  }
  getArticulos() {
    return this._http.get<any[]>(this.url).pipe(map(data => data));
  }
}
