import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(public http: HttpClient) { }

  getproductos() {
    return this.http.get('http://localhost:8000/api/app1/');
  }
}
