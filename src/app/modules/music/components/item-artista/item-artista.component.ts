import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-item-artista',
  templateUrl: './item-artista.component.html',
  styleUrls: ['./item-artista.component.scss']
})
export class ItemArtistaComponent implements OnInit {
  @Input ('itemtitle') itemtitle : string = '';
  @Input ('artistPicture') artistPicture : string ='';
  @Input ('albumTitle') albumTitle : string='';
  @Input ('artistName') artistName : string='';
  @Input('duration') duration :number=0;
  @Input('trackmp3') trackmp3 :string='';
  minseg : string ='';
  constructor() {

   }
  ngOnInit(): void {
   this.minseg=''+Math.trunc(this.duration/60)+':'+Math.trunc(((this.duration/60)-(Math.trunc(this.duration/60)))*100);
  }

}
