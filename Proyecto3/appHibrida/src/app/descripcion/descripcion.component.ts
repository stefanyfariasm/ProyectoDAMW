import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../servicios/receta.service';
import { Receta } from '../interfaz/receta';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  item : Receta = {
    idReceta: 0,
    nombre:"GelatoMix",
    descripcion: "helado de mix de frutas",
    preparacion: "preparacion",
    pais:"Ecuador",
    fechacreacion:"",
    idIngrediente:0,
    imagen:"https://dulcesdiabeticos.com/wp-content/uploads/2017/06/helados-de-frutas-saludables-sin-azucar_opt-1.jpg"
  };

 ingrediente: any[] = [];

  constructor(private recetaService: RecetaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    

  }

}

