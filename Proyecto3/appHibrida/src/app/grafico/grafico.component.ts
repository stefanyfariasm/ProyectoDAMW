import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../servicios/receta.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


class metodo{
  id:String;
  nombre:string;
  descripcion:string;

  constructor(id:string,nombre:string, descripcion:string){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
  }
}


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {


  metodos:metodo[]=[{"id":"1","nombre":"crema de leche","descripcion":"1 taza crema de leche"},
  {"id":"2","nombre":"frutas","descripcion":"3 tazas frutas"},
  {"id":"3","nombre":"endulzante","descripcion":"2 sobres endulzante"},
  {"id":"4","nombre":"chocolate","descripcion":"1 barra de chocolate"},
  {"id":"5","nombre":"hidrógeno","descripcion":"1 taza de hidrógeno"},
]
  constructor() { }

  ngOnInit(): void {
  }

}