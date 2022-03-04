import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvSearchData } from './itv-search-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient: HttpClient) { }

  getShowInfo(showName: string){
    return this.httpClient.get<ITvSearchData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .pipe(map(data => this.transformToItvsearch(data) ))
  }

  private transformToItvsearch(data: ITvSearchData){
    return {
      showName: data.name,
      showStatus: data.status,
      showGenres: data.genres.map(x => " " + x),
      showSummary: data.summary.replace(/<[^>]*>/g, ''),
      scheduleTime: data.schedule.time,
      scheduleDays: data.schedule.days.map(x => " " + x),
      showNetwork: data.network.name,
      showImage: data.image.medium,
      showLanguage: data.language,
      showRuntime: data.runtime,
      showRating: data.rating.average
    }
  }
}

 