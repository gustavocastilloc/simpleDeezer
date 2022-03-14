import { Deezer } from './../../../../shared/interfaces/Deezer';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Datum } from 'src/app/shared/interfaces/Deezer';
import { ApiDeezerService } from 'src/app/shared/services/api-deezer.service';

@Component({
  selector: 'app-buscarpor-artista',
  templateUrl: './buscarpor-artista.component.html',
  styleUrls: ['./buscarpor-artista.component.scss']
})
export class BuscarporArtistaComponent implements OnInit {
  artistForm : FormGroup;
  constructor(private servicioapi :ApiDeezerService) {
    this.artistForm = new FormGroup({
      artistName : new FormControl('',[Validators.required])
    });
   }
   show: boolean = false;
  arregloDatum : Datum[]=[];
  DatoRespuesta : Deezer ={data: this.arregloDatum, total: 0, next: ''};
  ngOnInit(): void {

  }
  loadDataApi(){
    this.servicioapi.callMusicFromDeezer(this.artistForm.value.artistName).subscribe(
      {
        next: (data)=>{
          this.DatoRespuesta=data;
          this.arregloDatum=this.DatoRespuesta.data;
          console.log(data);
        },
        error: (error)=>{
          console.error(error);
        }
      }
    );
    this.show=true;
  }

}
