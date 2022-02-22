import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvSearchData } from './itv-search-data';
import { generateKeyPairSync } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient: HttpClient) { }

  getShowInfo(name: string){
    return this.httpClient.get<ITvSearchData>(`https://api.tvmaze.com/search/shows?q=${name}&appid=${environment.appId}`)
  }

  private transformToItvsearch(data: ITvSearchData){
    return {
      showName: data.show.name,
      showStatus: data.show.status,
      showGenres: data.genres[0], //not sure how to return all elements of an array here - will investigate
      showSummary: data.show.summary,
      scheduleTime: data.show.schedule.time,
      scheduleDays: data.show.schedule.days[0], //also returns an array
      showNetwork: data.show.network.name
    }
  }
}
