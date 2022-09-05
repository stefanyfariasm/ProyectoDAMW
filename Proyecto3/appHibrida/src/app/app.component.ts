import { Component } from '@angular/core';
import {RecetaService } from './servicios/receta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appHibrida';

  constructor(private recetaService : RecetaService ) {}
}
