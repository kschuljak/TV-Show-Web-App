import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvSearchData } from './itv-search-data';
import { map } from 'rxjs/operators';
//import { generateKeyPairSync } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient: HttpClient) { }

  getShowInfo(showName: string){ //
    return this.httpClient.get<ITvSearchData>(`https://api.tvmaze.com/singlesearch/shows?q=${showName}&appid=${environment.appId}`)
    .pipe(map(data => this.transformToItvsearch(data) ))
  }

  private transformToItvsearch(data: ITvSearchData){
    return {
      showName: data.name,
      showStatus: data.status,
     // showGenres: data.show.genres[0], //not sure how to return all elements of an array here - will investigate
      showSummary: data.summary,
      scheduleTime: data.schedule.time,
     // scheduleDays: data.show.schedule.days[0], //also returns an array
      showNetwork: data.network.name
    }
  }
}

