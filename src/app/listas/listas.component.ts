import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListadoComponent implements OnInit {
  constructor(public servicioservice: ServicioService) { }
  productos: any;
  ngOnInit(): void {    this.obtener_Usuarios();  }
  obtener_Usuarios()
  {
    this.servicioservice.getProductos().subscribe(result=>this.productos=result
    )
  }
}
