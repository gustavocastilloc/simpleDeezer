import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  closeSession(){
    this.router.navigateByUrl('/auth/login');
  }
  enviarBuscadorLetra(){
    this.router.navigateByUrl('/music/buscar-por-letra');
  }
  enviarBuscadorArtista(){
    this.router.navigateByUrl('/music/buscar-por-artista');
  }

}
