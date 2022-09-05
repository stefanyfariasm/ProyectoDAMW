import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';
import { AlbumComponent } from './album/album.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { TablaComponent } from './tabla/tabla.component';

import { GraficoComponent} from './grafico/grafico.component'

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "grafico", component: GraficoComponent },
  { path: "album", component: AlbumComponent },
  { path: "descripcion", component: DescripcionComponent },
  { path: "tabla", component: TablaComponent },
  
  { path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
