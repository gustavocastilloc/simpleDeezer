import { Component, OnInit } from '@angular/core';
import { Datum,Deezer } from 'src/app/shared/interfaces/Deezer';
import { ApiDeezerService } from 'src/app/shared/services/api-deezer.service';

@Component({
  selector: 'app-buscarporletra',
  templateUrl: './buscarporletra.component.html',
  styleUrls: ['./buscarporletra.component.scss']
})
export class BuscarporletraComponent implements OnInit {

  constructor(private servicioApi: ApiDeezerService) {

   }
  letra: string = '';
  mostrar: boolean = false;
  arregloDatum : Datum[]=[];
  DatoRespuesta : Deezer ={data: this.arregloDatum, total: 0, next: ''};
  ngOnInit(): void {
  }
  letras: string[] =['A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  showBox(letra :string){
    this.letra=letra;
    console.log(this.letra);
    this.mostrar=true;
    this.loadApiData();
  }
  loadApiData(){
    this.servicioApi.callMusicFromDeezer(this.letra).subscribe({
      next: (data)=>{
        this.DatoRespuesta=data;
        this.arregloDatum=this.DatoRespuesta.data;
        console.log(data);
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }
}
