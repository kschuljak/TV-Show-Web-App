import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient: HttpClient) { }

  getShowInfo(name: string){
    this.httpClient.get(`https://api.tvmaze.com/search/shows?q=${name}&appid=${environment.appId}`)
  }
}
