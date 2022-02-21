import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvSearchData } from './itv-search-data';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient: HttpClient) { }

  getShowInfo(name: string){
    return this.httpClient.get<ITvSearchData>(`https://api.tvmaze.com/search/shows?q=${name}&appid=${environment.appId}`)
  }
}

