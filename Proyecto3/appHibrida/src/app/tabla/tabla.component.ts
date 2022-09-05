import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReporteService } from '../servicios/reporte.service';
import { RecetaService } from '../servicios/receta.service';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {

  data:any[] = [];
  pageSize = 30;
  desde:number=0;
  hasta:number=30;
  nombreRecetas:any[] = []
  cantidadDatos = 0;
  constructor(private reporteService: ReporteService, private recetaService:RecetaService) { }
  
  
  cambiarPagina(e: PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }


  allData():void{
    this.reporteService.generarReporte().subscribe(respuesta =>{
      this.data = respuesta as any;
      this.cantidadDatos = Object.keys(this.data).length;
      console.log(this.cantidadDatos)
    })
  }

  ngOnInit(): void {
    this.allData();
    this.recetaService.obtenerRecetas().subscribe(respuesta => {
      this.nombreRecetas = respuesta as any;
    })
  }

  /*Funcion con el evento del selector para filtrar datos*/
  recetaFiltro(receta:number){
    if(receta == 0){
      this.allData();
    }
    this.reporteService.generarReporteFiltro(receta).subscribe(respuesta =>{
     this.data = respuesta as any;
     this.cantidadDatos = Object.keys(this.data).length;
    })
}
}
