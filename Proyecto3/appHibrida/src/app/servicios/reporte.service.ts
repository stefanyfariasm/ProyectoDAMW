import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  generarReporte(){
    return this.http.get("https://norhelados-default-rtdb.firebaseio.com/collection.json");
  }

  generarReporteFiltro(idReceta:number){
    return this.http.get("https://norhelados-default-rtdb.firebaseio.com/collection.json?orderBy=%22idReceta%22&equalTo="+idReceta.toString());
  }
}
