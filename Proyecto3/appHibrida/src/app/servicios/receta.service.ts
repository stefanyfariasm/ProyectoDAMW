import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private http: HttpClient) { }

  obtenerRecetas() {
    return this.http.get('http://localhost:3000/recetas')
    }
  obtenerIngredientes() {
      return this.http.get('http://localhost:3000/ingredientes')
      }



      
  obtenerRecetasPorId(id: number) {
        return this.http.get('http://localhost:3000/recetas/'+id.toString())
        }
  obtenerIngredientesFiltro(id:number) {
          return this.http.get('http://localhost:3000/recetas/ingredientes/'+id)
          }
  obtenerIngredientesEsp(id:number){
    return this.http.get('http://localhost:3000/recetas/ingredientes/'+id.toString())
  }
}