import { BuscarporletraComponent } from './pages/buscarporletra/buscarporletra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarporArtistaComponent } from './pages/buscarpor-artista/buscarpor-artista.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buscar-por-letra', component :BuscarporletraComponent},
  {path: 'buscar-por-artista',  component: BuscarporArtistaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
