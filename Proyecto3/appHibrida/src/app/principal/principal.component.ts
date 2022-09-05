import {ElementRef, ViewChild } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../servicios/receta.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  ingredientes: any[] = [];
  dataSource: any[] = [];
  event: string='';
  data:String = '';  
  showFiller = false;
    
  constructor(private recetaService: RecetaService) { }

  filtrarIngredientes(ingrediente:number){
 
    if(ingrediente !=0){
      this.recetaService.obtenerIngredientesFiltro(ingrediente).subscribe(respuesta => {
        this.dataSource = respuesta as any;
      })
    }
    else{
      this.recetaService.obtenerRecetas().subscribe(respuesta => {
        this.dataSource = respuesta as any;
      })
    }
    
  }
  objectKeys: any;

  ngOnInit(): void {
      this.recetaService.obtenerRecetas().subscribe(respuesta => {
        this.dataSource = respuesta as any;
        console.log(this.dataSource)
      })
      this.recetaService.obtenerIngredientes().subscribe(respuesta => {
        this.ingredientes= respuesta as any;
      })
      console.log(this.data);
    }

}
