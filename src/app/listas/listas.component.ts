import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  constructor(public servicioservice: ServicioService) { }
  productos: any;
  ngOnInit(): void {    this.obtener_productos();  }
  obtener_productos()
  {
    this.servicioservice.getproductos().subscribe(result=>this.productos=result
    )
  }
}
