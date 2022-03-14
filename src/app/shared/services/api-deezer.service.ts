import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Deezer } from '../interfaces/Deezer';
@Injectable({
  providedIn: 'root'
})
export class ApiDeezerService {
  url_api : string = environment.BASE_URL_API;
  constructor(private http: HttpClient) { }
  callMusicFromDeezer(letter : string): Observable<Deezer>{
    return this.http.get<Deezer>(`${this.url_api}/search?q=${letter}`);
  }
}
