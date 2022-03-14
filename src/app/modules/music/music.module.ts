import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BuscarporletraComponent } from './pages/buscarporletra/buscarporletra.component';
import { BuscarporArtistaComponent } from './pages/buscarpor-artista/buscarpor-artista.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ItemArtistaComponent } from './components/item-artista/item-artista.component';

@NgModule({
  declarations: [
    HomeComponent,
    BuscarporletraComponent,
    BuscarporArtistaComponent,
    TopBarComponent,
    ItemArtistaComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    ReactiveFormsModule
  ]
})
export class MusicModule { }
