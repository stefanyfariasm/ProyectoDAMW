import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';
import { AlbumComponent } from './album/album.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { FormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatPaginatorModule} from '@angular/material/paginator';

import { DescripcionComponent } from './descripcion/descripcion.component';
import { TablaComponent } from './tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';

import { GraficoComponent } from './grafico/grafico.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PrincipalComponent,
    AlbumComponent,
    DescripcionComponent,
    TablaComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
